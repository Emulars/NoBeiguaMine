import{S as p,i as g,s as v,K as b,e as d,t as q,k as E,c as h,a as m,h as S,d as f,m as $,b as j,g as k,W as u,j as y,L as C,M as D,N as H,q as I,o as K}from"../chunks/index-a78a5d08.js";function L(a){let t,i,r,_,l;const o=a[2].default,s=b(o,a,a[1],null);return{c(){t=d("div"),i=d("h1"),r=q(a[0]),_=E(),s&&s.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var n=m(t);i=h(n,"H1",{});var c=m(i);r=S(c,a[0]),c.forEach(f),_=$(n),s&&s.l(n),n.forEach(f),this.h()},h(){j(t,"class","container")},m(e,n){k(e,t,n),u(t,i),u(i,r),u(t,_),s&&s.m(t,null),l=!0},p(e,[n]){(!l||n&1)&&y(r,e[0]),s&&s.p&&(!l||n&2)&&C(s,o,e,e[1],l?H(o,e[1],n,null):D(e[1]),null)},i(e){l||(I(s,e),l=!0)},o(e){K(s,e),l=!1},d(e){e&&f(t),s&&s.d(e)}}}function V({error:a,status:t}){return{props:{title:`${t}: ${a.message}`}}}function M(a,t,i){let{$$slots:r={},$$scope:_}=t,{title:l}=t;return a.$$set=o=>{"title"in o&&i(0,l=o.title),"$$scope"in o&&i(1,_=o.$$scope)},[l,_,r]}class W extends p{constructor(t){super(),g(this,t,M,L,v,{title:0})}}export{W as default,V as load};