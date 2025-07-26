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
// 월별 + 카테고리별 데이터

import type { ConsumptionCategoryDetail } from './consumption.entity.ts'

export const mockFoodTransactions: ConsumptionCategoryDetail = {
  consumptionCategory: 'food',
  transactions: [
    {
      transactionName: '스타벅스 강남점',
      transactionDate: '2025-07-16',
      transactionTime: '14:32',
      accountName: 'ＫＢ마이핏통장',
      amount: '-5,500',
    },
    {
      transactionName: '맥도날드 역삼점',
      transactionDate: '2025-07-15',
      transactionTime: '11:45',
      accountName: '신한은행',
      amount: '-8,900',
    },
    {
      transactionName: '투썸플레이스',
      transactionDate: '2025-07-14',
      transactionTime: '15:10',
      accountName: '우리은행',
      amount: '-12,000',
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
      amount: '-25,000',
    },
    {
      transactionName: '이마트',
      transactionDate: '2025-07-11',
      transactionTime: '13:05',
      accountName: '카카오뱅크',
      amount: '-43,000',
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
      amount: '-7,200',
    },
    {
      transactionName: '서울교통공사',
      transactionDate: '2025-07-19',
      transactionTime: '09:12',
      accountName: '토스뱅크',
      amount: '-1,350',
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
      amount: '-15,000',
    },
    {
      transactionName: '네이버웹툰 정기결제',
      transactionDate: '2025-07-10',
      transactionTime: '01:00',
      accountName: '삼성카드',
      amount: '-3,000',
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
      amount: '-10,000',
    },
    {
      transactionName: '보험료',
      transactionDate: '2025-07-08',
      transactionTime: '09:30',
      accountName: '국민은행',
      amount: '-20,000',
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
      amount: '-4,800',
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
      amount: '-24,000',
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
      amount: '-1,250',
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
      amount: '-19,000',
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
      amount: '-2,000',
    },
  ],
}


/// 월별 소비 거래 내역

import type { ConsumptionDateSummary } from './consumption.entity.ts'

export const mockCurrentDateTransactions: ConsumptionDateSummary = {
  date: '2025-07',
  transactions: [
    {
      transactionName: '스타벅스 강남점',
      transactionDate: '2025-07-16',
      transactionTime: '14:32',
      accountName: 'ＫＢ마이핏통장',
      amount: '-5,500',
    },
    {
      transactionName: '무신사 스토어',
      transactionDate: '2025-07-12',
      transactionTime: '18:22',
      accountName: '신한카드',
      amount: '-25,000',
    },
    {
      transactionName: 'CGV 강남',
      transactionDate: '2025-07-13',
      transactionTime: '20:20',
      accountName: '현대카드',
      amount: '-15,000',
    },
    {
      transactionName: '기부금',
      transactionDate: '2025-07-09',
      transactionTime: '14:00',
      accountName: '신한은행',
      amount: '-10,000',
    },
  ]
}

/// 일별 소비 거래 내역

export const mockTodayTransactions: ConsumptionDateSummary = {
  date: '2025-07-16',
  transactions: [
    {
      transactionName: '이디야커피',
      transactionDate: '2025-07-16',
      transactionTime: '08:42',
      accountName: '카카오뱅크',
      amount: '-4,800',
    },
    {
      transactionName: 'CU편의점',
      transactionDate: '2025-07-16',
      transactionTime: '12:15',
      accountName: '신한은행',
      amount: '-6,000',
    },
    {
      transactionName: 'GS주유소',
      transactionDate: '2025-07-16',
      transactionTime: '18:30',
      accountName: '국민카드',
      amount: '-69,200',
    },
  ]
}