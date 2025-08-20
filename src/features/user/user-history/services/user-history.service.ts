import { format, subMonths, parseISO } from 'date-fns'
import type { UserHistoryResponse, UserHistoryResponseData } from "@/entities/user/user.entity"
import { mockUserNowmeHistory } from "@/entities/user/user.mock"
import { fetcher } from "@/shared/utils/fetcher"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function normalizeHistory(raw: UserHistoryResponse[]): UserHistoryResponse[] {
  // 🔑 yyyy-MM 단위로만 키를 만든다
  const monthKeyMap = new Map<string, UserHistoryResponse>()

  for (const entry of raw ?? []) {
    const d = parseISO(entry.diagnosedDate)   // ex) 2025-08-04
    const key = format(d, 'yyyy-MM')          // ex) 2025-08

    const prev = monthKeyMap.get(key)
    if (!prev) {
      monthKeyMap.set(key, entry)
    } else {
      // 같은 달에 여러 건 오면 최근 날짜만 유지
      if (parseISO(entry.diagnosedDate) > parseISO(prev.diagnosedDate)) {
        monthKeyMap.set(key, entry)
      }
    }
  }

  // 최근 12개월 생성 (키는 yyyy-MM, 표시용 날짜는 yyyy-MM-01)
  const now = new Date()
  const monthList = Array.from({ length: 12 }, (_, i) => {
    const d = subMonths(now, 11 - i)
    return {
      key: format(d, 'yyyy-MM'),
      labelDate: format(d, 'yyyy-MM-01'),
    }
  })

  return monthList.map(({ key, labelDate }) => {
    const found = monthKeyMap.get(key)
    if (found) {
      return {
        ...found,
        // X축 정렬용으로 날짜는 'yyyy-MM-01'로 맞춰주면 깔끔
        diagnosedDate: labelDate,
      }
    }
    return {
      diagnosedDate: labelDate,
      typeName: '진단 기록 없음',
      score: null as unknown as number,
    }
  })
}

export const getUserNowmeHistory = async (id: string) => {
  try {
    const res = await fetcher<UserHistoryResponseData>({
      url: `${BASE_URL}/api/user/users/${id}/nowme/history`,
      method: 'GET',
      auth: true,
    })
    console.log('12개월 정보', res)

    const payload = (res as any)?.data?.data ?? (res as any)?.data ?? res
    const list: UserHistoryResponse[] = payload?.response ?? []

    return normalizeHistory(list)
  } catch (e) {
    console.warn('nowME 히스토리 실패, mock 사용', e)
    return normalizeHistory(mockUserNowmeHistory)
  }
}