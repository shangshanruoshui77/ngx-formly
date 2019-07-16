(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"6QX0":function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [{\n    key: <span class="hljs-string">\'password\'</span>,\n    validators: {\n      fieldMatch: {\n        expression: <span class="hljs-function">(<span class="hljs-params">control</span>) =&gt;</span> {\n          <span class="hljs-keyword">const</span> value = control.value;\n\n          <span class="hljs-keyword">return</span> value.passwordConfirm === value.password\n            <span class="hljs-comment">// avoid displaying the message error when values are empty</span>\n            || (!value.passwordConfirm || !value.password);\n        },\n        message: <span class="hljs-string">\'Password Not Matching\'</span>,\n        errorPath: <span class="hljs-string">\'passwordConfirm\'</span>,\n      },\n    },\n    fieldGroup: [\n      {\n        key: <span class="hljs-string">\'password\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        templateOptions: {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n          label: <span class="hljs-string">\'Password\'</span>,\n          placeholder: <span class="hljs-string">\'Must be at least 3 characters\'</span>,\n          required: <span class="hljs-literal">true</span>,\n          minLength: <span class="hljs-number">3</span>,\n        },\n      },\n      {\n        key: <span class="hljs-string">\'passwordConfirm\'</span>,\n        <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n        templateOptions: {\n          <span class="hljs-keyword">type</span>: <span class="hljs-string">\'password\'</span>,\n          label: <span class="hljs-string">\'Confirm Password\'</span>,\n          placeholder: <span class="hljs-string">\'Please re-enter your password\'</span>,\n          required: <span class="hljs-literal">true</span>,\n        },\n      },\n    ],\n  }];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},CjK9:function(s,n,a){"use strict";a.r(n);var o=a("CcnG"),l=a("gIcY"),e=function(){function s(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"password",validators:{fieldMatch:{expression:function(s){var n=s.value;return n.passwordConfirm===n.password||!n.passwordConfirm||!n.password},message:"Password Not Matching",errorPath:"passwordConfirm"}},fieldGroup:[{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Must be at least 3 characters",required:!0,minLength:3}},{key:"passwordConfirm",type:"input",templateOptions:{type:"password",label:"Confirm Password",placeholder:"Please re-enter your password",required:!0}}]}]}return s.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},s}(),r={examples:[{title:"Matching Two Fields",description:"This is an example of how to add confirm password field using custom validation",component:e,files:[{file:"app.component.html",content:a("uKvD"),filecontent:a("hyt6")},{file:"app.component.ts",content:a("6QX0"),filecontent:a("txKx")},{file:"app.module.ts",content:a("FMHf"),filecontent:a("amrZ")}]}]},p=function(){return function(){}}(),t=a("NcP4"),m=a("AcC/"),i=a("htty"),d=a("LgGJ"),c=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),g=a("LJsP"),y=a("yR2A"),j=a("UFMs"),w=a("pMnS"),b=a("4o01"),v=a("Dl9q"),C=a("UcnZ"),k=a("DAbo"),M=a("9Glx"),F=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(s){return o["\u0275vid"](0,[(s()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(s,n,a){var l=!0,e=s.component;return"submit"===n&&(l=!1!==o["\u0275nov"](s,2).onSubmit(a)&&l),"reset"===n&&(l=!1!==o["\u0275nov"](s,2).onReset()&&l),"ngSubmit"===n&&(l=!1!==e.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(s()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,v.b,v.a)),o["\u0275prd"](512,null,C.a,C.a,[k.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,M.a,[C.a,k.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),o["\u0275ted"](-1,null,["Submit"]))],function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)},function(s,n){s(n,0,0,o["\u0275nov"](n,4).ngClassUntouched,o["\u0275nov"](n,4).ngClassTouched,o["\u0275nov"](n,4).ngClassPristine,o["\u0275nov"](n,4).ngClassDirty,o["\u0275nov"](n,4).ngClassValid,o["\u0275nov"](n,4).ngClassInvalid,o["\u0275nov"](n,4).ngClassPending)})}function _(s){return o["\u0275vid"](0,[(s()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,F)),o["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var P=o["\u0275ccf"]("formly-app-example",e,_,{},{},[]),R=a("Ip0R"),S=a("M2Lx"),G=a("eDkP"),N=a("Fzqc"),O=a("v9Dh"),L=a("ZYjt"),A=a("Wf4p"),q=a("mVsa"),D=a("6LlJ"),I=a("F6kA"),T=a("dWZg"),E=a("lLAP"),J=a("4c35"),U=a("qAlS"),V=a("La40"),Z=a("SMsm"),B=a("UodH"),H=a("5QwG"),K=a("qkla"),Q=a("iZhS"),Y=a("me7w"),W=a("N3PW"),z=a("l4pn"),X=a("Fv2i"),$=a("wBYW"),ss=a("IE48"),ns=a("Q4Tx"),as=a("XR12");function os(s,n){return"Should have atleast "+n.templateOptions.minLength+" characters"}var ls=function(){return function(){}}(),es=a("Nsh5"),rs=a("8mMr"),ps=a("mqvi"),ts=a("lYui"),ms=a("VGFS"),is=a("1ey0"),ds=a("ZYCi"),cs=a("cIcG");a.d(n,"ConfigModuleNgFactory",function(){return us});var us=o["\u0275cmf"](p,[],function(s){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,m.a,i.a,d.a,c.a,u.a,f.a,h.a,g.a,y.a,j.a,w.a,b.a,P]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,S.c,S.c,[]),o["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,o.ComponentFactoryResolver,G.h,G.f,o.Injector,o.NgZone,R.DOCUMENT,N.b,[2,R.Location]]),o["\u0275mpd"](5120,G.j,G.k,[G.c]),o["\u0275mpd"](5120,O.b,O.c,[G.c]),o["\u0275mpd"](4608,L.HAMMER_GESTURE_CONFIG,A.c,[[2,A.g],[2,A.l]]),o["\u0275mpd"](5120,q.b,q.g,[G.c]),o["\u0275mpd"](4608,D.a,D.a,[]),o["\u0275mpd"](4608,I.a,I.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,C.a,C.a,[k.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,T.b,T.b,[]),o["\u0275mpd"](1073742336,S.d,S.d,[]),o["\u0275mpd"](1073742336,E.a,E.a,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,J.g,J.g,[]),o["\u0275mpd"](1073742336,U.c,U.c,[]),o["\u0275mpd"](1073742336,G.g,G.g,[]),o["\u0275mpd"](1073742336,A.l,A.l,[[2,A.d],[2,L.HAMMER_LOADER]]),o["\u0275mpd"](1073742336,O.e,O.e,[]),o["\u0275mpd"](1073742336,A.v,A.v,[]),o["\u0275mpd"](1073742336,V.j,V.j,[]),o["\u0275mpd"](1073742336,q.e,q.e,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,B.c,B.c,[]),o["\u0275mpd"](1073742336,H.b,H.b,[]),o["\u0275mpd"](512,k.b,k.b,[]),o["\u0275mpd"](1024,k.a,function(s){return[{wrappers:[{name:"addons",component:K.a}],extensions:[{name:"addons",extension:{postPopulate:Q.a}}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]},{name:"checkbox",component:W.a,wrappers:["form-field"]},{name:"radio",component:z.a,wrappers:["form-field"]},{name:"select",component:X.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:ss.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:ns.a}]},as.b(s),{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:os}]}]},[k.b]),o["\u0275mpd"](1073742336,as.a,as.a,[k.b,[2,k.a]]),o["\u0275mpd"](1073742336,es.h,es.h,[]),o["\u0275mpd"](1073742336,rs.b,rs.b,[]),o["\u0275mpd"](1073742336,ps.a,ps.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,ts.a,ts.a,[]),o["\u0275mpd"](1073742336,ms.a,ms.a,[]),o["\u0275mpd"](1073742336,is.a,is.a,[]),o["\u0275mpd"](1073742336,ls,ls,[]),o["\u0275mpd"](1073742336,ds.s,ds.s,[[2,ds.y],[2,ds.p]]),o["\u0275mpd"](1073742336,p,p,[]),o["\u0275mpd"](1024,ds.n,function(){return[[{path:"",component:cs.a,data:r}]]},[])])})},FMHf:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minlengthValidationMessages</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`Should have atleast <span class="hljs-subst">${field.templateOptions.minLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n        { name: <span class="hljs-string">\'minlength\'</span>, message: minlengthValidationMessages },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},amrZ:function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nexport function minlengthValidationMessages(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessages },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},hyt6:function(s,n){s.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},txKx:function(s,n){s.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [{\n    key: 'password',\n    validators: {\n      fieldMatch: {\n        expression: (control) => {\n          const value = control.value;\n\n          return value.passwordConfirm === value.password\n            // avoid displaying the message error when values are empty\n            || (!value.passwordConfirm || !value.password);\n        },\n        message: 'Password Not Matching',\n        errorPath: 'passwordConfirm',\n      },\n    },\n    fieldGroup: [\n      {\n        key: 'password',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Password',\n          placeholder: 'Must be at least 3 characters',\n          required: true,\n          minLength: 3,\n        },\n      },\n      {\n        key: 'passwordConfirm',\n        type: 'input',\n        templateOptions: {\n          type: 'password',\n          label: 'Confirm Password',\n          placeholder: 'Please re-enter your password',\n          required: true,\n        },\n      },\n    ],\n  }];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},uKvD:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);