import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import type {
  MonthlyConsumptionSummary,
  EstimatedAndTodayConsumption,
  MonthlyCategoryConsumption,
  TodayCategoryConsumption,
  MonthlyConsumptionCategoryItem,
  TodayConsumptionCategoryItem,
  ConsumptionSummaryMeta,
  TodayTransactionDetail,
  MonthlyTransactionDetail,
  ConsumptionCategoryDetail,
  EstimatedCategoryConsumption,
  EstimatedConsumptionCategoryItem,
} from '@/entities/assets/consumption/consumption.entity'

import {
  getMonthlyConsumptionSummary,
  getEstimatedAndTodayConsumption,
  getMonthlyCategoryConsumption,
  getTodayCategoryConsumption,
  getEstimatedCategoryConsumption
} from '@/entities/assets/consumption/comsumption.api.ts'
import { getConsumption } from './comsumption.api'
import { getMonthlyCategoryDetail, getMonthlyTransactionDetail, getTodayCategoryDetail, getTodayTransactionDetail } from '@/entities/assets/consumption/comsumption.api'
import { mockMonthlyCategoryDetailMap, mockTodayCategoryDetailMap } from '@/entities/assets/consumption/consumption.mock'

export type TabType = 'current' | 'estimated' | 'today'

export const useConsumptionStore = defineStore('consumption', () => {
  const selectedTab = ref<TabType>('current')
  const baseDate = ref<Dayjs>(dayjs())

  // MOCK 모드일 때 초기 데이터 설정
  const getInitialMonthlySummary = (): MonthlyConsumptionSummary | null => {
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      return {
        yearMonth: '2025-07',
        monthToDateConsumption: {
          amount: 2310000,
          calculatedUntil: '2025-07-16'
        }
      }
    }
    return null
  }

  const getInitialEstimatedAndToday = (): EstimatedAndTodayConsumption | null => {
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      return {
        estimatedMonthlyConsumption: {
          amount: 4500000,
          calculatedUntil: '2025-07-16',
          diffAmount: 40000
        },
        todayConsumption: {
          amount: 80000,
          calculatedDate: '2025-07-16'
        }
      }
    }
    return null
  }

  const getInitialMonthlyCategories = (): MonthlyCategoryConsumption | null => {
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      return {
        categories: [
          { consumptionCategory: 'food', amount: 800000, percentage: 34.6, diffFromLastMonth: -20000 },
          { consumptionCategory: 'transport', amount: 200000, percentage: 8.6, diffFromLastMonth: 15000 },
          { consumptionCategory: 'shopping', amount: 600000, percentage: 25.9, diffFromLastMonth: 40000 },
          { consumptionCategory: 'culture', amount: 300000, percentage: 12.9, diffFromLastMonth: -10000 },
          { consumptionCategory: 'other', amount: 410000, percentage: 17.7, diffFromLastMonth: 5000 }
        ]
      }
    }
    return null
  }

  const getInitialTodayCategories = (): TodayCategoryConsumption | null => {
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      return {
        calculatedDate: '2025-07-16',
        categories: [
          { consumptionCategory: 'food', amount: 80000, percentage: 53.3, diffFromYesterday: 5000 },
          { consumptionCategory: 'transport', amount: 30000, percentage: 20.0, diffFromYesterday: 10000 },
          { consumptionCategory: 'shopping', amount: 20000, percentage: 13.3, diffFromYesterday: 2000 },
          { consumptionCategory: 'culture', amount: 15000, percentage: 10.0, diffFromYesterday: 5000 },
          { consumptionCategory: 'other', amount: 5000, percentage: 3.4, diffFromYesterday: 2000 }
        ]
      }
    }
    return null
  }

  const getInitialEstimatedCategories = (): EstimatedCategoryConsumption | null => {
    if (import.meta.env.VITE_USE_MOCK === 'true') {
      return {
        categories: [
          { consumptionCategory: 'food', amount: 960000, percentage: 34.6, diffFromEstimate: 0 },
          { consumptionCategory: 'transport', amount: 240000, percentage: 8.6, diffFromEstimate: 0 },
          { consumptionCategory: 'shopping', amount: 720000, percentage: 25.9, diffFromEstimate: 0 },
          { consumptionCategory: 'culture', amount: 360000, percentage: 12.9, diffFromEstimate: 0 },
          { consumptionCategory: 'other', amount: 492000, percentage: 17.7, diffFromEstimate: 0 }
        ]
      }
    }
    return null
  }

  const monthlySummary = ref<MonthlyConsumptionSummary | null>(getInitialMonthlySummary())
  const estimatedAndToday = ref<EstimatedAndTodayConsumption | null>(getInitialEstimatedAndToday())
  const monthlyCategories = ref<MonthlyCategoryConsumption | null>(getInitialMonthlyCategories())
  const todayCategories = ref<TodayCategoryConsumption | null>(getInitialTodayCategories())
  const estimatedCategories = ref<EstimatedCategoryConsumption | null>(getInitialEstimatedCategories())

  const tabs = [
    { key: 'current', label: '이번달 소비' },
    { key: 'estimated', label: '예상 월 소비' },
    { key: 'today', label: '오늘의 소비' }
  ] as const

  const fetchConsumptionData = async () => {
    const yearMonth = baseDate.value.format('YYYY-MM')
    monthlySummary.value = await getMonthlyConsumptionSummary(yearMonth)
    estimatedAndToday.value = await getEstimatedAndTodayConsumption()
    monthlyCategories.value = await getMonthlyCategoryConsumption(yearMonth)
    estimatedCategories.value= await getEstimatedCategoryConsumption(yearMonth)
    todayCategories.value = await getTodayCategoryConsumption()
  }

  const displayedAmount = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return `${monthlySummary.value?.monthToDateConsumption.amount.toLocaleString()}원`
      case 'estimated':
        return `${estimatedAndToday.value?.estimatedMonthlyConsumption.amount.toLocaleString()}원`
      case 'today':
        return `${estimatedAndToday.value?.todayConsumption.amount.toLocaleString()}원`
    }
  })

  const diffamount = computed(() => {
    if (selectedTab.value === 'estimated') {
      const val = estimatedAndToday.value?.estimatedMonthlyConsumption.diffAmount ?? 0
      const formatted = Math.abs(val).toLocaleString() + '원'
      return val < 0 ? `${formatted} 초과` : `${formatted} 여유`
    }
    return ''
  })

  const displayedDate = computed(() => {
    const now = dayjs()
  
    switch (selectedTab.value) {
      case 'current': {
        if (!baseDate.value.isSame(now, 'month')) {
          return baseDate.value.format('MM월')
        }
        return monthlySummary.value?.monthToDateConsumption.calculatedUntil as string
      }
      case 'estimated':
        return estimatedAndToday.value?.estimatedMonthlyConsumption.calculatedUntil as string
      case 'today':
        return estimatedAndToday.value?.todayConsumption.calculatedDate as string
    }
  })

  const categoryData = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return monthlyCategories.value?.categories 
      case 'estimated':
        return estimatedCategories.value?.categories 
      case 'today': 
        return todayCategories.value?.categories
    }
  })

  const displayedLabel = computed(() => {
    const now = dayjs()
    return now.isSame(baseDate.value, 'month')
      ? '이번달 소비'
      : baseDate.value.format('M월 소비')
  })

  const diffLabel = computed(() => {
    return selectedTab.value === 'today' ? '전일 대비' : '지난달 대비'
  })

  const diffValue = (
    item: MonthlyConsumptionCategoryItem | TodayConsumptionCategoryItem | EstimatedConsumptionCategoryItem
  ): number => {
    return selectedTab.value === 'today'
      ? (item as TodayConsumptionCategoryItem).diffFromYesterday
      : selectedTab.value ==='current' 
        ? (item as MonthlyConsumptionCategoryItem).diffFromLastMonth
        : (item as EstimatedConsumptionCategoryItem).diffFromEstimate
  }

  const fetchMonthOnly = async () => {
    const yyyymm = baseDate.value.format('YYYY-MM')
    monthlySummary.value = await getMonthlyConsumptionSummary(yyyymm)
    monthlyCategories.value = await getMonthlyCategoryConsumption(yyyymm)
  }
  
  const goPrevMonth = async () => {
    baseDate.value = baseDate.value.subtract(1, 'month')
    await fetchMonthOnly()
  }

  const goNextMonth = async () => {
    const now = dayjs()
    if (baseDate.value.isBefore(now, 'month')) {
      baseDate.value = baseDate.value.add(1, 'month')
      await fetchMonthOnly()
    }
  }

  return {
    // UI
    tabs,
    selectedTab,
    baseDate,
    displayedLabel,
    goPrevMonth,
    goNextMonth,

    // 데이터
    diffamount,
    displayedAmount,
    displayedDate,
    categoryData,
    diffLabel,
    diffValue,

    // API
    fetchConsumptionData
  }
})


