import { fetcher } from '@/shared/utils/fetcher'
import { mockGoalReports, mockGoalSummary } from './goal.mock'
import type { GoalReport, GoalSummary } from './goal.entity'

const BASE_URL = import.meta.env.VITE_API_BASE_URL


export const fetchGoals = async (status: 'PUBLISHED' | 'ACHIEVED' = 'PUBLISHED')=> {
  try{
    const res = await fetcher<GoalSummary>({
      url: `${BASE_URL}/api/goals?status=${status}`,
      method: 'GET',
    })
    return res.data
  }catch{ 
    console.log('연결 x')
    const filteredGoals = mockGoalSummary.goals.filter(g => g.status === status)

    return {
      totalGoalCount: filteredGoals.length,
      totalTargetAmount: filteredGoals.reduce((acc, g) => acc + g.targetAmount, 0),
      goals: filteredGoals,
    }
  }
}

export const fetchGoalReport = async (goalId: number)=> {
  try{
    const res = await fetcher<GoalReport>({
      url: `${BASE_URL}/api/goals?goalId=${goalId}`,
      method: 'GET',
    })
    return res.data
  }catch{ 
    return mockGoalReports.find(g => g.id === goalId)
  }
}