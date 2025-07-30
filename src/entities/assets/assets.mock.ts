import type { 
  AssetSummaryMeta, 
  ConsumptionSummaryMeta, 
  AssetDetailResponse, 
  AssetCategoryRatioResponse, 
  AssetCategoryDetailResponse 
} from './assets.entity'

export const mockAssetSummaryMeta: AssetSummaryMeta = {
  totalAmount: 52000000,      // 문자열에서 숫자로 수정
  changeRate: 9.5,           // 문자열에서 숫자로 수정
  changeAmount: 4500000      // 문자열에서 숫자로 수정
}

export const mockConsumptionSummaryMeta: ConsumptionSummaryMeta = {
  monthlyConsumption: 800000,  // 문자열에서 숫자로 수정
  changeRate: -1.5,           // 문자열에서 숫자로 수정
  changeAmount: -45000        // 문자열에서 숫자로 수정
}

export const mockAssetCategoryDetailResponse: AssetDetailResponse = {
  categories: [
    {
      assetCategory: 'checking',
      amount: 25000000,        // 문자열에서 숫자로 수정
      accountsCount: 3,
    },
    {
      assetCategory: 'savings',
      amount: 12000000,        // 문자열에서 숫자로 수정
      accountsCount: 2,
    },
    {
      assetCategory: 'investment',
      amount: 8000000,         // 문자열에서 숫자로 수정
      accountsCount: 2,
    },
    {
      assetCategory: 'insurance',
      amount: 5000000,         // 문자열에서 숫자로 수정
      accountsCount: 2,
    },
    {
      assetCategory: 'other',
      amount: 2000000,         // 문자열에서 숫자로 수정
      accountsCount: 2,
    },
  ],
}

export const mockAssetCategoryRatio: AssetCategoryRatioResponse = {
  categories: [
    {
      assetCategory: 'checking',
      percentage: 48.1
    },
    {
      assetCategory: 'savings',
      percentage: 23.1
    },
    {
      assetCategory: 'investment',
      percentage: 15.4
    },
    {
      assetCategory: 'insurance',
      percentage: 9.6
    },
    {
      assetCategory: 'other',
      percentage: 3.8
    }
  ]
}

export const mockCheckingCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'checking',
  totalAmount: 25000000,       // 문자열에서 숫자로 수정
  accounts: [
    {
      bankName: '우리은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '1002-***-*****56',  // 계좌번호는 문자열 유지
      balance: 15000000         // 문자열에서 숫자로 수정
    },
    {
      bankName: 'KB국민은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '123456-**-*****78',
      balance: 8000000          // 문자열에서 숫자로 수정
    },
    {
      bankName: '신한은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '110-***-*****90',
      balance: 2000000          // 문자열에서 숫자로 수정
    }
  ]
}

export const mockSavingsCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'savings',
  totalAmount: 12000000,       // 문자열에서 숫자로 수정
  accounts: [
    {
      bankName: '카카오뱅크',
      accountName: '세이프박스',
      accountNumber: '3333-**-***556',
      balance: 6000000          // 문자열에서 숫자로 수정
    },
    {
      bankName: '토스뱅크',
      accountName: '자동저축',
      accountNumber: '1004-**-**888',
      balance: 6000000          // 문자열에서 숫자로 수정
    }
  ]
}

export const mockInvestmentCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'investment',
  totalAmount: 8000000,        // 문자열에서 숫자로 수정
  accounts: [
    {
      bankName: '삼성증권',
      accountName: '주식계좌',
      accountNumber: '0000-11-22-33',
      balance: 8000000          // 문자열에서 숫자로 수정
    }
  ]
}

export const mockInsuranceCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'insurance',
  totalAmount: 5000000,        // 문자열에서 숫자로 수정
  accounts: [
    {
      bankName: '삼성생명',
      accountName: '연금보험',
      accountNumber: '9000-99-88',
      balance: 5000000          // 문자열에서 숫자로 수정
    }
  ]
}

export const mockOtherCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'other',
  totalAmount: 2000000,        // 문자열에서 숫자로 수정
  accounts: [
    {
      bankName: '농협은행',
      accountName: '예비자금',
      accountNumber: '1122-33-444',
      balance: 2000000          // 문자열에서 숫자로 수정
    }
  ]
}

export const mockCategoryDetailMap: Record<string, AssetCategoryDetailResponse> = {
  checking: mockCheckingCategoryDetail,
  savings: mockSavingsCategoryDetail,
  investment: mockInvestmentCategoryDetail,
  insurance: mockInsuranceCategoryDetail,
  other: mockOtherCategoryDetail,
}