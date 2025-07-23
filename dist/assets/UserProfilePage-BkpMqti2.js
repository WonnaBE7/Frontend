import{c as l,a as p,U as f,_ as d}from"./AppLayout.vue_vue_type_script_setup_true_lang-u5grIkpU.js";import{_ as y}from"./UserProfileCard.vue_vue_type_script_setup_true_lang-BhXuQUKv.js";import{d as u,f as b,c as i,o as c,u as a,R as k,w as t,a as e,b as m,r as g,e as v,t as x,g as M,F as w}from"./index-CSzjFA_i.js";import{C}from"./Card-BTprVDkd.js";import{_ as $,u as L}from"./userSubTextMap-DKTs78cB.js";import"./NoBorderTag.vue_vue_type_script_setup_true_lang-CCLmdgUs.js";/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=l("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=l("pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=l("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=l("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),R={class:"w-full flex justify-between items-center"},T={class:"flex items-center gap-2"},s=u({__name:"UserSettingsItem",props:{icon:{},label:{}},setup(n){const o=n,r={"회원정보 수정":"/user/profile-edit","워너비 선택":"/user/choose-wonnabe","금융 성향 진단":"/user/diagnosis","나의 금융 히스토리":"/user/history","회원 가입":"/user/signup"},h=b(()=>r[o.label]||"/");return(_,z)=>(c(),i(a(k),{to:h.value,class:"block"},{default:t(()=>[e(C,null,{default:t(()=>[m("div",R,[m("div",T,[(c(),i(g(_.icon),{class:"w-5 h-5"})),e(p,{type:"M_14_140"},{default:t(()=>[v(x(_.label),1)]),_:1})]),e(p,{type:"M_14_140"},{default:t(()=>[e(a(S),{class:"w-5 h-5"})]),_:1})])]),_:1})]),_:1},8,["to"]))}}),q=u({__name:"UserSettingsMenu",setup(n){return(o,r)=>(c(),M(w,null,[e(s,{icon:a(f),label:"회원정보 수정"},null,8,["icon"]),e(s,{icon:a(P),label:"워너비 선택"},null,8,["icon"]),e(s,{icon:a(B),label:"금융 성향 진단"},null,8,["icon"]),e(s,{icon:a(U),label:"나의 금융 히스토리"},null,8,["icon"]),e(s,{icon:a(V),label:"회원 가입"},null,8,["icon"])],64))}}),A=u({__name:"UserProfilePage",setup(n){return(o,r)=>(c(),i(d,null,{default:t(()=>[e($,{label:"마이 페이지",subText:a(L)["마이 페이지"]},null,8,["subText"]),e(y),e(q)]),_:1}))}});export{A as default};
