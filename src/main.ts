import { createApp } from 'vue'
import App from './app/App.vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { router } from './app/router'
import './style.css'
import { useAuthStore } from '@/entities/user/auth.store'

async function initApp(): Promise<void> {
  const app = createApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)

  app.use(pinia)
  app.use(router)
  app.use(VueQueryPlugin)

  // 앱 마운트 후 auth 처리
  app.mount('#app')

  // 라우터와 앱이 준비된 후 auth 복원
  try {
    const authStore = useAuthStore()
    await authStore.restore()

    // 인증 상태 구독 설정
    authStore.$subscribe((_mutation, state) => {
      // 현재 라우트가 로그인 페이지가 아닐 때만 리다이렉트
      if (!state.accessToken && router.currentRoute.value.path !== '/user/login') {
        router.push('/user/login')
      }
    })

    // 초기 인증 상태 확인
    if (!authStore.accessToken && router.currentRoute.value.path !== '/user/login') {
      router.push('/user/login')
    }
  } catch (error) {
    console.error('Auth initialization failed:', error)
    // 인증 실패 시 로그인 페이지로
    router.push('/user/login')
  }
}

// 앱 초기화 실행
initApp().catch((error: Error) => {
  console.error('App initialization failed:', error)
})

// import { createApp } from 'vue'
// import App from './app/App.vue'
// import { createPinia } from 'pinia'
// import { VueQueryPlugin } from '@tanstack/vue-query'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// import { router } from './app/router'
// import './style.css'
// import { useAuthStore } from '@/entities/user/auth.store'

// const app = createApp(App)
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)

// app.use(pinia)

// const authStore = useAuthStore()
// await authStore.restore()

// authStore.$subscribe((_mutation, state) => {
//     if (!state.accessToken) {
//       router.push('/user/login')
//     }
// })

// app.use(router)
// app.use(VueQueryPlugin)
// app.mount('#app')