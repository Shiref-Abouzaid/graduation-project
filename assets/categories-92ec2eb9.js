import{v as T,T as s,x as U,U as B,n as I,o as m,q as p,b as l,a as e,w as a,B as C,W as N,e as u,d as r,X as E,Y as F,l as V,F as h,s as M,t as x,Z as O,_ as L,$ as z,a0 as W,a1 as Y,I as Z,a2 as q,a3 as b,a4 as k,a5 as R,a6 as X}from"./index-1c425f3e.js";import{_ as j}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-7d00c6fc.js";import{F as G}from"./FormOutlined-4aeaf3bd.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const J=c=>(R("data-v-4aa42a58"),c=c(),X(),c),K={class:"d-flex align-end"},Q=J(()=>l("thead",null,[l("tr",null,[l("th",{class:"text-left"},"Name"),l("th",{class:"text-left"},"id"),l("th",{class:"text-left"},"Created at"),l("th",{class:"text-left"},"Actions")])],-1)),ee={key:0},te={colspan:"6",class:"text-center py-2"},ae={class:"actions-container d-flex"},le=T({__name:"categories",setup(c){const f=s(!1),v=s(!1),i=s(!1),y=s(),w=s({title:"Categories"}),d=s(!1),_=s(!1),$=U([{title:"Categories",disabled:!0,href:"#"},{title:"All",disabled:!0,href:"#"}]),g=s([{name:"Electronics",id:1,createdAt:"2024-06-07T18:39:09.298902Z"}]);function A(n){d.value=!0,y.value=n}function D(){_.value=!0,k.delete(`/ProductCategory/${y.value}`).then(()=>{_.value=!1,d.value=!1,g.value=g.value.filter(n=>n.id!=y.value),f.value=!0}).catch(()=>{v.value=!0,d.value=!1,_.value=!1})}async function P(){i.value=!0,k.get("/ProductCategory").then(n=>{g.value=n.reverse(),i.value=!1}).catch(()=>{i.value=!1})}return B(()=>{P()}),(n,o)=>{const S=I("UiParentCard");return m(),p(h,null,[l("div",K,[e(j,{title:w.value.title,breadcrumbs:$.value},null,8,["title","breadcrumbs"]),e(r,{class:"mb-2",color:"primary",size:"large",to:"/category/add"},{default:a(()=>[e(C(N)),u(" Add Category")]),_:1})]),e(S,{title:"Categories",bg:"white"},{default:a(()=>[e(E,{height:"68vh","fixed-header":"",elevation:"",class:"bg-white"},{default:a(()=>[Q,l("tbody",null,[i.value?(m(),p("tr",ee,[l("td",te,[e(F,{color:"primary",indeterminate:"",size:"100"})])])):V("",!0),i.value?V("",!0):(m(!0),p(h,{key:1},M(g.value,t=>(m(),p("tr",{key:t.id},[l("td",null,x(t.name),1),l("td",null,x(t.id),1),l("td",null,x(t.createdAt),1),l("td",null,[l("div",ae,[e(r,{color:"info",icon:"",title:"view",to:`/category/${t.id}`},{default:a(()=>[e(C(O))]),_:2},1032,["to"]),e(r,{color:"success",class:"mx-2",icon:"",title:"edit",to:`/category/add?editMode=true&id=${t.id}`},{default:a(()=>[e(C(G))]),_:2},1032,["to"]),e(r,{color:"error",icon:"",title:"delete",onClick:oe=>A(t.id)},{default:a(()=>[e(C(L))]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),_:1}),e(q,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=t=>d.value=t),"max-width":"500"},{default:a(()=>[e(z,{title:"Delete Category"},{default:a(()=>[e(W,null,{default:a(()=>[u(" Are you sure you want to delete this Category? ")]),_:1}),e(Y,null,{default:a(()=>[e(Z),e(r,{text:"Cancel",onClick:o[0]||(o[0]=t=>d.value=!1),variant:"elevated",color:"info"}),e(r,{text:"Delete",color:"error",variant:"elevated",onClick:D,loading:_.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(b,{modelValue:f.value,"onUpdate:modelValue":o[3]||(o[3]=t=>f.value=t)},{actions:a(()=>[e(r,{color:"success",variant:"text",onClick:o[2]||(o[2]=t=>f.value=!1)},{default:a(()=>[u(" Close ")]),_:1})]),default:a(()=>[u(" Category has been deleted successfully! ")]),_:1},8,["modelValue"]),e(b,{modelValue:v.value,"onUpdate:modelValue":o[5]||(o[5]=t=>v.value=t)},{actions:a(()=>[e(r,{color:"success",variant:"text",onClick:o[4]||(o[4]=t=>v.value=!1)},{default:a(()=>[u(" Close ")]),_:1})]),default:a(()=>[u(" You Cannot delete this category! ")]),_:1},8,["modelValue"])],64)}}});const ue=H(le,[["__scopeId","data-v-4aa42a58"]]);export{ue as default};
