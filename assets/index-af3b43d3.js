import{_ as O}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-7d00c6fc.js";import{T as c,a7 as M,G as x,U as T,o as n,q as _,a as l,w as s,V as $,f as b,a8 as w,ad as j,ae as J,af as L,c as C,d as h,e as f,b as G,a9 as H,F,s as W,l as q,t as z,H as K,aa as Q,a3 as X,a4 as V,v as Y,ab as Z,x as ee,n as ae}from"./index-1c425f3e.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const le={class:"d-flex"},se={key:0},ue={__name:"addProductForm",setup(D){const i=c(!1),m=M(),p=c([]);let g;const r=c(!1),v=c(null),a=c({name:"",description:""}),u=c({status:0,message:[]}),y={required:o=>!!o||"This field is required."},k=x(()=>!!m.query.editMode),U=x(()=>u.value.status==200?"success":"error");function N(){a.value={name:""},v.value.reset(),v.value.resetValidation()}async function S(){if(!(await v.value.validate()).valid)return;let e=new FormData;e.append("Name",a.value.name),e.append("Description",a.value.description),e.append("Price",a.value.price),e.append("Picture",a.value.picture[0]),e.append("ProductCategoryId",a.value.productCategoryId),u.value.message=[],r.value=!0,V.post("/Product",e).then(t=>{r.value=!1,i.value=!0,N()}).catch(t=>{r.value=!1;const P=Object.values(t.errors).flat();u.value.status=400,u.value.message=P})}function I(){let o={};return Object.keys(a.value).forEach(e=>{a.value[e]!==g[e]&&(o[e]=a.value[e])}),o}async function E(){if(!(await v.value.validate()).valid)return;let e=I();r.value=!0;let t=new FormData;const P=["name","description","price","productCategoryId"];t.append("id",m.query.id),P.forEach(d=>{e[d]&&t.append(d.charAt(0).toUpperCase()+d.slice(1),e[d])}),a.value.picture&&t.append("Picture",a.value.picture[0]),await V.put("/Product",t).then(d=>{r.value=!1,u.value.status=200,u.value.message=[d.data.message]}).catch(d=>{r.value=!1;const B=Object.values(d.errors).flat();u.value.status=400,u.value.message=B})}async function R(){V.get("/ProductCategory").then(o=>{p.value=o})}async function A(){await V.get(`/Product/${m.query.id}`).then(o=>{a.value=o,g=JSON.parse(JSON.stringify(a.value))})}return T(()=>{R(),k.value&&A()}),(o,e)=>(n(),_(F,null,[l(Q,{onSubmit:K(S,["prevent"]),ref_key:"formRef",ref:v,class:"mt-3"},{default:s(()=>[l($,null,{default:s(()=>[l(b,{cols:"12",sm:"6",class:"py-1"},{default:s(()=>[l(w,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.name=t),label:"Name",rules:[y.required]},null,8,["modelValue","rules"])]),_:1}),l(b,{cols:"12",sm:"6",class:"py-1"},{default:s(()=>[l(w,{modelValue:a.value.price,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.price=t),label:"Price",rules:[y.required]},null,8,["modelValue","rules"])]),_:1}),l(b,{cols:"12",sm:"6",class:"py-1"},{default:s(()=>[l(j,{label:"Description",modelValue:a.value.description,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.description=t),rules:[y.required]},null,8,["modelValue","rules"])]),_:1}),l(b,{cols:"12",sm:"6",class:"py-1"},{default:s(()=>[l(J,{label:"Picture",modelValue:a.value.picture,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.picture=t),rules:[y.required]},null,8,["modelValue","rules"]),l(L,{label:"Category",items:p.value,"item-title":"name","item-value":"id",modelValue:a.value.productCategoryId,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.productCategoryId=t)},null,8,["items","modelValue"])]),_:1})]),_:1}),k.value?(n(),C(h,{key:1,loading:r.value,class:"mt-2 ms-auto submit-btn",color:"success",onClick:E,block:""},{default:s(()=>[f(" Edit ")]),_:1},8,["loading"])):(n(),C(h,{key:0,loading:r.value,class:"mt-2 ms-auto submit-btn",color:"primary",type:"submit",block:""},{default:s(()=>[f(" Submit ")]),_:1},8,["loading"])),G("div",le,[u.value.message.length?(n(),C(H,{key:0,class:"mt-5",color:U.value,variant:"tonal"},{default:s(()=>[(n(!0),_(F,null,W(u.value.message,t=>(n(),_("div",null,[u.value.message.length>1?(n(),_("small",se,"-")):q("",!0),f(" "+z(t),1)]))),256))]),_:1},8,["color"])):q("",!0)])]),_:1},8,["onSubmit"]),l(X,{modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=t=>i.value=t)},{actions:s(()=>[l(h,{color:"success",variant:"text",onClick:e[5]||(e[5]=t=>i.value=!1)},{default:s(()=>[f(" Close ")]),_:1})]),default:s(()=>[f(" Product has been added successfully! ")]),_:1},8,["modelValue"])],64))}},oe=te(ue,[["__scopeId","data-v-e82216d8"]]),ie=Y({__name:"index",setup(D){const i=M(),m=x(()=>!!i.query.editMode),p=c(1);Z(i,async()=>{p.value=Math.floor(Math.random()*10)+1});const g=ee([{title:"Products",disabled:!1,href:"/products"},{title:m.value?"Edit":"Add",disabled:!0,href:"#"}]);return(r,v)=>{const a=ae("UiParentCard");return n(),_("div",{key:p.value},[l(O,{title:m.value?"Edit Proudct":"Add Product",breadcrumbs:g.value},null,8,["title","breadcrumbs"]),l(a,{title:"Product",bg:"white"},{default:s(()=>[l(oe)]),_:1})])}}});export{ie as default};
