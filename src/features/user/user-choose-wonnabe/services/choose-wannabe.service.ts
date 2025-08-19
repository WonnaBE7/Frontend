import { fetcher } from '@/shared/utils/fetcher'

interface UpdateWonnaBERequest {
  selectedWonnabeIds: number[]
}


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const patchWonnaBESelections = async (
  payload: UpdateWonnaBERequest
)=> {
  console.log()
  const res = await fetcher({
    url: `${BASE_URL}/api/user/mypage/wonnabe`,
    method: 'PATCH',
    body: payload,
    auth: true
  })

  return res
}