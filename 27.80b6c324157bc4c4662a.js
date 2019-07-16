(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0W7n":function(n,s){n.exports="import { Directive } from '@angular/core';\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\n\n@Directive({\n  // tslint:disable-next-line\n  selector: 'input[type=file]',\n  host: {\n    '(change)': 'onChange($event.target.files)',\n    '(blur)': 'onTouched()',\n  },\n  providers: [\n    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: true },\n  ],\n})\n// https://github.com/angular/angular/issues/7341\nexport class FileValueAccessor implements ControlValueAccessor {\n  value: any;\n  onChange = (_) => { };\n  onTouched = () => { };\n\n  writeValue(value) { }\n  registerOnChange(fn: any) { this.onChange = fn; }\n  registerOnTouched(fn: any) { this.onTouched = fn; }\n}\n"},"3G0C":function(n,s,l){"use strict";l.r(s);var o=l("CcnG"),e=l("gIcY"),a=function(){return function(){this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"file",type:"file"}]}}(),r={examples:[{title:"File input",component:a,files:[{file:"app.component.html",content:l("TvZM"),filecontent:l("dKpI")},{file:"app.component.ts",content:l("alpD"),filecontent:l("IyGp")},{file:"file-value-accessor.ts",content:l("eOnw"),filecontent:l("0W7n")},{file:"file-type.component.ts",content:l("lD41"),filecontent:l("BXof")},{file:"app.module.ts",content:l("Qd5B"),filecontent:l("HF9k")}]}]},p=function(){return function(){}}(),t=l("NcP4"),i=l("AcC/"),m=l("htty"),c=l("LgGJ"),u=l("MT1c"),d=l("1Q/V"),f=l("9+aI"),g=l("haId"),h=l("LJsP"),y=l("yR2A"),j=l("UFMs"),v=function(){function n(){this.onChange=function(n){},this.onTouched=function(){}}return n.prototype.writeValue=function(n){},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n}(),C=l("gfpZ"),F=l("Ip0R"),k=l("mrSG"),w=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(k.__extends)(s,n),s}(l("HkYz").b),_=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function b(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"input",[["type","file"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"name",0],[1,"step",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"keypress"]],function(n,s,l){var e=!0;return"input"===s&&(e=!1!==o["\u0275nov"](n,1)._handleInput(l.target.value)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,1).onTouched()&&e),"compositionstart"===s&&(e=!1!==o["\u0275nov"](n,1)._compositionStart()&&e),"compositionend"===s&&(e=!1!==o["\u0275nov"](n,1)._compositionEnd(l.target.value)&&e),"change"===s&&(e=!1!==o["\u0275nov"](n,2).onChange(l.target.files)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,2).onTouched()&&e),"focus"===s&&(e=!1!==o["\u0275nov"](n,7).onFocus(l)&&e),"blur"===s&&(e=!1!==o["\u0275nov"](n,7).onBlur(l)&&e),"keyup"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keyup&&o["\u0275nov"](n,7).to.keyup(o["\u0275nov"](n,7).field,l))&&e),"keydown"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keydown&&o["\u0275nov"](n,7).to.keydown(o["\u0275nov"](n,7).field,l))&&e),"click"===s&&(e=!1!==(o["\u0275nov"](n,7).to.click&&o["\u0275nov"](n,7).to.click(o["\u0275nov"](n,7).field,l))&&e),"change"===s&&(e=!1!==(o["\u0275nov"](n,7).to.change&&o["\u0275nov"](n,7).to.change(o["\u0275nov"](n,7).field,l))&&e),"keypress"===s&&(e=!1!==(o["\u0275nov"](n,7).to.keypress&&o["\u0275nov"](n,7).to.keypress(o["\u0275nov"](n,7).field,l))&&e),e},null,null)),o["\u0275did"](1,16384,null,0,e.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,e.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275did"](2,16384,null,0,v,[],null,null),o["\u0275prd"](1024,null,e.NG_VALUE_ACCESSOR,function(n,s){return[n,s]},[e.DefaultValueAccessor,v]),o["\u0275did"](4,540672,null,0,e.FormControlDirective,[[8,null],[8,null],[6,e.NG_VALUE_ACCESSOR],[2,e["\u0275angular_packages_forms_forms_k"]]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.NgControl,null,[e.FormControlDirective]),o["\u0275did"](6,16384,null,0,e.NgControlStatus,[[4,e.NgControl]],null,null),o["\u0275did"](7,933888,null,0,C.a,[o.Renderer2,o.ElementRef,F.DOCUMENT],{field:[0,"field"]},null)],function(n,s){var l=s.component;n(s,4,0,l.formControl),n(s,7,0,l.field)},function(n,s){n(s,0,0,o["\u0275nov"](s,6).ngClassUntouched,o["\u0275nov"](s,6).ngClassTouched,o["\u0275nov"](s,6).ngClassPristine,o["\u0275nov"](s,6).ngClassDirty,o["\u0275nov"](s,6).ngClassValid,o["\u0275nov"](s,6).ngClassInvalid,o["\u0275nov"](s,6).ngClassPending,o["\u0275nov"](s,7).field.name,o["\u0275nov"](s,7).to.step)})}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-field-file",[],null,null,null,b,_)),o["\u0275did"](1,49152,null,0,w,[],null,null)],null,null)}var A=o["\u0275ccf"]("formly-field-file",w,x,{field:"field",model:"model",form:"form",options:"options"},{},[]),M=l("pMnS"),R=l("4o01"),G=l("Dl9q"),E=l("UcnZ"),O=l("DAbo"),V=l("9Glx"),T=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,7,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,s,l){var e=!0;return"submit"===s&&(e=!1!==o["\u0275nov"](n,2).onSubmit(l)&&e),"reset"===s&&(e=!1!==o["\u0275nov"](n,2).onReset()&&e),e},null,null)),o["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),o["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,G.b,G.a)),o["\u0275prd"](512,null,E.a,E.a,[O.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,V.a,[E.a,O.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null)],function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)},function(n,s){n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending)})}function N(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,T)),o["\u0275did"](1,49152,null,0,a,[],null,null)],null,null)}var S=o["\u0275ccf"]("formly-app-example",a,N,{},{},[]),I=l("M2Lx"),L=l("eDkP"),U=l("Fzqc"),B=l("v9Dh"),P=l("ZYjt"),Z=l("Wf4p"),H=l("mVsa"),W=l("6LlJ"),Y=l("F6kA"),q=l("dWZg"),J=l("lLAP"),Q=l("4c35"),z=l("qAlS"),X=l("La40"),K=l("SMsm"),$=l("UodH"),nn=l("5QwG"),sn=l("qkla"),ln=l("iZhS"),on=l("me7w"),en=l("N3PW"),an=l("l4pn"),rn=l("Fv2i"),pn=l("wBYW"),tn=l("IE48"),mn=l("Q4Tx"),cn=l("XR12"),un=l("Nsh5"),dn=l("8mMr"),fn=l("mqvi"),gn=l("lYui"),hn=l("VGFS"),yn=l("1ey0"),jn=function(){return function(){}}(),vn=l("ZYCi"),Cn=l("cIcG");l.d(s,"ConfigModuleNgFactory",function(){return Fn});var Fn=o["\u0275cmf"](p,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,i.a,m.a,c.a,u.a,d.a,f.a,g.a,h.a,y.a,j.a,A,M.a,R.a,S]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[o.LOCALE_ID,[2,F["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,I.c,I.c,[]),o["\u0275mpd"](4608,L.c,L.c,[L.i,L.e,o.ComponentFactoryResolver,L.h,L.f,o.Injector,o.NgZone,F.DOCUMENT,U.b,[2,F.Location]]),o["\u0275mpd"](5120,L.j,L.k,[L.c]),o["\u0275mpd"](5120,B.b,B.c,[L.c]),o["\u0275mpd"](4608,P.HAMMER_GESTURE_CONFIG,Z.c,[[2,Z.g],[2,Z.l]]),o["\u0275mpd"](5120,H.b,H.g,[L.c]),o["\u0275mpd"](4608,W.a,W.a,[]),o["\u0275mpd"](4608,Y.a,Y.a,[]),o["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),o["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,E.a,E.a,[O.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,F.CommonModule,F.CommonModule,[]),o["\u0275mpd"](1073742336,q.b,q.b,[]),o["\u0275mpd"](1073742336,I.d,I.d,[]),o["\u0275mpd"](1073742336,J.a,J.a,[]),o["\u0275mpd"](1073742336,U.a,U.a,[]),o["\u0275mpd"](1073742336,Q.g,Q.g,[]),o["\u0275mpd"](1073742336,z.c,z.c,[]),o["\u0275mpd"](1073742336,L.g,L.g,[]),o["\u0275mpd"](1073742336,Z.l,Z.l,[[2,Z.d],[2,P.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,B.e,B.e,[]),o["\u0275mpd"](1073742336,Z.v,Z.v,[]),o["\u0275mpd"](1073742336,X.j,X.j,[]),o["\u0275mpd"](1073742336,H.e,H.e,[]),o["\u0275mpd"](1073742336,K.c,K.c,[]),o["\u0275mpd"](1073742336,$.c,$.c,[]),o["\u0275mpd"](1073742336,nn.b,nn.b,[]),o["\u0275mpd"](512,O.b,O.b,[]),o["\u0275mpd"](1024,O.a,function(n){return[{wrappers:[{name:"addons",component:sn.a}],extensions:[{name:"addons",extension:{postPopulate:ln.a}}]},{types:[{name:"input",component:on.a,wrappers:["form-field"]},{name:"checkbox",component:en.a,wrappers:["form-field"]},{name:"radio",component:an.a,wrappers:["form-field"]},{name:"select",component:rn.a,wrappers:["form-field"]},{name:"textarea",component:pn.a,wrappers:["form-field"]},{name:"multicheckbox",component:tn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:mn.a}]},cn.b(n),{types:[{name:"file",component:w,wrappers:["form-field"]}]}]},[O.b]),o["\u0275mpd"](1073742336,cn.a,cn.a,[O.b,[2,O.a]]),o["\u0275mpd"](1073742336,un.h,un.h,[]),o["\u0275mpd"](1073742336,dn.b,dn.b,[]),o["\u0275mpd"](1073742336,fn.a,fn.a,[]),o["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,gn.a,gn.a,[]),o["\u0275mpd"](1073742336,hn.a,hn.a,[]),o["\u0275mpd"](1073742336,yn.a,yn.a,[]),o["\u0275mpd"](1073742336,jn,jn,[]),o["\u0275mpd"](1073742336,vn.s,vn.s,[[2,vn.y],[2,vn.p]]),o["\u0275mpd"](1073742336,p,p,[]),o["\u0275mpd"](1024,vn.n,function(){return[[{path:"",component:Cn.a,data:r}]]},[])])})},BXof:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-file',\n  template: `\n    <input type=\"file\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n  `,\n})\nexport class FormlyFieldFile extends FieldType {}\n"},HF9k:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { FileValueAccessor } from './file-value-accessor';\nimport { FormlyFieldFile } from './file-type.component';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },\n      ],\n    }),\n  ],\n  declarations: [\n    FileValueAccessor,\n    FormlyFieldFile,\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},IyGp:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'file',\n      type: 'file',\n    },\n  ];\n}\n"},Qd5B:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { FileValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-value-accessor\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldFile } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./file-type.component\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: <span class="hljs-string">\'file\'</span>, component: FormlyFieldFile, wrappers: [<span class="hljs-string">\'form-field\'</span>] },\n      ],\n    }),\n  ],\n  declarations: [\n    FileValueAccessor,\n    FormlyFieldFile,\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},TvZM:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},alpD:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'file\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'file\'</span>,\n    },\n  ];\n}\n'},dKpI:function(n,s){n.exports='<form [formGroup]="form">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n</form>\n'},eOnw:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Directive } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { NG_VALUE_ACCESSOR, ControlValueAccessor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n\n<span class="hljs-meta">@Directive</span>({\n  <span class="hljs-comment">// tslint:disable-next-line</span>\n  selector: <span class="hljs-string">\'input[type=file]\'</span>,\n  host: {\n    <span class="hljs-string">\'(change)\'</span>: <span class="hljs-string">\'onChange($event.target.files)\'</span>,\n    <span class="hljs-string">\'(blur)\'</span>: <span class="hljs-string">\'onTouched()\'</span>,\n  },\n  providers: [\n    { provide: NG_VALUE_ACCESSOR, useExisting: FileValueAccessor, multi: <span class="hljs-literal">true</span> },\n  ],\n})\n<span class="hljs-comment">// https://github.com/angular/angular/issues/7341</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FileValueAccessor <span class="hljs-keyword">implements</span> ControlValueAccessor {\n  value: <span class="hljs-built_in">any</span>;\n  onChange = <span class="hljs-function">(<span class="hljs-params">_</span>) =&gt;</span> { };\n  onTouched = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { };\n\n  writeValue(value) { }\n  registerOnChange(fn: <span class="hljs-built_in">any</span>) { <span class="hljs-keyword">this</span>.onChange = fn; }\n  registerOnTouched(fn: <span class="hljs-built_in">any</span>) { <span class="hljs-keyword">this</span>.onTouched = fn; }\n}\n'},lD41:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-file\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input type="file" [formControl]="formControl" [formlyAttributes]="field"&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldFile <span class="hljs-keyword">extends</span> FieldType {}\n'}}]);