// types.ts 또는 fetcher.ts 상단에 공통 응답 타입 정의
export interface BaseResponse<T> {
  code: number
  message: string
  data: T
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface RequestOptions {
  url: string
  method: Method
  body?: any
  headers?: Record<string, string>
  credentials?: RequestCredentials // 'include', 'same-origin', 'omit'
}

// fetcher 함수 정의
export const fetcher = async <T = any>({
  url,
  method,
  body,
  headers = {},
  credentials = 'same-origin',
}: RequestOptions): Promise<BaseResponse<T>> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
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