import { fetcher } from '@/shared/utils/fetcher'
import type { GoalReport, GoalSummary } from './goal.entity'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getGoals = async (status: 'PUBLISHED' | 'ACHIEVED' = 'PUBLISHED')=> {
  const res = await fetcher<GoalSummary>({
    url: `${BASE_URL}/api/goals?status=${status}`,
    method: 'GET',
    auth:true,
  })
  return res.data
}

export const getGoalReport = async (goalId: number)=> {
    const res = await fetcher<GoalReport>({
      url: `${BASE_URL}/api/goals/${goalId}`,
      method: 'GET',
      auth:true,
    })
    return res.data
}