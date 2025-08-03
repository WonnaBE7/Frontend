import { fetcher } from '@/shared/utils/fetcher'
import type { GoalSimulationInput, GoalSimulationResponse } from '@/entities/goal/goal.entity'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const postGoalSimulation = async (
  input: GoalSimulationInput
) => {
  const res = await fetcher<GoalSimulationResponse>({
    url: `${BASE_URL}/api/goals`,
    method: 'POST',
    auth: true,
    body: input,
  })

  return res.data
}