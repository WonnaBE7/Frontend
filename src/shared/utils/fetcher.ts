// fetcher.ts
export interface BaseResponse<T> {
  code: number
  message: string
  data: T
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
import { useAuthStore } from '@/entities/user/auth.store'
import { refreshToken } from '@/features/user/auth-refresh/service/refresh.service' // ✅ 추가

export interface RequestOptions {
  url: string
  method: Method
  body?: any
  credentials?: RequestCredentials
  auth?: boolean 
}

let isRefreshing = false
let waiters: Array<() => void> = []
const waitRefresh = () => new Promise<void>(r => waiters.push(r))
const releaseWaiters = () => { waiters.forEach(r => r()); waiters = [] }

export const fetcher = async <T = any>({
  url,
  method,
  body,
  credentials = 'same-origin',
  auth = false, 
}: RequestOptions): Promise<BaseResponse<T>> => {
  try {
    const finalHeaders: Record<string, string> = {
      'Content-Type': 'application/json', // 필요 시 유지
    }
    
    if (auth) {
      const authStore = useAuthStore()
      const token = authStore.accessToken
      if (token) {
        finalHeaders['Authorization'] = `Bearer ${token}`
      }
    }

    const doFetch = async () => {
      const resp = await fetch(url, {
        method,
        headers: finalHeaders,
        body: body ? JSON.stringify(body) : undefined,
        credentials,
      })
      return resp
    }

    let response = await doFetch()
    if (response.status === 401 && !url.endsWith('/api/auth/refresh')) {
      if (isRefreshing) {
        await waitRefresh()
      } else {
        try {
          isRefreshing = true
          const res = await refreshToken()
          const authStore = useAuthStore()
          authStore.accessToken = res.accessToken
          if (auth) {
            finalHeaders['Authorization'] = `Bearer ${res.accessToken}`
          }
        } catch (e) {
          isRefreshing = false
          releaseWaiters()
          throw new Error('세션이 만료되었거나 갱신에 실패했습니다. 다시 로그인해 주세요.')
        }
        isRefreshing = false
        releaseWaiters()
      }

      // 갱신 후 재시도
      const newToken = useAuthStore().accessToken
      if (auth && newToken) {
        finalHeaders['Authorization'] = `Bearer ${newToken}`
      }
      response = await doFetch()
    }

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