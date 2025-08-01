// 소비 현황
export interface ConsumptionSummaryMeta {
  monthlyConsumption: number     
  changeRate: number             
  changeAmount: number           
}

// 월별 소비
export interface MonthlyConsumptionSummary {
    yearMonth: string
    monthToDateConsumption: {
      amount: string
      calculatedUntil: string
    }
  }

// 예상 월/ 일 소비
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

// 한달 소비 단일 카테고리
export interface MonthlyConsumptionCategoryItem {
  consumptionCategory: string
  amount: number
  percentage: number
  diffFromLastMonth: number
}

// 한달 소비 카테고리 모음
export interface MonthlyCategoryConsumption {
  yearMonth: string
  categories: MonthlyConsumptionCategoryItem[]
}

// 오늘 소비 카테고리 단일
export interface TodayConsumptionCategoryItem {
  consumptionCategory: string
  amount: number
  percentage: number
  diffFromYesterday: number
}

// 오늘 소비 카테고리 모음
export interface TodayCategoryConsumption {
  calculatedDate: string
  categories: TodayConsumptionCategoryItem[]
}

// 이걸로 카테고리 찾아감
export type ConsumptionCategory =
  | 'food'
  | 'shopping'
  | 'transport'
  | 'financial'
  | 'other'

// 소비 내역
export interface ConsumptionTransaction {
  transactionName: string
  transactionDate: string
  transactionTime: string
  accountName: string
  amount: number 
}

// 소비 분석 페이지 월별
export interface MonthlyTransactionDetail {
  yearMonth: string
  transactions: ConsumptionTransaction[]
}

// 소비 분석 페이지 오늘
export interface TodayTransactionDetail {
  date: string
  transactions: ConsumptionTransaction[]
}

// 소비 분석 상세 - 카테고리 월별, 카테고리 일별
export interface ConsumptionCategoryDetail {
  consumptionCategory: ConsumptionCategory
  transactions: ConsumptionTransaction[]
}

