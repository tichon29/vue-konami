import"./typeof.321bbc66.js";import{_ as n}from"./slicedToArray.e76636dd.js";import{_ as t,a as e}from"./asyncToGenerator.332733a3.js";import{_ as o,a as r,b as c,c as a,i as s,s as i,d as u,S as f,e as l,f as h,t as p,q as m,r as v,j as d,v as g,w as b,I as x,x as $,y as k,z as j,A as E,J as w,B as y,U as T,C as I,h as N,V as S,G as O,o as V,W as A,X as B,n as C,k as D,l as _,m as G,p as H}from"./index.254ba264.js";import"./index.0353541d.js";import{s as L}from"./utils.8b10b0da.js";function M(n,t,e){var o=n.slice();return o[15]=t[e],o}function q(n,t,e){var o=n.slice();return o[12]=t[e],o}function z(n){for(var t,e,o=n[3],r=[],c=0;c<o.length;c+=1)r[c]=X(M(n,o,c));var a=function(n){return p(r[n],1,1,function(){r[n]=null})};return{c:function(){for(var n=0;n<r.length;n+=1)r[n].c();t=l()},l:function(n){for(var e=0;e<r.length;e+=1)r[e].l(n);t=l()},m:function(n,o){for(var c=0;c<r.length;c+=1)r[c].m(n,o);h(n,t,o),e=!0},p:function(n,e){if(15&e){var c;for(o=n[3],c=0;c<o.length;c+=1){var s=M(n,o,c);r[c]?(r[c].p(s,e),v(r[c],1)):(r[c]=X(s),r[c].c(),v(r[c],1),r[c].m(t.parentNode,t))}for(V(),c=o.length;c<r.length;c+=1)a(c);m()}},i:function(n){if(!e){for(var t=0;t<o.length;t+=1)v(r[t]);e=!0}},o:function(n){r=r.filter(Boolean);for(var t=0;t<r.length;t+=1)p(r[t]);e=!1},d:function(n){N(r,n),n&&d(t)}}}function F(n){var t,e=n[12].content+"";return{c:function(){t=b("section"),this.h()},l:function(n){t=j(n,"SECTION",{class:!0}),E(t).forEach(d),this.h()},h:function(){y(t,"class","md svelte-1bh192n")},m:function(n,o){h(n,t,o),t.innerHTML=e},p:function(n,o){1&o&&e!==(e=n[12].content+"")&&(t.innerHTML=e)},i:C,o:C,d:function(n){n&&d(t)}}}function J(n){var t,e,o,r={ctx:n,current:null,token:null,pending:W,then:U,catch:R,value:18,blocks:[,,,]};return B(e=n[15].getElement(),r),{c:function(){t=l(),r.block.c()},l:function(n){t=l(),r.block.l(n)},m:function(n,e){h(n,t,e),r.block.m(n,r.anchor=e),r.mount=function(){return t.parentNode},r.anchor=t,o=!0},p:function(t,o){if(n=t,r.ctx=n,8&o&&e!==(e=n[15].getElement())&&B(e,r));else{var c=n.slice();c[18]=r.resolved,r.block.p(c,o)}},i:function(n){o||(v(r.block),o=!0)},o:function(n){for(var t=0;t<3;t+=1){var e=r.blocks[t];p(e)}o=!1},d:function(n){n&&d(t),r.block.d(n),r.token=null,r=null}}}function R(n){return{c:C,l:C,m:C,p:C,i:C,o:C,d:C}}function U(n){var t,e,o,r=n[18].default;function c(n){return{props:{theme:n[1],themes:n[2],context:n[12].content}}}if(r)var a=new r(c(n));return{c:function(){t=b("section"),a&&D(a.$$.fragment),e=g(),this.h()},l:function(n){t=j(n,"SECTION",{class:!0});var o=E(t);a&&_(a.$$.fragment,o),o.forEach(d),e=k(n),this.h()},h:function(){y(t,"class","svelte-1bh192n")},m:function(n,r){h(n,t,r),a&&G(a,t,null),h(n,e,r),o=!0},p:function(n,e){var o={};if(2&e&&(o.theme=n[1]),4&e&&(o.themes=n[2]),1&e&&(o.context=n[12].content),r!==(r=n[18].default)){if(a){V();var s=a;p(s.$$.fragment,1,0,function(){H(s,1)}),m()}r?(a=new r(c(n)),D(a.$$.fragment),v(a.$$.fragment,1),G(a,t,null)):a=null}else r&&a.$set(o)},i:function(n){o||(a&&v(a.$$.fragment,n),o=!0)},o:function(n){a&&p(a.$$.fragment,n),o=!1},d:function(n){n&&d(t),a&&H(a),n&&d(e)}}}function W(n){return{c:C,l:C,m:C,p:C,i:C,o:C,d:C}}function X(n){var t,e,o=n[12].type===n[15].tag&&J(n);return{c:function(){o&&o.c(),t=l()},l:function(n){o&&o.l(n),t=l()},m:function(n,r){o&&o.m(n,r),h(n,t,r),e=!0},p:function(n,e){n[12].type===n[15].tag?o?(o.p(n,e),9&e&&v(o,1)):((o=J(n)).c(),v(o,1),o.m(t.parentNode,t)):o&&(V(),p(o,1,1,function(){o=null}),m())},i:function(n){e||(v(o),e=!0)},o:function(n){p(o),e=!1},d:function(n){o&&o.d(n),n&&d(t)}}}function K(n){var t,e,o,r,c=[F,z],a=[];function s(n,t){return"md"===n[12].type?0:1}return t=s(n),e=a[t]=c[t](n),{c:function(){e.c(),o=l()},l:function(n){e.l(n),o=l()},m:function(n,e){a[t].m(n,e),h(n,o,e),r=!0},p:function(n,r){var i=t;(t=s(n))===i?a[t].p(n,r):(V(),p(a[i],1,1,function(){a[i]=null}),m(),(e=a[t])||(e=a[t]=c[t](n)).c(),v(e,1),e.m(o.parentNode,o))},i:function(n){r||(v(e),r=!0)},o:function(n){p(e),r=!1},d:function(n){a[t].d(n),n&&d(o)}}}function P(t){var e,o,r,c,a,s,i,u,f,l,S;document.title=e=t[0].title;for(var O=t[0].sections,A=[],B=0;B<O.length;B+=1)A[B]=K(q(t,O,B));var C=function(n){return p(A[n],1,1,function(){A[n]=null})};return{c:function(){o=g(),r=b("div"),c=b("div"),a=b("div");for(var n=0;n<A.length;n+=1)A[n].c();i=g(),u=b("footer"),f=b("a"),l=x("Sitemap"),this.h()},l:function(n){$('[data-svelte="svelte-1aetrll"]',document.head).forEach(d),o=k(n),r=j(n,"DIV",{class:!0});var t=E(r);c=j(t,"DIV",{class:!0});var e=E(c);a=j(e,"DIV",{class:!0});for(var s=E(a),h=0;h<A.length;h+=1)A[h].l(s);s.forEach(d),e.forEach(d),t.forEach(d),i=k(n),u=j(n,"FOOTER",{class:!0});var p=E(u);f=j(p,"A",{href:!0});var m=E(f);l=w(m,"Sitemap"),m.forEach(d),p.forEach(d),this.h()},h:function(){y(a,"class","section-container svelte-1bh192n"),y(c,"class","section-wrapper svelte-1bh192n"),y(r,"class",s=T(t[7])+" svelte-1bh192n"),y(f,"href","/sitemap"),y(u,"class","sitemap svelte-1bh192n")},m:function(n,e){h(n,o,e),h(n,r,e),I(r,c),I(c,a);for(var s=0;s<A.length;s+=1)A[s].m(a,null);t[9](a),t[10](c),t[11](r),h(n,i,e),h(n,u,e),I(u,f),I(f,l),S=!0},p:function(t,o){var c=n(o,1)[0];if((!S||1&c)&&e!==(e=t[0].title)&&(document.title=e),15&c){var i;for(O=t[0].sections,i=0;i<O.length;i+=1){var u=q(t,O,i);A[i]?(A[i].p(u,c),v(A[i],1)):(A[i]=K(u),A[i].c(),v(A[i],1),A[i].m(a,null))}for(V(),i=O.length;i<A.length;i+=1)C(i);m()}(!S||128&c&&s!==(s=T(t[7])+" svelte-1bh192n"))&&y(r,"class",s)},i:function(n){if(!S){for(var t=0;t<O.length;t+=1)v(A[t]);S=!0}},o:function(n){A=A.filter(Boolean);for(var t=0;t<A.length;t+=1)p(A[t]);S=!1},d:function(n){n&&d(o),n&&d(r),N(A,n),t[9](null),t[10](null),t[11](null),n&&d(i),n&&d(u)}}}function Q(n){return Y.apply(this,arguments)}function Y(){return(Y=t(e.mark(function n(t){var o,r,c;return e.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.path,n.next=3,this.fetch("index.json",{headers:{"x-madoc-path":o}});case 3:return r=n.sent,n.next=6,r.json();case 6:if(c=n.sent,200!==r.status){n.next=11;break}return n.abrupt("return",{page:c});case 11:this.error(r.status,c.message);case 12:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function Z(n,o,r){var c,a,s,i,u,f,l,h=o.page,p=[];return S(t(e.mark(function n(){return e.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(L.set(h),c===h.title){n.next=8;break}return i.scrollTo({top:0,behavior:"smooth"}),n.t0=r,n.next=6,import("./components.a456da50.js");case 6:n.t1=p=n.sent.default,(0,n.t0)(3,n.t1);case 8:c=h.title;case 9:case"end":return n.stop()}},n)}))),O(t(e.mark(function n(){return e.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,import("./theme.0e0e9be0.js");case 3:return n.t1=a=n.sent.theme,(0,n.t0)(1,n.t1),n.t2=r,n.next=8,import("./theme.0e0e9be0.js");case 8:return n.t3=s=n.sent.themes,(0,n.t2)(2,n.t3),n.t4=r,n.next=13,import("./components.a456da50.js");case 13:n.t5=p=n.sent.default,(0,n.t4)(3,n.t5);case 15:case"end":return n.stop()}},n)}))),n.$set=function(n){"page"in n&&r(0,h=n.page)},n.$$.update=function(){1&n.$$.dirty&&r(7,l=h.class?"content ".concat(h.class.join(" ")):"content")},[h,a,s,p,i,u,f,l,c,function(n){A[n?"unshift":"push"](function(){r(6,f=n)})},function(n){A[n?"unshift":"push"](function(){r(5,u=n)})},function(n){A[n?"unshift":"push"](function(){r(4,i=n)})}]}export default(function(n){function t(n){var e;return r(this,t),e=c(this,a(t).call(this)),s(u(e),n,Z,P,i,{page:0}),e}return o(t,f),t}());export{Q as preload};
