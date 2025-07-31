import{p as i,d as h,j as n,c as u,o as m,C as w,w as s,a as d,b as o,t as c,e as r,v as l,_ as x,s as v,f as C,u as M}from"./index-BkClRIn2.js";import{T as k}from"./trending-up-HVtEv9pl.js";/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=i("message-circle-warning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=i("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]),L={class:"w-full"},R={class:"flex flex-row w-full justify-between"},N=h({__name:"TotalAssets",props:{meta:{},type:{}},setup(f){const t=f,p=n(()=>t.meta.changeRate>0?"text-sub-aqua-p":t.meta.changeRate<0?"text-sub-red-p":"text-gray-500"),_=n(()=>t.meta.changeRate>=0?k:$),g=n(()=>{const e=t.meta.changeRate;return e>0?`+${e}`:e.toString()}),y=n(()=>{const e=t.meta.changeAmount,a=Math.abs(e).toLocaleString();return e>0?`+${a}`:e<0?`-${a}`:a}),b=n(()=>`${(t.type==="자산"?t.meta.totalAmount:t.meta.monthlyConsumption).toLocaleString()}원`);return(e,a)=>(m(),u(w,{class:"bg-sub-yellow-bg border border-sub-yellow-c"},{default:s(()=>[d("div",L,[d("div",R,[o(c,{type:"M_16_120",class:"w-full mb-2 sm:mb-3 text-gray-400"},{default:s(()=>[r(l(e.type==="자산"?"총 자산 현황":"총 소비 현황"),1)]),_:1}),o(x,{icon:_.value,class:v(["w-full flex justify-end",p.value])},{default:s(()=>[r(l(g.value)+"% ",1)]),_:1},8,["icon","class"])]),o(c,{type:"B_22_160",class:"mb-2 sm:mb-3"},{default:s(()=>[r(l(b.value),1)]),_:1}),o(c,{type:"M_12_140",class:"text-gray-400 mb-2 sm:mb-3"},{default:s(()=>[r(" 지난달 대비 "+l(y.value)+"원 ",1)]),_:1}),o(c,{type:"M_10_120",class:"flex flex-row items-center gap-2 text-sub-orange-s"},{default:s(()=>[(m(),u(C(M(A)),{class:"w-4"})),a[0]||(a[0]=r(" 보험은 총자산에 들어가지 않습니다 "))]),_:1,__:[0]})])]),_:1}))}});export{N as _};
