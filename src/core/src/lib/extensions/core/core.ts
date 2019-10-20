import { ChangeDetectorRef } from '@angular/core';
import { FormlyExtension, FormlyConfig, TemplateManipulators } from '../../services/formly.config';
import {
  FormlyFieldConfigCache,
  FormlyFieldConfig,
  FormlyValueChangeEvent,
} from '../../components/formly.field.config';
import {
  getFieldId,
  assignFieldValue,
  isUndefined,
  getFieldValue,
  reverseDeepMerge,
  defineHiddenProp,
  clone,
  isNullOrUndefined,
} from '../../utils';
import { Subject } from 'rxjs';

/** @experimental */
export class CoreExtension implements FormlyExtension {
  private formId = 0;
  constructor(private config: FormlyConfig) {}

  prePopulate(field: FormlyFieldConfigCache) {
    const root = field.parent;
    this.initRootOptions(field);
    if (root) {
      Object.defineProperty(field, 'options', { get: () => root.options, configurable: true });
      Object.defineProperty(field, 'model', {
        get: () => (field.key && field.fieldGroup ? getFieldValue(field) : root.model),
        configurable: true,
      });
    }

    this.getFieldComponentInstance(field).prePopulate();
  }

  onPopulate(field: FormlyFieldConfigCache) {
    this.initFieldOptions(field);
    this.getFieldComponentInstance(field).onPopulate();
    if (field.fieldGroup) {
      field.fieldGroup.forEach((f, index) => {
        Object.defineProperty(f, 'parent', { get: () => field, configurable: true });
        Object.defineProperty(f, 'index', { get: () => index, configurable: true });
        this.formId++;
      });
    }
  }

  postPopulate(field: FormlyFieldConfigCache) {
    this.getFieldComponentInstance(field).postPopulate();
  }

  private initRootOptions(field: FormlyFieldConfigCache) {
    if (field.parent) {
      return;
    }

    const options = field.options;
    field.options.formState = field.options.formState || {};
    if (!options.showError) {
      options.showError = this.config.extras.showError;
    }

    if (!options.updateInitialValue) {
      options.updateInitialValue = () => (options._initialModel = clone(field.model));
    }

    if (!options.fieldChanges) {
      defineHiddenProp(options, 'fieldChanges', new Subject<FormlyValueChangeEvent>());
    }

    if (!options._hiddenFieldsForCheck) {
      options._hiddenFieldsForCheck = [];
    }

    if (!options._markForCheck) {
      options._markForCheck = field => {
        if (field._componentRefs) {
          field._componentRefs.forEach(ref => {
            // NOTE: we cannot use ref.changeDetectorRef, see https://github.com/ngx-formly/ngx-formly/issues/2191
            const changeDetectorRef = ref.injector.get(ChangeDetectorRef);
            changeDetectorRef.markForCheck();
          });
        }

        if (field.fieldGroup) {
          field.fieldGroup.forEach(f => options._markForCheck(f));
        }
      };
    }

    if (!options.resetModel) {
      options.resetModel = (model?: any) => {
        model = clone(isNullOrUndefined(model) ? options._initialModel : model);
        if (field.model) {
          Object.keys(field.model).forEach(k => delete field.model[k]);
          Object.assign(field.model, model || {});
        }

        options._buildField(field);

        // we should call `NgForm::resetForm` to ensure changing `submitted` state after resetting form
        // but only when the current component is a root one.
        if (options.parentForm && options.parentForm.control === field.formControl) {
          options.parentForm.resetForm(model);
        } else {
          field.formControl.reset(model);
        }
      };
    }

    field.options.updateInitialValue();
  }

  private initFieldOptions(field: FormlyFieldConfigCache) {
    reverseDeepMerge(field, {
      id: getFieldId(`formly_${this.formId}`, field, field['index']),
      hooks: {},
      modelOptions: {},
      templateOptions:
        !field.type || !field.key
          ? {}
          : {
              label: '',
              placeholder: '',
              focus: false,
              disabled: false,
            },
    });

    if (this.formlyConfig.extras.resetFieldOnHide) {
      field['autoClear'] = true;
    }

    if (
      field.type !== 'formly-template'
      && (
        field.template
        || (field.expressionProperties && field.expressionProperties.template)
      )
    ) {
      field.type = 'formly-template';
    }

    if (field.parent && !field.type && field.fieldGroup) {
      field.type = 'formly-group';
    }

    if (field.type) {
      this.config.getMergedField(field);
    }

    if (field.parent) {
      let setDefaultValue = !isUndefined(field.key)
        && !isUndefined(field.defaultValue)
        && isUndefined(getFieldValue(field))
        && (!field['autoClear'] || !(field.hide || field.hideExpression));
      if (setDefaultValue && field['autoClear']) {
        let parent = field.parent;
        while (parent && !parent.hideExpression && !parent.hide) {
          parent = parent.parent;
        }
        setDefaultValue = !parent || !(parent.hideExpression || parent.hide);
      }

      if (setDefaultValue) {
        assignFieldValue(field, field.defaultValue);
      }
    }

    this.initFieldWrappers(field);
  }

  private initFieldWrappers(field: FormlyFieldConfig) {
    field.wrappers = field.wrappers || [];
    const fieldTemplateManipulators: TemplateManipulators = {
      preWrapper: [],
      postWrapper: [],
      ...(field.templateOptions.templateManipulators || {}),
    };

    field.wrappers = [
      ...this.config.templateManipulators.preWrapper.map(m => m(field)),
      ...fieldTemplateManipulators.preWrapper.map(m => m(field)),
      ...field.wrappers,
      ...this.config.templateManipulators.postWrapper.map(m => m(field)),
      ...fieldTemplateManipulators.postWrapper.map(m => m(field)),
    ].filter((el, i, a) => el && i === a.indexOf(el));
  }

  private getFieldComponentInstance(field: FormlyFieldConfigCache) {
    const componentRef = this.config.resolveFieldTypeRef(field);
    const instance: FormlyExtension = componentRef ? componentRef.instance as any : {};

    return {
      prePopulate: () => instance.prePopulate && instance.prePopulate(field),
      onPopulate: () => instance.onPopulate && instance.onPopulate(field),
      postPopulate: () => instance.postPopulate && instance.postPopulate(field),
    };
  }
}
