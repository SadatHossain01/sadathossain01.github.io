import{a as r,t as R,b as n,s as S,c as ie}from"../chunks/disclose-version.BW1LQ_WK.js";import{p as oe,g as t,f as u,t as b,s as a,c as y,n as D,r as c,a as ae,d as w,b as ne,e as de}from"../chunks/index-client.Ca1Q6pCZ.js";import{s as ce,a as ve,i as fe,b as me}from"../chunks/props.DVpevce3.js";import{e as K}from"../chunks/updater.Dn8TCwE-.js";import{s as Z,c as ue}from"../chunks/base.j3Zrq1Pa.js";import{E as _e}from"../chunks/empty-result.CaxSriMU.js";import{F as pe,C as ge,a as xe,S as $e}from"../chunks/fancy-card.DVP56SCH.js";import{A as he}from"../chunks/assets.BbuNVQab.js";import{a as be,h as we,g as ee}from"../chunks/utils.Ci3sj8RB.js";import{e as ye}from"../chunks/index.DDBfyhzG.js";import{d as Pe}from"../chunks/stores.B2rhzErm.js";import"../chunks/legacy.DFleaXRf.js";import{S as ke}from"../chunks/skill-badge.C-2_ycGG.js";import{A as Ce,a as De,b as Ae}from"../chunks/avatar-fallback.CD1_fXFY.js";import{B as Ee}from"../chunks/badge.uyaj5UcY.js";import{I as j}from"../chunks/icon.C1WxnVSf.js";import{R as G,T as H,a as J}from"../chunks/index.C1VcpdiN.js";import{M as te}from"../chunks/muted.CzICjN0j.js";import{E as re}from"../chunks/experience.Dr0KteQX.js";var Le=n("<img>"),Se=n("<!> <!>",1),Me=n("<!> ",1),Te=n("<!> <!>",1),Be=n("<!> <div> </div>",1),Fe=n("<!> <!>",1),Ie=n("<!> <div></div>",1),Ne=n("<!> <!>",1),Re=n('<!> <div class="flex flex-col gap-4"><!> <div class="flex flex-row flex-wrap gap-1"></div> <!> <!> <div> </div> <div class="flex flex-row flex-wrap gap-2"></div></div>',1);function je(U,e){oe(e,!0);const P=ce(),M=()=>ve(Pe,"$mode",P),O=be(e.it.period.from,e.it.period.to);let v=w(()=>ee(e.it.period.from)),Q=w(()=>ee(e.it.period.to)),T=w(()=>`${t(v)} - ${t(Q)}`),Y=w(()=>[{label:e.it.company,icon:"i-carbon-building",tooltip:"Company"},{label:e.it.location,icon:"i-carbon-location",tooltip:"Location"},{label:e.it.contract,icon:"i-carbon-hourglass",tooltip:"Contract Type"}]);var A=w(()=>we(`/experience/${e.it.slug}`));pe(U,{get color(){return e.it.color},get href(){return t(A)},children:(E,B)=>{ge(E,{class:"flex flex-col gap-8 sm:flex-row",children:(q,V)=>{var x=Re(),k=u(x);Ce(k,{children:(o,f)=>{var s=Se(),$=u(s);De($,{children:(p,l)=>{var g=Le();b(()=>{Z(g,"src",he.Unknown.light),Z(g,"alt",e.it.name)}),r(p,g)},$$slots:{default:!0}});var _=a($,2),m=w(()=>M()==="dark"?e.it.logo.dark:e.it.logo.light);Ae(_,{get src(){return t(m)}}),r(o,s)},$$slots:{default:!0}});var F=a(k,2),L=y(F);xe(L,{children:(o,f)=>{D();var s=R();b(()=>S(s,e.it.name)),r(o,s)},$$slots:{default:!0}});var C=a(L,2);K(C,21,()=>t(Y),o=>o.icon,(o,f)=>{G(o,{openDelay:300,children:(s,$)=>{H(s,{children:(_,m)=>{var p=Te(),l=u(p);Ee(l,{variant:"secondary",class:"flex flex-row items-center gap-1",children:(i,h)=>{var d=Me(),N=u(d);j(N,{get icon(){return t(f).icon}});var le=a(N);b(()=>S(le,` ${t(f).label??""}`)),r(i,d)},$$slots:{default:!0}});var g=a(l,2);J(g,{children:(i,h)=>{D();var d=R();b(()=>S(d,t(f).tooltip)),r(i,d)},$$slots:{default:!0}}),r(_,p)},$$slots:{default:!0}})},$$slots:{default:!0}})}),c(C);var I=a(C,2);G(I,{openDelay:300,children:(o,f)=>{var s=Fe(),$=u(s);H($,{children:(m,p)=>{te(m,{className:"flex flex-row items-center gap-2",children:(l,g)=>{var i=Be(),h=u(i);j(h,{icon:"i-carbon-calendar"});var d=a(h,2),N=y(d,!0);c(d),b(()=>S(N,t(T))),r(l,i)},$$slots:{default:!0}})},$$slots:{default:!0}});var _=a($,2);J(_,{children:(m,p)=>{D();var l=R("Date range");r(m,l)},$$slots:{default:!0}}),r(o,s)},$$slots:{default:!0}});var W=a(I,2);G(W,{openDelay:300,children:(o,f)=>{H(o,{children:(s,$)=>{var _=Ne(),m=u(_);te(m,{className:"flex flex-row items-center gap-2",children:(l,g)=>{var i=Ie(),h=u(i);j(h,{icon:"i-carbon-time"});var d=a(h,2);d.textContent=O,r(l,i)},$$slots:{default:!0}});var p=a(m,2);J(p,{side:"bottom",children:(l,g)=>{D();var i=R("Exact duration");r(l,i)},$$slots:{default:!0}}),r(s,_)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=a(W,2),se=y(z,!0);b(()=>S(se,ye(e.it.shortDescription,150))),c(z);var X=a(z,2);K(X,21,()=>e.it.skills,o=>o.slug,(o,f)=>{ke(o,{get skill(){return t(f)}})}),c(X),c(F),r(q,x)},$$slots:{default:!0}})},$$slots:{default:!0}}),ae()}var Ue=n('<div><div class="flex flex-1 flex-col justify-center lg:py-[50px]"><!></div> <div class="hidden h-[full] min-w-0 flex-shrink-0 flex-col items-center lg:flex" style="--color: hsl(var(--border) / var(--tw-border-opacity, 1)); --icon: hsl(var(--foreground) / var(--tw-border-opacity, 1))"><div class="w-[1px] flex-1 bg-[--color]"></div> <div class="my-2 text-[--icon]"><!></div> <div class="w-[1px] flex-1 bg-[--color]"></div></div> <div class="hidden min-w-0 flex-1 flex-shrink-0 flex-row lg:flex"></div></div>'),Ye=n('<div class="flex flex-col gap-6 lg:gap-0"></div>');function it(U,e){oe(e,!0);let P=de(""),M=w(()=>re.items.filter(v=>v.name.toLowerCase().includes(t(P).toLowerCase())||v.company.toLowerCase().includes(t(P).toLowerCase())||v.description.toLowerCase().includes(t(P))));$e(U,{get title(){return re.title},onSearch:v=>ne(P,me(v)),children:(v,Q)=>{var T=ie(),Y=u(T);fe(Y,()=>t(M).length===0,A=>{_e(A)},A=>{var E=Ye();K(E,23,()=>t(M),B=>B.slug,(B,q,V)=>{var x=Ue(),k=y(x),F=y(k);je(F,{get it(){return t(q)}}),c(k);var L=a(k,2),C=a(y(L),2),I=y(C);j(I,{icon:"i-carbon-radio-button-checked"}),c(C),D(2),c(L),D(2),c(x),b(()=>ue(x,`flex ${t(V)%2!==0?"flex-row-reverse":"flex-row"} gap-4`)),r(B,x)}),c(E),r(A,E)}),r(v,T)},$$slots:{default:!0}}),ae()}export{it as component};
