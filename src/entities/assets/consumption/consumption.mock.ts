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


// entities/assets/consumption/consumption-category.mock.ts

import type { ConsumptionCategoryItem } from './consumption.entity.ts'

export const mockMonthlyCategoryConsumption: ConsumptionCategoryItem[] = [
  {
    consumptionCategory: 'food',
    amount: '800,000',
    percentage: 34.6,
    diffFromLastMonth: '-20,000',
  },
  {
    consumptionCategory: 'transport',
    amount: '200,000',
    percentage: 8.6,
    diffFromLastMonth: '+15,000',
  },
  {
    consumptionCategory: 'shopping',
    amount: '600,000',
    percentage: 25.9,
    diffFromLastMonth: '+40,000',
  },
  {
    consumptionCategory: 'financial',
    amount: '300,000',
    percentage: 12.9,
    diffFromLastMonth: '-10,000',
  },
  {
    consumptionCategory: 'other',
    amount: '410,000',
    percentage: 17.7,
    diffFromLastMonth: '+5,000',
  },
]

export const mockTodayCategoryConsumption: ConsumptionCategoryItem[] = [
  {
    consumptionCategory: 'food',
    amount: '25,000',
    percentage: 34.6,
    diffFromLastMonth: '+4,000',
  },
  {
    consumptionCategory: 'transport',
    amount: '12,000',
    percentage: 8.6,
    diffFromLastMonth: '-2,000',
  },
  {
    consumptionCategory: 'shopping',
    amount: '40,000',
    percentage: 25.9,
    diffFromLastMonth: '-20,000',
  },
  {
    consumptionCategory: 'financial',
    amount: '300,000',
    percentage: 12.9,
    diffFromLastMonth: '+4,000',
  },
  {
    consumptionCategory: 'other',
    amount: '14,100',
    percentage: 17.7,
    diffFromLastMonth: '+5,000',
  },
]