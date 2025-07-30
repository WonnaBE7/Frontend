import type {
  CurrentProductsResponse,
  SavingsDetailResponse,
  InsuranceDetailResponse,
  CardDetailResponse,
  SavingsRecommendationResponse,
  InsuranceRecommendationResponse,
  CardRecommendationResponse,
  WishlistResponse,
  WishlistActionResponse,
  SavingsDetailPageResponse,
  CardDetailPageResponse,
  SavingsApplicationRequest,
  InsuranceApplicationRequest,
  CardApplicationRequest,
  InsurancesDetailPageResponse
} from './recommend.entity'

// 현재 보유상품 조회
export const mockCurrentProducts: CurrentProductsResponse = {
  deposits: {
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
  totalProducts: 4,
  products: [
    {
      productType: "savings",
      productId: "200",
      productName: "카카오뱅크 세이브 적금",
      bankName: "카카오뱅크",
      type: "정기적금",
      interestRate: 3.5,
      matchScore: 95
    },
    {
      productId: "TOSS_BANK_SAVE_001",
      productName: "토스뱅크 먼치 적금",
      bankName: "토스뱅크",
      type: "정기적금",
      interestRate: 3.5,
      matchScore: 92
    },
    {
      productId: "KB_STAR_FLEX_001",
      productName: "KB Star 정기적금",
      bankName: "KB국민은행",
      type: "정기적금",
      interestRate: 3.4,
      matchScore: 89
    }
  ]
}

// 보험 추천 상품
export const mockInsuranceRecommendation: InsuranceRecommendationResponse = {
  totalProducts: 1,
  products: [
    {
      productId: "3111",
      insuranceName: "토스 간편보험",
      insuranceCompany: "토스",
      matchScore: 93,
      mainCoverage: "월 1.5만원",
      monthlyPremium: 15000
    }
  ]
}

// 카드 추천 상품
export const mockCardRecommendation: CardRecommendationResponse = {
  totalProducts: 2,
  products: [
    {
      productType: "card",
      cardId: "10001",
      cardName: "카카오페이 카드",
      cardCompany: "카카오페이",
      cardType: "체크카드",
      matchScore: 94,
      mainBenefit: "간편결제 5% 적립",
      annualFeeDomestic: 0,
      annualFeeOverSeas: 5000
    },
    {
      productType: "card",
      cardId: "10001", // 동일한 데이터 (API에서 중복)
      cardName: "카카오페이 카드",
      cardCompany: "카카오페이",
      cardType: "체크카드",
      matchScore: 94,
      mainBenefit: "간편결제 5% 적립",
      annualFeeDomestic: 0,
      annualFeeOverSeas: 5000
    }
  ]
}

// 관심상품 목록
export const mockWishlist: WishlistResponse = {
  totalCount: 3,
  products: [
    {
      productType: "savings",
      productId: "300011",
      productName: "카카오뱅크 세이브업 적금",
      bankName: "카카오뱅크",
      interestRate: 3.5,
      matchScore: 95
    },
    {
      productType: "card",
      cardId: "1001",
      cardName: "카카오페이 카드",
      cardCompany: "카카오페이",
      cardType: "체크카드",
      matchScore: 94,
      mainBenefit: "간편결제 5% 적립",
      annualFee: 0
    },
    {
      productType: "insurance",
      productId: "100003",
      insuranceName: "토스 간편보험",
      insuranceCompany: "토스",
      matchScore: 93,
      mainCoverage: "월 1.5만원",
      monthlyPremium: 15000
    }
  ]
}

// 관심상품 추가/제거 응답
export const mockWishlistAddResponse: WishlistActionResponse = {
  productId: "KAKAO_BANK_SAVE_001",
  productType: "deposit",
  isWishlisted: true,
  totalWishlistCount: 5
}

export const mockWishlistRemoveResponse: WishlistActionResponse = {
  productId: "KAKAO_BANK_SAVE_001",
  productType: "deposit",
  isWishlisted: false,
  totalWishlistCount: 4
}

// 상품 신청 요청 예시
export const mockSavingsApplicationRequest: SavingsApplicationRequest = {
  productType: "savings",
  productId: "1001",
  accountAlias: "여행자금 적금",
  monthlyDeposit: 300000,
  savingPeriod: 12,
  transferDate: 25
}

export const mockInsuranceApplicationRequest: InsuranceApplicationRequest = {
  productType: "insurance",
  productId: "22222",
  name: "홍길동",
  birthDate: "1990-01-01",
  gender: "M",
  phone: "010-1234-5678",
  transferDate: 15
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
    matchScore: 95,
    mainBenefit: "앱으로 간편 관리",
    interestRate: "연 3.9%",
    description: "카카오뱅크 세이브업 적금은 모바일 특화 금융서비스로, 간편한 앱 인터페이스를 통해 누구나 쉽게 적금을 시작할 수 있습니다. 소액부터 시작 가능하며 금융 초보자에게 적합합니다."
  },
  comparisonChart: {
    labels: ["금리", "혜택", "편의성", "안정성", "접근성"],
    currentUserData: [3, 3, 2, 4, 3],
    recommendedProductData: [4, 4, 5, 4, 5]
  },
  mainFeatures: [
    {
      title: "모바일 특화 서비스",
      items: [
        "소액 적금 가능 (1만원부터)",
        "자동이체 설정 가능",
        "실시간 잔액 확인"
      ]
    }
  ],
  termsAndConditions: {
    joinConditions: "만 17세 이상",
    requiredDocuments: "카카오뱅크 계좌 보유자",
    specialNotes: [
      "본인 명의 휴대폰 필요",
      "본인 명의 휴대폰 필요2"
    ]
  }
}

