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
  status: 'PUBLISHED' | 'DELETED' | 'COMPLETED' 
}

export interface GoalSummary {
  totalGoalCount: number
  totalTargetAmount: number
  goals: Goal[]
}

export interface RecommendedProduct {
  id: number;
  name: string;
  bank: string;
  tag: string[];
  interestRate: number;
  achievementRate: number;
  monthlyDepositAmount: number;
  expectedAchievementDate: string; // YYYY-MM
  expectedTotalAmount: number;
}

export interface GoalReport {
  id: number;
  goalName: string;
  categoryName: string;
  nowmeName: string;
  progressRate: number;
  targetAmount: number;
  currentAmount: number;
  goalDurationMonths: number;
  remainingMonths: number;
  monthlySaveAmount: number;
  futureMeMessage: string;
  selectedProductId: number;
  recommendedProducts: RecommendedProduct[];
}

export interface GoalSimulationInput {
  goalName: string;
  categoryId: number;
  targetAmount: number;
  goalDurationMonths: number;
}


export interface GoalReportSaveRequest {
  selectedProductId: number;
  status: 'PUBLISHED' | 'DRAFT'; // 혹은 다른 상태가 더 있다면 여기에 추가
}