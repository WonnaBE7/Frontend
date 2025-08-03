import type { GoalReportSaveRequest } from "@/entities/goal/goal.entity"
import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const patchGoalSelection = async (
    goalId: number,
    payload: GoalReportSaveRequest
  ) => {
    return await fetcher({
      url: `${BASE_URL}/api/goals/${goalId}`,
      method: 'PATCH',
      auth: true,
      body: payload,
    })
  }