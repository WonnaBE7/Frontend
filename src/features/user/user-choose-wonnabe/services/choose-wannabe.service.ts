import { fetcher } from '@/shared/utils/fetcher'

interface UpdateWonnaBERequest {
  selected_wonnabe_ids: number[]
}

interface UpdateWonnaBEResponse {
  code: number
  message: string
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const updateWonnaBESelections = async (
  payload: UpdateWonnaBERequest
): Promise<UpdateWonnaBEResponse> => {
  return await fetcher<UpdateWonnaBEResponse>({
    url: `${BASE_URL}/api/mypage/wonnabe`,
    method: 'PATCH',
    body: payload
  })
}