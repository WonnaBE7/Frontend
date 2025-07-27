// fetcher.ts

// 1. Method 타입 선언 (enum 대신 type으로)
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

// 2. 요청 옵션 타입 정의
export interface RequestOptions {
  url: string;
  method: Method;
  body?: any;
  headers?: Record<string, string>;
}

// 3. fetcher 함수
export const fetcher = async <T = any>({
  url,
  method,
  body,
  headers = {},
}: RequestOptions): Promise<T> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API 요청 중 오류가 발생했습니다.');
    }

    return data;
  } catch (error: any) {
    console.error('[fetcher error]', error);
    throw error;
  }
};