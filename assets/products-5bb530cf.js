import{v as $,T as s,x as A,U as S,n as T,o as _,q as f,b as t,a as e,w as a,B as p,W as B,e as h,d,X as I,Y as N,l as x,F as g,s as F,t as y,Z as O,_ as U,$ as z,a0 as E,a1 as L,I as M,a2 as W,a3 as C,a4 as Z,a5 as q}from"./index-5b22ef94.js";import{_ as R}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-b4ac43b5.js";import{F as X}from"./FormOutlined-93dc63ae.js";import{_ as Y}from"./plugin-vue_export-helper-c27b6911";const j=u=>(Z("data-v-604a8825"),u=u(),q(),u),G={class:"d-flex align-end"},H=j(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"Name"),t("th",{class:"text-left"},"id"),t("th",{class:"text-left"},"Actions")])],-1)),J={key:0},K={colspan:"6",class:"text-center py-2"},Q={style:{"max-width":"500px"}},ee={class:"actions-container d-flex"},te=$({__name:"products",setup(u){const r=s(!1),v=s(),P=s({title:"Products"}),n=s(!1),m=s(!1),V=A([{title:"Products",disabled:!0,href:"#"},{title:"All",disabled:!0,href:"#"}]),c=s([{name:"Electronics",id:1,createdAt:"2024-06-07T18:39:09.298902Z"}]);function b(o){n.value=!0,v.value=o}function w(){m.value=!0,C.delete(`/Product/${v.value}`).then(()=>{m.value=!1,n.value=!1,c.value=c.value.filter(o=>o.id!=v.value)})}async function k(){r.value=!0,C.get("/Product?PageSize=1000").then(o=>{c.value=o.data,r.value=!1}).catch(()=>{r.value=!1})}return S(()=>{k()}),(o,i)=>{const D=T("UiParentCard");return _(),f(g,null,[t("div",G,[e(R,{title:P.value.title,breadcrumbs:V.value},null,8,["title","breadcrumbs"]),e(d,{class:"mb-2",color:"primary",size:"large",to:"/products/add"},{default:a(()=>[e(p(B)),h(" Add Product")]),_:1})]),e(D,{title:"Products",bg:"white"},{default:a(()=>[e(I,{height:"68vh","fixed-header":"",elevation:"",class:"bg-white"},{default:a(()=>[H,t("tbody",null,[r.value?(_(),f("tr",J,[t("td",K,[e(N,{color:"primary",indeterminate:"",size:"100"})])])):x("",!0),r.value?x("",!0):(_(!0),f(g,{key:1},F(c.value,l=>(_(),f("tr",{key:l.id},[t("td",Q,y(l.name),1),t("td",null,y(l.id),1),t("td",null,[t("div",ee,[e(d,{color:"info",icon:"",title:"view",to:`/products/${l.id}`},{default:a(()=>[e(p(O))]),_:2},1032,["to"]),e(d,{color:"success",class:"mx-2",icon:"",title:"edit",to:`/products/add?editMode=true&id=${l.id}`},{default:a(()=>[e(p(X))]),_:2},1032,["to"]),e(d,{color:"error",icon:"",title:"delete",onClick:ae=>b(l.id)},{default:a(()=>[e(p(U))]),_:2},1032,["onClick"])])])]))),128))])]),_:1})]),_:1}),e(W,{modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=l=>n.value=l),"max-width":"500"},{default:a(()=>[e(z,{title:"Delete Product"},{default:a(()=>[e(E,null,{default:a(()=>[h(" Are you sure you want to delete this Product? ")]),_:1}),e(L,null,{default:a(()=>[e(M),e(d,{text:"Cancel",onClick:i[0]||(i[0]=l=>n.value=!1),variant:"elevated",color:"info"}),e(d,{text:"Delete",color:"error",variant:"elevated",onClick:w,loading:m.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});const re=Y(te,[["__scopeId","data-v-604a8825"]]);export{re as default};
