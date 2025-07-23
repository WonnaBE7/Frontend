import{g as u,o as l,b as n,m as b,d as m,h as B,F as $,k as L,p as W,q as S,c as f,w as _,r as C,t as U,n as w,u as p,j as y,a as d,s as j,T as A,l as E,e as v}from"./index-p8kLqC30.js";const H="/header-icon.png",T=(t,e)=>{const s=t.__vccOpts||t;for(const[r,i]of e)s[r]=i;return s},q={},N={class:"w-full md:max-w-[768px] h-16 px-4 flex items-center bg-white shadow-sm fixed top-0 z-10 left-1/2 -translate-x-1/2"};function R(t,e){return l(),u("header",N,e[0]||(e[0]=[n("img",{src:H,alt:"WonnaBE Logo",class:"h-6"},null,-1)]))}const V=T(q,[["render",R]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),D=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase()),P=t=>{const e=D(t);return e.charAt(0).toUpperCase()+e.slice(1)},F=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=({size:t,strokeWidth:e=2,absoluteStrokeWidth:s,color:r,iconNode:i,name:c,class:a,...o},{slots:x})=>b("svg",{...h,width:t||h.width,height:t||h.height,stroke:r||h.stroke,"stroke-width":s?Number(e)*24/Number(t):e,class:F("lucide",...c?[`lucide-${k(P(c))}-icon`,`lucide-${k(c)}`]:["lucide-icon"]),...o},[...i.map(M=>b(...M)),...x.default?[x.default()]:[]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(t,e)=>(s,{slots:r})=>b(G,{...s,iconNode:e,name:t},r);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=g("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=g("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=g("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=g("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=g("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Q={class:"fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:max-w-[768px] bg-white border-gray-200 flex justify-around items-center h-20 border-t border-gray-200"},X={class:"text-xs mb-4"},Y=m({__name:"Navigator",setup(t){const e=W(),s=B([{name:"Board",path:"/board",label:"게시판",icon:O},{name:"Goal",path:"/goal",label:"목표",icon:K},{name:"Home",path:"/",label:"홈",icon:I},{name:"Recommend",path:"/recommend",label:"추천",icon:Z},{name:"User",path:"/user",label:"마이",icon:J}]);return(r,i)=>{const c=S("RouterLink");return l(),u("nav",Q,[(l(!0),u($,null,L(s.value,a=>(l(),f(c,{key:a.name,to:a.path,class:w(["flex flex-col items-center justify-center w-full py-2 text-gray-500",p(e).path===a.path||p(e).path.startsWith(a.path+"/")?"text-sub-yellow-p":"","hover:text-sub-yellow-c"])},{default:_(()=>[(l(),f(C(a.icon),{class:"w-5 h-5 mb-1"})),n("span",X,U(a.label),1)]),_:2},1032,["to","class"]))),128))])}}}),ee=m({__name:"Typography",props:{type:{type:String,required:!0},tag:{type:String,default:"p"},customClass:{type:String,default:""}},setup(t){const e=t,s={B_22_160:{size:"text-h1",weight:"font-bold"},M_22_160:{size:"text-h2",weight:"font-medium"},B_20_160:{size:"text-h3",weight:"font-bold"},B_20_120:{size:"text-h4",weight:"font-bold"},B_18_20:{size:"text-subtitle",weight:"font-bold"},B_16_160:{size:"text-body-lg-1",weight:"font-bold"},M_16_160:{size:"text-body-lg-2",weight:"font-medium"},B_16_140:{size:"text-body-lg-3",weight:"font-bold"},M_16_140:{size:"text-body-lg-4",weight:"font-medium"},B_16_120:{size:"ttext-body-lg-5",weight:"font-bold"},M_16_120:{size:"ttext-body-lg-6",weight:"font-medium"},B_14_140:{size:"text-body-1",weight:"font-bold"},M_14_160:{size:"text-body-2",weight:"font-medium"},M_14_140:{size:"text-body-3",weight:"font-medium"},B_14_120:{size:"text-body-4",weight:"font-bold"},M_14_120:{size:"text-body-5",weight:"font-medium"},B_12_140:{size:"text-small-1",weight:"font-bold"},M_12_140:{size:"text-small-2",weight:"font-medium"},B_12_120:{size:"text-small-3",weight:"font-bold"},M_12_120:{size:"text-small-4",weight:"font-medium"},B_10_120:{size:"text-small-5",weight:"font-bold"},M_10_120:{size:"text-small-6",weight:"font-medium"}},{size:r,weight:i}=s[e.type]||{size:"text-base",weight:""},c=r,a=i;return(o,x)=>(l(),f(C(t.tag),{class:w(["font-pretendard",p(c),p(a),t.customClass])},{default:_(()=>[y(o.$slots,"default")]),_:3},8,["class"]))}}),z=m({__name:"Button",props:{label:{type:String,requried:!0}},setup(t){return(e,s)=>(l(),u("button",{class:w(["w-full px-4 py-3 rounded",t.label==="white"?"bg-gray-50 text-black border border-gray-200 hover:bg:gray-100":"bg-sub-yellow-p text-black hover:bg:sub-yellow-bg"])},[d(ee,{type:"B_14_140"},{default:_(()=>[y(e.$slots,"default")]),_:3})],2))}}),te={class:"fixed bottom-0 left-1/2 -translate-x-1/2 bg-white w-full md:max-w-[768px] rounded-t-xl p-6 transform transition-transform duration-300"},se={class:"w-1/2 flex justify-end ml-auto space-x-2"},ae=m({__name:"PWAUpdatePrompt",setup(t){const e=B(!1),s=()=>{"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("controllerchange",()=>{}),navigator.serviceWorker.ready.then(a=>{a.addEventListener("updatefound",()=>{const o=a.installing;o&&o.addEventListener("statechange",()=>{o.state==="installed"&&navigator.serviceWorker.controller&&(e.value=!0)})})}))},r=async()=>{e.value=!1,"serviceWorker"in navigator&&((await navigator.serviceWorker.getRegistrations()).forEach(o=>o.update()),window.location.reload())},i=()=>{e.value=!1},c=a=>{a.target===a.currentTarget&&i()};return j(()=>{s()}),(a,o)=>(l(),f(A,{to:"body"},[e.value?(l(),u("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-end z-50",onClick:c},[n("div",te,[o[2]||(o[2]=n("div",{class:"flex items-center space-x-4 mb-4"},[n("div",{class:"w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center"},[n("span",{class:"text-white text-xl"},"🚀")]),n("div",null,[n("h3",{class:"text-lg font-semibold text-gray-900"},"새 버전 사용 가능"),n("p",{class:"text-sm text-gray-600"},"앱을 업데이트하여 최신 기능을 이용하세요")])],-1)),n("div",se,[d(z,{onClick:r},{default:_(()=>o[0]||(o[0]=[v(" 업데이트 ")])),_:1,__:[0]}),d(z,{label:"white",onClick:i},{default:_(()=>o[1]||(o[1]=[v(" 나중에 ")])),_:1,__:[1]})])])])):E("",!0)]))}}),oe={class:"scrollbar-hide flex justify-center bg-white"},re={class:"w-full md:max-w-[768px] bg-gray-BGDim min-h-screen flex flex-col overscroll-none"},ne={class:"scrollbar-hide flex-grow p-4 sm:px-5 pt-20 pb-20 bg-gray-BGDim"},ie=m({__name:"AppLayout",setup(t){return(e,s)=>(l(),u("div",oe,[n("div",re,[d(ae),d(V),n("main",ne,[y(e.$slots,"default")]),d(Y)])]))}});export{J as U,ie as _,ee as a,z as b,g as c,T as d};
