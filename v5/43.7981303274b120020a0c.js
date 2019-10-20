(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"+ybM":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"1qLx":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'left\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-euro\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on the left (icon)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'both\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'How great is this?\'</span>,\n        addonLeft: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-home\'</span>,\n        },\n        addonRight: {\n          text: <span class="hljs-string">\'$\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on both side (left: icon, right: text)\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'right\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        placeholder: <span class="hljs-string">\'Nice, isn\\\'t it??\'</span>,\n\n        addonRight: {\n          <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-heart\'</span>,\n        },\n        label: <span class="hljs-string">\'One add-on on the right (icon)\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},"7yHg":function(n,s,a){"use strict";a.r(s);var o=a("CcnG"),l=a("gIcY"),t=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"left",type:"input",templateOptions:{placeholder:"Formly is terrific!",addonLeft:{class:"fa fa-euro"},label:"One add-on on the left (icon)"}},{key:"both",type:"input",templateOptions:{placeholder:"How great is this?",addonLeft:{class:"fa fa-home"},addonRight:{text:"$"},label:"One add-on on both side (left: icon, right: text)"}},{key:"right",type:"input",templateOptions:{placeholder:"Nice, isn't it??",addonRight:{class:"fa fa-heart"},label:"One add-on on the right (icon)"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Input add-ons",description:"This example demonstrates how to use input add-ons to decorate your input fields.",component:t,files:[{file:"app.component.html",content:a("uYWk"),filecontent:a("TL3U")},{file:"app.component.ts",content:a("1qLx"),filecontent:a("k3ON")},{file:"app.module.ts",content:a("+ybM"),filecontent:a("JoKT")}]}]},e=function(){return function(){}}(),r=a("NcP4"),m=a("AcC/"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),f=a("9+aI"),h=a("haId"),g=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),k=a("4o01"),F=a("Dl9q"),w=a("UcnZ"),C=a("DAbo"),v=a("9Glx"),M=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var l=!0,t=n.component;return"submit"===s&&(l=!1!==o["\u0275nov"](n,2).onSubmit(a)&&l),"reset"===s&&(l=!1!==o["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==t.submit()&&l),l},null,null)),o["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),o["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),o["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),o["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,F.b,F.a)),o["\u0275prd"](512,null,w.a,w.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275did"](7,966656,null,0,v.a,[w.a,C.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),o["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,o["\u0275nov"](s,4).ngClassUntouched,o["\u0275nov"](s,4).ngClassTouched,o["\u0275nov"](s,4).ngClassPristine,o["\u0275nov"](s,4).ngClassDirty,o["\u0275nov"](s,4).ngClassValid,o["\u0275nov"](s,4).ngClassInvalid,o["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function O(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,M)),o["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}var _=o["\u0275ccf"]("formly-app-example",t,O,{},{},[]),R=a("Ip0R"),L=a("M2Lx"),N=a("eDkP"),S=a("Fzqc"),G=a("v9Dh"),A=a("ZYjt"),I=a("Wf4p"),D=a("mVsa"),J=a("6LlJ"),T=a("F6kA"),U=a("dWZg"),P=a("lLAP"),q=a("4c35"),B=a("qAlS"),Y=a("La40"),W=a("SMsm"),Z=a("UodH"),H=a("5QwG"),V=a("qkla"),z=a("iZhS"),E=a("me7w"),Q=a("N3PW"),$=a("l4pn"),K=a("Fv2i"),X=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("XR12"),on=a("Nsh5"),ln=a("8mMr"),tn=a("mqvi"),pn=a("lYui"),en=a("VGFS"),rn=a("1ey0"),mn=function(){return function(){}}(),cn=a("ZYCi"),dn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return un});var un=o["\u0275cmf"](e,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,k.a,_]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[o.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,L.c,L.c,[]),o["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,o.ComponentFactoryResolver,N.h,N.f,o.Injector,o.NgZone,R.DOCUMENT,S.b,[2,R.Location]]),o["\u0275mpd"](5120,N.j,N.k,[N.c]),o["\u0275mpd"](5120,G.b,G.c,[N.c]),o["\u0275mpd"](4608,A.f,I.c,[[2,I.g],[2,I.l]]),o["\u0275mpd"](5120,D.b,D.g,[N.c]),o["\u0275mpd"](4608,J.a,J.a,[]),o["\u0275mpd"](4608,T.a,T.a,[]),o["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),o["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,w.a,w.a,[C.b,o.ComponentFactoryResolver,o.Injector]),o["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),o["\u0275mpd"](1073742336,U.b,U.b,[]),o["\u0275mpd"](1073742336,L.d,L.d,[]),o["\u0275mpd"](1073742336,P.a,P.a,[]),o["\u0275mpd"](1073742336,S.a,S.a,[]),o["\u0275mpd"](1073742336,q.g,q.g,[]),o["\u0275mpd"](1073742336,B.ScrollingModule,B.ScrollingModule,[]),o["\u0275mpd"](1073742336,N.g,N.g,[]),o["\u0275mpd"](1073742336,I.l,I.l,[[2,I.d],[2,A.g]]),o["\u0275mpd"](1073742336,G.e,G.e,[]),o["\u0275mpd"](1073742336,I.v,I.v,[]),o["\u0275mpd"](1073742336,Y.j,Y.j,[]),o["\u0275mpd"](1073742336,D.e,D.e,[]),o["\u0275mpd"](1073742336,W.c,W.c,[]),o["\u0275mpd"](1073742336,Z.c,Z.c,[]),o["\u0275mpd"](1073742336,H.b,H.b,[]),o["\u0275mpd"](512,C.b,C.b,[]),o["\u0275mpd"](1024,C.a,function(n){return[{wrappers:[{name:"addons",component:V.a}],extensions:[{name:"addons",extension:{postPopulate:z.a}}]},{types:[{name:"input",component:E.a,wrappers:["form-field"]},{name:"checkbox",component:Q.a,wrappers:["form-field"]},{name:"radio",component:$.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},an.b(n),{}]},[C.b]),o["\u0275mpd"](1073742336,an.a,an.a,[C.b,[2,C.a]]),o["\u0275mpd"](1073742336,on.h,on.h,[]),o["\u0275mpd"](1073742336,ln.b,ln.b,[]),o["\u0275mpd"](1073742336,tn.a,tn.a,[]),o["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,pn.a,pn.a,[]),o["\u0275mpd"](1073742336,en.a,en.a,[]),o["\u0275mpd"](1073742336,rn.a,rn.a,[]),o["\u0275mpd"](1073742336,mn,mn,[]),o["\u0275mpd"](1073742336,cn.s,cn.s,[[2,cn.y],[2,cn.p]]),o["\u0275mpd"](1073742336,e,e,[]),o["\u0275mpd"](1024,cn.n,function(){return[[{path:"",component:dn.a,data:p}]]},[])])})},JoKT:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},TL3U:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>'},k3ON:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'left',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Formly is terrific!',\n        addonLeft: {\n          class: 'fa fa-euro',\n        },\n        label: 'One add-on on the left (icon)',\n      },\n    },\n    {\n      key: 'both',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'How great is this?',\n        addonLeft: {\n          class: 'fa fa-home',\n        },\n        addonRight: {\n          text: '$',\n        },\n        label: 'One add-on on both side (left: icon, right: text)',\n      },\n    },\n    {\n      key: 'right',\n      type: 'input',\n      templateOptions: {\n        placeholder: 'Nice, isn\\'t it??',\n\n        addonRight: {\n          class: 'fa fa-heart',\n        },\n        label: 'One add-on on the right (icon)',\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},uYWk:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>'}}]);