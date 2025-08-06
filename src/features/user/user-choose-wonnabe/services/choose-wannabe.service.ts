import { fetcher } from '@/shared/utils/fetcher'

interface UpdateWonnaBERequest {
  selected_wonnabe_ids: number[]
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const updateWonnaBESelections = async (
  payload: UpdateWonnaBERequest
)=> {
  return await fetcher({
    url: `${BASE_URL}/api/user/mypage/wonnabe`,
    method: 'PATCH',
    body: payload,
    auth: true
  })
}