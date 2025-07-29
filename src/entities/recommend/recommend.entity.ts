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
  month: string              // "YYYY-MM" 형식
  percentage: number
}

export interface SavingsDetailResponse {
  productId: string
  productName: string
  bankName: string
  category: string
  startDate: string          // "YYYY-MM" 형식
  maturityDate: string       // "YYYY-MM" 형식
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
  productType?: 'savings'    // 첫 번째 상품만 있을 수 있음
  productId: string
  productName: string
  bankName: string
  type: string
  interestRate: number
  matchScore: number
}

export interface SavingsRecommendationResponse {
  totalProducts: number
  products: RecommendedSavingsProduct[]
}

export interface RecommendedInsuranceProduct {
  productId: string
  insuranceName: string
  insuranceCompany: string
  matchScore: number
  mainCoverage: string
  monthlyPremium: number
}

export interface InsuranceRecommendationResponse {
  totalProducts: number
  products: RecommendedInsuranceProduct[]
}

export interface RecommendedCardProduct {
  productType: 'card'
  cardId: string
  cardName: string
  cardCompany: string
  cardType: string
  matchScore: number
  mainBenefit: string
  annualFeeDomestic: number
  annualFeeOverSeas: number
}

export interface CardRecommendationResponse {
  totalProducts: number
  products: RecommendedCardProduct[]
}

// 관심상품 목록
export interface WishlistSavingsProduct {
  productType: 'savings'
  productId: string
  productName: string
  bankName: string
  interestRate: number
  matchScore: number
}

export interface WishlistCardProduct {
  productType: 'card'
  cardId: string
  cardName: string
  cardCompany: string
  cardType: string
  matchScore: number
  mainBenefit: string
  annualFee: number
}

export interface WishlistInsuranceProduct {
  productType: 'insurance'
  productId: string
  insuranceName: string
  insuranceCompany: string
  matchScore: number
  mainCoverage: string
  monthlyPremium: number
}

export type WishlistProduct = WishlistSavingsProduct | WishlistCardProduct | WishlistInsuranceProduct

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
  labels: string[]
  currentUserData: number[]
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
  comparisonChart: ComparisonChart
  mainFeatures: MainFeature[]
  termsAndConditions: SavingsTermsAndConditions
}

// 카드 상세보기 페이지 (보험상품 상세 조회에서 나온 데이터)
export interface CardProductInfo {
  ptofuv?: string          // 오타로 보이는 필드
  cardId?: string          // 실제 사용되는 필드
  cardName?: string
  productName?: string     // 다른 API에서는 이걸 사용
  cardCompany?: string
  productCompany?: string  // 다른 API에서는 이걸 사용
  matchScore: number
  mainBenefit: string
  benefitRate?: string
  benefitSummary?: string
  description?: string
}

export interface CardTermsAndConditions {
  annualFee?: string
  previousPerformance?: string
  specialNotes?: string[]
}

export interface CardNote {
  category: string
  previousMonthSpendig: string // API의 오타 그대로 유지
  usage: string
  annualFee: string
}

export interface CardDetailPageResponse {
  productInfo: CardProductInfo
  comparisonChart: ComparisonChart
  mainFeatures?: MainFeature[]
  termsAndConditions?: CardTermsAndConditions
  Note?: CardNote
}