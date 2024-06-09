import{v as P,T as s,x as S,U as T,n as B,o as v,q as _,b as t,a as e,w as l,B as g,W as I,e as p,d as r,X as N,Y as U,l as h,F as x,s as F,t as y,Z as M,_ as O,$ as E,a0 as L,a1 as z,I as W,a2 as Z,a3 as q,a4 as V,a5 as R,a6 as X}from"./index-f8874b33.js";import{_ as Y}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-8c3c6e5f.js";import{F as j}from"./FormOutlined-d5dc38fe.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const H=u=>(R("data-v-26c5a789"),u=u(),X(),u),J={class:"d-flex align-end"},K=H(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"id"),t("th",{class:"text-left"},"Created at"),t("th",{class:"text-left"},"Actions")])],-1)),Q={key:0},ee={colspan:"6",class:"text-center py-2"},te={class:"actions-container d-flex"},ae=P({__name:"categories",setup(u){const c=s(!1),n=s(!1),m=s(),b=s({title:"Categories"}),i=s(!1),C=s(!1),k=S([{title:"Categories",disabled:!0,href:"#"},{title:"All",disabled:!0,href:"#"}]),f=s([{name:"Electronics",id:1,createdAt:"2024-06-07T18:39:09.298902Z"}]);function w(d){i.value=!0,m.value=d}function $(){C.value=!0,V.delete(`/ProductCategory/${m.value}`).then(()=>{C.value=!1,i.value=!1,f.value=f.value.filter(d=>d.id!=m.value),c.value=!0})}async function A(){n.value=!0,V.get("/ProductCategory").then(d=>{f.value=d.reverse(),n.value=!1}).catch(()=>{n.value=!1})}return T(()=>{A()}),(d,o)=>{const D=B("UiParentCard");return v(),_(x,null,[t("div",J,[e(Y,{title:b.value.title,breadcrumbs:k.value},null,8,["title","breadcrumbs"]),e(r,{class:"mb-2",color:"primary",size:"large",to:"/category/add"},{default:l(()=>[e(g(I)),p(" Add Category")]),_:1})]),e(D,{title:"Categories",bg:"white"},{default:l(()=>[e(N,{height:"68vh","fixed-header":"",elevation:"",class:"bg-white"},{default:l(()=>[K,t("tbody",null,[n.value?(v(),_("tr",Q,[t("td",ee,[e(U,{color:"primary",indeterminate:"",size:"100"})])])):h("",!0),n.value?h("",!0):(v(!0),_(x,{key:1},F(f.value,a=>(v(),_("tr",{key:a.id},[t("td",null,y(a.name),1),t("td",null,y(a.id),1),t("td",null,y(a.createdAt),1),t("td",null,[t("div",te,[e(r,{color:"info",icon:"",title:"view",to:`/category/${a.id}`},{default:l(()=>[e(g(M))]),_:2},1032,["to"]),e(r,{color:"success",class:"mx-2",icon:"",title:"edit",to:`/category/add?editMode=true&id=${a.id}`},{default:l(()=>[e(g(j))]),_:2},1032,["to"]),e(r,{color:"error",icon:"",title:"delete",onClick:le=>w(a.id)},{default:l(()=>[e(g(O))]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),_:1}),e(Z,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=a=>i.value=a),"max-width":"500"},{default:l(()=>[e(E,{title:"Delete Category"},{default:l(()=>[e(L,null,{default:l(()=>[p(" Are you sure you want to delete this Category? ")]),_:1}),e(z,null,{default:l(()=>[e(W),e(r,{text:"Cancel",onClick:o[0]||(o[0]=a=>i.value=!1),variant:"elevated",color:"info"}),e(r,{text:"Delete",color:"error",variant:"elevated",onClick:$,loading:C.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(q,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=a=>c.value=a)},{actions:l(()=>[e(r,{color:"success",variant:"text",onClick:o[2]||(o[2]=a=>c.value=!1)},{default:l(()=>[p(" Close ")]),_:1})]),default:l(()=>[p(" Category has been deleted successfully! ")]),_:1},8,["modelValue"])],64)}}});const ne=G(ae,[["__scopeId","data-v-26c5a789"]]);export{ne as default};