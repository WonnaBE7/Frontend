import { defineStore } from 'pinia'
import type { UserProfile } from './user.entity'
import { mockUserProfile } from './user.mock' // 백 서버 없을 경우 fallback
import { fetcher } from '@/shared/utils/fetcher'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useUserProfileStore = defineStore('userProfile', {
  state: () => ({
    profile: null as UserProfile | null,
  }),
  actions: {
    async fetchUserProfile() {
      try {
        const res = await fetcher<UserProfile>({ url: `${BASE_URL}/api/user/profile`, method: 'GET' })
        this.profile = res.data
      } catch (e) {
        console.warn('🔁 fallback: mock user profile 사용')
        this.profile = mockUserProfile
      }
    },
  },
})