// 총 소비 현황 나타내기
export const useConsumptionMain = defineStore('consumptionMain', {
  state : () => ({
    meta: (import.meta.env.VITE_USE_MOCK === 'true'
      ? { monthlyConsumption: 800000, changeRate: -1.5, changeAmount: -45000 }
      : null) as ConsumptionSummaryMeta | null,
  }),
  actions: {
    async fetchConsumptionMain() {
      this.meta = await getConsumption()
    }
  },
  persist :true
})


// 월별, 오늘 소비내역
export const useTransactionDetailStore = defineStore('consumptionDetailStore', {
  state: () => ({
    todayTransactionDetail: (import.meta.env.VITE_USE_MOCK === 'true'
      ? {
          date: "2025-07-16",
          transactions: [
            { transactionName: "스타벅스 강남점", transactionDate: "2025-07-16", transactionTime: "14:32", accountName: "KB국민은행", amount: -5500 },
            { transactionName: "사피엔스", transactionDate: "2025-07-16", transactionTime: "11:45", accountName: "KB국민은행", amount: 250000 },
            { transactionName: "투썸플레이스", transactionDate: "2025-07-16", transactionTime: "15:10", accountName: "농협은행", amount: -12000 }
          ]
        }
      : null) as TodayTransactionDetail | null,
    monthlyTransactionDetail: (import.meta.env.VITE_USE_MOCK === 'true'
      ? {
          yearMonth: "2025-07",
          transactions: [
            { transactionName: "스타벅스 강남점", transactionDate: "2025-07-16", transactionTime: "14:32", accountName: "ＫＢ마이핏통장", amount: -5500 },
            { transactionName: "맥도날드 역삼점", transactionDate: "2025-07-15", transactionTime: "11:45", accountName: "신한은행", amount: -8900 },
            { transactionName: "올리브영", transactionDate: "2025-07-15", transactionTime: "11:45", accountName: "신한은행", amount: -100000 },
            { transactionName: "투썸플레이스", transactionDate: "2025-07-14", transactionTime: "15:10", accountName: "우리은행", amount: -12000 }
          ]
        }
      : null) as MonthlyTransactionDetail | null,
  }),
  actions: {
    async fetchTodayTransactionDetail() {
      this.todayTransactionDetail = await getTodayTransactionDetail()
    },
    async fetchMonthlyTransactionDetail() {
      const yearMonth = useConsumptionStore().baseDate.format('YYYY-MM')
      console.log('월별 거래내역 가지러 가는 중~ ', yearMonth);
      this.monthlyTransactionDetail = await getMonthlyTransactionDetail(yearMonth)
    },
  },
  persist: true
})


