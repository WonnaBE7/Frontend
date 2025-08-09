import type { UserHistoryResponse, UserProfile, UserSurveyData } from './user.entity'

export const mockUserProfile: UserProfile = {
  userId: "9e423205-426c-442e-96a6-170a27ad3f8d",
  name: '김금용',
  email: 'kim@example.com',
  nowME: '자린고비형',
  wonnaBE: ['자린고비형', '균형 성장형', '새싹 투자형'],
  job: '사무직',
  monthlyIncome: 3200000,
}

export const mockUserNowmeHistory: UserHistoryResponse[] = [
  { diagnosedDate: '2024-09-01', typeName: '자린고비형', score: 83 },
  { diagnosedDate: '2024-10-01', typeName: '균형 성장형', score: 76 },
  { diagnosedDate: '2024-11-01', typeName: '새싹 투자형', score: 65 },
  { diagnosedDate: '2025-02-01', typeName: '새싹 투자형', score: 69 },
  { diagnosedDate: '2025-03-01', typeName: '자린고비형', score: 91 },
  { diagnosedDate: '2025-04-01', typeName: '균형 성장형', score: 74 },
  { diagnosedDate: '2025-07-01', typeName: '균형 성장형', score: 79 },
]

export const mockUserSurveyData: UserSurveyData={
  lifestyleSmoking: 0,
  lifestyleAlcoholFreq: 1,
  lifestyleExerciseFreq: 1,
  lifestyleFamilyMedical: 1,
  lifestyleBeforeDiseases: 0,

  incomeSourceType:"근로소득",
  incomeEmploymentStatus:"재직",

  householdSize: 2,
  incomeJobType: "개발자"
}