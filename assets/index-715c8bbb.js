import{_ as I}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-eb553a8e.js";import{v as x,a5 as q,T as c,G as V,U as B,o as d,c as f,w as r,a as u,V as E,f as _,a6 as P,ac as O,ad as $,ae as A,d as C,e as y,b as j,a7 as L,q as b,F as J,s as G,l as w,t as H,H as W,a8 as z,a9 as K,x as Q,n as X}from"./index-43640b94.js";import{f as g}from"./fetch-wrapper-5c4dc5fd.js";import{_ as Y}from"./plugin-vue_export-helper-c27b6911.js";const Z={class:"d-flex"},ee={key:0},ae=x({__name:"addProductForm",setup(F){const n=q(),v=c([]);let m;const o=c(!1),i=c(null),e=c({name:"",description:""}),l=c({status:0,message:[]}),p={required:s=>!!s||"This field is required."},h=V(()=>!!n.query.editMode),M=V(()=>l.value.status==200?"success":"error");function D(){e.value={name:""},i.value.reset(),i.value.resetValidation()}async function k(){if(!(await i.value.validate()).valid)return;let a=new FormData;a.append("Name",e.value.name),a.append("Description",e.value.description),a.append("Price",e.value.price),a.append("Price",e.value.picture[0]),a.append("ProductCategoryId",e.value.productCategoryId),l.value.message=[],o.value=!0,g.post("/Product",a).then(t=>{o.value=!1,l.value.status=200,l.value.message=[t.data.message],D()}).catch(t=>{o.value=!1;const R=Object.values(t.errors).flat();l.value.status=400,l.value.message=R})}function S(){const s={},a=new URLSearchParams;return Object.keys(e.value).forEach(t=>{e.value[t]!==m[t]&&(s[t]=e.value[t],a.append(t,s[t]))}),a.toString()}async function U(){(await i.value.validate()).valid&&(l.value.message=[],o.value=!0,await g.put(`/Product/${n.query.id}?${S()}`).then(a=>{o.value=!1,l.value.status=200,l.value.message=[a.data.message]}).catch(a=>{o.value=!1;const t=Object.values(a.errors).flat();l.value.status=400,l.value.message=t}))}async function N(){g.get("/ProductCategory").then(s=>{v.value=s.data})}async function T(){await g.get(`/Product/${n.query.id}`).then(s=>{e.value=s.data.visa,e.value.arrival_date=s.data.visa.arrival_date.split("T")[0],e.value.departure_date=s.data.visa.departure_date.split("T")[0],s.data.visa.phone[0]=="2"?(e.value.country_code=s.data.visa.phone.substring(0,2),e.value.phone=s.data.visa.phone.substring(2)):s.data.visa.phone[0]=="9"&&(e.value.country_code=s.data.visa.phone.substring(0,3),e.value.phone=s.data.visa.phone.substring(3)),m=JSON.parse(JSON.stringify(e.value))})}return B(()=>{N(),h.value&&T()}),(s,a)=>(d(),f(z,{onSubmit:W(k,["prevent"]),ref_key:"formRef",ref:i,class:"mt-3"},{default:r(()=>[u(E,null,{default:r(()=>[u(_,{cols:"12",sm:"6",class:"py-1"},{default:r(()=>[u(P,{modelValue:e.value.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.name=t),label:"Name",rules:[p.required]},null,8,["modelValue","rules"])]),_:1}),u(_,{cols:"12",sm:"6",class:"py-1"},{default:r(()=>[u(P,{modelValue:e.value.price,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.price=t),label:"Price",rules:[p.required]},null,8,["modelValue","rules"])]),_:1}),u(_,{cols:"12",sm:"6",class:"py-1"},{default:r(()=>[u(O,{label:"Description",modelValue:e.value.description,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.description=t),rules:[p.required]},null,8,["modelValue","rules"])]),_:1}),u(_,{cols:"12",sm:"6",class:"py-1"},{default:r(()=>[u($,{label:"Picture",modelValue:e.value.picture,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.picture=t),rules:[p.required]},null,8,["modelValue","rules"]),u(A,{label:"Type of Visa",items:v.value,"item-title":"name","item-value":"id",modelValue:e.value.productCategoryId,"onUpdate:modelValue":a[4]||(a[4]=t=>e.value.productCategoryId=t)},null,8,["items","modelValue"])]),_:1})]),_:1}),h.value?(d(),f(C,{key:1,loading:o.value,class:"mt-2 ms-auto submit-btn",color:"success",onClick:U,block:""},{default:r(()=>[y(" Edit ")]),_:1},8,["loading"])):(d(),f(C,{key:0,loading:o.value,class:"mt-2 ms-auto submit-btn",color:"primary",type:"submit",block:""},{default:r(()=>[y(" Submit ")]),_:1},8,["loading"])),j("div",Z,[l.value.message.length?(d(),f(L,{key:0,class:"mt-5",color:M.value,variant:"tonal"},{default:r(()=>[(d(!0),b(J,null,G(l.value.message,t=>(d(),b("div",null,[l.value.message.length>1?(d(),b("small",ee,"-")):w("",!0),y(" "+H(t),1)]))),256))]),_:1},8,["color"])):w("",!0)])]),_:1},8,["onSubmit"]))}});const te=Y(ae,[["__scopeId","data-v-cbffd6b6"]]),re=x({__name:"index",setup(F){const n=q(),v=V(()=>!!n.query.editMode),m=c(1);K(n,async()=>{m.value=Math.floor(Math.random()*10)+1});const o=Q([{title:"Products",disabled:!1,href:"/products"},{title:v.value?"Edit":"Add",disabled:!0,href:"#"}]);return(i,e)=>{const l=X("UiParentCard");return d(),b("div",{key:m.value},[u(I,{title:v.value?"Edit Proudct":"Add Product",breadcrumbs:o.value},null,8,["title","breadcrumbs"]),u(l,{title:"Product",bg:"white"},{default:r(()=>[u(te)]),_:1})])}}});export{re as default};
