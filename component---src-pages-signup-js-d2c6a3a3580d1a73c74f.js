"use strict";(self.webpackChunkwelcome_to_mars=self.webpackChunkwelcome_to_mars||[]).push([[782],{6969:function(e,n,t){function o(){return 100*Math.random()>42}t.d(n,{D:function(){return o}})},7075:function(e,n,t){t.d(n,{z:function(){return m}});var o={};t.r(o),t.d(o,{button:function(){return u},button_default:function(){return c},button_outlined:function(){return l},container:function(){return i},faSpin:function(){return s},linkAnchor:function(){return d}});var r=t(7294),a=t(1883),u="button-module--button--07666",c="button-module--button_default--9cd41",l="button-module--button_outlined--cd2cd",i="button-module--container--1fadd",s="button-module--fa-spin--f705e",d="button-module--link-anchor--2ffe7";function m(e){var n;const{className:t="",disabled:l,kind:s="default",label:m,onClick:f,to:p,type:b="button"}=e,E=null!==(n=o["button_"+s])&&void 0!==n?n:c;return p?r.createElement(a.Link,{to:p,className:i+" "+t},r.createElement("span",{className:i+" "+u+" "+E+" "+d},m)):r.createElement("button",{className:i+" "+u+" "+E+" "+t,disabled:l,onClick:f,type:b},m)}},5251:function(e,n,t){t.d(n,{l:function(){return r}});var o=t(7294);function r(e){const{children:n,title:t,onSubmit:r}=e;return o.createElement("form",{className:"form-module--form--1ed52",onSubmit:r,noValidate:!0},o.createElement("h1",{className:"form-module--title--a5c2d"},t),n)}},5128:function(e,n,t){t.d(n,{c:function(){return u}});var o=t(5785),r=t(7294),a=t(2914);function u(e){void 0===e&&(e={});const{validators:n=[],onSubmit:t,onSuccess:u,onFailure:c}=e,{0:l,1:i}=(0,r.useState)({}),{0:s,1:d}=(0,r.useState)(!1),m=(0,r.useCallback)((e=>{i((n=>({...n,[e.target.name]:null})))}),[]),f=(0,r.useCallback)((e=>{const t=e.target.getElementsByTagName("input"),r=Array.from(t),u=[].concat((0,o.Z)(a.Ki),(0,o.Z)(n)).reduceRight(((e,n)=>({...e,...n(r)})),{});i(u);return 0===Object.keys(u).length}),[n]);return{errors:l,pending:s,onFocus:m,onSubmit:(0,r.useCallback)((async e=>{e.preventDefault();if(!f(e))return;d(!0);const n=(0,a._F)(e),o=await t(n);d(!1),o.success?u(o.payload):c(o.payload)}),[f,t,c,u])}}},9157:function(e,n,t){t.d(n,{I:function(){return r}});var o=t(7294);function r(e){const{autoComplete:n,disabled:t,error:r,label:a,name:u,onFocus:c,required:l,type:i}=e;return o.createElement("label",{className:"input-module--container--06e11"},a,o.createElement("input",{autoComplete:n,className:"input-module--input--20e43",disabled:t,name:u,onFocus:c,required:l,type:i}),r&&o.createElement("span",{className:"input-module--error--c56a0"},r))}},4208:function(e,n,t){t.d(n,{A:function(){return r}});var o=t(7294);function r(e){const{children:n}=e;return o.createElement("main",{className:"layout-module--container--66d73"},n)}},6630:function(e,n,t){t.d(n,{p:function(){return r}});var o=t(7294);function r(e){const{title:n,children:t}=e;return o.createElement(o.Fragment,null,o.createElement("title",null,n),t)}},2914:function(e,n,t){function o(e){const n=new FormData(e.target),t={};for(const[o,r]of n.entries()){(r instanceof File?!r.size:!r)||(t[o]=r)}return t}t.d(n,{Ki:function(){return a},Ru:function(){return r},_F:function(){return o}});function r(e,n){return function(t){const o=t.find((n=>n.name===e)),r=t.find((e=>e.name===n));return(null==o?void 0:o.value)===(null==r?void 0:r.value)?{}:{[n]:"Values did not match"}}}const a=[function(e){const n={};for(const t of e)!t.required||t.value?delete n[t.name]:n[t.name]="Enter a value";return n}]},4111:function(e,n,t){t.r(n),t.d(n,{Head:function(){return p},default:function(){return b}});var o=t(7294),r=t(6630),a=t(4208),u=t(9157),c=t(7075),l=t(5251),i=t(5128),s=t(6969);var d=t(2914);const m={validators:[(0,d.Ru)("password","confirmPassword")],onSubmit:async function(e){console.info("Sign up try...",e);const n=(0,s.D)()?{success:!0,payload:{message:"Account has been created successfully, now you can sign in"}}:{success:!1,payload:{message:"Error, please try again later"}};return new Promise((e=>{setTimeout((()=>e(n)),4200)}))},onSuccess:e=>{window.location="/",console.log("успех....",e)},onFailure:e=>console.log("провал....",e)};function f(){const{errors:e,pending:n,onSubmit:t,onFocus:r}=(0,i.c)(m);return o.createElement(l.l,{onSubmit:t,title:"Sign up"},o.createElement(u.I,{disabled:n,error:e.email,label:"Email",name:"email",onFocus:r,required:!0,type:"email"}),o.createElement(u.I,{autoComplete:"new-password",disabled:n,error:e.password,label:"Password",name:"password",onFocus:r,required:!0,type:"password"}),o.createElement(u.I,{autoComplete:"new-password",disabled:n,error:e.confirmPassword,label:"Confirm",name:"confirmPassword",onFocus:r,required:!0,type:"password"}),o.createElement("div",{className:"SignUpForm-module--gap--d26ba"}),o.createElement(c.z,{disabled:n,label:"Sign up",type:"submit"}),o.createElement(c.z,{className:"SignUpForm-module--sign-in-button--963d1",kind:"outlined",label:"Already have an account",to:"/"}))}function p(){return o.createElement(r.p,{title:"Sign up"})}var b=function(){return o.createElement(a.A,null,o.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-signup-js-d2c6a3a3580d1a73c74f.js.map