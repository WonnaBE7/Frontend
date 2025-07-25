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