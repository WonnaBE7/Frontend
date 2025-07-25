import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { mockMonthlyConsumptionSummary, mockEstimatedAndTodayConsumption, mockMonthlyCategoryConsumption, mockTodayCategoryConsumption } from './consumption.mock'

export type TabType = 'current' | 'estimated' | 'today' 

export const useConsumptionStore = defineStore('consumption', () => {
  const selectedTab = ref<TabType>('current')
  const baseDate = ref(dayjs())

  const tabs = [
    { key: 'current', label: '이번달 소비' },
    { key: 'estimated', label: '예상 월 소비' },
    { key: 'today', label: '오늘의 소비' }
  ] as const

  const displayedAmount = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return `${mockMonthlyConsumptionSummary.monthToDateConsumption.amount}원`
      case 'estimated':
        return `${mockEstimatedAndTodayConsumption.estimatedMonthlyConsumption.amount}원`
      case 'today':
        return `${mockEstimatedAndTodayConsumption.todayConsumption.amount}원`
    }
  })

  const displayedDate = computed(() => {
    switch (selectedTab.value) {
      case 'current':
        return mockMonthlyConsumptionSummary.monthToDateConsumption.calculatedUntil
      case 'estimated':
        return mockEstimatedAndTodayConsumption.estimatedMonthlyConsumption.calculatedUntil
      case 'today':
        return mockEstimatedAndTodayConsumption.todayConsumption.calculatedDate
    }
  })

  const categoryData = computed(() => {
    switch (selectedTab.value) {
      case 'current':
      case 'estimated': // 'estimated'도 current와 동일한 데이터 사용
        return mockMonthlyCategoryConsumption
      case 'today':
        return mockTodayCategoryConsumption
    }
  })
  
  const displayedLabel = computed(() => {
    const now = dayjs()
    return now.isSame(baseDate.value, 'month') ? '이번달 소비' : baseDate.value.format('M월 소비')
  })

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
    tabs,
    selectedTab,
    baseDate,
    displayedAmount,
    displayedDate,
    displayedLabel,
    categoryData,
    goPrevMonth,
    goNextMonth
  }
})