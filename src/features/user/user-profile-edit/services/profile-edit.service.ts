import { fetcher } from '@/shared/utils/fetcher'

interface ProfileEditRequest {
  name: string
  password: string
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const updateUserProfile = async (
  input: ProfileEditRequest
) => {
  return await fetcher({
    url: `${BASE_URL}/api/user/me`,
    method: 'PUT',
    body: input,
  })
}