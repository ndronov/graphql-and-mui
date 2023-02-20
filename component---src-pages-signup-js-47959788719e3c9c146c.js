"use strict";(self.webpackChunkwelcome_to_mars=self.webpackChunkwelcome_to_mars||[]).push([[782],{2193:function(e,t,n){n.d(t,{Ar:function(){return _},pQ:function(){return k},Mi:function(){return T},WS:function(){return P},CF:function(){return j}});var o={};n.r(o),n.d(o,{button:function(){return u},button_default:function(){return c},button_outlined:function(){return l},container:function(){return i},faSpin:function(){return m},linkAnchor:function(){return d}});var a={};n.r(a),n.d(a,{toast:function(){return D},toast_default:function(){return L},toast_error:function(){return O},toast_hidden:function(){return Q},toast_success:function(){return R},toast_visible:function(){return V}});var r=n(7294),s=n(1883),u="button-module--button--07666",c="button-module--button_default--9cd41",l="button-module--button_outlined--cd2cd",i="button-module--container--1fadd",m="button-module--fa-spin--f705e",d="button-module--link-anchor--2ffe7";function f(e){var t;const{className:n="",disabled:a,kind:l="default",label:m,onClick:f,to:p,type:b="button"}=e,g=null!==(t=o["button_"+l])&&void 0!==t?t:c;return p?r.createElement(s.Link,{to:p,className:i+" "+n},r.createElement("span",{className:i+" "+u+" "+g+" "+d},m)):r.createElement("button",{className:i+" "+u+" "+g+" "+n,disabled:a,onClick:f,type:b},m)}var p="form-module--gap--6ec13",b="form-module--mode-change-button--96f48";function g(e){const{children:t,title:n,onSubmit:o}=e;return r.createElement("form",{className:"form-module--form--1ed52",onSubmit:o,noValidate:!0},r.createElement("h1",{className:"form-module--title--a5c2d"},n),t)}var E=n(5785);function v(e){var t;j({kind:"success",message:null!==(t=e.message)&&void 0!==t?t:"Welcome!",onHide:w})}function y(e){var t;j({kind:"error",message:null!==(t=e.message)&&void 0!==t?t:"Error"})}function w(){window.location="https://mars.com/"}const h=[function(e){const t={};for(const n of e)!n.required||n.value?delete t[n.name]:t[n.name]="Enter a value";return t}];function S(e){void 0===e&&(e={});const{validators:t=[],onSubmit:n,onSuccess:o,onFailure:a}=e,{0:s,1:u}=(0,r.useState)({}),{0:c,1:l}=(0,r.useState)(!1),i=(0,r.useCallback)((e=>{u((t=>({...t,[e.target.name]:null})))}),[]),m=(0,r.useCallback)((e=>{const n=e.target.getElementsByTagName("input"),o=Array.from(n),a=[].concat((0,E.Z)(h),(0,E.Z)(t)).reduceRight(((e,t)=>({...e,...t(o)})),{});u(a);return 0===Object.keys(a).length}),[t]);return{errors:s,pending:c,onFocus:i,onSubmit:(0,r.useCallback)((async e=>{e.preventDefault();if(!m(e))return;l(!0);const t=function(e){const t=new FormData(e.target),n={};for(const[o,a]of t.entries())(a instanceof File?!a.size:!a)||(n[o]=a);return n}(e),r=await n(t);if(!r.success)return l(!1),void a(r.payload);o(r.payload)}),[m,n,a,o])}}function _(e){const{children:t}=e;return r.createElement("main",{className:"layout-module--container--66d73"},t)}function k(e){const{title:t,children:n}=e;return r.createElement(r.Fragment,null,r.createElement("meta",{property:"og:locale",content:"en_US"}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:title",content:"Welcome to Mars"}),r.createElement("meta",{property:"og:description",content:"Mars teleport authentication form"}),r.createElement("meta",{property:"og:image",content:"https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia20282-full.jpg"}),r.createElement("meta",{property:"og:url",content:"https://ndronov.github.io/welcome-to-mars/"}),r.createElement("title",null,t),n)}function F(e){const{autoComplete:t,disabled:n,error:o,label:a,name:s,onFocus:u,required:c,type:l}=e;return r.createElement("label",{className:"input-module--container--06e11"},a,r.createElement("input",{autoComplete:t,className:"input-module--input--20e43",disabled:n,name:s,onFocus:u,required:c,type:l}),o&&r.createElement("span",{className:"input-module--error--c56a0"},o))}function N(){return 100*Math.random()>42}const C={validators:[(q="password",A="confirmPassword",function(e){const t=e.find((e=>e.name===q)),n=e.find((e=>e.name===A));return(null==t?void 0:t.value)===(null==n?void 0:n.value)?{}:{[A]:"Values did not match"}})],onSubmit:async function(e){const t=N()?{success:!0,payload:{message:"Account has been created successfully. Welcome to Mars!"}}:{success:!1,payload:{message:"Failed to create an account, please try again later"}};return new Promise((e=>{setTimeout((()=>e(t)),420)}))},onSuccess:v,onFailure:y};var q,A;function P(){const{errors:e,pending:t,onSubmit:n,onFocus:o}=S(C);return r.createElement(g,{onSubmit:n,title:"Sign up"},r.createElement(F,{disabled:t,error:e.email,label:"Email",name:"email",onFocus:o,required:!0,type:"email"}),r.createElement(F,{autoComplete:"new-password",disabled:t,error:e.password,label:"Password",name:"password",onFocus:o,required:!0,type:"password"}),r.createElement(F,{autoComplete:"new-password",disabled:t,error:e.confirmPassword,label:"Confirm",name:"confirmPassword",onFocus:o,required:!0,type:"password"}),r.createElement("div",{className:p}),r.createElement(f,{disabled:t,label:"Sign up",type:"submit"}),r.createElement(f,{className:b,kind:"outlined",label:"Already have an account",to:"/"}))}const M={onSubmit:async function(e){const t=N()?{success:!0,payload:{message:"You have successfully logged in. Now you will be moved to Mars."}}:{success:!1,payload:{message:"Login error, please check your credentials"}};return new Promise((e=>{setTimeout((()=>e(t)),420)}))},onSuccess:v,onFailure:y};function T(){const{errors:e,pending:t,onSubmit:n,onFocus:o}=S(M);return r.createElement(g,{onSubmit:n,title:"Sign in"},r.createElement(F,{disabled:t,error:e.email,id:"email",label:"Email",name:"email",onFocus:o,required:!0,type:"email"}),r.createElement(F,{disabled:t,error:e.password,id:"password",label:"Password",name:"password",onFocus:o,required:!0,type:"password"}),r.createElement("div",{className:p}),r.createElement(f,{disabled:t,label:"Sign in",type:"submit"}),r.createElement(f,{className:b,kind:"outlined",label:"Create account",to:"signup"}))}var W=n(745);function j(e){const{root:t,container:n}=function(){const e=document.createElement("div");document.body.append(e);return{root:(0,W.createRoot)(e),container:e}}();t.render(r.createElement(Z,Object.assign({},e,{hide:function(e){setTimeout((()=>{t.unmount(),n.remove(),null==e||e()}),H)}})))}const H=1e3;var D="toast-module--toast--ffa1a",L="toast-module--toast_default--2b2b6",O="toast-module--toast_error--5ebb8",Q="toast-module--toast_hidden--7ef06",R="toast-module--toast_success--34c38",V="toast-module--toast_visible--be4a8";function Z(e){var t;const{message:n,kind:o,hide:s,onHide:u}=e,{0:c,1:l}=(0,r.useState)(!1),i=null!==(t=a["toast_"+o])&&void 0!==t?t:L,m=c?V:Q;return(0,r.useEffect)((()=>{const e=requestAnimationFrame((()=>l(!0))),t=setTimeout((()=>{l(!1),s(u)}),5e3);return()=>{cancelAnimationFrame(e),clearTimeout(t)}}),[u,s]),r.createElement("div",{className:D+" "+i+" "+m},n)}},2521:function(e,t,n){n.r(t),n.d(t,{Head:function(){return r}});var o=n(7294),a=n(2193);function r(){return o.createElement(a.pQ,{title:"Sign up"})}t.default=function(){return o.createElement(a.Ar,null,o.createElement(a.WS,null))}}}]);
//# sourceMappingURL=component---src-pages-signup-js-47959788719e3c9c146c.js.map