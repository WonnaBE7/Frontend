import { fetcher } from '@/shared/utils/fetcher'
import type { GoalReport, GoalSummary } from './goal.entity'
import { mockGoalSummary, mockGoalReports } from './goal.mock'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export const getGoals = async (status: 'PUBLISHED' | 'ACHIEVED' = 'PUBLISHED')=> {
  if (USE_MOCK) {
    console.log('MOCK 모드: 목표 데이터 mock 사용')
    const filtered = mockGoalSummary.goals.filter(g => g.status === status)
    return {
      totalGoalCount: filtered.length,
      totalTargetAmount: filtered.reduce((sum, g) => sum + g.targetAmount, 0),
      goals: filtered
    }
  }

  try {
    const res = await fetcher<GoalSummary>({
      url: `${BASE_URL}/api/goals?status=${status}`,
      method: 'GET',
      auth:true,
    })
    return res.data
  } catch {
    console.log('API 실패: 목표 데이터 mock 사용')
    const filtered = mockGoalSummary.goals.filter(g => g.status === status)
    return {
      totalGoalCount: filtered.length,
      totalTargetAmount: filtered.reduce((sum, g) => sum + g.targetAmount, 0),
      goals: filtered
    }
  }
}

export const getGoalReport = async (goalId: number)=> {
    try {
        const res = await fetcher<GoalReport>({
          url: `${BASE_URL}/api/goals/${goalId}`,
          method: 'GET',
          auth:true,
        })
        return res.data
    } catch {
        return mockGoalReports.find(r => r.id === goalId) || mockGoalReports[0]
    }
}