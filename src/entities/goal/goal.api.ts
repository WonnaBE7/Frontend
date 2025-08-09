import { fetcher } from '@/shared/utils/fetcher'
import { mockGoalReports, mockGoalSummary } from './goal.mock'
import type { GoalReport, GoalSummary } from './goal.entity'

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL


export const getGoals = async (status: 'PUBLISHED' | 'ACHIEVED' = 'PUBLISHED')=> {
  try{
    const res = await fetcher<GoalSummary>({
      url: `${BASE_URL}/api/goals?status=${status}`,
      method: 'GET',
      auth:true,
    })
    console.log(res.code, res.data, res.message)
    return res.data
  }catch{ 
    const filteredGoals = mockGoalSummary.goals.filter(g => g.status === status)

    return {
      totalGoalCount: filteredGoals.length,
      totalTargetAmount: filteredGoals.reduce((acc, g) => acc + g.targetAmount, 0),
      goals: filteredGoals,
    }
  }
}

export const getGoalReport = async (goalId: number)=> {
  try{
    const res = await fetcher<GoalReport>({
      url: `${BASE_URL}/api/goals/${goalId}`,
      method: 'GET',
      auth:true,
    })
    return res.data
  }catch{ 
    return mockGoalReports.find(g => g.id === goalId)
  }
}