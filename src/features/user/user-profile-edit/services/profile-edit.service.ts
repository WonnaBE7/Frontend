import { fetcher } from '@/shared/utils/fetcher'

interface ProfileEditRequest {
  name: string
  password: string
}

interface ProfileEditResponse {
  code: number
  message: string
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const updateUserProfile = async (
  payload: ProfileEditRequest
) => {
  return await fetcher<ProfileEditResponse>({
    url: `${BASE_URL}/api/user/me`,
    method: 'PUT',
    body: payload,
  })
}