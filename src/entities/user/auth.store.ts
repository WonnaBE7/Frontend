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
    // === 자동 갱신 타이머 ===
    startAutoRefresh() {
      if (refreshInterval) return // 중복 방지
      refreshInterval = setInterval(async () => {
        if (refreshing) return
        if (!this.accessToken) return
        try {
          refreshing = true
          // refresh.service.ts는 반드시 credentials:'include', auth:false로 구현되어 있어야 함
          const res = await refreshToken()
          // 응답 모양에 맞게 세팅 (예: {accessToken, user} or {data:{accessToken}})
          this.accessToken = res.accessToken
          if (res.user) this.user = res.user

          localStorage.setItem('accessToken', this.accessToken)
          if (this.user) localStorage.setItem('user', JSON.stringify(this.user))
        } catch (e) {
          // 실패 시: 여기서 즉시 로그아웃할지, 다음 틱에 재시도할지는 정책에 따라
          // 일단 콘솔만 찍고 유지
          console.warn('자동 갱신 실패', e)
        } finally {
          refreshing = false
        }
      }, 10 * 60 * 1000) // 10분
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
      this.startAutoRefresh() // << 추가 포인트

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
      this.stopAutoRefresh() // << 추가 포인트
    },

    scheduleLogout(loginTimeStr: string) {
      const loginTime = new Date(loginTimeStr).getTime()
      const expirationTime = loginTime + 7 * 24 * 60 * 60 * 1000
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
        this.startAutoRefresh() // << 추가 포인트
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
          this.startAutoRefresh() // << 추가 포인트
        } else {
          this.logout()
        }
      }
    },
  },
  persist: true
})