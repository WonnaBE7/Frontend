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
  try{
    const res = await fetcher<LoginResponse>({
      url: `${BASE_URL}/api/auth/login`,
      method: 'POST',
      body: payload,
    })
    console.log('토큰 : ', res.data.accessToken)
    return res
  }catch{
    return {
      code : 201,
      data:{
        accessToken: 'mock-access-token-123456',
        user: {
          userId: 'mock-user-id-001',
          name: '홍길동',
          email: 'hong@example.com'
        }
      },
      message:'실패'
    }
  }
}