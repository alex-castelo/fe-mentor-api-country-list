import{l as i,_ as u,r as h,o as d,n as b,d as v,c as p,a as m,b as s,h as g,u as f,t as x,p as w,g as k,x as L}from"./index-d88836e1.js";const y="https://restcountries.com/v3.1";function A(){return{fetchAllCountries:$,fetchCountryByName:S}}async function $(){return await(await fetch(`${y}/all`)).json()}async function S(e){return await(await fetch(`${y}/name/${e}`)).json()}async function B(e){return await e.fetchAllCountries()}const D=A(),I=B(D),r=i(null),l=i(!1),_=i(!1);function H(){async function e(){var n;if(!((n=r.value)!=null&&n.length)){_.value=!1,l.value=!1;try{r.value=await I,_.value=!1}catch{_.value=!1,l.value=!0}}}function t(n){var c;const o=(c=r.value)==null?void 0:c.find(a=>a.cioc===n||a.cca3===n);return o==null?void 0:o.name.common}return{countryList:r,isLoading:_,hasError:l,fetchAllCountries:e,getCountryNameByCode:t}}const N={};function j(e,t){const n=h("font-awesome-icon");return d(),b(n,{class:"icon",icon:"fa-solid fa-spinner",spin:"",size:"2xl"})}const J=u(N,[["render",j],["__scopeId","data-v-65bc84e6"]]),M=e=>(w("data-v-e7e8961b"),e=e(),k(),e),P={class:"navbar"},E=M(()=>s("span",{class:"title"},[s("b",null,"Where in the world?")],-1)),R=["textContent"],T=v({__name:"TheNavbar",setup(e){const t=i("dark-theme"),n=()=>{o(),document.body.classList.toggle("dark-theme")},o=()=>t.value==="dark-theme"?t.value="light-theme":t.value="dark-theme",c=p(()=>t.value==="dark-theme"),a=p(()=>c.value?{text:"Dark Mode",icon:"fa-moon"}:{text:"Light Mode",icon:"fa-sun"});return(W,q)=>{const C=h("font-awesome-icon");return d(),m("nav",P,[E,s("button",{class:"navbar-button",onClick:n},[g(C,{icon:f(a).icon},null,8,["icon"]),s("span",{textContent:x(f(a).text)},null,8,R)])])}}});const V=u(T,[["__scopeId","data-v-e7e8961b"]]),z={class:"page"},F={class:"page-content"},U=v({__name:"PageLayout",setup(e){return(t,n)=>(d(),m("div",z,[g(V),s("div",F,[L(t.$slots,"default",{},void 0,!0)])]))}});const K=u(U,[["__scopeId","data-v-e40f111d"]]);export{J as L,K as P,A as c,H as u};
