export interface MonthlyConsumptionSummary {
    yearMonth: string
    monthToDateConsumption: {
      amount: string
      calculatedUntil: string
    }
  }

export interface EstimatedAndTodayConsumption {
  estimatedMonthlyConsumption: {
    amount: string
    calculatedUntil: string
  }
  todayConsumption: {
    amount: string
    calculatedDate: string
  }
}

export interface ConsumptionCategoryItem {
  consumptionCategory: string
  amount: string
  percentage: number
  diffFromLastMonth: string
}

export type ConsumptionCategory =
  | 'food'
  | 'shopping'
  | 'transport'
  | 'financial'
  | 'other'

export interface ConsumptionTransaction {
  transactionName: string
  transactionDate: string
  transactionTime: string
  accountName: string
  amount: string // e.g. "-5,500"
}

export interface ConsumptionCategoryDetail {
  consumptionCategory: ConsumptionCategory
  transactions: ConsumptionTransaction[]
}

export interface ConsumptionDateSummary {
  date: string
  transactions: ConsumptionTransaction[]
}