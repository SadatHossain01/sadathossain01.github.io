import{S as C}from"../chunks/skills.CoCv-q7J.js";import{c as G,t as h,a as s,b as E,s as F}from"../chunks/disclose-version.BW1LQ_WK.js";import{p as I,a as J,g as n,f as A,t as k,d as x,n as $,s as d,c as H,r as O}from"../chunks/index-client.Ca1Q6pCZ.js";import{s as K,i as b,a as L}from"../chunks/props.DVpevce3.js";import{e as Q,i as V}from"../chunks/updater.Dn8TCwE-.js";import{s as W}from"../chunks/base.j3Zrq1Pa.js";import{B as X}from"../chunks/base-page.CVEIwmPT.js";import{E as Y}from"../chunks/empty-result.CaxSriMU.js";import{F as Z,M as tt,E as et}from"../chunks/empty-markdown.6MYQl_ok.js";import{B as at}from"../chunks/badge.uyaj5UcY.js";import{S as z}from"../chunks/separator.piBNb_jL.js";import{H as rt}from"../chunks/h1.yS9ZobKP.js";import{M as ot}from"../chunks/muted.CzICjN0j.js";import{A as st}from"../chunks/assets.BbuNVQab.js";import{E as it}from"../chunks/experience.Dr0KteQX.js";import{P as lt}from"../chunks/projects.CVMwgVsi.js";import{h as nt}from"../chunks/utils.Ci3sj8RB.js";import{d as mt}from"../chunks/stores.B2rhzErm.js";import"../chunks/legacy.DFleaXRf.js";function dt({params:f}){if(f.slug)return{item:C.items.find(c=>c.slug===f.slug)}}const Ht=Object.freeze(Object.defineProperty({__proto__:null,load:dt},Symbol.toStringTag,{value:"Module"}));var ft=E("<a><!></a>"),ut=E('<div class="flex flex-row flex-wrap items-center gap-2 py-4"><!> <!></div>'),gt=E("<!> <!> <!> <!> <!>",1);function Ot(f,a){I(a,!0);const c=K(),p=()=>L(mt,"$mode",c);let N=x(()=>{var e,r;return`${((r=(e=a.data)==null?void 0:e.item)==null?void 0:r.name)??"Not Found"} - Skills`}),R=x(()=>{var e,r,t;return(p()=="dark"?(r=(e=a.data)==null?void 0:e.item)==null?void 0:r.logo.dark:(t=a.data.item)==null?void 0:t.logo.light)??st.Unknown.light}),P=x(()=>(()=>{const e=a.data.item;if(!e)return[];const r=[];return lt.items.forEach(t=>{t.skills.find(m=>m.slug===e.slug)&&r.push({link:`/projects/${t.slug}`,logo:p()==="dark"?t.logo.dark:t.logo.light,name:t.name})}),it.items.forEach(t=>{t.skills.find(m=>m.slug===e.slug)&&r.push({link:`/experience/${t.slug}`,logo:p()==="dark"?t.logo.dark:t.logo.light,name:t.name})}),r})());X(f,{get title(){return n(N)},children:(e,r)=>{var t=G(),m=A(t);b(m,()=>!a.data.item,_=>{Y(_)},_=>{var S=gt(),y=A(S);Z(y,{get img(){return n(R)},children:(o,u)=>{rt(o,{children:(g,B)=>{$();var i=h();k(()=>F(i,a.data.item.name)),s(g,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=d(y,2);z(M,{});var w=d(M,2);b(w,()=>a.data.item.description.trim(),o=>{tt(o,{get content(){return a.data.item.description}})},o=>{et(o)});var j=d(w,2);z(j,{});var T=d(j,2);b(T,()=>n(P).length!==0,o=>{var u=ut(),g=H(u);ot(g,{children:(i,v)=>{$();var l=h("Related items");s(i,l)},$$slots:{default:!0}});var B=d(g,2);Q(B,17,()=>n(P),V,(i,v)=>{var l=ft();k(()=>W(l,"href",nt(n(v).link)));var U=H(l);at(U,{children:(q,ct)=>{$();var D=h();k(()=>F(D,n(v).name)),s(q,D)},$$slots:{default:!0}}),O(l),s(i,l)}),O(u),s(o,u)}),s(_,S)}),s(e,t)},$$slots:{default:!0}}),J()}export{Ot as component,Ht as universal};
