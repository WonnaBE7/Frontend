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
let refreshInterval: ReturnType<typeof setInterval> | null = null
let refreshing = false

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    user: null,
    loginTime: null,
  }),

  actions: {
    startAutoRefresh() {
      if (refreshInterval) return // 중복 방지

      refreshInterval = setInterval(async () => {
        if (refreshing || !this.accessToken) return
        try {
          refreshing = true
          const res = await refreshToken() // credentials:'include' 필수
          this.accessToken = res.accessToken
          if (res.user) this.user = res.user

          localStorage.setItem('accessToken', this.accessToken)
          if (this.user) localStorage.setItem('user', JSON.stringify(this.user))
        } catch (e) {
          console.warn('자동 갱신 실패', e)
          // 정책에 따라: 즉시 로그아웃 처리
          this.logout()
        } finally {
          refreshing = false
        }
      }, 10 * 60 * 1000) // 10분마다 실행
    },

    stopAutoRefresh() {
      if (refreshInterval) {
        clearInterval(refreshInterval)
        refreshInterval = null
      }
    },

    async login(accessToken: string, user: User) {
      const now = new Date().toISOString()

      this.accessToken = accessToken
      this.user = user
      this.loginTime = now

      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('loginTime', now)

      this.scheduleLogout(now)
      this.startAutoRefresh()

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
      this.stopAutoRefresh()
    },

    /** ⏳ 세션 만료 예약 */
    scheduleLogout(loginTimeStr: string) {
      const loginTime = new Date(loginTimeStr).getTime()
      const expirationTime = loginTime + 7 * 24 * 60 * 60 * 1000 // 7일
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

    /** 🛠 새로고침 시 복구 */
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
        this.startAutoRefresh()
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
          this.startAutoRefresh()
        } else {
          this.logout()
        }
      }
    },
  },
  persist: true
})