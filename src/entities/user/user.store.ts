import { defineStore } from 'pinia'
import type { UserProfile, UserSurveyData } from './user.entity'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'
import { getUserSurveyData } from '@/features/user/user-survey/service/user-survey.service'
import { getUserProfileData } from './user.api'

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

export interface DiagnosisResult {
  success: boolean
  personaName: string
  activityScore: number
  spendingScore: number
  planningScore: number
  riskScore: number
  similarity: number
}

const KEY = 'diagnosis:result'

export const useDiagnosisStore = defineStore('diagnosis', {
  state: () => ({
    result: null as DiagnosisResult | null,
  }),
  actions: {
    setResult(r: DiagnosisResult) {
      this.result = r
      sessionStorage.setItem(KEY, JSON.stringify(r))
    },
    hydrate() {
      if (this.result) return
      const raw = sessionStorage.getItem(KEY)
      if (raw) {
        try { this.result = JSON.parse(raw) } catch {}
      }
    },
    clear() {
      this.result = null
      sessionStorage.removeItem(KEY)
    }
  },
})