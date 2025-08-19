import type { GoalSummary, GoalReport, GoalSimulationInput, GoalReportSaveRequest, GoalSimulationResponse } from './goal.entity'

export const mockGoalSummary: GoalSummary = {
  totalGoalCount: 3,
  totalTargetAmount: 73000000,
  goals: [
    {
      id: 1,
      goalName: '바르셀로나 여행',
      categoryName: '여행',
      nowmeName: '경험 소비형',
      progressRate: 96,
      targetAmount: 3000000,
      currentAmount: 1950000,
      goalDurationMonths: 24,
      startDate: '2025-03-01',
      status: 'PUBLISHED',
    },
    {
      id: 2,
      goalName: '최신형 노트북 구매',
      categoryName: '취미/문화',
      nowmeName: '소확행형',
      progressRate: 80,
      targetAmount: 2500000,
      currentAmount: 2000000,
      goalDurationMonths: 12,
      startDate: '2025-03-01',
      status: 'PUBLISHED',
    },
    {
      id: 3,
      goalName: '내 집 마련',
      categoryName: '내 집 마련',
      nowmeName: '미래계획형',
      progressRate: 60,
      targetAmount: 67500000,
      currentAmount: 40500000,
      goalDurationMonths: 36,
      startDate: '2024-01-01',
      status: 'ACHIEVED',
    },
  ]
}


export const mockGoalReports: GoalReport[] = [
  {
    id: 1,
    goalName: '바르셀로나 여행',
    categoryName: '여행',
    nowmeName: '경험 소비형',
    progressRate: 96,
    targetAmount: 3000000,
    currentAmount: 1950000,
    goalDurationMonths: 24,
    remainingMonths: 9,
    saveAmount: 125000,
    futureMeMessage: `안녕! 난 미래의 너야! 👋
자산 분석을 통한 너의 맞춤형인 '자린고비형'에 맞는 상품을 추천해줄게!
네가 선택한...`,
    selectedProductId: 21,
    recommendedProducts: [
      {
        id: 21,
        name: '카카오뱅크 세이브업 적금',
        bank: '카카오뱅크',
        category:'적금',
        interestRate: 3.9,
        achievementRate: 98,
        saveAmount: 150000,
        expectedAchievementDate: '2026-11',
        expectedTotalAmount: 3000000,
      },
      {
        id: 29,
        name: '토스뱅크 세이브업 적금',
        bank: '토스뱅크',
        category:'적금',
        interestRate: 3.9,
        achievementRate: 98,
        saveAmount: 150000,
        expectedAchievementDate: '2026-11',
        expectedTotalAmount: 3000000,
      },
    ],
  },
  {
    id: 2,
    goalName: '최신형 노트북 구매',
    categoryName: '전자제품',
    nowmeName: '소학행형',
    progressRate: 80,
    targetAmount: 2500000,
    currentAmount: 2000000,
    goalDurationMonths: 12,
    remainingMonths: 4,
    saveAmount: 200000,
    futureMeMessage: `안녕! 나는 미래의 너야 💻
기술과 성장을 중요시하는 너에게 어울리는 금융 상품을 골라봤어!`,
    selectedProductId: 31,
    recommendedProducts: [
      {
        id: 31,
        name: '우리은행 스마트 적금',
        bank: '우리은행',
        category:'적금',
        interestRate: 3.4,
        achievementRate: 100,
        saveAmount: 250000,
        expectedAchievementDate: '2025-12',
        expectedTotalAmount: 2500000,
      },
    ],
  },
  {
    id: 3,
    goalName: '내 집 마련',
    categoryName: '내 집 마련',
    nowmeName: '미래계획형',
    progressRate: 60,
    targetAmount: 67500000,
    currentAmount: 40500000,
    goalDurationMonths: 36,
    remainingMonths: 14,
    saveAmount: 1800000,
    futureMeMessage: `안녕, 집을 위한 첫걸음을 시작한 너에게 박수를 보낼게 👏
안정적인 상품으로 너의 미래를 설계해보자!`,
    selectedProductId: 45,
    recommendedProducts: [
      {
        id: 45,
        name: 'KB주택청약 적금',
        bank: 'KB국민은행',
        category:'적금',
        interestRate: 4.0,
        achievementRate: 92,
        saveAmount: 2000000,
        expectedAchievementDate: '2027-12',
        expectedTotalAmount: 67500000,
      },
    ],
  },
]


export const mockGoalSimulationInput: GoalSimulationInput = {
  goalName: '바르셀로나 여행',
  categoryId: 2,
  targetAmount: 2400000,
  goalDurationMonths: 24,
};



export const mockGoalReportSave: GoalReportSaveRequest = {
  selectedProductId: 55,
  status: 'PUBLISHED',
};



export const mockGoalSimulationResponse: GoalSimulationResponse = {
  goalId: 123,
  futureMeMessage: "안녕! 난 미래의 너야! 👋\n자산 분석을 통한 너의 맞춤형인 '자린고비형'에 맞는 상품을 추천해줄게!",
  recommendedProducts: [
    {
      id: 55,
      name: '카카오뱅크 세이브업 적금',
      bank: '카카오뱅크',
      category:'적금',
      interestRate: 3.9,
      achievementRate: 98,
      saveAmount: 150000,
      expectedAchievementDate: '2026-11',
      expectedTotalAmount: 3000000,
    },
    {
      id: 62,
      name: '토스뱅크 먼저 예금',
      bank: '토스뱅크',
      category:'예금',
      interestRate: 3.9,
      achievementRate: 90,
      saveAmount: 150000,
      expectedAchievementDate: '2026-11',
      expectedTotalAmount: 3000000,
    },
    {
      id: 68,
      name: '케이뱅크 코드K 자유적금',
      bank: '케이뱅크',
      category:'적금',
      interestRate: 4.1,
      achievementRate: 93,
      saveAmount: 150000,
      expectedAchievementDate: '2026-11',
      expectedTotalAmount: 3000000,
    },
  ],
}