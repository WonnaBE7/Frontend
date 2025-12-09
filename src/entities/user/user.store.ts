import { defineStore } from 'pinia'
import type { UserProfile, UserSurveyData, DiagnosisResult } from './user.entity'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'
import { getUserSurveyData } from '@/features/user/user-survey/service/user-survey.service'
import { getUserProfileData } from './user.api'

// MOCK 모드일 때 사용할 초기 프로필
const getInitialProfile = (): UserProfile | null => {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    return {
      userId: "9e423205-426c-442e-96a6-170a27ad3f8d",
      name: '김금용',
      email: 'kim@example.com',
      nowME: '자린고비형',
      wonnaBE: ['자린고비형', '균형 성장형', '새싹 투자형'],
      job: '사무직',
      monthlyIncome: 3200000,
    }
  }
  return null
}

export const useUserProfileStore = defineStore('userProfile', {
  state: () => {
    const initialProfile = getInitialProfile()
    const firstFinTypeName = initialProfile?.wonnaBE?.[0]
    let selectedFinType = { id: null as number | null, name: '' }

    if (firstFinTypeName) {
      const match = financialTendencyList.find(item => item.name === firstFinTypeName)
      if (match) {
        selectedFinType = { id: match.id, name: match.name }
      }
    }

    return {
      profile: initialProfile,
      selectedFinType,
      userSurvey: null as UserSurveyData | null
    }
  },

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