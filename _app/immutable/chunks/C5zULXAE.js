import{a8 as j,c as ee,h as x,A as R,b as ae,a6 as re,a9 as z,aa as ne,ab as $,ac as D,e as g,ad as y,ae as F,d as J,p as ie,Y as te,W as q,af as M,ag as G,ah as O,ai as fe,aj as se,ak as le,C as ue,al as P,B as de,am as ve,a2 as oe,an as ce,m as _e,ao as K,ap as he,y as pe}from"./aj5FnfNL.js";import{w as Ee}from"./P9uv06_A.js";import{w as me}from"./BOsUJfRO.js";function Ce(r,e){return e}function Ae(r,e,a,n){for(var u=[],o=e.length,d=0;d<o;d++)fe(e[d].e,u,!0);var c=o>0&&u.length===0&&a!==null;if(c){var m=a.parentNode;se(m),m.append(a),n.clear(),w(r,e[0].prev,e[o-1].next)}le(u,()=>{for(var h=0;h<o;h++){var v=e[h];c||(n.delete(v.k),w(r,v.prev,v.next)),ue(v.e,!c)}})}function ge(r,e,a,n,u,o=null){var d=r,c={flags:e,items:new Map,first:null},m=(e&P)!==0;if(m){var h=r;d=x?R(de(h)):h.appendChild(j())}x&&ae();var v=null,I=!1;ee(()=>{var i=a(),l=re(i)?i:i==null?[]:z(i),s=l.length;if(I&&s===0)return;I=s===0;let b=!1;if(x){var p=d.data===ne;p!==(s===0)&&(d=$(),R(d),D(!1),b=!0)}if(x){for(var E=null,A,_=0;_<s;_++){if(g.nodeType===8&&g.data===ve){d=g,b=!0,D(!1);break}var t=l[_],f=n(t,_);A=Q(g,c,E,null,t,f,_,u,e),c.items.set(f,A),E=A}s>0&&R($())}if(!x){var N=oe;be(l,c,d,u,e,(N.f&y)!==0,n)}o!==null&&(s===0?v?F(v):v=J(()=>o(d)):v!==null&&ie(v,()=>{v=null})),b&&D(!0),a()}),x&&(d=g)}function be(r,e,a,n,u,o,d){var B,U,Y,V;var c=(u&ce)!==0,m=(u&(M|O))!==0,h=r.length,v=e.items,I=e.first,i=I,l,s=null,b,p=[],E=[],A,_,t,f;if(c)for(f=0;f<h;f+=1)A=r[f],_=d(A,f),t=v.get(_),t!==void 0&&((B=t.a)==null||B.measure(),(b??(b=new Set)).add(t));for(f=0;f<h;f+=1){if(A=r[f],_=d(A,f),t=v.get(_),t===void 0){var N=i?i.e.nodes_start:a;s=Q(N,e,s,s===null?e.first:s.next,A,_,f,n,u),v.set(_,s),p=[],E=[],i=s.next;continue}if(m&&Te(t,A,f,u),t.e.f&y&&(F(t.e),c&&((U=t.a)==null||U.unfix(),(b??(b=new Set)).delete(t))),t!==i){if(l!==void 0&&l.has(t)){if(p.length<E.length){var k=E[0],T;s=k.prev;var L=p[0],S=p[p.length-1];for(T=0;T<p.length;T+=1)X(p[T],k,a);for(T=0;T<E.length;T+=1)l.delete(E[T]);w(e,L.prev,S.next),w(e,s,L),w(e,S,k),i=k,s=S,f-=1,p=[],E=[]}else l.delete(t),X(t,i,a),w(e,t.prev,t.next),w(e,t,s===null?e.first:s.next),w(e,s,t),s=t;continue}for(p=[],E=[];i!==null&&i.k!==_;)(o||!(i.e.f&y))&&(l??(l=new Set)).add(i),E.push(i),i=i.next;if(i===null)continue;t=i}p.push(t),s=t,i=t.next}if(i!==null||l!==void 0){for(var C=l===void 0?[]:z(l);i!==null;)(o||!(i.e.f&y))&&C.push(i),i=i.next;var H=C.length;if(H>0){var Z=u&P&&h===0?a:null;if(c){for(f=0;f<H;f+=1)(Y=C[f].a)==null||Y.measure();for(f=0;f<H;f+=1)(V=C[f].a)==null||V.fix()}Ae(e,C,Z,v)}}c&&te(()=>{var W;if(b!==void 0)for(t of b)(W=t.a)==null||W.apply()}),q.first=e.first&&e.first.e,q.last=s&&s.e}function Te(r,e,a,n){n&M&&G(r.v,e),n&O?G(r.i,a):r.i=a}function Q(r,e,a,n,u,o,d,c,m){var h=(m&M)!==0,v=(m&he)===0,I=h?v?_e(u):K(u):u,i=m&O?K(d):d,l={i,v:I,k:o,a:null,e:null,prev:a,next:n};try{return l.e=J(()=>c(r,I,i),x),l.e.prev=a&&a.e,l.e.next=n&&n.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),n!==null&&(n.prev=l,n.e.prev=l.e),l}finally{}}function X(r,e,a){for(var n=r.next?r.next.e.nodes_start:a,u=e?e.e.nodes_start:a,o=r.e.nodes_start;o!==n;){var d=pe(o);u.before(o),o=d}}function w(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ke(r){const e={};return Object.keys(r).forEach(a=>{const n=a,u=r[n];e[n]=me(Ee(u))}),e}function ye(r,e){const a={};return e.forEach(n=>{a[n]={[`data-${r}-${n}`]:""}}),n=>a[n]}function Ne(r){return r?{"aria-disabled":"true","data-disabled":""}:{"aria-disabled":void 0,"data-disabled":void 0}}function Se(r){const e={};for(const a in r){const n=r[a];n!==void 0&&(e[a]=n)}return e}function He(r){return function(e,a){if(a===void 0)return;const n=r[e];n&&n.set(a)}}export{ye as c,Ne as d,ge as e,He as g,Ce as i,Se as r,ke as t};
