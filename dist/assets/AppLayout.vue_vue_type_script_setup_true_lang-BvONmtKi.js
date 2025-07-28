import{d as _,c as g,f as B,n as x,u as p,w as u,o as l,H as y,J as w,g as h,a as r,b as c,r as C,p as M,F as $,h as j,v as A,t as S,x as W,T as U,s as H,e as v}from"./index-DberAeK0.js";const R=_({__name:"Typography",props:{type:{type:String,required:!0},tag:{type:String,default:"p"},customClass:{type:String,default:""}},setup(t){const e=t,s={B_28_160:{size:"text-h",weight:"font-bold"},B_22_160:{size:"text-h1",weight:"font-bold"},M_22_160:{size:"text-h2",weight:"font-medium"},B_20_160:{size:"text-h3",weight:"font-bold"},B_20_120:{size:"text-h4",weight:"font-bold"},B_18_120:{size:"text-subtitle",weight:"font-bold"},B_16_160:{size:"text-body-lg-1",weight:"font-bold"},M_16_160:{size:"text-body-lg-2",weight:"font-medium"},B_16_140:{size:"text-body-lg-3",weight:"font-bold"},M_16_140:{size:"text-body-lg-4",weight:"font-medium"},B_16_120:{size:"text-body-lg-5",weight:"font-bold"},M_16_120:{size:"text-body-lg-6",weight:"font-medium"},B_14_140:{size:"text-body-1",weight:"font-bold"},B_14_160:{size:"text-body-2",weight:"font-bold"},M_14_160:{size:"text-body-2",weight:"font-medium"},M_14_140:{size:"text-body-3",weight:"font-medium"},B_14_120:{size:"text-body-4",weight:"font-bold"},M_14_120:{size:"text-body-5",weight:"font-medium"},B_12_140:{size:"text-small-1",weight:"font-bold"},M_12_140:{size:"text-small-2",weight:"font-medium"},B_12_120:{size:"text-small-3",weight:"font-bold"},M_12_120:{size:"text-small-4",weight:"font-medium"},B_10_120:{size:"text-small-5",weight:"font-bold"},M_10_120:{size:"text-small-6",weight:"font-medium"}},{size:n,weight:d}=s[e.type]||{size:"text-base",weight:""},i=n,a=d;return(o,b)=>(l(),g(B(t.tag),{class:x(["font-pretendard",p(i),p(a),t.customClass])},{default:u(()=>[y(o.$slots,"default")]),_:3},8,["class"]))}});/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,n)=>n?n.toUpperCase():s.toLowerCase()),E=t=>{const e=T(t);return e.charAt(0).toUpperCase()+e.slice(1)},N=(...t)=>t.filter((e,s,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=({size:t,strokeWidth:e=2,absoluteStrokeWidth:s,color:n,iconNode:d,name:i,class:a,...o},{slots:b})=>w("svg",{...f,width:t||f.width,height:t||f.height,stroke:n||f.stroke,"stroke-width":s?Number(e)*24/Number(t):e,class:N("lucide",...i?[`lucide-${k(E(i))}-icon`,`lucide-${k(i)}`]:["lucide-icon"]),...o},[...d.map(L=>w(...L)),...b.default?[b.default()]:[]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,e)=>(s,{slots:n})=>w(q,{...s,iconNode:e,name:t},n);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=m("chart-no-axes-combined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=m("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=m("message-square",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=m("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=m("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),Z="/header-icon.png",J={class:"w-full md:max-w-[768px] h-16 px-4 flex items-center justify-between bg-white shadow-sm fixed top-0 z-10 left-1/2 -translate-x-1/2"},K=_({__name:"Header",setup(t){return(e,s)=>{const n=C("RouterLink");return l(),h("header",J,[s[0]||(s[0]=r("img",{src:Z,alt:"WonnaBE Logo",class:"h-6"},null,-1)),c(n,{to:"/user",class:x(["flex items-center justify-end w-full text-gray-900 mr-2"])},{default:u(()=>[c(p(I),{class:"w-5 h-5"})]),_:1})])}}}),O={class:"fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:max-w-[768px] bg-white border-gray-200 flex justify-around items-center h-20 border-t border-gray-200"},Q={class:"text-xs mb-4"},X=_({__name:"Navigator",setup(t){const e=A(),s=M([{name:"Board",path:"/board",label:"게시판",icon:G},{name:"Goal",path:"/goal",label:"목표",icon:F},{name:"Home",path:"/",label:"홈",icon:V},{name:"Recommend",path:"/recommend",label:"추천",icon:P},{name:"Assets",path:"/assets",label:"자산분석",icon:D}]);return(n,d)=>{const i=C("RouterLink");return l(),h("nav",O,[(l(!0),h($,null,j(s.value,a=>(l(),g(i,{key:a.name,to:a.path,class:x(["flex flex-col items-center justify-center w-full py-2 text-gray-500",p(e).path===a.path||p(e).path.startsWith(a.path+"/")?"text-sub-yellow-p":"","hover:text-sub-yellow-c"])},{default:u(()=>[(l(),g(B(a.icon),{class:"w-5 h-5 mb-1"})),r("span",Q,S(a.label),1)]),_:2},1032,["to","class"]))),128))])}}}),z=_({__name:"Button",props:{label:{type:String,requried:!0}},setup(t){return(e,s)=>(l(),h("button",{class:x(["w-full px-4 py-3 rounded",t.label==="white"?"bg-gray-BGDim text-black border border-gray-200 hover:bg:gray-100":"bg-sub-yellow-p text-black hover:bg:sub-yellow-bg"])},[c(R,{type:"B_14_120"},{default:u(()=>[y(e.$slots,"default")]),_:3})],2))}}),Y={class:"fixed bottom-0 left-1/2 -translate-x-1/2 bg-white w-full md:max-w-[768px] rounded-t-xl p-6 transform transition-transform duration-300"},ee={class:"w-1/2 flex justify-end ml-auto space-x-2"},te=_({__name:"PWAUpdatePrompt",setup(t){const e=M(!1),s=()=>{"serviceWorker"in navigator&&(navigator.serviceWorker.addEventListener("controllerchange",()=>{}),navigator.serviceWorker.ready.then(a=>{a.addEventListener("updatefound",()=>{const o=a.installing;o&&o.addEventListener("statechange",()=>{o.state==="installed"&&navigator.serviceWorker.controller&&(e.value=!0)})})}))},n=async()=>{e.value=!1,"serviceWorker"in navigator&&((await navigator.serviceWorker.getRegistrations()).forEach(o=>o.update()),window.location.reload())},d=()=>{e.value=!1},i=a=>{a.target===a.currentTarget&&d()};return W(()=>{s()}),(a,o)=>(l(),g(U,{to:"body"},[e.value?(l(),h("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-end z-50",onClick:i},[r("div",Y,[o[2]||(o[2]=r("div",{class:"flex items-center space-x-4 mb-4"},[r("div",{class:"w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center"},[r("span",{class:"text-white text-xl"},"🚀")]),r("div",null,[r("h3",{class:"text-lg font-semibold text-gray-900"},"새 버전 사용 가능"),r("p",{class:"text-sm text-gray-600"},"앱을 업데이트하여 최신 기능을 이용하세요")])],-1)),r("div",ee,[c(z,{onClick:n},{default:u(()=>o[0]||(o[0]=[v(" 업데이트 ")])),_:1,__:[0]}),c(z,{label:"white",onClick:d},{default:u(()=>o[1]||(o[1]=[v(" 나중에 ")])),_:1,__:[1]})])])])):H("",!0)]))}}),se={class:"scrollbar-hide flex justify-center bg-white"},ae={class:"w-full md:max-w-[768px] bg-gray-BGDim min-h-screen flex flex-col overscroll-none"},oe={class:"scrollbar-hide flex-grow p-4 sm:px-5 pt-20 pb-20 bg-gray-BGDim"},re=_({__name:"AppLayout",setup(t){return(e,s)=>(l(),h("div",se,[r("div",ae,[c(te),c(K),r("main",oe,[y(e.$slots,"default")]),c(X)])]))}});export{P as S,F as T,I as U,re as _,z as a,R as b,m as c};
