import type {
  CurrentProductsResponse,
  SavingsDetailResponse,
  InsuranceDetailResponse,
  CardDetailResponse,
  SavingsRecommendationResponse,
  WishlistActionResponse,
  SavingsDetailPageResponse,
  CardDetailPageResponse,
  InsuranceApplicationRequest,
  CardApplicationRequest,
  InsurancesDetailPageResponse,
} from './recommend.entity'

// 현재 보유상품 조회
export const mockCurrentProducts: CurrentProductsResponse = {
  savings: {
    count: 2,
    products: [
      {
        productId: "200",
        productName: "KB Star 적금",
        interestRate: 3.8
      },
      {
        productId: "201",
        productName: "우리은행 정기예금",
        interestRate: 3.2
      }
    ]
  },
  cards: {
    count: 1,
    products: [
      {
        cardId: "101",
        cardName: "현대카드 M",
        benefitDescription: "교통비 10% 적립"
      }
    ]
  },
  insurances: {
    count: 1,
    products: [
      {
        productId: "301",
        insuranceName: "동양생명 실손보험",
        coverage: "의료비 80% 보장"
      }
    ]
  }
}

// 예적금 상품 상세 조회
export const mockSavingsDetail: SavingsDetailResponse = {
  productId: "200",
  productName: "KB Star 적금",
  bankName: "KB국민은행",
  category: "적금",
  startDate: "2023-03",
  maturityDate: "2024-03",
  term: "16개월",
  total_term: "24개월",
  currentAmount: "200000",
  rate: "3.0%",
  beforeInterest: "62400",
  achievementRate: "66%",
  monthlyChart: [
    { month: "2025-03", percentage: 20 },
    { month: "2025-04", percentage: 35 },
    { month: "2025-05", percentage: 50 },
    { month: "2025-06", percentage: 70 },
    { month: "2025-07", percentage: 80 }
  ]
}

// 보험 상품 상세 조회
export const mockInsuranceDetail: InsuranceDetailResponse = {
  productId: "301",
  insuranceName: "동양생명 실손보험",
  insuranceCompany: "동양생명",
  startDate: "2023-03",
  maturityDate: "2024-03",
  term: "16개월",
  currentAmount: "1845000",
  getAmount: "180500",
  achievementRate: "95",
  monthlyChart: [
    { month: "2025-03", percentage: 0 },
    { month: "2025-04", percentage: 0 },
    { month: "2025-05", percentage: 80 },
    { month: "2025-06", percentage: 70 },
    { month: "2025-07", percentage: 80 }
  ]
}

// 카드 상품 상세 조회
export const mockCardDetail: CardDetailResponse = {
  cardId: "101",
  cardName: "신한 딥드림 카드",
  cardCompany: "신한카드",
  startDate: "2023-06",
  expiryDate: "2028-06",
  term: "60개월",
  currentAmount: 95000,
  performanceRate: 95,
  monthlyConsumptions: [
    { month: "2025-07", amount: 150020 },
    { month: "2025-06", amount: 130000 },
    { month: "2025-05", amount: 15000 },
    { month: "2025-04", amount: 20000 },
    { month: "2025-03", amount: 30000 }
  ]
}

// 예적금 추천 상품
export const mockSavingsRecommendation: SavingsRecommendationResponse = {
  userId: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
  recommendationsByPersona: [
    {
      personaId: 1,
      personaName: '자린고비형',
      products: [
        {
          productType: 'savings',
          productId: '101',
          productName: '알뜰 저축 예금',
          bankName: 'KB국민은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '102',
          productName: '절약형 정기예금',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '103',
          productName: '하나 알뜰 저축',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '104',
          productName: '우리 적금 플랜',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '105',
          productName: '카카오 절약 저축',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        }
      ]
    },
    {
      personaId: 11,
      personaName: '균형 성장형',
      products: [
        {
          productType: 'savings',
          productId: '201',
          productName: '밸런스 예금',
          bankName: 'KB국민은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '202',
          productName: '스마트 적금 플랜',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '203',
          productName: '균형 투자 저축',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '204',
          productName: '우리 밸런스 저축',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '205',
          productName: '카카오 균형 플랜',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        }
      ]
    },
    {
      personaId: 5,
      personaName: '새싹 투자형',
      products: [
        {
          productType: 'savings',
          productId: '301',
          productName: '첫걸음 적금',
          bankName: 'KB국민은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '302',
          productName: '신한 스타터 예금',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '303',
          productName: '하나 새싹 플랜',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '304',
          productName: '우리 첫 투자 적금',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        },
        {
          productType: 'savings',
          productId: '305',
          productName: '카카오 새싹 예금',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          score: 86.0
        }
      ]
    }
  ]
}

