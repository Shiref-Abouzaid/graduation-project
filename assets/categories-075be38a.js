import{f as h}from"./fetch-wrapper-5c4dc5fd.js";import{_ as $}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-eb553a8e.js";import{v as P,T as s,x as T,U as B,n as I,o as f,q as _,b as t,a as e,w as l,B as v,W as N,e as C,d as r,X as S,Y as F,l as y,F as x,s as O,t as m,Z as U,_ as E,$ as L,a0 as M,a1 as z,I as W,a2 as Z,a3 as q,a4 as R}from"./index-43640b94.js";import{F as X}from"./FormOutlined-46db989e.js";import{_ as Y}from"./plugin-vue_export-helper-c27b6911.js";const j=i=>(q("data-v-7e1ef08c"),i=i(),R(),i),G={class:"d-flex align-end"},H=j(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"id"),t("th",{class:"text-left"},"Created at"),t("th",{class:"text-left"},"Actions")])],-1)),J={key:0},K={colspan:"6",class:"text-center py-2"},Q={class:"actions-container d-flex"},ee=P({__name:"categories",setup(i){const d=s(!1),g=s(),V=s({title:"Categories"}),n=s(!1),p=s(!1),b=T([{title:"Categories",disabled:!0,href:"#"},{title:"All",disabled:!0,href:"#"}]),c=s([{name:"Electronics",id:1,createdAt:"2024-06-07T18:39:09.298902Z"}]);function w(o){n.value=!0,g.value=o}function k(){p.value=!0,h.delete(`/ProductCategory/${g.value}`).then(()=>{p.value=!1,n.value=!1,c.value=c.value.filter(o=>o.id!=g.value)})}async function A(){d.value=!0,h.get("/ProductCategory").then(o=>{c.value=o,d.value=!1}).catch(()=>{d.value=!1})}return B(()=>{A()}),(o,u)=>{const D=I("UiParentCard");return f(),_(x,null,[t("div",G,[e($,{title:V.value.title,breadcrumbs:b.value},null,8,["title","breadcrumbs"]),e(r,{class:"mb-2",color:"primary",size:"large",to:"/category/add"},{default:l(()=>[e(v(N)),C(" Add Category")]),_:1})]),e(D,{title:"Categories",bg:"white"},{default:l(()=>[e(S,{height:"68vh","fixed-header":"",elevation:"",class:"bg-white"},{default:l(()=>[H,t("tbody",null,[d.value?(f(),_("tr",J,[t("td",K,[e(F,{color:"primary",indeterminate:"",size:"100"})])])):y("",!0),d.value?y("",!0):(f(!0),_(x,{key:1},O(c.value,a=>(f(),_("tr",{key:a.id},[t("td",null,m(a.name),1),t("td",null,m(a.id),1),t("td",null,m(a.createdAt),1),t("td",null,[t("div",Q,[e(r,{color:"info",icon:"",title:"view",to:`/category/${a.id}`},{default:l(()=>[e(v(U))]),_:2},1032,["to"]),e(r,{color:"success",class:"mx-2",icon:"",title:"edit",to:`/category/add?editMode=true&id=${a.id}`},{default:l(()=>[e(v(X))]),_:2},1032,["to"]),e(r,{color:"error",icon:"",title:"delete",onClick:te=>w(a.id)},{default:l(()=>[e(v(E))]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),_:1}),e(Z,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=a=>n.value=a),"max-width":"500"},{default:l(()=>[e(L,{title:"Delete Category"},{default:l(()=>[e(M,null,{default:l(()=>[C(" Are you sure you want to delete this Category? ")]),_:1}),e(z,null,{default:l(()=>[e(W),e(r,{text:"Cancel",onClick:u[0]||(u[0]=a=>n.value=!1),variant:"elevated",color:"info"}),e(r,{text:"Delete",color:"error",variant:"elevated",onClick:k,loading:p.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const de=Y(ee,[["__scopeId","data-v-7e1ef08c"]]);export{de as default};