const __vite__fileDeps=["assets/APlayer.min-CAgWaKXK.js","assets/commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as p,o as _,c as v,N as y,_ as f,m as h,B as b,h as P,O as A,M as g,r as E,Q as x,S as w,a as i,T as B,e as G}from"./app-DRR1eIdY.js";import{a as I}from"./axios-B6xwUs71.js";const S=["spin"],C=p({__name:"MyIcon",props:{name:String,spin:Boolean},setup(r){const s=r;return(a,l)=>(_(),v("span",{class:y(["iconfont icon",`icon-${s.name}`]),spin:s.spin},null,10,S))}}),k=f(C,[["__file","MyIcon.vue"]]),N={class:"MyMusic"},T=i("div",{id:"GlobalAPlayer"},null,-1),L=p({__name:"NavMusic",setup(r){let s,a=h(!1),l=[];const M=()=>{a.value=!a.value},u=()=>{a.value&&(a.value=!1)},d=()=>{const t=document.querySelector(".vp-navbar-end");if(!t)return;if(!document.querySelector("#MyMusic_Menu")){const o=document.createElement("div");o.id="MyMusic_Menu",o.classList.add("nav-item"),o.innerHTML='<div id="MyMusic_icon" class="btnImg"></div>',t.appendChild(o)}const e=document.querySelector("#MyMusic_Menu");e.onclick=o=>{M(),o.stopPropagation()};const n=document.querySelector(".MyMusic");n.onclick=o=>{o.stopPropagation()}},m=()=>{if(!s)return;const t=window,e=document.getElementById("GlobalAPlayer");!e||l.length<1||(c(),e.classList.contains("aplayer"))||(t.GlobalAPlayer=new s({container:document.getElementById("GlobalAPlayer"),audio:l,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),t.GlobalAPlayer.on("play",function(){c()}),t.GlobalAPlayer.on("pause",function(){c()}))};function c(){var e,n;const t=window;t.GlobalAPlayer&&t.GlobalAPlayer.mode&&(t.GlobalAPlayer.paused?(e=document.getElementById("MyMusic_icon"))==null||e.setAttribute("spin","false"):(n=document.getElementById("MyMusic_icon"))==null||n.setAttribute("spin","true"))}return b(()=>{const t=P();I({method:"get",url:"//file.mo7.cc/music/list.json",params:{}}).then(e=>{var n=e.data;n&&n.length>0&&(l=n)}),A(()=>import("./APlayer.min-CAgWaKXK.js").then(e=>e.A),__vite__mapDeps([0,1])).then(e=>{g(()=>{s=e.default,d(),m(),window.document.body.onclick=()=>{u()}}),t.beforeEach(()=>{setTimeout(()=>{d(),m()},50)})})}),(t,e)=>{const n=E("ClientOnly");return _(),x(n,null,{default:w(()=>[i("div",N,[i("div",{class:y(["MyMusic_Play",{hide:!B(a)}])},[i("div",{class:"close",onClick:u},[G(k,{name:"guanbi"})]),T],2)])]),_:1})}}}),V=f(L,[["__file","NavMusic.vue"]]);export{V as default};