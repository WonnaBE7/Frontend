import { format, subMonths } from 'date-fns'
import type { UserHistoryResponse } from "@/entities/user/user.entity"
import { mockUserNowmeHistory } from "@/entities/user/user.mock"
import { fetcher } from "@/shared/utils/fetcher"

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

function normalizeHistory(raw: UserHistoryResponse[]): UserHistoryResponse[] {
  const now = new Date()
  const monthList = Array.from({ length: 12 }, (_, i) =>
    format(subMonths(now, 11 - i), 'yyyy-MM-01')
  )

  const historyMap = new Map(
    raw.map((entry) => [entry.diagnosedDate, entry])
  )

  return monthList.map((month) => {
    const existing = historyMap.get(month)
    return existing ?? {
      diagnosedDate: month,
      typeName: '진단 기록 없음',
      score: null as unknown as number
    }
  })
}

export const getUserNowmeHistory = async (id: string) => {
  try {
    const res = await fetcher<UserHistoryResponse[]>({
      url: `${BASE_URL}/api/user/users/${id}/nowme/history`,
      method: 'GET',
      auth: true,
    })
    return normalizeHistory(res.data)
  } catch {
    return normalizeHistory(mockUserNowmeHistory)
  }
}