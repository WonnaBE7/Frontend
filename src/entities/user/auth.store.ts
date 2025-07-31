import { defineStore } from 'pinia'
import { refreshToken } from '@/features/user/auth-refresh/service/refresh.service'

interface User {
  userId: string
  name: string
  email: string
}

interface AuthState {
  accessToken: string | null
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    user: null,
  }),

  actions: {
    login(accessToken: string, user: User) {
      this.accessToken = accessToken
      this.user = user
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('user', JSON.stringify(user))
    },

    logout() {
      this.accessToken = null
      this.user = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
    },

    async restore() {
      const token = localStorage.getItem('accessToken')
      const user = localStorage.getItem('user')

      if (token && user) {
        this.accessToken = token
        this.user = JSON.parse(user)
      } else {
        // 🔁 accessToken 없음 → refreshToken 쿠키로 재발급 요청
        try {
          const res = await refreshToken()
          this.accessToken = res.data.accessToken
          this.user = res.data.user
          localStorage.setItem('accessToken', res.data.accessToken)
          localStorage.setItem('user', JSON.stringify(res.data.user))
        } catch (err) {
          console.warn('❌ refreshToken 만료 또는 에러, 로그아웃 처리')
          this.logout()
        }
      }
    },
  },
})