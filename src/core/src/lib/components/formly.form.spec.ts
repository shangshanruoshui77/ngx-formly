import { fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { FormlyInputModule, createComponent, newEvent } from '@ngx-formly/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup, FormArray } from '@angular/forms';

type IFormlyFormInputs = Partial<{
  form: FormGroup | FormArray;
  fields: FormlyFieldConfig[];
  options: FormlyFormOptions;
  model: any;
  modelChange: (m: any) => void;
}>;

const renderComponent = (inputs: IFormlyFormInputs, config: any = {}) => {
  inputs = {
    form: new FormGroup({}),
    model: {},
    options: {},
    fields: [],
    modelChange: model => {},
    ...inputs,
  };

  return createComponent<IFormlyFormInputs>({
    template: `
      <form [formGroup]="form">
        <formly-form
          [model]="model"
          [fields]="fields"
          [options]="options"
          [form]="form"
          (modelChange)="modelChange($event)">
        </formly-form>
      </form>
    `,
    inputs,
    config,
    imports: [
      FormlyInputModule,
    ],
    ...config,
  });
};

function getFormlyFormElement(fixture: ComponentFixture<any>): HTMLElement {
  return <HTMLInputElement>fixture.nativeElement.querySelector('formly-form');
}

function getFormlyFormFields(fixture: ComponentFixture<any>): HTMLInputElement[] {
  return fixture.nativeElement.querySelectorAll('formly-form > formly-field');
}

describe('FormlyForm Component', () => {
  describe('fields input', () => {
    it('should render fields', () => {
      const fixture = renderComponent({
        fields: [{ key: 'foo' }, { key: 'bar' }],
      });

      expect(getFormlyFormElement(fixture)).toBeDefined();
      expect(getFormlyFormFields(fixture).length).toEqual(2);
    });

    it('should not throw an error when fields is null', () => {
      const fixture = renderComponent({ fields: null });

      expect(getFormlyFormElement(fixture)).toBeDefined();
      expect(getFormlyFormFields(fixture).length).toEqual(0);
    });

    it('should update validation on fields input change', () => {
      const fixture = renderComponent({ fields: [{ key: 'name' }] });
      const { form } = fixture.componentInstance;

      expect(form.valid).toEqual(true);

      fixture.componentInstance.fields = [{ key: 'name', templateOptions: { required: true } }];
      fixture.detectChanges();

      expect(form.valid).toEqual(false);
    });
  });


  describe('resetFieldOnHide', () => {
    let fixture: ReturnType<typeof createTestComponent>;
    beforeEach(() => {
      app = { form: new FormGroup({}), options: {}, model: {}, fields: [] };
      fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
      const config = TestBed.get(FormlyConfig) as FormlyConfig;
      config.extras.resetFieldOnHide = true;
    });

    it('should set default value when hide is false', () => {
      fixture.componentInstance.fields = [
        { key: 'foo', defaultValue: 'test' },
      ];
      fixture.detectChanges();

      const { model } = fixture.componentInstance;
      expect(model).toEqual({ foo: 'test' });
    });

    it('should delete prop when default value is undefined', () => {
      fixture.componentInstance.fields = [
        { key: 'foo', defaultValue: null },
        { key: 'bar', defaultValue: undefined },
      ];
      fixture.detectChanges();

      const { model } = fixture.componentInstance;
      expect(model).toEqual({ foo: null });
    });

    it('should not set default value clear on hide', () => {
      fixture.componentInstance.fields = [
        { key: 'foo', defaultValue: 'test', hide: true },
      ];
      fixture.detectChanges();

      const { model } = fixture.componentInstance;
      expect(model).toEqual({});
    });

    it('should toggle default value on hide changes', () => {
      fixture.componentInstance.fields = [
        { key: 'foo', defaultValue: 'test' },
      ];
      fixture.detectChanges();

      const { model, fields } = fixture.componentInstance;

      fields[0].hide = true;
      fixture.detectChanges();
      expect(model).toEqual({});

      fields[0].hide = false;
      fixture.detectChanges();
      expect(model).toEqual({ foo: 'test' });
    });

    it('should toggle default value on hide changes for nested config', () => {
      fixture.componentInstance.fields = [
        {
          key: 'foo',
          fieldGroup: [
            { key: 'bar', defaultValue: 'test' },
          ],
        },
      ];
      fixture.detectChanges();

      const { model, fields } = fixture.componentInstance;

      fields[0].hide = true;
      fixture.detectChanges();
      expect(model).toEqual({});

      fields[0].hide = false;
      fixture.detectChanges();
      expect(model).toEqual({ foo: { bar: 'test' } });
    });

    it('should set default value for field array', () => {
      fixture.componentInstance.fields = [
        {
          key: 'foo',
          type: 'repeat',
          defaultValue: [null],
          fieldArray: { type: 'text' },
        },
      ];
      fixture.detectChanges();

      const { model, fields } = fixture.componentInstance;
      expect(model).toEqual({ foo: [null] });
      expect(fields[0].fieldGroup.length).toEqual(1);
    });

    it('should toggle default value on hide changes for field array', () => {
      fixture.componentInstance.fields = [
        {
          key: 'foo',
          type: 'repeat',
          defaultValue: [null],
          fieldArray: { type: 'text' },
        },
      ];

      const { model, fields } = fixture.componentInstance;
      fixture.detectChanges();
      expect(model).toEqual({ foo: [null] });
      expect(fields[0].fieldGroup.length).toEqual(1);

      fields[0].hide = true;
      fixture.detectChanges();
      expect(model).toEqual({});
      expect(fields[0].fieldGroup.length).toEqual(0);

      fields[0].hide = false;
      fixture.detectChanges();
      expect(model).toEqual({ foo: [null] });
      expect(fields[0].fieldGroup.length).toEqual(1);
    });
  });

  it('lazy render components', () => {
    TestBed.configureTestingModule({
      imports: [
        FormlyModule.forRoot({
          extras: { lazyRender: true },
        }),
      ],
    });
    app = {
      form: new FormGroup({}),
      options: {},
      model: {},
      fields: [{
        key: 'foo',
        type: 'text',
        hide: true,
      }],
    };

    const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
    expect(fixture.debugElement.query(By.css('input'))).toBeNull();

    app.fields[0].hide = false;
    expect(fixture.debugElement.query(By.css('input'))).not.toBeNull();
  });

  describe('modelChange output', () => {
    it('should emit `modelChange` on valueChanges', () => {
      const fixture = renderComponent({
        fields: [{ key: 'title', type: 'input' }],
      });

      const app = fixture.componentInstance;
      spyOn(app, 'modelChange');

      app.form.get('title').patchValue('***');
      fixture.detectChanges();

      expect(app.modelChange).toHaveBeenCalledTimes(1);
      expect(app.modelChange).toHaveBeenCalledWith({ title: '***' });
    });

    it('should eval expressions before emitting `modelChange`', () => {
      const fixture = renderComponent(
        {
          fields: [
            { key: 'foo' },
            {
              key: 'bar',
              hideExpression: '!model.foo',
            },
          ]
        },
        { extras: { checkExpressionOn: 'modelChange' } },
      );

      const app = fixture.componentInstance;
      let barControl = null;
      app.modelChange = () => barControl = app.form.get('bar');

      app.form.get('foo').patchValue('***');
      fixture.detectChanges();

      expect(barControl).not.toBeNull();
    });

    it('should detect changes before emitting `modelChange`', fakeAsync(() => {
      const fixture = renderComponent({
        fields: [
          {
            key: 'foo',
            hideExpression: 'model.bar',
            hooks: {
              // Changing `field.hide` during `afterViewInit` throw the following error:
              // Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'display: '. Current value: 'display: none'.
              afterViewInit: f => f.form.get('bar').setValue('ops'),
            },
          },
          { key: 'bar' },
        ]
      });

      const app = fixture.componentInstance;
      tick();
      expect(app.fields[0].hide).toEqual(true);
    }));

    it('should reset field before eval expressions', () => {
      const fixture = renderComponent(
        {
          fields: [
            {
              key: 'foo',
              defaultValue: 'foo',
            },
            {
              key: 'bar',
              hideExpression: '!model.foo',
              defaultValue: 'bar',
            },
          ],
        },
        { extras: { checkExpressionOn: 'modelChange' } },
      );

      const app = fixture.componentInstance;
      app.form.reset();
      expect(app.model.bar).toBeNull();
      expect(app.fields[1].formControl.value).toBeNull();
    });

    it('should hide/display field using a function with nested field key', fakeAsync(() => {
      const form = new FormGroup({});
      app.form = form;
      app.model = { address: [{ city: '' }] };
      field.key = 'address[0].city';
      field.hideExpression = '!(model.address && model.address[0] && model.address[0].city === "agadir")';

      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
      tick(1);
      expect(form.get('address.0.city')).toBeNull();

      app.model.address[0].city = 'agadir';
      fixture.detectChanges();
      tick(1);
      expect(form.get('address.0.city')).not.toBeNull();
      expect(form.get('address.0.city').value).toEqual('agadir');
    }));

    it('should support passing number or array path to field key', () => {
      const form = new FormGroup({});
      app.form = form;
      app.model = {};
      app.fields = [
        { key: 1, defaultValue: 'number' },
        { key: ['this:is:a:valid:property:for:a:json:object:1.0'], defaultValue: 'array' },
      ];

      createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
      expect(app.model).toEqual({
        1: 'number',
        'this:is:a:valid:property:for:a:json:object:1.0': 'array',
      });
    });
  });

  it('should check expression on valueChanges', () => {
    const fixture = renderComponent({
      fields: [
        {
          key: 'title',
          type: 'input',
          expressionProperties: {
            className: 'model.title',
          },
        },
      ],
    });

    const app = fixture.componentInstance;
    app.form.get('title').patchValue('***');
    fixture.detectChanges();
    expect(app.fields[0].className).toEqual('***');
  });

  it('should check expression on valueChanges only', () => {
    const fixture = renderComponent(
      {
        fields: [
          {
            key: 'title',
            type: 'input',
            expressionProperties: {
              className: 'model.title',
            },
          },
        ],
      },
      {
        extras: { checkExpressionOn: 'modelChange' },
      },
    );

    const app = fixture.componentInstance;
    app.model.title = '***';
    fixture.detectChanges();
    expect(app.fields[0].className).toBeUndefined();
  });

  describe('immutable option', () => {
    it('should render', () => {
      const fixture = renderComponent(
        {
          fields: [{ key: 'foo', type: 'input' }],
        },
        { extras: { immutable: true } },
      );

      expect(getFormlyFormElement(fixture)).toBeDefined();
      expect(getFormlyFormFields(fixture).length).toEqual(1);
    });

    it('should not change inputs', () => {
      const fixture = renderComponent(
        {
          fields: [{ key: 'city', defaultValue: 'test' }],
        },
        { extras: { immutable: true } },
      );
      const app = fixture.componentInstance;

      expect(app.options).toEqual({});
      expect(app.fields[0]).toEqual({ key: 'city', defaultValue: 'test' });
      expect(app.model).toEqual({});
    });

    it('should emit `modelChange`', () => {
      const fixture = renderComponent(
        {
          fields: [{ key: 'title', type: 'input' }],
        },
        { extras: { immutable: true } },
      );

      const app = fixture.componentInstance;
      spyOn(app, 'modelChange');

      app.form.get('title').patchValue('***');
      fixture.detectChanges();

      expect(app.modelChange).toHaveBeenCalledTimes(1);
      expect(app.modelChange).toHaveBeenCalledWith({ title: '***' });
      expect(app.model).toEqual({});
    });

    it('should take account of inputs changes`', () => {
      const fixture = renderComponent(
        {
          fields: [{ key: 'title', type: 'input' }],
        },
        { extras: { immutable: true } },
      );

      const app = fixture.componentInstance;
      let titleField;
      app.model = { title: 'foo' };
      app.fields = [{ key: 'title', hooks: { onInit: f => (titleField = f) } }];
      fixture.detectChanges();

      expect(app.model).not.toBe(titleField.model);
      expect(app.fields[0]).not.toBe(titleField);
      expect(titleField.model).toEqual({ title: 'foo' });
      expect(app.form.value).toEqual({ title: 'foo' });
    });
  });

  describe('model input', () => {
    it('should update the form value on model change', () => {
      const fixture = renderComponent({
        fields: [
          {
            key: 'title',
            type: 'input',
            expressionProperties: {
              className: 'model.title',
            },
          },
        ],
      });
      const app = fixture.componentInstance;
      expect(app.form.value).toEqual({ title: null });

      app.model = { title: '***' };
      fixture.detectChanges();
      expect(app.form.value).toEqual({ title: '***' });
    });

    it('fallback to undefined for an non-existing member', () => {
      const fixture = renderComponent({
        model: { aa: { test: 'aaa' } },
        fields: [
          {
            key: 'aa',
            fieldGroup: [{ key: 'test', type: 'input' }],
          },
        ],
      });
      const app = fixture.componentInstance;
      expect(app.form.value).toEqual({ aa: { test: 'aaa' } });

      app.model = {};
      fixture.detectChanges();
      expect(app.form.value).toEqual({ aa: { test: undefined } });
    });

    it('should emit `modelChange` on model input change', () => {
      const fixture = renderComponent({
        fields: [{ key: 'title', type: 'input' }],
      });

      const app = fixture.componentInstance;
      spyOn(app, 'modelChange');

      app.model = { title: '****' };
      fixture.detectChanges();

      expect(app.modelChange).not.toHaveBeenCalled();
    });

    it('should take account of using the emitted modelChange value as model input', () => {
      const fixture = renderComponent({
        model: {},
        form: new FormGroup({}),
        fields: [{ key: 'test', type: 'input' }],
      });

      const app = fixture.componentInstance;

      app.form.get('test').setValue('1');
      fixture.detectChanges();

      app.form.get('test').setValue('12');
      fixture.detectChanges();

      expect(app.model.test).toEqual('12');
      expect(app.form.get('test').value).toEqual('12');
    });
  });

  describe('form input', () => {
    it('should rebuild field when form is changed', () => {
      const fixture = renderComponent({
        model: { test: 'test' },
        form: new FormGroup({}),
        fields: [
          {
            key: 'test',
            type: 'input',
          },
        ],
      });

      const app = fixture.componentInstance;
      expect(app.form.get('test').value).toEqual('test');

      fixture.componentInstance.form = new FormGroup({});
      fixture.detectChanges();
      expect(app.form.get('test').value).toEqual('test');
    });

    it('should allow passing FormArray', () => {
      const fixture = renderComponent({
        model: ['test'],
        form: new FormArray([]),
        options: {},
        fields: [
          {
            key: '0',
            type: 'input',
          },
        ],
      });

      const form = fixture.componentInstance.form as FormArray;
      expect(form.at(0).value).toEqual('test');
    });
  });

  describe('`updateOn` support', () => {
    it('on blur', () => {
      const fixture = renderComponent({
        fields: [
          {
            key: 'name',
            type: 'input',
            modelOptions: { updateOn: 'blur' },
          },
        ],
      });

      const app = fixture.componentInstance;
      const input = fixture.debugElement.query(By.css('input'));

      expect(app.form.get('name').value).toBeNull();

      input.nativeElement.value = 'First';
      input.nativeElement.dispatchEvent(newEvent('input', false));
      fixture.detectChanges();

      expect(app.form.get('name').value).toBeNull();

      input.triggerEventHandler('blur', {});
      fixture.detectChanges();

      expect(app.form.get('name').value).toEqual('First');
    });

    it('on submit', () => {
      const fixture = renderComponent({
        fields: [
          {
            key: 'name',
            type: 'input',
            modelOptions: { updateOn: 'submit' },
          },
        ],
      });

      const app = fixture.componentInstance;
      const input = fixture.debugElement.query(By.css('input'));

      expect(app.form.get('name').value).toBeNull();
      input.nativeElement.value = 'First';
      input.nativeElement.dispatchEvent(newEvent('input', false));

      input.triggerEventHandler('blur', {});
      fixture.detectChanges();

      expect(app.form.get('name').value).toBeNull();

      const form = fixture.debugElement.query(By.css('form')) as DebugElement;
      form.triggerEventHandler('submit', {});
      fixture.detectChanges();

      expect(app.form.get('name').value).toEqual('First');
    });
  });

  it('should check expression on submit', () => {
    const fixture = renderComponent(
      {
        fields: [
          {
            key: 'name',
            type: 'input',
            hideExpression: 'field.options.parentForm.submitted',
          },
        ],
      },
      { extras: { checkExpressionOn: 'modelChange' } },
    );

    const app = fixture.componentInstance;
    expect(app.fields[0].hide).toEqual(false);

    const form = fixture.debugElement.query(By.css('form')) as DebugElement;
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

    expect(app.fields[0].hide).toEqual(true);
  });


  it('should keep in sync UI on checkExpressionChange', () => {
    const fixture = renderComponent(
      {
        fields: [{
          key: 'city',
          type: 'input',
          expressionProperties: {
            'templateOptions.disabled': 'model.city === "***"',
          },
        }],
      },
      { extras: { immutable: true } },
    );
    const app = fixture.componentInstance;

    const inputDe = fixture.debugElement.query(By.css('input')) as DebugElement;
    inputDe.nativeElement.value = '***';
    inputDe.nativeElement.dispatchEvent(newEvent('input', false));
    fixture.detectChanges();

    const control = app.form.get('city');
    expect(control.disabled).toEqual(true);
    expect(inputDe.attributes.disabled).toEqual('disabled');
  });
});
