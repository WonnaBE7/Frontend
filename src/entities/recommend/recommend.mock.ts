import type {
  CurrentProductsResponse,
  SavingsDetailResponse,
  InsuranceDetailResponse,
  CardDetailResponse,
  SavingsRecommendationResponse,
  CardRecommendationResponse,
  WishlistResponse,
  WishlistActionResponse,
  SavingsDetailPageResponse,
  CardDetailPageResponse,
  SavingsApplicationRequest,
  InsuranceApplicationRequest,
  CardApplicationRequest,
  InsurancesDetailPageResponse,
  InsuranceRecommendationResponse
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
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '102',
          productName: '절약형 정기예금',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '103',
          productName: '하나 알뜰 저축',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '104',
          productName: '우리 적금 플랜',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '105',
          productName: '카카오 절약 저축',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
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
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '202',
          productName: '스마트 적금 플랜',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '203',
          productName: '균형 투자 저축',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '204',
          productName: '우리 밸런스 저축',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '205',
          productName: '카카오 균형 플랜',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
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
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '302',
          productName: '신한 스타터 예금',
          bankName: '신한은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '303',
          productName: '하나 새싹 플랜',
          bankName: '하나은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '304',
          productName: '우리 첫 투자 적금',
          bankName: '우리은행',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        },
        {
          productType: 'savings',
          productId: '305',
          productName: '카카오 새싹 예금',
          bankName: '카카오뱅크',
          baseRate: 3.10,
          maxRate: 4.10,
          totalScore: 86.0
        }
      ]
    }
  ]
}

