import{B as k,k as l,y as m,C as q}from"./index-client.CRB7gsTB.js";const c=[];function x(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const o=new Set;function u(r){if(q(s,r)&&(s=r,n)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function S(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let i=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const a=t(o?e[0]:e,f,r);b?f(a):p=typeof a=="function"?a:l},v=u.map((a,_)=>k(a,w=>{e[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){m(v),p(),i=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return k(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_1v1f1kr)==null?void 0:y.base)??"/SadatHossain";var h;const E=((h=globalThis.__sveltekit_1v1f1kr)==null?void 0:h.assets)??A;export{x as a,A as b,E as c,S as d,C as g,T as r,z as w};
