(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"7pDl":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"8vdZ":function(n,s){n.exports='{\n  <span class="hljs-string">"HOME"</span>: {\n    <span class="hljs-string">"TITLE"</span>: <span class="hljs-string">"Bonjour Angular avec ngx-translate !"</span>,\n    <span class="hljs-string">"SELECT"</span>: <span class="hljs-string">"Changer la langue"</span>\n  }\n}\n'},FDcC:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},YPwC:function(n,s){n.exports='{\n  <span class="hljs-string">"HOME"</span>: {\n    <span class="hljs-string">"TITLE"</span>: <span class="hljs-string">"Hello Angular with ngx-translate!"</span>,\n    <span class="hljs-string">"SELECT"</span>: <span class="hljs-string">"Change language"</span>\n  }\n}\n'},aay5:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),o=a("gIcY"),t=function(){function n(n){var s=this;this.translate=n,this.form=new o.FormGroup({}),this.model={},this.options={},this.fields=[{key:"lang",type:"select",templateOptions:{required:!0,change:function(n){return s.translate.use(n.formControl.value)},options:[{label:"fr",value:"fr"},{label:"en",value:"en"}]},expressionProperties:{"templateOptions.label":this.translate.stream("HOME.SELECT")}}],n.addLangs(["en","fr"]),n.setDefaultLang("en");var a=n.getBrowserLang();n.use(a.match(/en|fr/)?a:"en"),this.model.lang=n.currentLang}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"i18n ngx-translate",description:"\n              This is an example of using ngx-formly with ngx-translate to internationalize your forms.\n              <div>\n                This example demonstrates dynamic i18n using <code>expressionProperties</code>.\n                If you don't need a dynamic solution (language doesn't change after the app has started up,\n                simply omit the <code>expressionProperties</code> in the example.\n              </div>\n            ",component:t,files:[{file:"app.component.html",content:a("7pDl"),filecontent:a("FDcC")},{file:"app.component.ts",content:a("pkPx"),filecontent:a("vtgh")},{file:"app.module.ts",content:a("z2QG"),filecontent:a("mbSE")},{file:"assets/i18n/en.json",content:a("YPwC"),filecontent:a("h75i")},{file:"assets/i18n/fr.json",content:a("8vdZ"),filecontent:a("rtAZ")}]}]},r=function(){return function(){}}(),p=a("NcP4"),m=a("AcC/"),i=a("htty"),c=a("LgGJ"),d=a("MT1c"),u=a("1Q/V"),g=a("9+aI"),f=a("haId"),h=a("LJsP"),j=a("yR2A"),y=a("UFMs"),b=a("pMnS"),w=a("4o01"),C=a("Dl9q"),v=a("UcnZ"),k=a("DAbo"),F=a("9Glx"),x=a("A7o+"),M=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,t=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,2).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==t.submit()&&o),o},null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,C.b,C.a)),l["\u0275prd"](512,null,v.a,v.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,F.a,[v.a,k.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function T(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,L,M)),l["\u0275did"](1,49152,null,0,t,[x.i],null,null)],null,null)}var E=l["\u0275ccf"]("formly-app-example",t,T,{},{},[]),S=a("Ip0R"),_=a("M2Lx"),H=a("eDkP"),A=a("Fzqc"),O=a("v9Dh"),R=a("ZYjt"),N=a("Wf4p"),G=a("mVsa"),D=a("6LlJ"),I=a("F6kA"),P=a("t/Na"),B=a("0bV8");function q(n){return new B.a(n,"assets/i18n/")}var Z=function(){return function(){}}(),U=a("dWZg"),J=a("lLAP"),Y=a("4c35"),z=a("qAlS"),Q=a("La40"),V=a("SMsm"),W=a("UodH"),X=a("5QwG"),K=a("qkla"),$=a("iZhS"),nn=a("me7w"),sn=a("N3PW"),an=a("l4pn"),ln=a("Fv2i"),on=a("wBYW"),tn=a("IE48"),en=a("Q4Tx"),rn=a("XR12"),pn=a("Nsh5"),mn=a("8mMr"),cn=a("mqvi"),dn=a("lYui"),un=a("VGFS"),gn=a("1ey0"),fn=a("ZYCi"),hn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return jn});var jn=l["\u0275cmf"](r,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,m.a,i.a,c.a,d.a,u.a,g.a,f.a,h.a,j.a,y.a,b.a,w.a,E]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[l.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,_.c,_.c,[]),l["\u0275mpd"](4608,H.c,H.c,[H.i,H.e,l.ComponentFactoryResolver,H.h,H.f,l.Injector,l.NgZone,S.DOCUMENT,A.b,[2,S.Location]]),l["\u0275mpd"](5120,H.j,H.k,[H.c]),l["\u0275mpd"](5120,O.b,O.c,[H.c]),l["\u0275mpd"](4608,R.HAMMER_GESTURE_CONFIG,N.c,[[2,N.g],[2,N.l]]),l["\u0275mpd"](5120,G.b,G.g,[H.c]),l["\u0275mpd"](4608,D.a,D.a,[]),l["\u0275mpd"](4608,I.a,I.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,v.a,v.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](4608,P.h,P.n,[S.DOCUMENT,l.PLATFORM_ID,P.l]),l["\u0275mpd"](4608,P.o,P.o,[P.h,P.m]),l["\u0275mpd"](5120,P.a,function(n){return[n]},[P.o]),l["\u0275mpd"](4608,P.k,P.k,[]),l["\u0275mpd"](6144,P.i,null,[P.k]),l["\u0275mpd"](4608,P.g,P.g,[P.i]),l["\u0275mpd"](6144,P.b,null,[P.g]),l["\u0275mpd"](4608,P.f,P.j,[P.b,l.Injector]),l["\u0275mpd"](4608,P.c,P.c,[P.f]),l["\u0275mpd"](5120,x.f,q,[P.c]),l["\u0275mpd"](4608,x.c,x.e,[]),l["\u0275mpd"](4608,x.h,x.d,[]),l["\u0275mpd"](4608,x.b,x.a,[]),l["\u0275mpd"](4608,x.j,x.j,[]),l["\u0275mpd"](4608,x.i,x.i,[x.j,x.f,x.c,x.h,x.b,x.k,x.l]),l["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,_.d,_.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,A.a,A.a,[]),l["\u0275mpd"](1073742336,Y.g,Y.g,[]),l["\u0275mpd"](1073742336,z.c,z.c,[]),l["\u0275mpd"](1073742336,H.g,H.g,[]),l["\u0275mpd"](1073742336,N.l,N.l,[[2,N.d],[2,R.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,O.e,O.e,[]),l["\u0275mpd"](1073742336,N.v,N.v,[]),l["\u0275mpd"](1073742336,Q.j,Q.j,[]),l["\u0275mpd"](1073742336,G.e,G.e,[]),l["\u0275mpd"](1073742336,V.c,V.c,[]),l["\u0275mpd"](1073742336,W.c,W.c,[]),l["\u0275mpd"](1073742336,X.b,X.b,[]),l["\u0275mpd"](512,k.b,k.b,[]),l["\u0275mpd"](1024,k.a,function(n){return[{wrappers:[{name:"addons",component:K.a}],extensions:[{name:"addons",extension:{postPopulate:$.a}}]},{types:[{name:"input",component:nn.a,wrappers:["form-field"]},{name:"checkbox",component:sn.a,wrappers:["form-field"]},{name:"radio",component:an.a,wrappers:["form-field"]},{name:"select",component:ln.a,wrappers:["form-field"]},{name:"textarea",component:on.a,wrappers:["form-field"]},{name:"multicheckbox",component:tn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:en.a}]},rn.b(n),{}]},[k.b]),l["\u0275mpd"](1073742336,rn.a,rn.a,[k.b,[2,k.a]]),l["\u0275mpd"](1073742336,pn.h,pn.h,[]),l["\u0275mpd"](1073742336,mn.b,mn.b,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,un.a,un.a,[]),l["\u0275mpd"](1073742336,gn.a,gn.a,[]),l["\u0275mpd"](1073742336,P.e,P.e,[]),l["\u0275mpd"](1073742336,P.d,P.d,[]),l["\u0275mpd"](1073742336,x.g,x.g,[]),l["\u0275mpd"](1073742336,Z,Z,[]),l["\u0275mpd"](1073742336,fn.s,fn.s,[[2,fn.y],[2,fn.p]]),l["\u0275mpd"](1073742336,r,r,[]),l["\u0275mpd"](256,P.l,"XSRF-TOKEN",[]),l["\u0275mpd"](256,P.m,"X-XSRF-TOKEN",[]),l["\u0275mpd"](256,x.l,void 0,[]),l["\u0275mpd"](256,x.k,void 0,[]),l["\u0275mpd"](1024,fn.n,function(){return[[{path:"",component:hn.a,data:e}]]},[])])})},h75i:function(n,s){n.exports='{\n  "HOME": {\n    "TITLE": "Hello Angular with ngx-translate!",\n    "SELECT": "Change language"\n  }\n}\n'},mbSE:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { HttpClient, HttpClientModule } from '@angular/common/http';\nimport { TranslateModule, TranslateLoader } from '@ngx-translate/core';\nimport { TranslateHttpLoader } from '@ngx-translate/http-loader';\n\n// AoT requires an exported function for factories\nexport function HttpLoaderFactory(httpClient: HttpClient) {\n  return new TranslateHttpLoader(httpClient, 'assets/i18n/');\n}\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},pkPx:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'lang\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        required: <span class="hljs-literal">true</span>,\n        change: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> <span class="hljs-keyword">this</span>.translate.use(field.formControl.value),\n        options: [\n          { label: <span class="hljs-string">\'fr\'</span>, value: <span class="hljs-string">\'fr\'</span> },\n          { label: <span class="hljs-string">\'en\'</span>, value: <span class="hljs-string">\'en\'</span> },\n        ],\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-keyword">this</span>.translate.stream(<span class="hljs-string">\'HOME.SELECT\'</span>),\n      },\n    },\n  ];\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> translate: TranslateService</span>) {\n    translate.addLangs([<span class="hljs-string">\'en\'</span>, <span class="hljs-string">\'fr\'</span>]);\n    translate.setDefaultLang(<span class="hljs-string">\'en\'</span>);\n\n    <span class="hljs-keyword">const</span> browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(<span class="hljs-regexp">/en|fr/</span>) ? browserLang : <span class="hljs-string">\'en\'</span>);\n    <span class="hljs-keyword">this</span>.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},rtAZ:function(n,s){n.exports='{\n  "HOME": {\n    "TITLE": "Bonjour Angular avec ngx-translate !",\n    "SELECT": "Changer la langue"\n  }\n}\n'},vtgh:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { TranslateService } from '@ngx-translate/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'lang',\n      type: 'select',\n      templateOptions: {\n        required: true,\n        change: (field) => this.translate.use(field.formControl.value),\n        options: [\n          { label: 'fr', value: 'fr' },\n          { label: 'en', value: 'en' },\n        ],\n      },\n      expressionProperties: {\n        'templateOptions.label': this.translate.stream('HOME.SELECT'),\n      },\n    },\n  ];\n\n  constructor(public translate: TranslateService) {\n    translate.addLangs(['en', 'fr']);\n    translate.setDefaultLang('en');\n\n    const browserLang = translate.getBrowserLang();\n\n    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');\n    this.model.lang = translate.currentLang;\n  }\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},z2QG:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { HttpClient, HttpClientModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common/http\'</span>;\n<span class="hljs-keyword">import</span> { TranslateModule, TranslateLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/core\'</span>;\n<span class="hljs-keyword">import</span> { TranslateHttpLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-translate/http-loader\'</span>;\n\n<span class="hljs-comment">// AoT requires an exported function for factories</span>\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">HttpLoaderFactory</span>(<span class="hljs-params">httpClient: HttpClient</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> TranslateHttpLoader(httpClient, <span class="hljs-string">\'assets/i18n/\'</span>);\n}\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n\n    HttpClientModule,\n    TranslateModule.forRoot({\n      loader: {\n        provide: TranslateLoader,\n        useFactory: HttpLoaderFactory,\n        deps: [HttpClient],\n      },\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'}}]);