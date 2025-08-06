import type { UserHistoryResponse, UserProfile, UserSurveyData } from './user.entity'

export const mockUserProfile: UserProfile = {
  userId : "12321312412421421",
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
  user_id: "02747659-2dd1-41d6-80a7-131b9ddfac97",
  lifestyle_smoking: false,
  lifestyle_drinking: false,
  lifestyle_exercise: false,
  household_size: 2,
  lifestyle_family_medical: false,
  lifestyle_before_diseases: false,
  income_job_type: "개발자"
}