// 보험 추천 상품
export const mockInsuranceRecommendation: InsuranceRecommendationResponse = {
  userId: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
  recommendationsByPersona: [
    {
      personaId: 1,
      personaName: '자린고비형',
      products: [
        {
          productType: 'insurance',
          productId: '101',
          productName: '절약 플랜 보험',
          providerName: 'KB손해보험',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '102',
          productName: '최소보장 건강보험',
          providerName: 'DB손해보험',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '103',
          productName: '가성비 의료실비',
          providerName: '메리츠화재',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: 'I104',
          productName: '미니 생명보험',
          providerName: '교보생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '105',
          productName: '토스 간편보험',
          providerName: '토스',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        }
      ]
    },
    {
      personaId: 11,
      personaName: '균형 성장형',
      products: [
        {
          productType: 'insurance',
          productId: '201',
          productName: '종합보장 패키지',
          providerName: '삼성생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '202',
          productName: '미래플랜 보험',
          providerName: '한화생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: 'I203',
          productName: '밸런스 케어 보험',
          providerName: '현대해상',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '204',
          productName: '적립형 건강보험',
          providerName: '롯데손보',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '205',
          productName: '마이플랜 생명보험',
          providerName: 'KB생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        }
      ]
    },
    {
      personaId: 5,
      personaName: '새싹 투자형',
      products: [
        {
          productType: 'insurance',
          productId: '301',
          productName: '투자 입문 보험',
          providerName: '카카오손보',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '302',
          productName: '기초 건강플랜',
          providerName: '메트라이프',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '303',
          productName: '소액 저축 보험',
          providerName: 'AIA생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '304',
          productName: '비상금 보험',
          providerName: '라이나생명',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        },
        {
          productType: 'insurance',
          productId: '305',
          productName: '토스 간편보험',
          providerName: '토스',
          coverageType: "상해급여",
          coverageLimit: "연간 5천만원",
          totalScore: 96.4
        }
      ]
    }
  ]
}


// 카드 추천 상품
export const mockCardRecommendation:CardRecommendationResponse = {
  userId: 'a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78',
  recommendationsByPersona: [
    {
      personaId: 1,
      personaName: '자린고비형',
      products: [
        {
          productType: 'card',
          cardId: '1001',
          cardName: 'KB절약카드',
          cardCompany: '국민카드',
          cardType: '체크카드',
          matchScore: 95,
          mainBenefit: '생활비 캐시백 5%',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '1002',
          cardName: '신한 짠테크 카드',
          cardCompany: '신한카드',
          cardType: '체크카드',
          matchScore: 91,
          mainBenefit: '저축 자동이체 시 포인트 적립',
          annualFeeDomestic: '면제',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '1003',
          cardName: '우리 절약형 카드',
          cardCompany: '우리카드',
          cardType: '체크카드',
          matchScore: 89,
          mainBenefit: '공과금 할인',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '1004',
          cardName: '하나 알뜰카드',
          cardCompany: '하나카드',
          cardType: '체크카드',
          matchScore: 87,
          mainBenefit: '지하철/버스 할인',
          annualFeeDomestic: '면제',
          annualFeeOverSeas: '면제'
        },
        {
          productType: 'card',
          cardId: '1005',
          cardName: '카카오 절약카드',
          cardCompany: '카카오페이',
          cardType: '체크카드',
          matchScore: 90,
          mainBenefit: '카카오페이 결제시 적립',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '5,000'
        }
      ]
    },
    {
      personaId: 11,
      personaName: '균형 성장형',
      products: [
        {
          productType: 'card',
          cardId: '1101',
          cardName: '삼성 밸런스 카드',
          cardCompany: '삼성카드',
          cardType: '신용카드',
          matchScore: 92,
          mainBenefit: '쇼핑/여행/저축 균형 적립',
          annualFeeDomestic: '10,000',
          annualFeeOverSeas: '15,000'
        },
        {
          productType: 'card',
          cardId: '1102',
          cardName: '롯데 스마트밸런스',
          cardCompany: '롯데카드',
          cardType: '신용카드',
          matchScore: 90,
          mainBenefit: '생활/금융 포인트 자동 분배',
          annualFeeDomestic: '8,000',
          annualFeeOverSeas: '12,000'
        },
        {
          productType: 'card',
          cardId: '1103',
          cardName: '하나 균형잡힌 카드',
          cardCompany: '하나카드',
          cardType: '체크카드',
          matchScore: 88,
          mainBenefit: '카테고리별 할인 균등 제공',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '1104',
          cardName: '우리 성장형 카드',
          cardCompany: '우리카드',
          cardType: '신용카드',
          matchScore: 85,
          mainBenefit: '적립과 할인 동시 제공',
          annualFeeDomestic: '10,000',
          annualFeeOverSeas: '15,000'
        },
        {
          productType: 'card',
          cardId: '1105',
          cardName: '토스 밸런스 카드',
          cardCompany: '토스',
          cardType: '체크카드',
          matchScore: 89,
          mainBenefit: '월 소비 패턴 기반 리워드',
          annualFeeDomestic: '무료',
          annualFeeOverSeas: '5,000'
        }
      ]
    },
    {
      personaId: 5,
      personaName: '새싹 투자형',
      products: [
        {
          productType: 'card',
          cardId: '0501',
          cardName: '신한 투자 첫걸음 카드',
          cardCompany: '신한카드',
          cardType: '신용카드',
          matchScore: 93,
          mainBenefit: '증권사 자동이체 2% 적립',
          annualFeeDomestic: '5,000',
          annualFeeOverSeas: '5,000'
        },
        {
          productType: 'card',
          cardId: '0502',
          cardName: 'NH 투자응원 카드',
          cardCompany: 'NH카드',
          cardType: '체크카드',
          matchScore: 91,
          mainBenefit: '주식 투자시 캐시백 제공',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '0503',
          cardName: '토스 주식카드',
          cardCompany: '토스',
          cardType: '체크카드',
          matchScore: 89,
          mainBenefit: '증권계좌 연동 시 혜택',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '없음'
        },
        {
          productType: 'card',
          cardId: '0504',
          cardName: '삼성 새싹 투자카드',
          cardCompany: '삼성카드',
          cardType: '신용카드',
          matchScore: 86,
          mainBenefit: '금융앱 연동 포인트 적립',
          annualFeeDomestic: '8,000',
          annualFeeOverSeas: '10,000'
        },
        {
          productType: 'card',
          cardId: '0505',
          cardName: '카카오 주린이카드',
          cardCompany: '카카오뱅크',
          cardType: '체크카드',
          matchScore: 90,
          mainBenefit: '소액 투자 시 매월 리워드',
          annualFeeDomestic: '없음',
          annualFeeOverSeas: '5,000'
        }
      ]
    }
  ]
}

// 관심상품 목록
export const mockWishlist: WishlistResponse = {
  totalCount: 3,
  products: [
    {
      productType: "savings",
      productId: "1",
      productName: "테스트 적금 상품 1",
      bankName: "테스트은행1",
      baseRate: 3.10,
      maxRate: 4.10,
      totalScore: 86.0
    },
    {
      productType: "card",
      cardId: "2001",
      cardName: "카카오페이 카드",
      cardCompany: "카카오페이",
      cardType: "체크카드",
      matchScore: 94,
      mainBenefit: "간편결제 5% 적립",
      annualFeeDomestic: "해당안함",
      annualFeeOverSeas: "5000"
    },
    {
      productType: "insurance",
      productId: "3001",
      productName: "실손의료비보험2507",
      providerName: "DB손보",
      coverageType: "상해급여",
      coverageLimit: "연간 5천만원",
      totalScore: 96.4
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

// 상품 신청 요청 예시
export const mockSavingsApplicationRequest: SavingsApplicationRequest = {
  productType: "savings",
  productId: "1001",
  productName: "KB적금",
  monthlyDeposit: 300000,
  savingsPeriod: 12,
}

export const mockInsuranceApplicationRequest: InsuranceApplicationRequest = {
  productType: "insurance",
  productId: "22222",
  productName:"KB 보험",
  userName: "홍길동",
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
    interestRate: "연 3.9%",
    maxInterestRate: "연 4.2%",             
    benefitSummary: "거래실적 따라 최고 연 0.1% 우대 제공", 
    isWished :false,
    labels: ["금리", "단/복리", "우대조건", "중도해지 페널티", "최대한도"],
    currentUserData: [95, 70, 90, 75, 80], 
  },
  comparisonCharts: [{
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
  productInfo: {
    cardId: "100", 
    cardName: "카카오페이 카드",
    cardCompany: "카카오페이",
    matchScore: 94,
    mainBenefit: "간편결제 5% 적립",
    cardType: "debit",
    benefitSummary: "스타벅스 50% 할인\n대중교통 10% 할인\nCGV, 롯데시네마 5,000원 할인",
    labels: ["확장성", "혜택 범위", "전월 실적", "카드 활용도", "연회비 부담"],
    isWished: false,
    currentUserData: [80, 60, 40, 80, 60],
  },
  comparisonCharts:  [
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
      previousMonthSpendig: "전월 실적: 없음",
      usage: "국내 전용 / 해외 겸용",
      annualFee: "국내 연회비: 없음 / 해외 연회비: 없음"
    }
}


export const mockInsuranesDetailPage : InsurancesDetailPageResponse={
  productInfo: {
      productId: "01",
      productName: "카카오페이 보험",
      providerName: "DB손보",                   
      matchScore: 95,                            
      coverageType: "상해급여",                   
      coverageLimit: "연간 5천만원 한도",          
      deductible: "급여 10% 또는 20%",             
      average_premium: "13,000원",           
      isWished: false,
      labels: ["가격 경쟁력", "보장한도", "보장범위", "자기부담금 수준", "환급범위"],
      currentUserData: [60, 80, 70, 65, 75],
    },
    comparisonCharts: [{
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
