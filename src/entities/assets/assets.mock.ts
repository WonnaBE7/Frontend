import type { 
  AssetSummaryMeta, 
  AssetDetailResponse, 
  AssetCategoryRatioResponse, 
  AssetCategoryDetailResponse 
} from './assets.entity'

export const mockAssetSummaryMeta: AssetSummaryMeta = {
  totalAmount: 52000000,
  changeRate: 9.5,           
  changeAmount: 4500000
}

export const mockAssetCategoryDetailResponse: AssetDetailResponse = {
  categories: [
    {
      assetCategory: 'checking',
      amount: 25000000,
      accountsCount: 3,
    },
    {
      assetCategory: 'savings',
      amount: 12000000,
      accountsCount: 2,
    },
    {
      assetCategory: 'investment',
      amount: 8000000,
      accountsCount: 2,
    },
    {
      assetCategory: 'pension',
      amount: 5000000,
      accountsCount: 2,
    },
    {
      assetCategory: 'insurance',
      amount: 3000000,
      accountsCount: 2,
    },
    {
      assetCategory: 'other',
      amount: 2000000,
      accountsCount: 2,
    },
  ],
  meta: undefined
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
      assetCategory: 'pension',
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
  totalAmount: 25000000,       
  accounts: [
    {
      accountId : 1,
      bankName: '우리은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '1002-***-*****56',  
      balance: 15000000         
    },
    {
      accountId : 1,
      bankName: 'KB국민은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '123456-**-*****78',
      balance: 8000000          
    },
    {
      accountId : 1,
      bankName: '신한은행',
      accountName: 'ＫＢ마이핏통장',
      accountNumber: '110-***-*****90',
      balance: 2000000          
    }
  ]
}

export const mockSavingsCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'savings',
  totalAmount: 12000000,       
  accounts: [
    {
      accountId : 1,
      bankName: '카카오뱅크',
      accountName: '세이프박스',
      accountNumber: '3333-**-***556',
      balance: 6000000          
    },
    {
      accountId : 1,
      bankName: '토스뱅크',
      accountName: '자동저축',
      accountNumber: '1004-**-**888',
      balance: 6000000          
    }
  ]
}

export const mockInvestmentCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'investment',
  totalAmount: 8000000,        
  accounts: [
    {
      accountId : 1,
      bankName: '삼성증권',
      accountName: '주식계좌',
      accountNumber: '0000-11-22-33',
      balance: 8000000          
    }
  ]
}

export const mockPesionCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'pension',
  totalAmount: 100000000,        
  accounts: [
    {
      accountId : 1,
      bankName: '삼성증권',
      accountName: '주식계좌',
      accountNumber: '0000-11-22-33',
      balance: 8000000          
    }
  ]
}


export const mockInsuranceCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'insurance',
  totalAmount: 5000000,        
  accounts: [
    {
      accountId : 1,
      bankName: '삼성생명',
      accountName: '연금보험',
      accountNumber: '9000-99-88',
      balance: 5000000          
    }
  ]
}

export const mockOtherCategoryDetail: AssetCategoryDetailResponse = {
  assetCategory: 'other',
  totalAmount: 2000000,        
  accounts: [
    {
      accountId : 1,
      bankName: '농협은행',
      accountName: '예비자금',
      accountNumber: '1122-33-444',
      balance: 2000000         
    }
  ]
}

export const mockCategoryDetailMap: Record<string, AssetCategoryDetailResponse> = {
  checking: mockCheckingCategoryDetail,
  savings: mockSavingsCategoryDetail,
  investment: mockInvestmentCategoryDetail,
  insurance: mockInsuranceCategoryDetail,
  pension:mockPesionCategoryDetail,
  other: mockOtherCategoryDetail,
}

import type { AccountDetailResponse } from './assets.api'

export const mockAccountDetail: AccountDetailResponse = {
  bankName: '국민은행',
  accountName: 'ＫＢ마이핏통장',
  accountNumber: '1002-***-*****56',
  transactions: [
    {
      transactionName: '정민지 7월 급여',
      transactionDate: '2025-07-25',
      transactionTime: '08:24:59',
      amount: -2000000.0
    },
    {
      transactionName: '정민지7월급여',
      transactionDate: '2025-07-25',
      transactionTime: '08:24:08',
      amount: 2000000.0
    },
    {
      transactionName: '정민지',
      transactionDate: '2025-07-25',
      transactionTime: '08:19:31',
      amount: -981.0
    },
    {
      transactionName:
        '예금이자        1,141 소득세       150 지방소득세        10',
      transactionDate: '2025-07-21',
      transactionTime: '07:55:10',
      amount: 981.0
    }
  ]
}