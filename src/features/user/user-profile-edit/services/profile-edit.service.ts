import { fetcher } from '@/shared/utils/fetcher'

interface ProfileEditRequest {
  name: string
  password: string
}

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const putUserProfile = async (
  input: ProfileEditRequest
) => {
  const res =  await fetcher({
    url: `${BASE_URL}/api/user/me`,
    method: 'PUT',
    body: input,
    auth: true,
  })
  return res
}