// 월별, 오늘 카테고리 별 상세 내역
export const categories = ['food', 'shopping', 'transport', 'culture', 'other'] as const
export type ConsumptionCategoryKey = typeof categories[number]

const getInitialTodayDetails = (): Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null> => {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    return {
      food: mockTodayCategoryDetailMap.food,
      shopping: mockTodayCategoryDetailMap.shopping,
      transport: mockTodayCategoryDetailMap.transport,
      culture: mockTodayCategoryDetailMap.culture,
      other: mockTodayCategoryDetailMap.other,
    }
  }
  return {} as Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null>
}

const getInitialMonthlyDetails = (): Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null> => {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    return {
      food: mockMonthlyCategoryDetailMap.food,
      shopping: mockMonthlyCategoryDetailMap.shopping,
      transport: mockMonthlyCategoryDetailMap.transport,
      culture: mockMonthlyCategoryDetailMap.culture,
      other: mockMonthlyCategoryDetailMap.other,
    }
  }
  return {} as Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null>
}

export const useTransactionCategoryDetailStore = defineStore('consumptionCategoryStore', {
  state: () => ({
    todayDetails: getInitialTodayDetails(),
    monthlyDetails: getInitialMonthlyDetails(),
  }),

  actions: {
    async fetchAllTodayDetails(category : ConsumptionCategoryKey) {
      const res = await getTodayCategoryDetail(category)
        this.todayDetails[category] = res
    },

    async fetchAllMonthlyDetails(category : ConsumptionCategoryKey) {
        const yearMonth = useConsumptionStore().baseDate.format('YYYY-MM')
        const res = await getMonthlyCategoryDetail(category, yearMonth)
        this.monthlyDetails[category] = res
    },

    getTodayDetail(category: ConsumptionCategoryKey) {
      return this.todayDetails[category] ?? null
    },

    getMonthlyDetail(category: ConsumptionCategoryKey) {
      return this.monthlyDetails[category] ?? null
    },
  },
  persist: true
})