// 카드 상세보기 페이지 (보험상품 상세 조회 API 데이터)
export const mockCardDetailPage: CardDetailPageResponse = {
  productInfo: {
    cardId: "100", 
    cardName: "카카오페이 카드",
    cardCompany: "카카오페이",
    matchScore: 94,
    mainBenefit: "간편결제 5% 적립",
    benefitSummary: "스타벅스 50% 할인\n대중교통 10% 할인\nCGV, 롯데시네마 5,000원 할인"
  },
  comparisonChart: {
    labels: ["혜택", "적절성", "편의성", "안정성", "접근성"],
    currentUserData: [3, 3, 3, 4, 4],
    recommendedProductData: [5, 4, 5, 4, 5]
  },
  note: {
      category: "혜택 적용 범위: 교통, 식비",
      previousMonthSpendig: "전월 실적: 없음",
      usage: "국내 전용 / 해외 겸용",
      annualFee: "국내 연회비: 없음 / 해외 연회비: 없음"
    }
}


export const mockInsuranesDetailPage : InsurancesDetailPageResponse={
  productInfo: {
      productId: "01",
      productName: "카카오페이 보험",
      productCompany: "카카오페이",
      matchScore: 94,
      mainBenefit: "간편결제 5% 적립",
      benefitRate: "최대 5%",
      description: "카카오페이 카드는 간편결제 시장을 선도하는 카드로, 일상 속 모든 결제를 더욱 편리하고 혜택있게 만들어줍니다. 특히 온라인 쇼핑과 배달앱 사용이 많은 분들께 최적화된 카드입니다."
    },
    comparisonChart: {
      labels: ["혜택", "적절성", "편의성", "안정성", "접근성"],
      currentUserData: [3, 3, 3, 4, 4],
      recommendedProductData: [5, 4, 5, 4, 5]
    },
    mainFeatures: [
      {
        title: "주요 혜택",
        items: [
          "간편결제 5% 적립",
          "온라인쇼핑 3% 적립",
          "배달앱 5% 할인"
        ]
      }
    ],
    termsAndConditions: {
      annualFee: "연회비 없음",
      previousPerformance: "전월실적 없음",
      specialNotes: [
        "카카오페이 가입 필수",
        "즉시 발급 가능"
      ]
    }
  }
