import { fetcher } from '@/shared/utils/fetcher'

type GoalStatus = 'PUBLISHED' | 'ACHIEVED'

export function patchGoalSelection(
  goalId: number,
  payload: { status: GoalStatus; selectedProductId?: number }
) {
  return fetcher({
    url: `/api/goals/${goalId}`,
    method: 'PATCH',
    auth: true,
    body: payload,
  })
}