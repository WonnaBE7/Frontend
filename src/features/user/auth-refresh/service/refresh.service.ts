import { fetcher } from '@/shared/utils/fetcher'

interface RefreshResponse {
    accessToken: string
    user: {
      userId: string
      name: string
      email: string
    }
}


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const refreshToken = async (): Promise<RefreshResponse> => {
  const resp = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    credentials: 'include', 
    headers: { 'Content-Type': 'application/json' },
  })

  if (resp.status === 401) {
    let msg = 'Refresh Token이 유효하지 않습니다.'
    try {
      const j = await resp.json()
      msg = j?.message || msg
    } catch {}
    throw new Error(msg)
  }

  const json = await resp.json() as { code: number; message: string; data: RefreshResponse }
  if (!resp.ok) throw new Error(json?.message || '리프레시 실패')
  return json.data
}