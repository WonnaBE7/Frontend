<template>
  <div class="scrollbar-hide flex justify-center bg-white">
    <div
      class="w-full md:max-w-[768px] bg-gray-BGDim min-h-screen flex flex-col overscroll-none"
    >
      <PWAUpdatePrompt />
      <Header />
      
      <!-- 메인 영역만 pull-to-refresh 적용 -->
      <main 
        ref="mainRef"
        class="scrollbar-hide flex-grow p-4 sm:px-5 pt-20 pb-20 md:pt-24 bg-gray-BGDim relative overflow-auto"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @scroll="handleScroll"
      >
        <!-- Pull to Refresh 인디케이터 -->
        <div 
          v-if="pullDistance > 0"
          class="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center transition-all duration-300 ease-out"
          :style="{
            opacity: pullDistance > 0 ? 1 : 0
          }"
        >
          <div 
            class="bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 transition-all duration-200"
            :class="{
              'scale-110': isPullTriggered,
              'scale-100': !isPullTriggered
            }"
          >
            <div 
              class="transition-transform duration-300"
              :class="{
                'animate-spin': isRefreshing,
                'rotate-180': isPullTriggered && !isRefreshing
              }"
            >
              <svg 
                v-if="!isRefreshing" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
                :class="isPullTriggered ? 'text-blue-500' : 'text-gray-400'"
              >
                <path d="M12 5v14M5 12l7-7 7 7"/>
              </svg>
              <svg 
                v-else 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2"
                class="text-blue-500"
              >
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
              </svg>
            </div>
            <span 
              class="text-sm font-medium transition-colors duration-200"
              :class="isPullTriggered ? 'text-blue-500' : 'text-gray-500'"
            >
              {{ refreshText }}
            </span>
          </div>
        </div>

        <!-- 슬롯 컨테이너 - Transform 대신 Padding으로 처리 -->
        <div 
          class="transition-all duration-300 ease-out"
          :style="{ 
            paddingTop: `${contentOffset + (isRefreshing ? 60 : 0)}px`
          }"
        >
          <slot />
        </div>
      </main>
      
      <Navigator />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import Header from '@/shared/ui/molecules/Header.vue'
import Navigator from '@/shared/ui/molecules/Navigator.vue'
import PWAUpdatePrompt from '@/shared/ui/organisms/PWAUpdatePrompt.vue'

// Pull-to-refresh 상태
const mainRef = ref<HTMLElement>()
const startY = ref(0)
const currentY = ref(0)
const pullDistance = ref(0)
const isRefreshing = ref(false)
const isPulling = ref(false)

// 설정값
const PULL_THRESHOLD = 80 // 새로고침 트리거될 거리
const MAX_PULL = 120 // 최대 당길 수 있는 거리

// 계산된 값들
const isPullTriggered = computed(() => pullDistance.value >= PULL_THRESHOLD)
const contentOffset = computed(() => {
  if (isRefreshing.value) return 0 // 새로고침 중에는 원위치
  return Math.min(pullDistance.value * 0.5, MAX_PULL * 0.5) // 실제 당김의 50%만 이동
})

const refreshText = computed(() => {
  if (isRefreshing.value) return '새로고침 중...'
  if (isPullTriggered.value) return '놓으면 새로고침'
  return '아래로 당겨서 새로고침'
})

// 스크롤 체크
function isMainAtTop(): boolean {
  if (!mainRef.value) return false
  return mainRef.value.scrollTop === 0
}

// 스크롤 이벤트
function handleScroll() {
  // 스크롤 중이면 pull 상태 리셋
  if (isPulling.value && !isMainAtTop()) {
    resetPull()
    isPulling.value = false
  }
}

// 터치 이벤트 핸들러
function handleTouchStart(event: TouchEvent) {
  if (isMainAtTop()) {
    startY.value = event.touches[0].clientY
    isPulling.value = true
  }
}

function handleTouchMove(event: TouchEvent) {
  if (!isPulling.value || isRefreshing.value) return

  currentY.value = event.touches[0].clientY
  const deltaY = currentY.value - startY.value

  if (deltaY > 0 && isMainAtTop()) {
    // 아래로 당기는 중이고 메인 스크롤이 맨 위에 있을 때
    event.preventDefault() // 기본 스크롤 방지
    pullDistance.value = Math.min(deltaY, MAX_PULL)
  } else {
    // 위로 스크롤하거나 당기기 취소
    resetPull()
  }
}

function handleTouchEnd() {
  if (!isPulling.value || isRefreshing.value) return

  if (isPullTriggered.value) {
    // 새로고침 실행
    triggerRefresh()
  } else {
    // 원래 위치로 복귀
    resetPull()
  }

  isPulling.value = false
}

async function triggerRefresh() {
  isRefreshing.value = true
  
  try {
    // 실제 새로고침 로직
    await new Promise(resolve => setTimeout(resolve, 1500)) // 시뮬레이션
    
    // 실제 사용 시:
    // window.location.reload() // 페이지 새로고침
    // 또는 데이터 새로고침 로직
    
    window.location.reload()
    
  } catch (error) {
    console.error('새로고침 실패:', error)
  } finally {
    await nextTick()
    setTimeout(() => {
      isRefreshing.value = false
      resetPull()
    }, 300)
  }
}

function resetPull() {
  pullDistance.value = 0
  startY.value = 0
  currentY.value = 0
}
</script>

<style scoped>
/* 기본 스크롤바 숨기기 */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* 오버스크롤 효과 비활성화 */
.overscroll-none {
  overscroll-behavior: none;
}
</style>