import { createApp } from 'vue'
import App from './app/App.vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { router } from './app/router'
import './style.css'
import { useAuthStore } from '@/entities/user/auth.store'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

const authStore = useAuthStore()
await authStore.restore()

app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')