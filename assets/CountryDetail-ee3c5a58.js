import{d as N,r as R,o as n,a as i,n as d,f as w,x as D,_ as x,l as V,m as A,c as P,q as p,h as T,e as s,u as _,b as e,t as a,F as j,k as F,y as O,s as q,p as E,g as M}from"./index-c9282169.js";import{u as z,P as G,c as H,L as J}from"./PageLayout-8c680d18.js";const K={class:"button"},Q=N({__name:"BaseButton",props:{backBtn:{type:Boolean,default:!1}},setup(o){return(c,u)=>{const r=R("font-awesome-icon");return n(),i("button",K,[o.backBtn?(n(),d(r,{key:0,icon:"fa-solid fa-arrow-left"})):w("",!0),D(c.$slots,"default",{},void 0,!0)])}}});const C=x(Q,[["__scopeId","data-v-2cce735c"]]);async function U(o,c){return(await o.fetchCountryByName(c.countryName))[0]}const l=o=>(E("data-v-e5170010"),o=o(),M(),o),W={key:0,class:"detail-content"},X=["src","alt"],Y={class:"content"},Z={class:"title"},ee={class:"info-blocks"},te={class:"inflo-block"},oe=l(()=>e("b",null,"Native name:",-1)),se=l(()=>e("b",null,"Population:",-1)),ae=l(()=>e("b",null,"Region:",-1)),ne={class:"inflo-block"},ce=l(()=>e("b",null,"Top level domain: ",-1)),le=l(()=>e("b",null,"Currencies:",-1)),ue=l(()=>e("b",null,"Languages:",-1)),re={key:0,class:"borders"},_e=l(()=>e("p",{class:"block-subtitle"},[e("b",null,"Border Countries:")],-1)),ie={class:"borders-block"},de=N({__name:"CountryDetail",setup(o){const c=O(),u=q(),{getCountryNameByCode:r,isLoading:m}=z(),t=V(null),L=H();A(async()=>{await v()});const S=P(()=>Array.isArray(c.params.name)?c.params.name[0]:c.params.name),$=()=>{u.replace("/")},I=async y=>{const f=r(y);u.push(`/country/${f}`).then(()=>{v()})},v=async()=>{m.value=!0,t.value=await U(L,{countryName:S.value}),m.value=!1};return(y,f)=>(n(),d(G,null,{default:p(()=>{var h,b,g,k;return[T(_(C),{"back-btn":"",onClick:$},{default:p(()=>[s("Back")]),_:1}),t.value?(n(),i("div",W,[e("img",{class:"flag",src:(b=(h=t.value)==null?void 0:h.flags)==null?void 0:b.svg,alt:`${(g=t.value)==null?void 0:g.name.common} flag`},null,8,X),e("div",Y,[e("h2",Z,a(t.value.name.common),1),e("div",ee,[e("div",te,[e("p",null,[oe,s(" "+a(t.value.name.common),1)]),e("p",null,[se,s(" "+a(t.value.population),1)]),e("p",null,[ae,s(" "+a(t.value.population),1)])]),e("div",ne,[e("p",null,[ce,s(a(t.value.tld[0]),1)]),e("p",null,[le,s(" "+a(Object.values(t.value.currencies)[0].name),1)]),e("p",null,[ue,s(" "+a(Object.values(t.value.languages)[0]),1)])])]),(k=t.value.borders)!=null&&k.length?(n(),i("div",re,[_e,e("div",ie,[(n(!0),i(j,null,F(t.value.borders,B=>(n(),d(_(C),{onClick:pe=>I(B)},{default:p(()=>[s(a(_(r)(B)),1)]),_:2},1032,["onClick"]))),256))])])):w("",!0)])])):(n(),d(_(J),{key:1}))]}),_:1}))}});const ye=x(de,[["__scopeId","data-v-e5170010"]]);export{ye as default};
