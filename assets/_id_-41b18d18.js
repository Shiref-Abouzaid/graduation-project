import{v,a6 as h,x as b,T as g,U as x,o as w,q as y,a as e,w as a,z as d,V,f as i,b as t,t as c,$ as C,B as l,ab as B,e as u,d as m,F as I,a3 as S,a4 as A,a5 as F}from"./index-9fe8148e.js";import{_ as N}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-b3edf3f3.js";import{F as $}from"./FormOutlined-ddd29aa4.js";import{_ as k}from"./plugin-vue_export-helper-c27b6911.js";const r=s=>(A("data-v-a7b57d9a"),s=s(),F(),s),z={class:"d-flex"},D=r(()=>t("div",{class:"text-primary font-weight-bold"},"Name:",-1)),P={class:"ms-auto"},R={class:"d-flex"},T=r(()=>t("div",{class:"text-primary font-weight-bold"},"Created At:",-1)),E={class:"ms-auto"},M={class:"d-flex"},O=r(()=>t("div",{class:"text-primary font-weight-bold"},"ID:",-1)),q={class:"ms-auto"},L={class:"d-flex mt-5"},U=v({__name:"[id]",setup(s){const _=h(),f=b([{title:"Category",disabled:!1,href:"/categories"},{title:"Preview",disabled:!0,href:"#"}]),o=g({name:"",createdAt:"",id:""});async function p(){await S.get(`/ProductCategory/${_.params.id}`).then(n=>{o.value=n})}return x(()=>{p()}),(n,W)=>(w(),y(I,null,[e(N,{title:"Preview",breadcrumbs:f.value},null,8,["breadcrumbs"]),e(C,null,{default:a(()=>[e(d),e(V,{class:"ma-0"},{default:a(()=>[e(i,{cols:"12",sm:"6",md:"3"},{default:a(()=>[t("div",z,[D,t("div",P,c(o.value.name),1)])]),_:1}),e(i,{cols:"12",sm:"6",md:"3"},{default:a(()=>[t("div",R,[T,t("div",E,c(o.value.createdAt.split("T")[0]),1)])]),_:1}),e(i,{cols:"12",sm:"6",md:"3"},{default:a(()=>[t("div",M,[O,t("div",q,c(o.value.id),1)])]),_:1})]),_:1}),e(d,{class:"d-md-block"}),e(d)]),_:1}),t("div",L,[e(m,{color:"info",size:"large",to:"/categories"},{default:a(()=>[e(l(B)),u(" Categories")]),_:1}),e(m,{color:"success",size:"large",class:"ms-auto",to:`/category/add?editMode=true&id=${l(_).params.id}`},{default:a(()=>[e(l($)),u(" Edit")]),_:1},8,["to"])])],64))}});const K=k(U,[["__scopeId","data-v-a7b57d9a"]]);export{K as default};
