// 공통 타입들
export type ProductType = 'savings' | 'card' | 'insurance'

// 현재 보유상품 조회
export interface DepositProduct {
  productId: string
  productName: string
  interestRate: number
}

export interface CardProduct {
  cardId: string
  cardName: string
  benefitDescription: string
}

export interface InsuranceProduct {
  productId: string
  insuranceName: string
  coverage: string
}

// 보유 상품 3가지 모음
export interface CurrentProductsResponse {
  deposits: {
    count: number
    products: DepositProduct[]
  }
  cards: {
    count: number
    products: CardProduct[]
  }
  insurances: {
    count: number
    products: InsuranceProduct[]
  }
}

// 상품 상세 조회 (현재 보유상품용)
export interface MonthlyChartItem {
  month: string             
  percentage: number
}

export interface SavingsDetailResponse {
  productId: string
  productName: string
  bankName: string
  category: string
  startDate: string         
  maturityDate: string      
  term: string
  total_term: string
  currentAmount: string
  rate: string
  beforeInterest: string
  achievementRate: string
  monthlyChart: MonthlyChartItem[]
}

export interface InsuranceDetailResponse {
  productId: string
  insuranceName: string
  insuranceCompany: string
  startDate: string          // "YYYY-MM" 형식
  maturityDate: string       // "YYYY-MM" 형식
  term: string
  currentAmount: string
  getAmount: string
  achievementRate: string
  monthlyChart: MonthlyChartItem[]
}

export interface MonthlyConsumption {
  month: string              // "YYYY-MM" 형식
  amount: number
}

export interface CardDetailResponse {
  cardId: string
  cardName: string
  cardCompany: string
  startDate: string          // "YYYY-MM" 형식
  expiryDate: string         // "YYYY-MM" 형식
  term: string
  currentAmount: number
  performanceRate: number
  monthlyConsumptions: MonthlyConsumption[]
}

// 추천 상품 조회
export interface RecommendedSavingsProduct {
  productType: 'savings'
  productId: string
  productName: string
  bankName: string
  baseRate: number
  maxRate: number
  totalScore: number
}

export interface SavingsRecommendationResponse {
  userId: string
  recommendationsByPersona: {
    personaId: number
    personaName: string
    products: RecommendedSavingsProduct[]
  }[]
}

export interface RecommendedInsuranceProduct {
  productType: 'insurance'
  productId: string
  productName: string
  providerName: string
  coverageType: string
  coverageLimit:string
  totalScore:number
}

export interface InsuranceRecommendationResponse {
  userId: string
  recommendationsByPersona: {
    personaId: number
    personaName: string
    products: RecommendedInsuranceProduct[]
  }[]
}

export interface RecommendedCardProduct {
  productType: 'card'
  cardId: string
  cardName: string
  cardCompany: string
  cardType: string 
  matchScore: number
  mainBenefit: string
  annualFeeDomestic: string
  annualFeeOverSeas: string
}

export interface CardRecommendationResponse {
  userId: string
  recommendationsByPersona: {
    personaId: number
    personaName: string
    products: RecommendedCardProduct[]
  }[]
}

// 관심상품 목록
export type WishlistProduct = RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct

export interface WishlistResponse {
  totalCount: number
  products: WishlistProduct[]
}

// 관심상품 추가/제거
export interface WishlistActionRequest {
  action: 'add' | 'remove'
  productType: ProductType
  productId?: string         // 예적금/보험용
  cardId?: string           // 카드용
}

export interface WishlistActionResponse {
  productId?: string        // 예적금/보험용
  cardId?: string          // 카드용
  productType: string
  isWishlisted: boolean
  totalWishlistCount: number
}

// 상품 신청
export interface SavingsApplicationRequest {
  productType: 'savings'
  productId: string
  accountAlias: string
  monthlyDeposit: number
  savingPeriod: number
  transferDate: number
}

export interface InsuranceApplicationRequest {
  productType: 'insurance'
  productId: string
  name: string
  birthDate: string          // "YYYY-MM-DD" 형식
  gender: 'M' | 'F'
  phone: string
  transferDate: number
}

export interface CardApplicationRequest {
  productType: 'card'
  cardId: string
  cardType: string
  linkedAccount: string 
}

// 상품 상세보기 페이지 공통
export interface ComparisonChart {
  compareId : number
  compareName: string
  recommendedProductData: number[]
}

export interface MainFeature {
  title: string
  items: string[]
}

// 예적금 상세보기 페이지
export interface SavingsProductInfo {
  productId: string
  productName: string
  bankName: string
  matchScore: number
  mainBenefit: string
  interestRate: string
  description: string
}

export interface SavingsTermsAndConditions {
  joinConditions: string
  requiredDocuments: string
  specialNotes: string[]
}

export interface SavingsDetailPageResponse {
  productInfo: SavingsProductInfo
  comparisonCharts: ComparisonChart
  mainFeatures: MainFeature[]
  termsAndConditions: SavingsTermsAndConditions
}

// 카드 상세보기 페이지 (보험상품 상세 조회에서 나온 데이터)
export interface CardProductInfo {
  cardId: string          
  cardName: string
  cardCompany: string
  cardType:string
  matchScore: number
  mainBenefit: string
  benefitSummary: string
  labels : string[]
  isWished : boolean
  currentUserData : number[]
}


export interface CardNote {
  category: string
  previousMonthSpendig: string 
  usage: string
  annualFee: string
}

export interface CardDetailPageResponse {
  productInfo: CardProductInfo
  comparisonCharts: ComparisonChart[]
  note: CardNote
}

// 보험 상세보기 페이지
export interface InsuranceProductInfo {
  productId: string
  productName: string
  productCompany: string
  matchScore: number
  mainBenefit: string
  benefitRate: string
  description: string
}

export interface InsurancesDetailPageResponse {
  productInfo: InsuranceProductInfo
  comparisonCharts: ComparisonChart
  mainFeatures: MainFeature[]
  termsAndConditions: InsurancesTermsAndConditions
}

export interface InsurancesTermsAndConditions {
  annualFee: string
  previousPerformance: string
  specialNotes: string[]
}

export interface CommonChartData{
  cardName:string
  labels: string[]
  currentUserData: number[]
  comparisonCharts:ComparisonChart[]
}