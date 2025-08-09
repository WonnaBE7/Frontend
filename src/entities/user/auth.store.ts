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
  loginTime: string | null
}

let logoutTimer: ReturnType<typeof setTimeout> | null = null

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    user: null,
    loginTime: null,
  }),

  actions: {
    async login(accessToken: string, user: User) {
      const now = new Date().toISOString()

      this.accessToken = accessToken
      this.user = user
      this.loginTime = now
      console.log('토큰 테스트',this.accessToken)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('loginTime', now)

      this.scheduleLogout(now)

      const userProfileStore = useUserProfileStore()
      await userProfileStore.fetchUserProfile()
    },

    logout() {
      this.accessToken = null
      this.user = null
      this.loginTime = null

      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
      localStorage.removeItem('loginTime')

      if (logoutTimer) {
        clearTimeout(logoutTimer)
        logoutTimer = null
      }
    },

    scheduleLogout(loginTimeStr: string) {
      const loginTime = new Date(loginTimeStr).getTime()
      const expirationTime = loginTime  + 7 * 24 * 60 * 60 * 1000
      const now = Date.now()
      const remaining = expirationTime - now

      if (remaining <= 0) {
        this.logout()
        alert('세션이 만료되었습니다. 다시 로그인해주세요.')
        return
      }

      if (logoutTimer) clearTimeout(logoutTimer)
      logoutTimer = setTimeout(() => {
        this.logout()
        alert('세션이 만료되었습니다. 다시 로그인해주세요.')
      }, remaining)
    },

    async restore() {
      try {
        const res = await refreshToken()

        this.accessToken = res.accessToken
        this.user = res.user
        this.loginTime = localStorage.getItem('loginTime')

        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('user', JSON.stringify(res.user))

        if (this.loginTime) {
          this.scheduleLogout(this.loginTime)
        }

      } catch (err) {
        console.warn('⚠️ refresh 실패, localStorage fallback 시도')

        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
        const loginTime = localStorage.getItem('loginTime')

        if (token && user && loginTime) {
          this.accessToken = token
          this.user = JSON.parse(user)
          this.loginTime = loginTime
          this.scheduleLogout(loginTime)
        } else {
          this.logout()
        }
      }
    },
  },
  persist: true
})