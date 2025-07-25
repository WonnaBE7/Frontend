import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { mockMonthlyConsumptionSummary, mockEstimatedAndTodayConsumption } from '@/entities/assets/consumption/consumption.mock'

export type TabType = 'current' | 'estimated' | 'today'

const tabs = [
  { key: 'current', label: '소비' },
  { key: 'estimated', label: '예상' },
  { key: 'today', label: '오늘' }
] 

const selectedTab = ref<TabType>('current')
const baseDate = ref(dayjs())

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

export const useConsumptionSummary = () => ({
  tabs,
  selectedTab,
  baseDate,
  displayedAmount,
  displayedDate,
  displayedLabel,
  goPrevMonth,
  goNextMonth
})