import{f as p}from"./fetch-wrapper-5c4dc5fd.js";import{v as b,a5 as x,x as g,T as w,U as y,o as V,q as T,a as e,w as t,aa as C,b as s,t as o,z as _,V as u,f as d,$ as D,B as c,ab as B,e as m,d as f,F,a3 as N,a4 as S}from"./index-43640b94.js";import{_ as k}from"./BaseBreadcrumb.vue_vue_type_style_index_0_lang-eb553a8e.js";import{F as I}from"./FormOutlined-46db989e.js";import{_ as $}from"./plugin-vue_export-helper-c27b6911.js";const l=i=>(N("data-v-a9b6af5b"),i=i(),S(),i),z={class:"d-flex"},E=l(()=>s("div",{class:"text-primary font-weight-bold"},"Full Name:",-1)),P={class:"ms-auto"},R={class:"d-flex"},A=l(()=>s("div",{class:"text-primary font-weight-bold"},"Phone:",-1)),L={class:"ms-auto"},M={class:"d-flex"},O=l(()=>s("div",{class:"text-primary font-weight-bold"},"Driving License Count",-1)),q={class:"ms-auto"},U={class:"d-flex"},W=l(()=>s("div",{class:"text-primary font-weight-bold"},"Departure Date:",-1)),j={class:"ms-auto"},G={class:"d-flex"},H=l(()=>s("div",{class:"text-primary font-weight-bold"},"Arrival Date:",-1)),J={class:"ms-auto"},K={class:"d-flex"},Q=l(()=>s("div",{class:"text-primary font-weight-bold"},"Travel Destination:",-1)),X={class:"ms-auto"},Y={class:"d-flex"},Z=l(()=>s("div",{class:"text-primary font-weight-bold"},"Visa Type:",-1)),ss={class:"ms-auto"},es={class:"d-flex"},ts=l(()=>s("div",{class:"text-primary font-weight-bold"},"Number of Travellers:",-1)),as={class:"ms-auto"},os={class:"d-flex"},ds=l(()=>s("div",{class:"text-primary font-weight-bold"},"Email:",-1)),ls={class:"ms-auto"},is={class:"d-flex mt-5"},_s=b({__name:"[id]",setup(i){const r=x(),v=g([{title:"Visas",disabled:!1,href:"/visas"},{title:"Preview",disabled:!0,href:"#"}]),a=w({id:0,user_id:0,travel_destination:"",visa_type:"",departure_date:"",arrival_date:"",number_of_travellers:null,driving_license_count:null,email:"",phone:"",fullname:"",created_at:"",updated_at:""});async function h(){await p.get(`/profile/preview/${r.params.id}`).then(n=>{a.value=n.data.visa})}return y(()=>{h()}),(n,cs)=>(V(),T(F,null,[e(k,{title:"Preview",breadcrumbs:v.value},null,8,["breadcrumbs"]),e(D,null,{default:t(()=>[e(C,null,{default:t(()=>[s("h4",null,o(a.value.fullname),1)]),_:1}),e(_),e(u,{class:"ma-0"},{default:t(()=>[e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",z,[E,s("div",P,o(a.value.fullname),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",R,[A,s("div",L,o(a.value.phone),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",M,[O,s("div",q,o(a.value.driving_license_count),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",U,[W,s("div",j,o(a.value.departure_date.split("T")[0]),1)])]),_:1})]),_:1}),e(_,{class:"d-md-block"}),e(u,{class:"ma-0"},{default:t(()=>[e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",G,[H,s("div",J,o(a.value.arrival_date.split("T")[0]),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",K,[Q,s("div",X,o(a.value.travel_destination),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",Y,[Z,s("div",ss,o(a.value.visa_type),1)])]),_:1}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",es,[ts,s("div",as,o(a.value.number_of_travellers),1)])]),_:1}),e(_,{class:"d-md-block"}),e(d,{cols:"12",sm:"6",md:"3"},{default:t(()=>[s("div",os,[ds,s("div",ls,o(a.value.email),1)])]),_:1})]),_:1}),e(_)]),_:1}),s("div",is,[e(f,{color:"info",size:"large",to:"/categories"},{default:t(()=>[e(c(B)),m(" Categories")]),_:1}),e(f,{color:"success",size:"large",class:"ms-auto",to:`/category/add?editMode=true&id=${c(r).params.id}`},{default:t(()=>[e(c(I)),m(" Edit")]),_:1},8,["to"])])],64))}});const vs=$(_s,[["__scopeId","data-v-a9b6af5b"]]);export{vs as default};
