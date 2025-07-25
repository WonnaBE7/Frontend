import type { MonthlyConsumptionSummary, EstimatedAndTodayConsumption } from './consumption.entity'

export const mockMonthlyConsumptionSummary: MonthlyConsumptionSummary = {
  yearMonth: '2025-07',
  monthToDateConsumption: {
    amount: '2,310,000',
    calculatedUntil: '2025-07-16'
  }
}

export const mockEstimatedAndTodayConsumption: EstimatedAndTodayConsumption = {
  estimatedMonthlyConsumption: {
    amount: '4,500,000',
    calculatedUntil: '2025-07-16'
  },
  todayConsumption: {
    amount: '80,000',
    calculatedDate: '2025-07-16'
  }
}