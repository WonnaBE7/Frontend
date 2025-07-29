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
  status: 'PUBLISHED' | 'DELETED' | 'ACHIEVED'
}

export interface GoalSummary {
  totalGoalCount: number
  totalTargetAmount: number
  goals: Goal[]
}

// 공통으로 사용하는 추천 상품 타입
export interface RecommendedProduct {
  id: number
  name: string
  bank: string
  tag: string[]
  interestRate: number
  achievementRate: number
  monthlyDepositAmount: number
  expectedAchievementDate: string // YYYY-MM
  expectedTotalAmount: number
}

// 목표 리포트 (상세 조회용)
export interface GoalReport {
  id: number
  goalName: string
  categoryName: string
  nowmeName: string
  progressRate: number
  targetAmount: number
  currentAmount: number
  goalDurationMonths: number
  remainingMonths: number
  monthlySaveAmount: number
  futureMeMessage: string
  selectedProductId: number
  recommendedProducts: RecommendedProduct[]
}

// 시뮬레이션 요청용
export interface GoalSimulationInput {
  goalName: string
  categoryId: number
  targetAmount: number
  goalDurationMonths: number
}

// 시뮬레이션 응답용
export interface GoalSimulationResponse {
  goalId: number
  futureMeMessage: string
  recommendedProducts: RecommendedProduct[]
}

// 리포트 저장 요청용
export interface GoalReportSaveRequest {
  selectedProductId: number
  status: 'PUBLISHED' | 'DRAFT'
}