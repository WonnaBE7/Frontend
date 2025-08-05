import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
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
} from '@/entities/consumption/consumption.entity'

import {
  getMonthlyConsumptionSummary,
  getEstimatedAndTodayConsumption,
  getMonthlyCategoryConsumption,
  getTodayCategoryConsumption
} from '@/entities/consumption/comsumption.api'
import { getConsumption } from './comsumption.api'
import { getMonthlyCategoryDetail, getMonthlyTransactionDetail, getTodayCategoryDetail, getTodayTransactionDetail } from '@/entities/consumption/comsumption.api'

export type TabType = 'current' | 'estimated' | 'today'

export const useConsumptionStore = defineStore('consumption', () => {
  const selectedTab = ref<TabType>('current')
  const baseDate = ref(dayjs())

  const monthlySummary = ref<MonthlyConsumptionSummary | null>(null)
  const estimatedAndToday = ref<EstimatedAndTodayConsumption | null>(null)
  const monthlyCategories = ref<MonthlyCategoryConsumption | null>(null)
  const todayCategories = ref<TodayCategoryConsumption | null>(null)

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
    todayCategories.value = await getTodayCategoryConsumption()
  }

  const displayedAmount = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return `${monthlySummary.value?.monthToDateConsumption.amount}원`
      case 'estimated':
        return `${estimatedAndToday.value?.estimatedMonthlyConsumption.amount}원`
      case 'today':
        return `${estimatedAndToday.value?.todayConsumption.amount}원`
    }
  })

  const displayedDate = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return monthlySummary.value?.monthToDateConsumption.calculatedUntil as string
      case 'estimated':
        return estimatedAndToday.value?.estimatedMonthlyConsumption.calculatedUntil as string
      case 'today':
        return estimatedAndToday.value?.todayConsumption.calculatedDate as string
    }
  })

  const categoryData = computed(() => {
    switch (selectedTab.value) {
      case 'current':
      case 'estimated':
        return monthlyCategories.value?.categories 
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
    item: MonthlyConsumptionCategoryItem | TodayConsumptionCategoryItem
  ): number => {
    return selectedTab.value === 'today'
      ? (item as TodayConsumptionCategoryItem).diffFromYesterday
      : (item as MonthlyConsumptionCategoryItem).diffFromLastMonth
  }

  const goPrevMonth = () => {
    baseDate.value = baseDate.value.subtract(1, 'month')
  }

  const goNextMonth = () => {
    const now = dayjs()
    if (!baseDate.value.isSame(now, 'month')) {
      baseDate.value = baseDate.value.add(1, 'month')
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
    meta: null as ConsumptionSummaryMeta | null,
  }),
  actions: {
    async fetchConsumptionMain() {
      this.meta = await getConsumption()
    }
  }
})


// 월별, 오늘 소비내역
export const useTransactionDetailStore = defineStore('consumptionDetailStore', {
  state: () => ({
    baseDate: dayjs(),
    todayTransactionDetail: null as TodayTransactionDetail | null,
    monthlyTransactionDetail: null as MonthlyTransactionDetail | null,
  }),
  actions: {
    async fetchTodayTransactionDetail() {
      this.todayTransactionDetail = await getTodayTransactionDetail()
    },
    async fetchMonthlyTransactionDetail() {
      const yearMonth = this.baseDate.format('YYYY-MM')
      this.monthlyTransactionDetail = await getMonthlyTransactionDetail(yearMonth)
    },
  },
})


// 월별, 오늘 카테고리 별 상세 내역
export const categories = ['food', 'shopping', 'transport', 'financial', 'other'] as const
export type ConsumptionCategoryKey = typeof categories[number]

export const useTransactionCategoryDetailStore = defineStore('consumptionCategoryStore', {
  state: () => ({
    todayDetails: {} as Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null>,
    monthlyDetails: {} as Record<ConsumptionCategoryKey, ConsumptionCategoryDetail | null>,
  }),

  actions: {
    async fetchAllTodayDetails() {
      for (const category of categories) {
        const res = await getTodayCategoryDetail(category)
        this.todayDetails[category] = res
      }
    },

    async fetchAllMonthlyDetails() {
      for (const category of categories) {
        const res = await getMonthlyCategoryDetail(category)
        this.monthlyDetails[category] = res
      }
    },

    getTodayDetail(category: ConsumptionCategoryKey) {
      return this.todayDetails[category] ?? null
    },

    getMonthlyDetail(category: ConsumptionCategoryKey) {
      return this.monthlyDetails[category] ?? null
    },
  },
})