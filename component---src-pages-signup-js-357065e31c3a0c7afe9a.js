"use strict";(self.webpackChunkwelcome_to_mars=self.webpackChunkwelcome_to_mars||[]).push([[782],{6969:function(e,t,n){function o(){return 100*Math.random()>42}n.d(t,{D:function(){return o}})},7075:function(e,t,n){n.d(t,{z:function(){return m}});var o={};n.r(o),n.d(o,{button:function(){return a},button_default:function(){return c},button_outlined:function(){return i},container:function(){return s},faSpin:function(){return l},linkAnchor:function(){return d}});var r=n(7294),u=n(1883),a="button-module--button--07666",c="button-module--button_default--9cd41",i="button-module--button_outlined--cd2cd",s="button-module--container--1fadd",l="button-module--fa-spin--f705e",d="button-module--link-anchor--2ffe7";function m(e){var t;const{className:n="",disabled:i,kind:l="default",label:m,onClick:f,to:b,type:p="button"}=e,v=null!==(t=o["button_"+l])&&void 0!==t?t:c;return b?r.createElement(u.Link,{to:b,className:s+" "+n},r.createElement("span",{className:s+" "+a+" "+v+" "+d},m)):r.createElement("button",{className:s+" "+a+" "+v+" "+n,disabled:i,onClick:f,type:p},m)}},4714:function(e,t,n){n.d(t,{l:function(){return u}});var o=n(7294),r=n(9965);function u(e){const{children:t,title:n,onSubmit:u}=e;return o.createElement("form",{className:r.cr,onSubmit:u,noValidate:!0},o.createElement("h1",{className:r.TN},n),t)}},5128:function(e,t,n){n.d(t,{c:function(){return a}});var o=n(5785),r=n(7294),u=n(2914);function a(e){void 0===e&&(e={});const{validators:t=[],onSubmit:n,onSuccess:a,onFailure:c}=e,{0:i,1:s}=(0,r.useState)({}),{0:l,1:d}=(0,r.useState)(!1),m=(0,r.useCallback)((e=>{s((t=>({...t,[e.target.name]:null})))}),[]),f=(0,r.useCallback)((e=>{const n=e.target.getElementsByTagName("input"),r=Array.from(n),a=[].concat((0,o.Z)(u.Ki),(0,o.Z)(t)).reduceRight(((e,t)=>({...e,...t(r)})),{});s(a);return 0===Object.keys(a).length}),[t]);return{errors:i,pending:l,onFocus:m,onSubmit:(0,r.useCallback)((async e=>{e.preventDefault();if(!f(e))return;d(!0);const t=(0,u._F)(e),o=await n(t);if(!o.success)return d(!1),void c(o.payload);a(o.payload)}),[f,n,c,a])}}},9157:function(e,t,n){n.d(t,{I:function(){return r}});var o=n(7294);function r(e){const{autoComplete:t,disabled:n,error:r,label:u,name:a,onFocus:c,required:i,type:s}=e;return o.createElement("label",{className:"input-module--container--06e11"},u,o.createElement("input",{autoComplete:t,className:"input-module--input--20e43",disabled:n,name:a,onFocus:c,required:i,type:s}),r&&o.createElement("span",{className:"input-module--error--c56a0"},r))}},4208:function(e,t,n){n.d(t,{A:function(){return r}});var o=n(7294);function r(e){const{children:t}=e;return o.createElement("main",{className:"layout-module--container--66d73"},t)}},6630:function(e,t,n){n.d(t,{p:function(){return r}});var o=n(7294);function r(e){const{title:t,children:n}=e;return o.createElement(o.Fragment,null,o.createElement("title",null,t),n)}},4719:function(e,t,n){n.d(t,{FS:function(){return v},Qg:function(){return p}});var o={};n.r(o),n.d(o,{toast:function(){return i},toast_default:function(){return s},toast_error:function(){return l},toast_hidden:function(){return d},toast_success:function(){return m},toast_visible:function(){return f}});var r=n(7294),u=n(745);function a(e){const{root:t,container:n}=function(){const e=document.createElement("div");document.body.append(e);return{root:(0,u.createRoot)(e),container:e}}();t.render(r.createElement(b,Object.assign({},e,{hide:function(e){setTimeout((()=>{t.unmount(),n.remove(),null==e||e()}),c)}})))}const c=1e3;var i="toast-module--toast--ffa1a",s="toast-module--toast_default--2b2b6",l="toast-module--toast_error--5ebb8",d="toast-module--toast_hidden--7ef06",m="toast-module--toast_success--34c38",f="toast-module--toast_visible--be4a8";function b(e){var t;const{message:n,kind:u,hide:a,onHide:c}=e,{0:l,1:m}=(0,r.useState)(!1),b=null!==(t=o["toast_"+u])&&void 0!==t?t:s,p=l?f:d;return(0,r.useEffect)((()=>{requestAnimationFrame((()=>m(!0))),setTimeout((()=>{m(!1),a(c)}),5e3)}),[]),r.createElement("div",{className:i+" "+b+" "+p},n)}function p(e){var t;a({kind:"success",message:null!==(t=e.message)&&void 0!==t?t:"Welcome!",onHide:E})}function v(e){var t;a({kind:"error",message:null!==(t=e.message)&&void 0!==t?t:"Error"})}function E(){window.location="https://mars.com/"}},2914:function(e,t,n){function o(e){const t=new FormData(e.target),n={};for(const[o,r]of t.entries()){(r instanceof File?!r.size:!r)||(n[o]=r)}return n}n.d(t,{Ki:function(){return u},Ru:function(){return r},_F:function(){return o}});function r(e,t){return function(n){const o=n.find((t=>t.name===e)),r=n.find((e=>e.name===t));return(null==o?void 0:o.value)===(null==r?void 0:r.value)?{}:{[t]:"Values did not match"}}}const u=[function(e){const t={};for(const n of e)!n.required||n.value?delete t[n.name]:t[n.name]="Enter a value";return t}]},5775:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return E}});var o=n(7294),r=n(6630),u=n(4208),a=n(9157),c=n(7075),i=n(4714),s=n(5128),l=n(6969);var d=n(2914),m=n(4719),f=n(9965);const b={validators:[(0,d.Ru)("password","confirmPassword")],onSubmit:async function(e){const t=(0,l.D)()?{success:!0,payload:{message:"Account has been created successfully. Welcome to mars!"}}:{success:!1,payload:{message:"Failed to create an account, please try again later"}};return new Promise((e=>{setTimeout((()=>e(t)),420)}))},onSuccess:m.Qg,onFailure:m.FS};function p(){const{errors:e,pending:t,onSubmit:n,onFocus:r}=(0,s.c)(b);return o.createElement(i.l,{onSubmit:n,title:"Sign up"},o.createElement(a.I,{disabled:t,error:e.email,label:"Email",name:"email",onFocus:r,required:!0,type:"email"}),o.createElement(a.I,{autoComplete:"new-password",disabled:t,error:e.password,label:"Password",name:"password",onFocus:r,required:!0,type:"password"}),o.createElement(a.I,{autoComplete:"new-password",disabled:t,error:e.confirmPassword,label:"Confirm",name:"confirmPassword",onFocus:r,required:!0,type:"password"}),o.createElement("div",{className:f.SG}),o.createElement(c.z,{disabled:t,label:"Sign up",type:"submit"}),o.createElement(c.z,{className:f.dO,kind:"outlined",label:"Already have an account",to:"/"}))}function v(){return o.createElement(r.p,{title:"Sign up"})}var E=function(){return o.createElement(u.A,null,o.createElement(p,null))}},9965:function(e,t,n){n.d(t,{SG:function(){return r},TN:function(){return a},cr:function(){return o},dO:function(){return u}});var o="form-module--form--1ed52",r="form-module--gap--6ec13",u="form-module--mode-change-button--96f48",a="form-module--title--a5c2d"}}]);
//# sourceMappingURL=component---src-pages-signup-js-357065e31c3a0c7afe9a.js.map