import type { Goal } from './goal.entity'

export const mockGoals: Goal[] = [
  {
    id: 1,
    goalName: '바르셀로나 여행',
    categoryName: '여행',
    nowmeName: '경험 소비형',
    progressRate: 65,
    targetAmount: 3000000,
    currentAmount: 1950000,
    goalDurationMonths: 24,
    startDate: '2025-03-01',
    status: 'PUBLISHED'
  },
  {
    id: 2,
    goalName: '디지털 노마드 준비',
    categoryName: '커리어',
    nowmeName: '알뜰살뜰형',
    progressRate: 32,
    targetAmount: 5000000,
    currentAmount: 1600000,
    goalDurationMonths: 12,
    startDate: '2025-03-01',
    status: 'PUBLISHED'
  },
  {
    id: 3,
    goalName: '내 집 마련',
    categoryName: '부동산',
    nowmeName: '성실 투자형',
    progressRate: 78,
    targetAmount: 65000000,
    currentAmount: 50700000,
    goalDurationMonths: 60,
    startDate: '2025-03-01',
    status: 'PUBLISHED'
  }
]