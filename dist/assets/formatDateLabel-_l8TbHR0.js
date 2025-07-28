function r(t){return/^\d{4}-\d{2}$/.test(t)?`${String(Number(t.split("-")[1]))}월 `:"오늘"}function e(t){const[n,o]=t.split("-");return`${n}년 ${parseInt(o)}월`}export{e as a,r as f};
