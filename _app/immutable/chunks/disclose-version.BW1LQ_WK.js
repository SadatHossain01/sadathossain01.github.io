import{O as H,aN as S,aw as R,a7 as U,Y as N,am as Q,m as l,aE as z,i as X,P as b,h as J,aQ as K,aR as Y,ac as M,U as g,Q as L,o as u,a5 as w,aS as Z,aT as ee,I as $,aU as O,aV as I,a6 as te,aW as re,aX as ne,a2 as ae,R as oe,aY as ie,j as se,p as ue,a as fe,y as de}from"./index-client.Ca1Q6pCZ.js";function we(e,t){if(t){const r=document.body;e.autofocus=!0,H(()=>{document.activeElement===r&&e.focus()})}}let W=!1;function ce(){W||(W=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function q(e){var t=U,r=N;S(null),R(null);try{return e()}finally{S(t),R(r)}}function Te(e,t,r,o=r){e.addEventListener(t,()=>q(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o()}:e.__on_r=o,ce()}const B=new Set,D=new Set;function be(e){if(!l)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function le(e,t,r,o){function a(n){if(o.capture||T.call(t,n),!n.cancelBubble)return q(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function Le(e,t,r,o,a){var n={capture:o,passive:a},i=le(e,t,r,n);(t===document.body||t===window||t===document)&&Q(()=>{t.removeEventListener(e,i,n)})}function Ne(e){for(var t=0;t<e.length;t++)B.add(e[t]);for(var r of D)r(e)}function T(e){var V;var t=this,r=t.ownerDocument,o=e.type,a=((V=e.composedPath)==null?void 0:V.call(e))||[],n=a[0]||e.target,i=0,_=e.__root;if(_){var d=a.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var y=a.indexOf(t);if(y===-1)return;d<=y&&(i=d)}if(n=a[i]||e.target,n!==t){z(e,"currentTarget",{configurable:!0,get(){return n||r}});var k=U,v=N;S(null),R(null);try{for(var s,f=[];n!==null;){var h=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+o];if(m!==void 0&&!n.disabled)if(X(m)){var[x,...G]=m;x.apply(n,[e,...G])}else m.call(n,e)}catch(A){s?f.push(A):s=A}if(e.cancelBubble||h===t||h===null)break;n=h}if(s){for(let A of f)queueMicrotask(()=>{throw A});throw s}}finally{e.__root=t,delete e.currentTarget,S(k),R(v)}}}let c;function _e(){c=void 0}function Ae(e){let t=null,r=l;var o;if(l){for(t=u,c===void 0&&(c=w(document.head));c!==null&&(c.nodeType!==8||c.data!==Y);)c=M(c);c===null?g(!1):c=L(M(c))}l||(o=document.head.appendChild(b()));try{J(()=>e(o),K)}finally{r&&(g(!0),c=u,L(t))}}function F(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=N;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Se(e,t){var r=(t&Z)!==0,o=(t&ee)!==0,a,n=!e.startsWith("<!>");return()=>{if(l)return p(u,null),u;a===void 0&&(a=F(n?e:"<!>"+e),r||(a=w(a)));var i=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var _=w(i),d=i.lastChild;p(_,d)}else p(i,i);return i}}function Re(e,t,r="svg"){var o=!e.startsWith("<!>"),a=`<${r}>${o?e:"<!>"+e}</${r}>`,n;return()=>{if(l)return p(u,null),u;if(!n){var i=F(a),_=w(i);n=w(_)}var d=n.cloneNode(!0);return p(d,d),d}}function ke(e=""){if(!l){var t=b(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=b()),L(r)),p(r,r),r}function Ie(){if(l)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=b();return e.append(t,r),p(t,r),e}function Me(e,t){if(l){N.nodes_end=u,$();return}e!==null&&e.before(t)}function Oe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ve=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function De(e){return ve.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ce(e){return e=e.toLowerCase(),pe[e]??e}const he=["touchstart","touchmove"];function ye(e){return he.includes(e)}let C=!0;function Pe(e){C=e}function Ve(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function me(e,t){return j(e,t)}function We(e,t){O(),t.intro=t.intro??!1;const r=t.target,o=l,a=u;try{for(var n=w(r);n&&(n.nodeType!==8||n.data!==Y);)n=M(n);if(!n)throw I;g(!0),L(n),$();const i=j(e,{...t,anchor:n});if(u===null||u.nodeType!==8||u.data!==te)throw re(),I;return g(!1),i}catch(i){if(i===I)return t.recover===!1&&ne(),O(),ae(r),g(!1),me(e,t);throw i}finally{g(o),L(a),_e()}}const E=new Map;function j(e,{target:t,anchor:r,props:o={},events:a,context:n,intro:i=!0}){O();var _=new Set,d=v=>{for(var s=0;s<v.length;s++){var f=v[s];if(!_.has(f)){_.add(f);var h=ye(f);t.addEventListener(f,T,{passive:h});var m=E.get(f);m===void 0?(document.addEventListener(f,T,{passive:h}),E.set(f,1)):E.set(f,m+1)}}};d(oe(B)),D.add(d);var y=void 0,k=ie(()=>{var v=r??t.appendChild(b());return se(()=>{if(n){ue({});var s=de;s.c=n}a&&(o.$$events=a),l&&p(v,null),C=i,y=e(v,o)||{},C=!0,l&&(N.nodes_end=u),n&&fe()}),()=>{var h;for(var s of _){t.removeEventListener(s,T);var f=E.get(s);--f===0?(document.removeEventListener(s,T),E.delete(s)):E.set(s,f)}D.delete(d),P.delete(y),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return P.set(y,k),y}let P=new WeakMap;function He(e){const t=P.get(e);t&&t()}const Ee="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);export{Me as a,Se as b,Ie as c,ce as d,Le as e,le as f,Ne as g,Ae as h,Oe as i,we as j,Ce as k,De as l,We as m,Re as n,me as o,C as p,Te as q,be as r,Ve as s,ke as t,He as u,p as v,F as w,Pe as x};
