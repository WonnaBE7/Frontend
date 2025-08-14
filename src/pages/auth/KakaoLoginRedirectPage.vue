<!-- src/pages/auth/KakaoResultPage.vue -->
<template>
    <div class="p-6 text-center">
      <p class="text-gray-700">카카오 로그인 처리 중...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAuthStore } from '@/entities/user/auth.store'
  
  const route = useRoute()
  const router = useRouter()
  const auth = useAuthStore()
  
  onMounted(async () => {
    const ok = route.query.ok === '1'
    if (!ok) {
      const reason = String(route.query.reason || 'unknown')
      alert('카카오 로그인 실패: ' + reason)
      router.replace('/login')
      return
    }
  
    try {
      // 백엔드가 콜백 때 HttpOnly 쿠키(리프레시)를 심어줬으므로
      // 여기서 /refresh를 호출해 accessToken만 받아서 상태 복구
      await auth.restore()         // 내부에서 /refresh 요청 (credentials: 'include' 필수)
      router.replace('/')          // 홈으로
    } catch (e) {
      alert('세션 복구 실패. 다시 로그인해주세요.')
      router.replace('/login')
    }
  })
  </script>