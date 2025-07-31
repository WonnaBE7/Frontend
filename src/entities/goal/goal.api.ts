import { fetcher } from '@/shared/utils/fetcher'
import { mockGoalReports } from './goal.mock'
import type { GoalSimulationInput, GoalReport } from './goal.entity'

export const postGoalSimulation = async (
  input: GoalSimulationInput
): Promise<GoalReport> => {
  try {
    const res = await fetcher<{ code: number; message: string; data: GoalReport }>({
      url: '/api/goals',
      method: 'POST',
      body: input,
    })

    return res.data
  } catch (err) {
    console.warn('서버 응답 실패, mock 데이터 반환')
    return mockGoalReports[0]
  }
}

export interface Goal {
  id: number
  goalName: string
  categoryName: string
  nowmeName: string
  progressRate: number
  targetAmount: number
  currentAmount: number
  goalDurationMonths: number
  startDate: string
  status: 'PUBLISHED' | 'ACHIEVED'
}

export interface GoalListResponse {
  code: number
  message: string
  data: {
    totalGoalCount: number
    totalTargetAmount: number
    goals: Goal[]
  }
}

export const fetchGoals = async (status: 'PUBLISHED' | 'ACHIEVED' = 'PUBLISHED'): Promise<GoalListResponse> => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL
  return await fetcher<GoalListResponse>({
    url: `${BASE_URL}/api/goals?status=${status}`,
    method: 'GET',
  })
}