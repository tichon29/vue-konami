import{S as t,i as e,s as n,e as s,a as l,t as a,j as o,k as c,b as r,o as i,p as f,D as h,q as u,r as m,u as p,v as d,E as g,w as v,P as $,x as b,d as E,Q as x,B as j,g as k,R as w,T as y,n as T,c as N,f as I,m as S,h as D}from"./index.e9726e59.js";import"./index.3e735c90.js";import{s as O}from"./utils.35ae697a.js";function B(t,e,n){const s=t.slice();return s[15]=e[n],s}function V(t,e,n){const s=t.slice();return s[12]=e[n],s}function C(t){let e,n,i=t[3],f=[];for(let e=0;e<i.length;e+=1)f[e]=A(B(t,i,e));const h=t=>a(f[t],1,1,()=>{f[t]=null});return{c(){for(let t=0;t<f.length;t+=1)f[t].c();e=s()},l(t){for(let e=0;e<f.length;e+=1)f[e].l(t);e=s()},m(t,s){for(let e=0;e<f.length;e+=1)f[e].m(t,s);l(t,e,s),n=!0},p(t,n){if(15&n){let s;for(i=t[3],s=0;s<i.length;s+=1){const l=B(t,i,s);f[s]?(f[s].p(l,n),c(f[s],1)):(f[s]=A(l),f[s].c(),c(f[s],1),f[s].m(e.parentNode,e))}for(k(),s=i.length;s<f.length;s+=1)h(s);o()}},i(t){if(!n){for(let t=0;t<i.length;t+=1)c(f[t]);n=!0}},o(t){f=f.filter(Boolean);for(let t=0;t<f.length;t+=1)a(f[t]);n=!1},d(t){E(f,t),t&&r(e)}}}function H(t){let e,n=t[12].content+"";return{c(){e=f("section"),this.h()},l(t){e=p(t,"SECTION",{class:!0}),d(e).forEach(r),this.h()},h(){v(e,"class","md svelte-1bh192n")},m(t,s){l(t,e,s),e.innerHTML=n},p(t,s){1&s&&n!==(n=t[12].content+"")&&(e.innerHTML=n)},i:T,o:T,d(t){t&&r(e)}}}function L(t){let e,n,o,i={ctx:t,current:null,token:null,pending:q,then:R,catch:M,value:18,blocks:[,,,]};return y(n=t[15].getElement(),i),{c(){e=s(),i.block.c()},l(t){e=s(),i.block.l(t)},m(t,n){l(t,e,n),i.block.m(t,i.anchor=n),i.mount=(()=>e.parentNode),i.anchor=e,o=!0},p(e,s){if(t=e,i.ctx=t,8&s&&n!==(n=t[15].getElement())&&y(n,i));else{const e=t.slice();e[18]=i.resolved,i.block.p(e,s)}},i(t){o||(c(i.block),o=!0)},o(t){for(let t=0;t<3;t+=1){const e=i.blocks[t];a(e)}o=!1},d(t){t&&r(e),i.block.d(t),i.token=null,i=null}}}function M(t){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function R(t){let e,n,s;var h=t[18].default;function u(t){return{props:{theme:t[1],themes:t[2],context:t[12].content}}}if(h)var g=new h(u(t));return{c(){e=f("section"),g&&N(g.$$.fragment),n=i(),this.h()},l(t){e=p(t,"SECTION",{class:!0});var s=d(e);g&&I(g.$$.fragment,s),s.forEach(r),n=m(t),this.h()},h(){v(e,"class","svelte-1bh192n")},m(t,a){l(t,e,a),g&&S(g,e,null),l(t,n,a),s=!0},p(t,n){const s={};if(2&n&&(s.theme=t[1]),4&n&&(s.themes=t[2]),1&n&&(s.context=t[12].content),h!==(h=t[18].default)){if(g){k();const t=g;a(t.$$.fragment,1,0,()=>{D(t,1)}),o()}h?(g=new h(u(t)),N(g.$$.fragment),c(g.$$.fragment,1),S(g,e,null)):g=null}else h&&g.$set(s)},i(t){s||(g&&c(g.$$.fragment,t),s=!0)},o(t){g&&a(g.$$.fragment,t),s=!1},d(t){t&&r(e),g&&D(g),t&&r(n)}}}function q(t){return{c:T,l:T,m:T,p:T,i:T,o:T,d:T}}function A(t){let e,n,i=t[12].type===t[15].tag&&L(t);return{c(){i&&i.c(),e=s()},l(t){i&&i.l(t),e=s()},m(t,s){i&&i.m(t,s),l(t,e,s),n=!0},p(t,n){t[12].type===t[15].tag?i?(i.p(t,n),9&n&&c(i,1)):((i=L(t)).c(),c(i,1),i.m(e.parentNode,e)):i&&(k(),a(i,1,1,()=>{i=null}),o())},i(t){n||(c(i),n=!0)},o(t){a(i),n=!1},d(t){i&&i.d(t),t&&r(e)}}}function F(t){let e,n,i,f;const h=[H,C],u=[];function m(t,e){return"md"===t[12].type?0:1}return e=m(t),n=u[e]=h[e](t),{c(){n.c(),i=s()},l(t){n.l(t),i=s()},m(t,n){u[e].m(t,n),l(t,i,n),f=!0},p(t,s){let l=e;(e=m(t))===l?u[e].p(t,s):(k(),a(u[l],1,1,()=>{u[l]=null}),o(),(n=u[e])||(n=u[e]=h[e](t)).c(),c(n,1),n.m(i.parentNode,i))},i(t){f||(c(n),f=!0)},o(t){a(n),f=!1},d(t){u[e].d(t),t&&r(i)}}}function P(t){let e,n,s,x,j,w,y,T,N,I,S;document.title=e=t[0].title;let D=t[0].sections,O=[];for(let e=0;e<D.length;e+=1)O[e]=F(V(t,D,e));const B=t=>a(O[t],1,1,()=>{O[t]=null});return{c(){n=i(),s=f("div"),x=f("div"),j=f("div");for(let t=0;t<O.length;t+=1)O[t].c();y=i(),T=f("footer"),N=f("a"),I=h("Sitemap"),this.h()},l(t){u('[data-svelte="svelte-1aetrll"]',document.head).forEach(r),n=m(t),s=p(t,"DIV",{class:!0});var e=d(s);x=p(e,"DIV",{class:!0});var l=d(x);j=p(l,"DIV",{class:!0});var a=d(j);for(let t=0;t<O.length;t+=1)O[t].l(a);a.forEach(r),l.forEach(r),e.forEach(r),y=m(t),T=p(t,"FOOTER",{class:!0});var o=d(T);N=p(o,"A",{href:!0});var c=d(N);I=g(c,"Sitemap"),c.forEach(r),o.forEach(r),this.h()},h(){v(j,"class","section-container svelte-1bh192n"),v(x,"class","section-wrapper svelte-1bh192n"),v(s,"class",w=$(t[7])+" svelte-1bh192n"),v(N,"href","/sitemap"),v(T,"class","sitemap svelte-1bh192n")},m(e,a){l(e,n,a),l(e,s,a),b(s,x),b(x,j);for(let t=0;t<O.length;t+=1)O[t].m(j,null);t[9](j),t[10](x),t[11](s),l(e,y,a),l(e,T,a),b(T,N),b(N,I),S=!0},p(t,[n]){if((!S||1&n)&&e!==(e=t[0].title)&&(document.title=e),15&n){let e;for(D=t[0].sections,e=0;e<D.length;e+=1){const s=V(t,D,e);O[e]?(O[e].p(s,n),c(O[e],1)):(O[e]=F(s),O[e].c(),c(O[e],1),O[e].m(j,null))}for(k(),e=D.length;e<O.length;e+=1)B(e);o()}(!S||128&n&&w!==(w=$(t[7])+" svelte-1bh192n"))&&v(s,"class",w)},i(t){if(!S){for(let t=0;t<D.length;t+=1)c(O[t]);S=!0}},o(t){O=O.filter(Boolean);for(let t=0;t<O.length;t+=1)a(O[t]);S=!1},d(e){e&&r(n),e&&r(s),E(O,e),t[9](null),t[10](null),t[11](null),e&&r(y),e&&r(T)}}}async function Q({path:t}){const e=await this.fetch("index.json",{headers:{"x-madoc-path":t}}),n=await e.json();if(200===e.status)return{page:n};this.error(e.status,n.message)}function z(t,e,n){let s,l,a,o,c,r,i,{page:f}=e,h=[];return x(async()=>{O.set(f),s!==f.title&&(o.scrollTo({top:0,behavior:"smooth"}),n(3,h=(await import("./components.8a4ff443.js")).default)),s=f.title}),j(async()=>{n(1,l=(await import("./theme.caa6c661.js")).theme),n(2,a=(await import("./theme.caa6c661.js")).themes),n(3,h=(await import("./components.8a4ff443.js")).default)}),t.$set=(t=>{"page"in t&&n(0,f=t.page)}),t.$$.update=(()=>{1&t.$$.dirty&&n(7,i=f.class?`content ${f.class.join(" ")}`:"content")}),[f,l,a,h,o,c,r,i,s,function(t){w[t?"unshift":"push"](()=>{n(6,r=t)})},function(t){w[t?"unshift":"push"](()=>{n(5,c=t)})},function(t){w[t?"unshift":"push"](()=>{n(4,o=t)})}]}export default class extends t{constructor(t){super(),e(this,t,z,P,n,{page:0})}}export{Q as preload};
