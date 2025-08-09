import { fetcher } from '@/shared/utils/fetcher'

export interface LoginRequest {
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
  const res = await fetcher<LoginResponse>({
    url: `${BASE_URL}/api/auth/login`,
    method: 'POST',
    body: payload,
  })
  console.log('로그인 테스트',res.code, res.data)
  return res
  // try {
  //   const res = await fetcher<LoginResponse>({
  //     url: `${BASE_URL}/api/auth/login`,
  //     method: 'POST',
  //     body: payload,
  //   })
  //   console.log('로그인 테스트',res.code, res.data)
  //   return res
  // } catch {
  //   return {
  //     data: {
  //       accessToken: 'mock_access_token_12345',
  //       user: {
  //         userId: 'user_001',
  //         name: '김워너비',
  //         email: payload.email // 입력한 이메일 그대로 사용
  //       }
  //     },
  //     code: 200,
  //     message: 'Mock login successful'
  //   }
  // }
}