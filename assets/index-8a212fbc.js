import{_ as B}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-22b61556.js";import{v as q,T as i,a6 as F,G as P,U as E,o as d,q as f,a as s,w as u,V as O,f as b,a7 as x,ad as A,ae as j,af as L,c as y,d as h,e as p,b as J,a8 as G,F as w,s as H,l as k,t as W,H as z,a9 as K,aa as Q,a3 as V,ab as X,x as Y,n as Z}from"./index-6f92a62f.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const ae={class:"d-flex"},te={key:0},le=q({__name:"addProductForm",setup(M){const n=i(!1),c=F(),m=i([]);let _;const r=i(!1),v=i(null),e=i({name:"",description:""}),o=i({status:0,message:[]}),g={required:l=>!!l||"This field is required."},C=P(()=>!!c.query.editMode),D=P(()=>o.value.status==200?"success":"error");function S(){e.value={name:""},v.value.reset(),v.value.resetValidation()}async function U(){if(!(await v.value.validate()).valid)return;let a=new FormData;a.append("Name",e.value.name),a.append("Description",e.value.description),a.append("Price",e.value.price),a.append("Picture",e.value.picture[0]),a.append("ProductCategoryId",e.value.productCategoryId),o.value.message=[],r.value=!0,V.post("/Product",a).then(t=>{r.value=!1,n.value=!0,S()}).catch(t=>{r.value=!1;const $=Object.values(t.errors).flat();o.value.status=400,o.value.message=$})}function N(){const l={},a=new URLSearchParams;return Object.keys(e.value).forEach(t=>{e.value[t]!==_[t]&&(l[t]=e.value[t],a.append(t,l[t]))}),a.toString()}async function T(){(await v.value.validate()).valid&&(o.value.message=[],r.value=!0,await V.put(`/Product/${c.query.id}?${N()}`).then(a=>{r.value=!1,o.value.status=200,o.value.message=[a.data.message]}).catch(a=>{r.value=!1;const t=Object.values(a.errors).flat();o.value.status=400,o.value.message=t}))}async function R(){V.get("/ProductCategory").then(l=>{m.value=l})}async function I(){await V.get(`/Product/${c.query.id}`).then(l=>{e.value=l.data.visa,e.value.arrival_date=l.data.visa.arrival_date.split("T")[0],e.value.departure_date=l.data.visa.departure_date.split("T")[0],l.data.visa.phone[0]=="2"?(e.value.country_code=l.data.visa.phone.substring(0,2),e.value.phone=l.data.visa.phone.substring(2)):l.data.visa.phone[0]=="9"&&(e.value.country_code=l.data.visa.phone.substring(0,3),e.value.phone=l.data.visa.phone.substring(3)),_=JSON.parse(JSON.stringify(e.value))})}return E(()=>{R(),C.value&&I()}),(l,a)=>(d(),f(w,null,[s(K,{onSubmit:z(U,["prevent"]),ref_key:"formRef",ref:v,class:"mt-3"},{default:u(()=>[s(O,null,{default:u(()=>[s(b,{cols:"12",sm:"6",class:"py-1"},{default:u(()=>[s(x,{modelValue:e.value.name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value.name=t),label:"Name",rules:[g.required]},null,8,["modelValue","rules"])]),_:1}),s(b,{cols:"12",sm:"6",class:"py-1"},{default:u(()=>[s(x,{modelValue:e.value.price,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value.price=t),label:"Price",rules:[g.required]},null,8,["modelValue","rules"])]),_:1}),s(b,{cols:"12",sm:"6",class:"py-1"},{default:u(()=>[s(A,{label:"Description",modelValue:e.value.description,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value.description=t),rules:[g.required]},null,8,["modelValue","rules"])]),_:1}),s(b,{cols:"12",sm:"6",class:"py-1"},{default:u(()=>[s(j,{label:"Picture",modelValue:e.value.picture,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value.picture=t),rules:[g.required]},null,8,["modelValue","rules"]),s(L,{label:"Type of Visa",items:m.value,"item-title":"name","item-value":"id",modelValue:e.value.productCategoryId,"onUpdate:modelValue":a[4]||(a[4]=t=>e.value.productCategoryId=t)},null,8,["items","modelValue"])]),_:1})]),_:1}),C.value?(d(),y(h,{key:1,loading:r.value,class:"mt-2 ms-auto submit-btn",color:"success",onClick:T,block:""},{default:u(()=>[p(" Edit ")]),_:1},8,["loading"])):(d(),y(h,{key:0,loading:r.value,class:"mt-2 ms-auto submit-btn",color:"primary",type:"submit",block:""},{default:u(()=>[p(" Submit ")]),_:1},8,["loading"])),J("div",ae,[o.value.message.length?(d(),y(G,{key:0,class:"mt-5",color:D.value,variant:"tonal"},{default:u(()=>[(d(!0),f(w,null,H(o.value.message,t=>(d(),f("div",null,[o.value.message.length>1?(d(),f("small",te,"-")):k("",!0),p(" "+W(t),1)]))),256))]),_:1},8,["color"])):k("",!0)])]),_:1},8,["onSubmit"]),s(Q,{modelValue:n.value,"onUpdate:modelValue":a[6]||(a[6]=t=>n.value=t)},{actions:u(()=>[s(h,{color:"success",variant:"text",onClick:a[5]||(a[5]=t=>n.value=!1)},{default:u(()=>[p(" Close ")]),_:1})]),default:u(()=>[p(" Product has been added successfully! ")]),_:1},8,["modelValue"])],64))}});const se=ee(le,[["__scopeId","data-v-2faa36e7"]]),de=q({__name:"index",setup(M){const n=F(),c=P(()=>!!n.query.editMode),m=i(1);X(n,async()=>{m.value=Math.floor(Math.random()*10)+1});const _=Y([{title:"Products",disabled:!1,href:"/products"},{title:c.value?"Edit":"Add",disabled:!0,href:"#"}]);return(r,v)=>{const e=Z("UiParentCard");return d(),f("div",{key:m.value},[s(B,{title:c.value?"Edit Proudct":"Add Product",breadcrumbs:_.value},null,8,["title","breadcrumbs"]),s(e,{title:"Product",bg:"white"},{default:u(()=>[s(se)]),_:1})])}}});export{de as default};
