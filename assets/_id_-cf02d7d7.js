import{a6 as h,x as v,T as b,U as x,o as g,q as w,a as s,w as e,af as y,b as t,t as c,z as o,V,f as i,$ as C,B as r,e as u,d as m,F as B,a3 as P,ab as R,a4 as S,a5 as F}from"./index-9fe8148e.js";import{_ as I}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-b3edf3f3.js";import{_ as N}from"./plugin-vue_export-helper-c27b6911.js";import{F as $}from"./FormOutlined-ddd29aa4.js";const l=d=>(S("data-v-8bed5636"),d=d(),F(),d),k={class:"d-flex"},z=l(()=>t("div",{class:"text-primary font-weight-bold"},"Name:",-1)),D={class:"ms-auto"},L={class:"d-flex"},T=l(()=>t("div",{class:"text-primary font-weight-bold"},"Description:",-1)),U={class:"ms-auto"},E={class:"d-flex"},M=l(()=>t("div",{class:"text-primary font-weight-bold"},"Category",-1)),O={class:"ms-auto"},q={class:"d-flex"},A=l(()=>t("div",{class:"text-primary font-weight-bold"},"Picture",-1)),W={class:"text-center w-100"},j=["src"],G={class:"d-flex mt-5"},H={__name:"[id]",setup(d){const _=h(),p=v([{title:"Products",disabled:!1,href:"/products"},{title:"Preview",disabled:!0,href:"#"}]),a=b({id:0,name:0,description:"",productCategory:"",pictureURL:""});async function f(){await P.get(`/product/${_.params.id}`).then(n=>{a.value=n})}return x(()=>{f()}),(n,J)=>(g(),w(B,null,[s(I,{title:"Preview",breadcrumbs:p.value},null,8,["breadcrumbs"]),s(C,null,{default:e(()=>[s(y,null,{default:e(()=>[t("h4",null,c(a.value.name),1)]),_:1}),s(o),s(V,{class:"ma-0"},{default:e(()=>[s(i,{cols:"12",sm:"6",md:"6"},{default:e(()=>[t("div",k,[z,t("div",D,c(a.value.name),1)])]),_:1}),s(i,{cols:"12",sm:"6",md:"6"},{default:e(()=>[t("div",L,[T,t("div",U,c(a.value.description),1)])]),_:1}),s(o),s(i,{cols:"12",sm:"6",md:"6"},{default:e(()=>[t("div",E,[M,t("div",O,c(a.value.productCategory),1)])]),_:1}),s(o),s(i,{cols:"12",sm:"6",md:"12"},{default:e(()=>[t("div",q,[A,t("div",W,[t("img",{src:a.value.pictureURL,width:"500"},null,8,j)])])]),_:1})]),_:1}),s(o,{class:"d-md-block"}),s(o)]),_:1}),t("div",G,[s(m,{color:"info",size:"large",to:"/products"},{default:e(()=>[s(r(R)),u(" Products")]),_:1}),s(m,{color:"success",size:"large",class:"ms-auto",to:`/products/add?editMode=true&id=${r(_).params.id}`},{default:e(()=>[s(r($)),u(" Edit")]),_:1},8,["to"])])],64))}},Z=N(H,[["__scopeId","data-v-8bed5636"]]);export{Z as default};
