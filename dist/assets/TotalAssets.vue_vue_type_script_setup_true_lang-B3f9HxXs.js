import{_ as n,c as f}from"./AppLayout.vue_vue_type_script_setup_true_lang-6dqD2iWU.js";import{C as y}from"./Card-CWWVR00D.js";import{d as _,c as r,o as c,w as t,x as w,f as g,m as d,k as p,a as i,b as s,e as o,t as l,u as x}from"./index-DFUBpVcA.js";const b=_({__name:"IconLabel",props:{icon:{},iconClass:{}},setup(u){return(e,m)=>(c(),r(n,{type:"B_18_120",class:"w-full flex flex-row"},{default:t(()=>[(c(),r(g(e.icon),{class:d(["w-5 h-5 mr-2",e.iconClass])},null,8,["class"])),w(e.$slots,"default")]),_:3}))}});/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=f("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=f("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),v={class:"w-full"},k={class:"flex flex-row w-full justify-between"},V=_({__name:"TotalAssets",props:{meta:{},type:{}},setup(u){const e=u,m=p(()=>e.meta.changeRate.startsWith("+")?"text-blue-500":e.meta.changeRate.startsWith("-")?"text-red-500":"text-gray-500"),h=p(()=>`₩${e.type==="자산"?e.meta.totalAmount:e.meta.monthlyConsumption}`);return(a,B)=>(c(),r(y,{class:"bg-sub-yellow-bg"},{default:t(()=>[i("div",v,[i("div",k,[s(n,{type:"M_16_120",class:"w-full mb-2 text-gray-400"},{default:t(()=>[o(l(a.type==="자산"?"총 자산 현황":"총 소비 현황"),1)]),_:1}),s(b,{icon:x(C),class:d(["w-full flex justify-end",m.value])},{default:t(()=>[o(l(a.meta.changeRate)+"% ",1)]),_:1},8,["icon","class"])]),s(n,{type:"B_22_160",class:"mb-2"},{default:t(()=>[o(l(h.value),1)]),_:1}),s(n,{type:"M_12_140",class:"text-gray-400"},{default:t(()=>[o(" 지난달 대비 "+l(a.meta.changeAmount)+"원 ",1)]),_:1})])]),_:1}))}});export{C as T,T as W,b as _,V as a};
