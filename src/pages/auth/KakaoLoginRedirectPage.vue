<template>
  <div class="p-6 flex flex-col items-center justify-center gap-3">
    <div v-if="state === 'loading'">
      <p>카카오 로그인 처리 중...</p>
    </div>
    <div v-else-if="state === 'ok'">
      <p>로그인 완료! 이동 중...</p>
    </div>
    <div v-else>
      <p class="text-red-500">로그인 실패: {{ errorMessage }}</p>
      <button @click="goHome" class="mt-2 underline">홈으로</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/entities/user/auth.store'
import { userKakaoLogin } from '@/features/user/user-login/services/login.service'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()
const state = ref<'loading' | 'ok' | 'error'>('loading')

const errorMessage = computed(() => '카카오 로그인에 실패했습니다.')

function goHome() {
  router.replace('/')
}

onMounted(async () => {
  const code = String(route.query.code ?? '')
  if (!code) {
    state.value = 'error'
    return
  }
  try {
    const { data } = await userKakaoLogin(code)
    if (!data.accessToken) throw new Error('login-failed')

    const { accessToken, user } = data
    store.login(accessToken, user)
    state.value = 'ok'

    setTimeout(() => router.replace('/'), 100)
  } catch (e) {
    console.error(e)
    state.value = 'error'
  }
})
</script>