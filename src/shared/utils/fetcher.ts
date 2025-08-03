export interface BaseResponse<T> {
  code: number
  message: string
  data: T
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
import { useAuthStore } from '@/entities/user/auth.store'

export interface RequestOptions {
  url: string
  method: Method
  body?: any
  credentials?: RequestCredentials
  auth?: boolean 
}

export const fetcher = async <T = any>({
  url,
  method,
  body,
  credentials = 'same-origin',
  auth = false, 
}: RequestOptions): Promise<BaseResponse<T>> => {
  try {
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    }
    
    if (auth) {
      const authStore = useAuthStore()
      const token = authStore.accessToken
      if (token) {
        finalHeaders['Authorization'] = `Bearer ${token}`
      }
    }

    const response = await fetch(url, {
      method,
      headers: finalHeaders,
      body: body ? JSON.stringify(body) : undefined,
      credentials,
    })

    const data: BaseResponse<T> = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'API 요청 중 오류가 발생했습니다.')
    }

    return data
  } catch (error: any) {
    console.error('[fetcher error]', error)
    throw error
  }
}