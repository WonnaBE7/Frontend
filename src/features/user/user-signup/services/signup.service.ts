import { fetcher } from '@/shared/utils/fetcher' 

interface SignupRequest {
  name: string
  email: string
  password: string
}

interface SignupResponse {
    userId: string
    name: string
    email: string
}
////const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL
export const userSignup = async (payload: SignupRequest) => {
  const res =  await fetcher<SignupResponse>({
    url: `${BASE_URL}/api/auth/signup`,
    method: 'POST',
    body: payload, 
  })
  return res
}