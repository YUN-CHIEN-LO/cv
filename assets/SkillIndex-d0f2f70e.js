import{d,q as p,B as u,r as k,o as n,c as o,f as e,F as v,k as m,a as h,x,t as f,u as g,$,_ as y}from"./index-e5937721.js";const C={class:"page-skill"},w={class:"skill-wrapper"},B={class:"skill-navigate"},I=["onClick"],S={class:"skill-panel"},b=d({__name:"SkillIndex",setup(A){const a=p(),l=u(),i=["web","english"],c=s=>a.name===`skill-${s}`,_=s=>{l.push({name:`skill-${s}`})};return(s,F)=>{const r=k("router-view");return n(),o("div",C,[e("div",w,[e("div",B,[(n(),o(v,null,m(i,t=>e("div",{key:t,class:x(["skill-navigate__tab",{"is-active":c(t)}]),onClick:N=>_(t)},[e("p",null,f(g($)(`skill.${t}`)),1)],10,I)),64))]),e("div",S,[h(r)])])])}}});const V=y(b,[["__scopeId","data-v-b7104774"]]);export{V as default};