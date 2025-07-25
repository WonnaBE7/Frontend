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