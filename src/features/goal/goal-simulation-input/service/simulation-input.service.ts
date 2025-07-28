import type { GoalSimulationInput, GoalReport } from '@/entities/goal/goal.entity'
import { fetcher } from '@/shared/utils/fetcher'
import { mockGoalReports } from '@/entities/goal/goal.mock'

export const simulateGoal = async (
  input: GoalSimulationInput
): Promise<GoalReport> => {
  try {
    const res = await fetcher<{ code: number; message: string; data: GoalReport }>({
      url: '/api/goals/simulation',
      method: 'POST',
      body: input
    })

    return res.data
  } catch (e) {
    console.warn('서버 에러, mock 사용')
    return mockGoalReports[0]
  }
}