import{D as i}from"./index-43640b94.js";const p={get:s("GET"),post:s("POST"),put:s("PUT"),delete:s("DELETE")};function s(n){return(e,t)=>{const r={method:n,headers:u()};t&&(r.headers["Content-Type"]="application/json",r.headers.Accept="application/json",r.headers["Access-Control-Allow-Origin"]="*",r.body=JSON.stringify(t));let o;return e.startsWith("/")?o=`http://omarahmedx14-001-site1.dtempurl.com/api${e}`:o=e,fetch(o,r).then(c)}}function u(n){const{user:e,token:t}=i();return e!=null&&e.token?{Authorization:`Bearer ${e.token}`}:t?{Authorization:`Bearer ${t}`}:{}}function c(n){return n.text().then(e=>{const t=e&&JSON.parse(e);if(!n.ok){const{user:r,logout:o}=i();[401,403].includes(n.status)&&r&&o();const a=t;return Promise.reject(a)}return t})}export{p as f};