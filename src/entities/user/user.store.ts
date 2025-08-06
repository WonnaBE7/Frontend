import { defineStore } from 'pinia'
import type { UserProfile, UserSurveyData } from './user.entity'
import { mockUserProfile } from './user.mock'
import { fetcher } from '@/shared/utils/fetcher'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'
import { getUserSurveyData } from '@/features/user/user-survey/service/user-survey.service'
import { getUserProfileData } from './user.api'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useUserProfileStore = defineStore('userProfile', {
  state: () => ({
    profile: null as UserProfile | null,
    selectedFinType: {
      id: null as number | null,
      name: ''
    },
    userSurvey: null as UserSurveyData | null
  }),

  actions: {
    async fetchUserProfile() {
      const res = await getUserProfileData()
      this.profile = res
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
    },
    async fetchUserServeyData(){
      const res = await getUserSurveyData()
      this.userSurvey = res
    },

    setSelectedFinType(fin: { id: number; name: string }) {
      this.selectedFinType = fin
    }
  }
})