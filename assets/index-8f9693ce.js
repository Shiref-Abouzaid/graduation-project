import{_ as N}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-eab63396.js";import{v as h,a6 as V,T as i,G as y,U as R,o,c as v,w as u,a as d,V as S,f as B,a7 as P,d as b,e as f,b as A,a8 as D,q as _,F as E,s as O,l as C,t as T,H as U,a9 as $,a3 as g,aa as j,x as I,n as J}from"./index-87d06399.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const G={class:"d-flex"},H={key:0},W=h({__name:"addCategoryForm",setup(k){const c=V();i([]);const a=i(!1),l=i(null),s=i({name:""}),e=i({status:0,message:[]}),p={required:n=>!!n||"This field is required."},m=y(()=>!!c.query.editMode),x=y(()=>e.value.status==200?"success":"error");function w(){s.value={name:""},l.value.reset(),l.value.resetValidation()}async function M(){(await l.value.validate()).valid&&(e.value.message=[],a.value=!0,g.post("/ProductCategory",s.value).then(t=>{a.value=!1,e.value.status=200,e.value.message=[t.data.message],w()}).catch(t=>{a.value=!1;const r=Object.values(t.errors).flat();e.value.status=400,e.value.message=r}))}async function F(){(await l.value.validate()).valid&&(e.value.message=[],a.value=!0,await g.put("/ProductCategory",{name:s.value.name}).then(t=>{a.value=!1,e.value.status=200,e.value.message=[t.data.message]}).catch(t=>{a.value=!1;const r=Object.values(t.errors).flat();e.value.status=400,e.value.message=r}))}async function q(){await g.get(`/ProductCategory/${c.query.id}`).then(n=>{s.value=n,JSON.parse(JSON.stringify(s.value))})}return R(()=>{m.value&&q()}),(n,t)=>(o(),v($,{onSubmit:U(M,["prevent"]),ref_key:"formRef",ref:l,class:"mt-3"},{default:u(()=>[d(S,null,{default:u(()=>[d(B,{cols:"6",sm:"12",class:"py-1"},{default:u(()=>[d(P,{modelValue:s.value.name,"onUpdate:modelValue":t[0]||(t[0]=r=>s.value.name=r),label:"Category Name",rules:[p.required]},null,8,["modelValue","rules"])]),_:1})]),_:1}),m.value?(o(),v(b,{key:1,loading:a.value,class:"mt-2 ms-auto submit-btn",color:"success",onClick:F,block:""},{default:u(()=>[f(" Edit ")]),_:1},8,["loading"])):(o(),v(b,{key:0,loading:a.value,class:"mt-2 ms-auto submit-btn",color:"primary",type:"submit",block:""},{default:u(()=>[f(" Submit ")]),_:1},8,["loading"])),A("div",G,[e.value.message.length?(o(),v(D,{key:0,class:"mt-5",color:x.value,variant:"tonal"},{default:u(()=>[(o(!0),_(E,null,O(e.value.message,r=>(o(),_("div",null,[e.value.message.length>1?(o(),_("small",H,"-")):C("",!0),f(" "+T(r),1)]))),256))]),_:1},8,["color"])):C("",!0)])]),_:1},8,["onSubmit"]))}});const z=L(W,[["__scopeId","data-v-a5323b87"]]),Y=h({__name:"index",setup(k){const c=V(),a=y(()=>!!c.query.editMode),l=i(1);j(c,async()=>{l.value=Math.floor(Math.random()*10)+1});const s=I([{title:"Categories",disabled:!1,href:"/categories"},{title:a.value?"Edit":"Add",disabled:!0,href:"#"}]);return(e,p)=>{const m=J("UiParentCard");return o(),_("div",{key:l.value},[d(N,{title:a.value?"Edit Category":"Add Category",breadcrumbs:s.value},null,8,["title","breadcrumbs"]),d(m,{title:"Category",bg:"white"},{default:u(()=>[d(z)]),_:1})])}}});export{Y as default};
