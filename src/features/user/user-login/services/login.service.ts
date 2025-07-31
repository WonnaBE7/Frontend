import { fetcher } from '@/shared/utils/fetcher'

interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  accessToken: string
  user: {
    userId: string
    name: string
    email: string
  }
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const login = async (payload: LoginRequest) => {
  return await fetcher<LoginResponse>({
    url: `${BASE_URL}/api/auth/login`,
    method: 'POST',
    body: payload,
  })
}