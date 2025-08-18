<template>
  <div class="p-6 flex flex-col items-center justify-center gap-3">
    <!-- <div v-if="state === 'loading'">
      <p class="text-gray-900">카카오 로그인 처리 중...</p>
    </div>
    <div v-else-if="state === 'ok'">
      <p class="text-gray-900">로그인 완료! 이동 중...</p>
    </div>
    <div v-else>
      <p class="text-red-500">로그인 실패: {{ errorMessage }}</p>
      <button @click="goHome" class="mt-2 underline">홈으로</button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/entities/user/auth.store'
import { userKakaoLogin } from '@/features/user/user-login/services/login.service'
import { useUiStore } from '@/entities/ui/ui.store'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()
const ui = useUiStore()

const state = ref<'loading' | 'ok' | 'error'>('loading')
const errorMessage = computed(() => '카카오 로그인에 실패했습니다.')

function goHome() {
  router.replace('/')
}

onMounted(async () => {
  ui.showSplash('카카오 로그인 처리 중...')

  await nextTick()
  await new Promise<void>(r => requestAnimationFrame(() => r()))

  const code = String(route.query.code ?? '')
  if (!code) {
    state.value = 'error'
    ui.hideSplash()
    return
  }

  try {
    const { data } = await userKakaoLogin(code)
    const { accessToken, user } = data
    if (!accessToken) throw new Error('login-failed')

    await store.login(accessToken, user)

    state.value = 'ok'
    ui.showSplash('로그인 완료! 이동 중...') 

    setTimeout(() => {
      ui.hideSplash()
      router.replace('/')
    }, 4000) 
  } catch (e) {
    console.error(e)
    state.value = 'error'
    ui.hideSplash()
  }
})
</script>