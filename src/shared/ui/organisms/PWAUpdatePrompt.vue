<template>
  <Teleport to="body">
    <div
      v-if="showUpdatePrompt"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50"
      @click="handleBackdropClick"
    >
      <div class=" fixed bottom-0 left-1/2 -translate-x-1/2 bg-white w-full md:max-w-[768px] rounded-t-xl p-6 transform transition-transform duration-300">
        <div class="flex items-center space-x-4 mb-4">
          <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
            <span class="text-white text-xl">🚀</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-900">새 버전 사용 가능</h3>
            <p class="text-sm text-gray-600">앱을 업데이트하여 최신 기능을 이용하세요</p>
          </div>
        </div>
        
        <div class="flex space-x-4">
          <button
            @click="updateApp"
            class="flex-1 bg-primary-500 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            업데이트
          </button>
          <button
            @click="dismissUpdate"
            class="px-4 py-3 text-gray-500 hover:text-gray-300 transition-colors"
          >
            나중에
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showUpdatePrompt = ref(false)

// 간단한 PWA 업데이트 로직
const checkForUpdates = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      // 새 서비스 워커가 활성화되면 페이지 새로고침
      //window.location.reload()
    })
    
    // 서비스 워커 업데이트 확인
    navigator.serviceWorker.ready.then((registration) => {
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // 새 버전 사용 가능
              showUpdatePrompt.value = true
            }
          })
        }
      })
    })
  }
}

// 앱 업데이트 실행
const updateApp = async () => {
  showUpdatePrompt.value = false
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations()
    registrations.forEach(reg => reg.update())

    // ✅ 유저가 버튼 누를 때만 새로고침
    window.location.reload()
  }
}

// 업데이트 나중에 하기
const dismissUpdate = () => {
  showUpdatePrompt.value = false
}

// 배경 클릭 시 닫기
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    dismissUpdate()
  }
}

onMounted(() => {
  checkForUpdates()
})
</script>