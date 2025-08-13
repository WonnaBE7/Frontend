<template>
    <div class="splash fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      <div class=" w-full h-96 flex items-end">
        <div
          v-for="(src, i) in fintypeImages"
          :key="src"
          class="icon-wrapper absolute"
          :class="`drop-path-${(i % 13) + 1}`"
          :style="{
            left: iconPositions[i],
            animationDelay: iconDelays[i],
            transform: `scale(${iconScales[i]})`
          }"
        >
          <img
            :src="src"
            alt=""
            class="icon object-contain drop-bounce-enhanced w-24 h-24"
            draggable="false"
          />
        </div>
      </div>
  
      <!-- 하단 로고 + 메시지 -->
      <div class="footer mt-10 flex flex-col items-center fade-in">
        <img src="/header-icon.png" alt="WonnaBE" class="h-7 mb-3" />
        <p class="text-gray-700 font-medium text-sm" aria-live="polite">
          {{ loadingText }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  const props = withDefaults(defineProps<{ durationMs?: number }>(), {
    durationMs: 5000,
  })
  const emit = defineEmits<{ (e: 'done'): void }>()
  
  // /src/shared/assets/fintype 안의 이미지 전부 로드
  const modules = import.meta.glob('/src/shared/assets/fintype/*.{png,jpg,svg}', {
    eager: true,
    as: 'url',
  })
  const fintypeImages = Object.entries(modules)
    .sort(([a, b]) => a.localeCompare(b))
    .map(([, url]) => url as string)
  
  // 아이콘별 랜덤 위치/딜레이/스케일
  const iconPositions = ref<string[]>([])
  const iconDelays = ref<string[]>([])
  const iconScales = ref<number[]>([])
  
  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function randomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
  
  let dotTimer: number | undefined
  let closeTimer: number | undefined
  const dot = ref(1)
  const loadingText = computed(() => `잠시만 기다려주세요${' .'.repeat(dot.value)}`)
  
  onMounted(() => {
    // 5% ~ 95% 사이 랜덤 left, 0~900ms 랜덤 delay(+약간의 index 보정), 0.9~1.2 랜덤 스케일
    iconPositions.value = fintypeImages.map(() => `${randomInt(5, 95)}%`)
    iconDelays.value = fintypeImages.map((_, i) => `${randomInt(0, 900) + i * 80}ms`)
    iconScales.value = fintypeImages.map(() => Number(randomFloat(0.9, 1.2).toFixed(2)))
  
    dotTimer = window.setInterval(() => {
      dot.value = dot.value >= 3 ? 1 : dot.value + 1
    }, 500)
  
    closeTimer = window.setTimeout(() => {
      emit('done')
    }, props.durationMs)
  })
  
  onBeforeUnmount(() => {
    if (dotTimer) clearInterval(dotTimer)
    if (closeTimer) clearTimeout(closeTimer)
  })
  </script>
  
  <style scoped>
  .splash {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  }
  
  /* ===== 다양한 낙하 경로(12종) ===== */
  @keyframes drop-path-1 {
    0% { transform: translateY(-120vh) translateX(-50px) rotate(0deg); opacity: 0; }
    20% { opacity: 1; }
    70% { transform: translateY(0) translateX(25px) rotate(180deg); }
    80% { transform: translateY(-28px) translateX(20px) rotate(200deg); }
    90% { transform: translateY(-12px) translateX(15px) rotate(220deg); }
    95% { transform: translateY(-5px) translateX(8px) rotate(235deg); }
    100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
  @keyframes drop-path-2 {
    0% { transform: translateY(-120vh) translateX(60px) rotate(0deg); opacity: 0; }
    15% { opacity: 1; }
    65% { transform: translateY(0) translateX(-30px) rotate(-200deg); }
    75% { transform: translateY(-32px) translateX(-25px) rotate(-230deg); }
    85% { transform: translateY(-16px) translateX(-18px) rotate(-260deg); }
    92% { transform: translateY(-7px) translateX(-10px) rotate(-280deg); }
    100% { transform: translateY(0) translateX(0) rotate(-360deg); }
  }
  @keyframes drop-path-3 {
    0% { transform: translateY(-120vh) translateX(-20px) rotate(0deg); opacity: 0; }
    25% { opacity: 1; }
    68% { transform: translateY(0) translateX(15px) rotate(300deg); }
    78% { transform: translateY(-25px) translateX(12px) rotate(330deg); }
    88% { transform: translateY(-13px) translateX(8px) rotate(350deg); }
    94% { transform: translateY(-6px) translateX(5px) rotate(360deg); }
    100% { transform: translateY(0) translateX(0) rotate(390deg); }
  }
  @keyframes drop-path-4 {
    0% { transform: translateY(-120vh) translateX(-45px) rotate(0deg); opacity: 0; }
    18% { opacity: 1; }
    72% { transform: translateY(0) translateX(35px) rotate(240deg); }
    82% { transform: translateY(-30px) translateX(30px) rotate(270deg); }
    91% { transform: translateY(-15px) translateX(22px) rotate(300deg); }
    96% { transform: translateY(-7px) translateX(12px) rotate(320deg); }
    100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
  @keyframes drop-path-5 {
    0% { transform: translateY(-120vh) translateX(40px) rotate(0deg); opacity: 0; }
    22% { opacity: 1; }
    69% { transform: translateY(0) translateX(-38px) rotate(-280deg); }
    79% { transform: translateY(-22px) translateX(-32px) rotate(-310deg); }
    89% { transform: translateY(-11px) translateX(-24px) rotate(-340deg); }
    95% { transform: translateY(-5px) translateX(-15px) rotate(-355deg); }
    100% { transform: translateY(0) translateX(0) rotate(-360deg); }
  }
  @keyframes drop-path-6 {
    0% { transform: translateY(-120vh) translateX(5px) rotate(0deg); opacity: 0; }
    12% { opacity: 1; }
    66% { transform: translateY(0) translateX(-8px) rotate(400deg); }
    76% { transform: translateY(-26px) translateX(-5px) rotate(430deg); }
    86% { transform: translateY(-14px) translateX(-3px) rotate(450deg); }
    93% { transform: translateY(-6px) translateX(-2px) rotate(465deg); }
    100% { transform: translateY(0) translateX(0) rotate(720deg); }
  }
  @keyframes drop-path-7 {
    0% { transform: translateY(-120vh) translateX(-35px) rotate(0deg); opacity: 0; }
    16% { opacity: 1; }
    71% { transform: translateY(0) translateX(28px) rotate(-180deg); }
    81% { transform: translateY(-28px) translateX(24px) rotate(-210deg); }
    90% { transform: translateY(-14px) translateX(18px) rotate(-240deg); }
    95% { transform: translateY(-6px) translateX(10px) rotate(-260deg); }
    100% { transform: translateY(0) translateX(0) rotate(-360deg); }
  }
  @keyframes drop-path-8 {
    0% { transform: translateY(-120vh) translateX(55px) rotate(0deg); opacity: 0; }
    14% { opacity: 1; }
    73% { transform: translateY(0) translateX(-45px) rotate(500deg); }
    83% { transform: translateY(-35px) translateX(-40px) rotate(540deg); }
    92% { transform: translateY(-18px) translateX(-30px) rotate(580deg); }
    97% { transform: translateY(-8px) translateX(-18px) rotate(600deg); }
    100% { transform: translateY(0) translateX(0) rotate(720deg); }
  }
  @keyframes drop-path-9 {
    0% { transform: translateY(-120vh) translateX(-10px) rotate(0deg); opacity: 0; }
    19% { opacity: 1; }
    67% { transform: translateY(0) translateX(12px) rotate(160deg); }
    77% { transform: translateY(-24px) translateX(10px) rotate(180deg); }
    87% { transform: translateY(-12px) translateX(7px) rotate(200deg); }
    94% { transform: translateY(-5px) translateX(4px) rotate(210deg); }
    100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
  @keyframes drop-path-10 {
    0% { transform: translateY(-120vh) translateX(30px) rotate(0deg); opacity: 0; }
    21% { opacity: 1; }
    74% { transform: translateY(0) translateX(-25px) rotate(-320deg); }
    84% { transform: translateY(-33px) translateX(-22px) rotate(-360deg); }
    93% { transform: translateY(-17px) translateX(-16px) rotate(-400deg); }
    97% { transform: translateY(-7px) translateX(-9px) rotate(-420deg); }
    100% { transform: translateY(0) translateX(0) rotate(-720deg); }
  }
  @keyframes drop-path-11 {
    0% { transform: translateY(-120vh) translateX(-25px) rotate(0deg); opacity: 0; }
    17% { opacity: 1; }
    70% { transform: translateY(0) translateX(20px) rotate(220deg); }
    80% { transform: translateY(-27px) translateX(17px) rotate(250deg); }
    89% { transform: translateY(-14px) translateX(12px) rotate(280deg); }
    95% { transform: translateY(-6px) translateX(7px) rotate(300deg); }
    100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
  @keyframes drop-path-12 {
    0% { transform: translateY(-120vh) translateX(48px) rotate(0deg); opacity: 0; }
    13% { opacity: 1; }
    75% { transform: translateY(0) translateX(-42px) rotate(-450deg); }
    85% { transform: translateY(-36px) translateX(-38px) rotate(-490deg); }
    94% { transform: translateY(-19px) translateX(-28px) rotate(-530deg); }
    98% { transform: translateY(-9px) translateX(-16px) rotate(-550deg); }
    100% { transform: translateY(0) translateX(0) rotate(-720deg); }
  }
  @keyframes drop-path-13 {
     0%   { transform: translateY(-120vh) translateX(20px) rotate(0deg); opacity: 0; }
     18%  { opacity: 1; }
     70%  { transform: translateY(0) translateX(-20px) rotate(260deg); }
     80%  { transform: translateY(-26px) translateX(-18px) rotate(290deg); }
     90%  { transform: translateY(-13px) translateX(-12px) rotate(320deg); }
     96%  { transform: translateY(-6px) translateX(-6px) rotate(340deg); }
     100% { transform: translateY(0) translateX(0) rotate(360deg); }
  }
    
  
  /* 경로별 애니메이션 클래스 */
  .drop-path-1  { animation: drop-path-1 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-2  { animation: drop-path-2 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-3  { animation: drop-path-3 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-4  { animation: drop-path-4 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-5  { animation: drop-path-5 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-6  { animation: drop-path-6 1.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-7  { animation: drop-path-7 1.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-8  { animation: drop-path-8 1.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-9  { animation: drop-path-9 1.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-10 { animation: drop-path-10 1.38s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-11 { animation: drop-path-11 1.22s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-12 { animation: drop-path-12 1.48s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
  .drop-path-13 { animation: drop-path-13 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;}
  
  /* 아이콘 정착 미세 흔들림 */
  .drop-bounce-enhanced {
    animation: icon-settle 0.6s ease-out 1.2s both;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1));
    transition: filter 0.3s ease;
  }
  @keyframes icon-settle {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.05) rotate(2deg); }
    50% { transform: scale(0.98) rotate(-1deg); }
    75% { transform: scale(1.02) rotate(0.5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
  
  /* 하단 로고 페이드인 */
  .fade-in {
    animation: fade-in 1s ease-out 0.8s both;
  }
  @keyframes fade-in {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .icon:hover {
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
    transform: scale(1.1);
  }
  </style>