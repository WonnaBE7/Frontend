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

export const userLogin = async (payload: LoginRequest) => {
  try{
    const res = await fetcher<LoginResponse>({
      url: `${BASE_URL}/api/auth/login`,
      method: 'POST',
      body: payload,
    })
    return res.data
  }
  catch{
    const user = {
      userId: '123',
      name: '김금용',
      email: 'kim@example.com',
    }
    const data = {accessToken:'123', user:user}
    return data
  }
}