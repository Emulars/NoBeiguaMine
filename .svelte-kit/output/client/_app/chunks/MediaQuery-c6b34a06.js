import{S as h,i as q,s as g,K as y,L,M,N as p,q as w,o as N,v as S}from"./index-a78a5d08.js";const b=s=>({matches:s&1}),_=s=>({matches:s[0]});function v(s){let n;const a=s[4].default,t=y(a,s,s[3],_);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,o){t&&t.m(e,o),n=!0},p(e,[o]){t&&t.p&&(!n||o&9)&&L(t,a,e,e[3],n?p(a,e[3],o,b):M(e[3]),_)},i(e){n||(w(t,e),n=!0)},o(e){N(t,e),n=!1},d(e){t&&t.d(e)}}}function A(s,n,a){let{$$slots:t={},$$scope:e}=n,{query:o}=n,i,u,l=!1,c=!1;S(()=>(a(2,l=!0),()=>{f()}));function m(r){i=window.matchMedia(r),u=d=>a(0,c=d.matches),i.addListener(u),a(0,c=i.matches)}function f(){i&&u&&i.removeListener(u)}return s.$$set=r=>{"query"in r&&a(1,o=r.query),"$$scope"in r&&a(3,e=r.$$scope)},s.$$.update=()=>{s.$$.dirty&6&&l&&(f(),m(o))},[c,o,l,e,t]}class K extends h{constructor(n){super(),q(this,n,A,v,g,{query:1})}}export{K as M};
