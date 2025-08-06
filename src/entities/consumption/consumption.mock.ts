import type { 
  MonthlyConsumptionSummary, 
  EstimatedAndTodayConsumption, 
  ConsumptionSummaryMeta ,
  ConsumptionCategoryDetail,
  MonthlyCategoryConsumption,
  TodayCategoryConsumption,
  MonthlyTransactionDetail,
  TodayTransactionDetail,
  ConsumptionCategory
} from './consumption.entity'

export const mockConsumptionSummaryMeta: ConsumptionSummaryMeta = {
  monthlyConsumption: 800000,  
  changeRate: -1.5,           
  changeAmount: -45000        
}


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

// 소비분석 페이지 월별 카테고리 비율
export const mockMonthlyCategoryConsumption: MonthlyCategoryConsumption = {
  yearMonth: '2025-07',
  categories: [
    {
      consumptionCategory: 'food',
      amount: 800000,
      percentage: 34.6,
      diffFromLastMonth: -20000,
    },
    {
      consumptionCategory: 'transport',
      amount: 200000,
      percentage: 8.6,
      diffFromLastMonth: 15000,
    },
    {
      consumptionCategory: 'shopping',
      amount: 600000,
      percentage: 25.9,
      diffFromLastMonth: 40000,
    },
    {
      consumptionCategory: 'financial',
      amount: 300000,
      percentage: 12.9,
      diffFromLastMonth: -10000,
    },
    {
      consumptionCategory: 'other',
      amount: 410000,
      percentage: 17.7,
      diffFromLastMonth: 5000,
    }
  ]
}


// 소비분석 페이지 오늘의 소비 카테고리 비율
export const mockTodayCategoryConsumption: TodayCategoryConsumption = {
  calculatedDate: '2025-07-16',
  categories: [
    {
      consumptionCategory: 'food',
      amount: 80000,
      percentage: 53.3,
      diffFromYesterday: -5000,
    },
    {
      consumptionCategory: 'transport',
      amount: 30000,
      percentage: 20.0,
      diffFromYesterday: 10000,
    },
    {
      consumptionCategory: 'shopping',
      amount: 20000,
      percentage: 13.3,
      diffFromYesterday: 2000,
    },
    {
      consumptionCategory: 'financial',
      amount: 15000,
      percentage: 10.0,
      diffFromYesterday: 5000,
    },
    {
      consumptionCategory: 'other',
      amount: 5000,
      percentage: 3.4,
      diffFromYesterday: 2000,
    },
  ],
}

// 월 전체 거래내역 (달력 누르면 들어가지는)
export const mockMonthlyTransactionDetail: MonthlyTransactionDetail = {
  yearMonth: "2025-07",
  transactions: [
    {
      transactionName: "스타벅스 강남점",
      transactionDate: "2025-07-16",
      transactionTime: "14:32",
      accountName: "ＫＢ마이핏통장",
      amount: -5500
    },
    {
      transactionName: "맥도날드 역삼점",
      transactionDate: "2025-07-15",
      transactionTime: "11:45",
      accountName: "신한은행",
      amount: -8900
    },
    {
      transactionName: "올리브영",
      transactionDate: "2025-07-15",
      transactionTime: "11:45",
      accountName: "신한은행",
      amount: -100000
    },
    {
      transactionName: "투썸플레이스",
      transactionDate: "2025-07-14",
      transactionTime: "15:10",
      accountName: "우리은행",
      amount: -12000
    }
  ]
};

// 일 전체 거래내역 (달력 누르면 들어가지는)
export const mockTodayTransactionDetail: TodayTransactionDetail = {
  date: "2025-07-16",
  transactions: [
    {
      transactionName: "스타벅스 강남점",
      transactionDate: "2025-07-16",
      transactionTime: "14:32",
      accountName: "KB국민은행",
      amount: -5500
    },
    {
      transactionName: "사피엔스",
      transactionDate: "2025-07-16",
      transactionTime: "11:45",
      accountName: "KB국민은행",
      amount: 250000
    },
    {
      transactionName: "투썸플레이스",
      transactionDate: "2025-07-16",
      transactionTime: "15:10",
      accountName: "농협은행",
      amount: -12000
    }
  ]
}


