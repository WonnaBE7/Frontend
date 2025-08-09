import { fetcher } from '@/shared/utils/fetcher'

interface RefreshResponse {
    accessToken: string
    user: {
      userId: string
      name: string
      email: string
    }
}

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const refreshToken = async () => {
  const res = await fetcher<RefreshResponse>({
    url: `${BASE_URL}/api/auth/refresh`,
    method: 'POST',
    credentials: 'include',
    auth: false
  })

  return res.data
}