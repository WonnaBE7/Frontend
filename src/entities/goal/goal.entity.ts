export interface Goal {
    id: number
    goalName: string
    categoryName: string
    nowmeName: string
    progressRate: number
    targetAmount: number
    currentAmount: number
    goalDurationMonths: number
    startDate: string
    status: 'PUBLISHED' | 'DELETED'
  }