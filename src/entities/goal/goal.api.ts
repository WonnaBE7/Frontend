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