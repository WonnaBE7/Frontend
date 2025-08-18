<template>

</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/entities/user/auth.store'
import { userKakaoLogin } from '@/features/user/user-login/services/login.service'
import { useUiStore } from '@/entities/ui/ui.store'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()
const ui = useUiStore()

const state = ref<'loading' | 'ok' | 'error'>('loading')

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