// 월별 + 카테고리별 데이터
export const mockFoodTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'food',
  transactions: [
    {
      transactionName: '스타벅스 강남점',
      transactionDate: '2025-07-16',
      transactionTime: '14:32',
      accountName: 'ＫＢ마이핏통장',
      amount: -5500,
    },
    {
      transactionName: '맥도날드 역삼점',
      transactionDate: '2025-07-15',
      transactionTime: '11:45',
      accountName: '신한은행',
      amount: -8900,
    },
    {
      transactionName: '투썸플레이스',
      transactionDate: '2025-07-14',
      transactionTime: '15:10',
      accountName: '우리은행',
      amount: -12000,
    },
  ],
}

export const mockShoppingTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'shopping',
  transactions: [
    {
      transactionName: '무신사 스토어',
      transactionDate: '2025-07-12',
      transactionTime: '18:22',
      accountName: '신한카드',
      amount: -25000,
    },
    {
      transactionName: '이마트',
      transactionDate: '2025-07-11',
      transactionTime: '13:05',
      accountName: '카카오뱅크',
      amount: -43000,
    },
  ],
}

export const mockTransportTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'transport',
  transactions: [
    {
      transactionName: 'T맵 택시',
      transactionDate: '2025-07-20',
      transactionTime: '08:35',
      accountName: '국민은행',
      amount: -7200,
    },
    {
      transactionName: '서울교통공사',
      transactionDate: '2025-07-19',
      transactionTime: '09:12',
      accountName: '토스뱅크',
      amount:-1350,
    },
  ],
}

export const mockFinancialTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'financial',
  transactions: [
    {
      transactionName: 'CGV 강남',
      transactionDate: '2025-07-13',
      transactionTime: '20:20',
      accountName: '현대카드',
      amount: -15000,
    },
    {
      transactionName: '네이버웹툰 정기결제',
      transactionDate: '2025-07-10',
      transactionTime: '01:00',
      accountName: '삼성카드',
      amount: -3000,
    },
  ],
}

export const mockOtherTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'other',
  transactions: [
    {
      transactionName: '기부금',
      transactionDate: '2025-07-09',
      transactionTime: '14:00',
      accountName: '신한은행',
      amount: -10000,
    },
    {
      transactionName: '보험료',
      transactionDate: '2025-07-08',
      transactionTime: '09:30',
      accountName: '국민은행',
      amount: -20000,
    },
  ],
}

/// 일별 + 카테고리별 
export const mockTodayFoodTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'food',
  transactions: [
    {
      transactionName: '이디야커피',
      transactionDate: '2025-07-16',
      transactionTime: '08:42',
      accountName: '카카오뱅크',
      amount: -4800,
    },
  ],
}

export const mockTodayShoppingTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'shopping',
  transactions: [
    {
      transactionName: '쿠팡',
      transactionDate: '2025-07-16',
      transactionTime: '13:10',
      accountName: '토스뱅크',
      amount: -24000,
    },
  ],
}

export const mockTodayTransportTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'transport',
  transactions: [
    {
      transactionName: '버스 요금',
      transactionDate: '2025-07-16',
      transactionTime: '09:15',
      accountName: '카카오뱅크',
      amount: -1250,
    },
  ],
}

export const mockTodayFinancialTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'financial',
  transactions: [
    {
      transactionName: '토스 보험료',
      transactionDate: '2025-07-16',
      transactionTime: '07:40',
      accountName: '토스뱅크',
      amount: -19000,
    },
  ],
}

export const mockTodayOtherTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'other',
  transactions: [
    {
      transactionName: '편의점 기부',
      transactionDate: '2025-07-16',
      transactionTime: '20:00',
      accountName: '카카오뱅크',
      amount: -2000,
    },
  ],
}


export const mockMonthlyCategoryDetailMap: Record<ConsumptionCategory, ConsumptionCategoryDetail> = {
  food: mockFoodTransactions,
  shopping: mockShoppingTransactions,
  transport: mockTransportTransactions,
  financial: mockFinancialTransactions,
  other: mockOtherTransactions,
}

export const mockTodayCategoryDetailMap: Record<ConsumptionCategory, ConsumptionCategoryDetail> = {
  food: mockTodayFoodTransactions,
  shopping: mockTodayShoppingTransactions,
  transport: mockTodayTransportTransactions,
  financial: mockTodayFinancialTransactions,
  other: mockTodayOtherTransactions,
}