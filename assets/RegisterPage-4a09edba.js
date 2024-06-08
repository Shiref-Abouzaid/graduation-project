import{_ as $,a as S}from"./GreenLogo.vue_vue_type_script_setup_true_lang-1ab73146.js";import{v as b,T as r,G as A,n as v,o as i,q as f,b as o,a as e,w as a,e as s,ai as F,a6 as L,c as g,a7 as T,t as E,l as d,d as N,H as P,a8 as j,F as q,f as m,Q as h,V as y,$ as x,a0 as z}from"./index-0445f5a7.js";import{f as M}from"./fetch-wrapper-0983ee91.js";import{_ as D}from"./AuthFooter.vue_vue_type_script_setup_true_lang-15ab81af.js";const G={class:"d-flex justify-space-between align-center"},H=o("h3",{class:"text-h3 text-center mb-0"},"Sign up",-1),Q={class:"mb-6"},U={key:0},W={key:0,class:"d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold"},I={class:"text-caption"},J=b({__name:"AuthRegister",setup(V){const n=r(""),u=r(),c=r(!1),t=r({status:0,message:""}),k=r([l=>!!l||"E-mail is required",l=>/.+@.+\..+/.test(l)||"E-mail must be valid"]),w=A(()=>t.value.status==200?"success":"error");async function C(){u.value.validate(),u.value.isValid&&(t.value.message="",c.value=!0,M.post("/auth/register",{email:n.value}).then(async l=>{c.value=!1,t.value.status=200,t.value.message=l.data.message}).catch(l=>{c.value=!1,t.value.status=400,t.value.message=l.errors.email[0]}))}return(l,p)=>{const _=v("router-link"),R=v("RouterLink");return i(),f(q,null,[o("div",G,[H,e(_,{to:"/auth/login",class:"text-primary text-decoration-none"},{default:a(()=>[s("Already have an account?")]),_:1})]),e(j,{ref_key:"Regform",ref:u,"lazy-validation":"",action:"/dashboards/analytical",class:"mt-7 loginForm",onSubmit:P(C,["prevent"])},{default:a(()=>[o("div",Q,[e(F,null,{default:a(()=>[s("Email Address*")]),_:1}),e(L,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=B=>n.value=B),rules:k.value,placeholder:"demo@company.com",class:"mt-2",required:"",type:"email","hide-details":"auto",variant:"outlined",color:"primary",disabled:t.value.status==200},null,8,["modelValue","rules","disabled"]),t.value.message?(i(),g(T,{key:0,color:w.value,class:"mt-2"},{default:a(()=>[s(E(t.value.message)+" ",1),t.value.status==200?(i(),f("span",U,[s(" Check your inbox to revice your password and "),e(R,{to:"/auth/login","aria-label":"logo",class:"text-white"},{default:a(()=>[s("Login")]),_:1}),s(" now")])):d("",!0)]),_:1},8,["color"])):d("",!0)]),t.value.status!=200?(i(),f("div",W,[o("h6",I,[s(" By Signing up, you agree to our "),e(_,{to:"/auth/register",class:"text-primary link-hover font-weight-medium"},{default:a(()=>[s("Terms of Service ")]),_:1}),s(" and "),e(_,{to:"/auth/register",class:"text-primary link-hover font-weight-medium"},{default:a(()=>[s("Privacy Policy")]),_:1})])])):d("",!0),t.value.status!=200?(i(),g(N,{key:1,loading:c.value,color:"primary",block:"",class:"mt-4",variant:"flat",size:"large",type:"submit"},{default:a(()=>[s("Create Account")]),_:1},8,["loading"])):d("",!0)]),_:1},8,["onSubmit"])],64)}}}),K=o("div",{class:"blur-logo"},[o("img",{src:S,width:"100"})],-1),O={class:"pt-6 pl-6"},X={class:"d-flex align-center justify-center",style:{"min-height":"calc(100vh - 148px)"}},te=b({__name:"RegisterPage",setup(V){return(n,u)=>(i(),g(y,{class:"bg-containerBg position-relative","no-gutters":""},{default:a(()=>[K,e(m,{cols:"12"},{default:a(()=>[o("div",O,[e($)])]),_:1}),e(m,{cols:"12",lg:"12",class:"d-flex align-center"},{default:a(()=>[e(h,null,{default:a(()=>[o("div",X,[e(y,{justify:"center"},{default:a(()=>[e(m,{cols:"12",md:"12"},{default:a(()=>[e(x,{elevation:"0",class:"loginBox"},{default:a(()=>[e(x,{elevation:"24"},{default:a(()=>[e(z,{class:"pa-sm-10 pa-6"},{default:a(()=>[e(J)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(h,{class:"pt-0 pb-6"},{default:a(()=>[e(D)]),_:1})]),_:1})]),_:1}))}});export{te as default};
