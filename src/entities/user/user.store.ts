import { defineStore } from 'pinia'
import type { UserProfile } from './user.entity'
import { mockUserProfile } from './user.mock'
import { fetcher } from '@/shared/utils/fetcher'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useUserProfileStore = defineStore('userProfile', {
  state: () => ({
    profile: null as UserProfile | null,
    selectedFinType: {
      id: null as number | null,
      name: ''
    }
  }),

  actions: {
    async fetchUserProfile() {
      try {
        const res = await fetcher<UserProfile>({
          url: `${BASE_URL}/api/user/me`,
          method: 'GET',
        })
        this.profile = res.data
        const firstFinTypeName = this.profile?.wonnaBE?.[0]
        if (firstFinTypeName) {
          const match = financialTendencyList.find(item => item.name === firstFinTypeName)
          if (match) {
            this.selectedFinType = {
              id: match.id,
              name: match.name
            }
          }
        }
      } catch (e) {
        this.profile = mockUserProfile
      }
    },

    setSelectedFinType(fin: { id: number; name: string }) {
      this.selectedFinType = fin
    }
  }
})