// 관심상품 추가/제거 응답
export const mockWishlistAddResponse: WishlistActionResponse = {
  productId: "1",
  productType: "deposit",
  isWishlisted: true,
  totalWishlistCount: 5
}

export const mockWishlistRemoveResponse: WishlistActionResponse = {
  productId: "1",
  productType: "deposit",
  isWishlisted: false,
  totalWishlistCount: 4
}


export const mockInsuranceApplicationRequest: InsuranceApplicationRequest = {
  productType: "insurance",
  insuranceId: "22222",
}

export const mockCardApplicationRequest: CardApplicationRequest = {
  productType: "card",
  cardId: "111",
  cardType: "check",
  linkedAccount: "110-234-567890"
}

// 예적금 상세보기 페이지
export const mockSavingsDetailPage: SavingsDetailPageResponse = {
  productInfo: {
    productId: "KAKAO_BANK_SAVE_001",
    productName: "카카오뱅크 세이브업 적금",
    bankName: "카카오뱅크",
    score: 95,
    interestRate: "연 3.9%",
    maxInterestRate: "연 4.2%",             
    benefitSummary: "거래실적 따라 최고 연 0.1% 우대 제공", 
    wished :false,
    labels: ["금리", "단/복리", "우대조건", "중도해지 페널티", "최대한도"],
    currentUserData: [95, 70, 90, 75, 80], 
  },
  comparisonChart: [{
    compareId : 1,
    compareName : "KB 적금",
    recommendedProductData: [80, 80, 100, 80, 100]
    },
  ],
  maturityInfo:{
      maxJoinPeroid : '36개월',
      title: "모바일 특화 서비스",
      content: [
        "소액 적금 가능 (1만원부터)",
        "자동이체 설정 가능",
        "실시간 잔액 확인"
      ]
  }
}

// 카드 상세보기 페이지 (보험상품 상세 조회 API 데이터)
export const mockCardDetailPage: CardDetailPageResponse = {
  cardInfo: {
    cardId: "100", 
    cardName: "카카오페이 카드",
    cardCompany: "카카오페이",
    score: 94,
    mainBenefit: "간편결제 5% 적립",
    cardType: "debit",
    benefitSummary: "스타벅스 50% 할인\n대중교통 10% 할인\nCGV, 롯데시네마 5,000원 할인",
    labels: ["확장성", "혜택 범위", "전월 실적", "카드 활용도", "연회비 부담"],
    isWished: false,
    currentUserData: [80, 60, 40, 80, 60],
  },
  comparisonChart:  [
    {
      compareId : 1,
      compareName : "삼성카드",
      recommendedProductData: [60, 80, 100, 80, 100]
    },
    {
      compareId : 4,
      compareName : "국민카드",
      recommendedProductData: [60, 80, 100, 80, 100]
    }
  ],
  note: {
      category: "혜택 적용 범위: 교통, 식비",
      previousMonthSpending: "전월 실적: 없음",
      usage: "국내 전용 / 해외 겸용",
      annualFee: "국내 연회비: 없음 / 해외 연회비: 없음"
    }
}


export const mockInsuranesDetailPage : InsurancesDetailPageResponse={
  productInfo: {
      productId: "01",
      productName: "카카오페이 보험",
      providerName: "DB손보",                   
      score: 95,                            
      coverageType: "상해급여",                   
      coverageLimit: "연간 5천만원 한도",          
      deductible: "급여 10% 또는 20%",             
      averagePremium: "13,000원",           
      wished: false,
      labels: ["가격 경쟁력", "보장한도", "보장범위", "자기부담금 수준", "환급범위"],
      currentUserData: [60, 80, 70, 65, 75],
    },
    comparisonChart: [{
      compareId : 1,
      compareName : "삼성화재",
      recommendedProductData: [100, 80, 100, 80, 100]
    },
    ],
    maturityInfo:{
        coverageDesc: "상해로 인한 급여 항목 의료비 보장",
        note: "기준일: 20250701, 유형: 4세대 실손의료보험, 제공기관: 손해보험협회",
    }
  }
