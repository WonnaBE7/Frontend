import { defineStore } from 'pinia'
import { refreshToken } from '@/features/user/auth-refresh/service/refresh.service'
import { useUserProfileStore } from './user.store'

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
    async login(accessToken: string, user: User) {
      this.accessToken = accessToken
      this.user = user
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('user', JSON.stringify(user))

      const userProfileStore = useUserProfileStore()
      await userProfileStore.fetchUserProfile()
    },

    logout() {
      this.accessToken = null
      this.user = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
    },

    async restore() {
      try {
        const res = await refreshToken()
        this.accessToken = res.data.accessToken
        this.user = res.data.user
        localStorage.setItem('accessToken', res.data.accessToken)
        localStorage.setItem('user', JSON.stringify(res.data.user))
      } catch (err) {
        console.warn('⚠️ refresh 실패, localStorage fallback 시도')
    
        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
    
        if (token && user) {
          this.accessToken = token
          this.user = JSON.parse(user)
        } else {
          this.logout()
        }
      }
    },
  },
})