/** 자산 분석 요약 정보 */
export interface AssetSummaryMeta {
  totalAmount: number
  changeRate: number
  changeAmount: number
}

// 차트 데이터 
export interface AssetCategoryRatio {
  assetCategory: string      
  percentage: number         
}

// 차트 데이터 모음
export interface AssetCategoryRatioResponse {
  categories: AssetCategoryRatio[]
}

// 자산 타입에 대한 내용
export interface AssetDetailItem {
  assetCategory: string        
  amount: number              
  accountsCount: number        
}
export interface AssetDetailResponse {
  meta: any
  categories: AssetDetailItem[]
}

// 자산 계좌에 대한 내용
export interface AssetAccountDetail {
  bankName: string
  accountName: string
  accountNumber: string        
  balance: number              
}
export interface AssetCategoryDetail {
  assetCategory: string
  totalAmount: number          
  accounts: AssetAccountDetail[]
}

// 탭키 타입 
export const assetTabs = ['자산 현황', '소비 분석'] as const
export type AssetTabKey = (typeof assetTabs)[number]

export type AssetOrConsumptionSummary = {
  tab: AssetTabKey
  totalAmount: number
  chartItems: {
    type: string
    label: string
    percentage: number
  }[]
}

// 단일 계좌 정보
export interface AccountDetail {
  accountId : number,
  bankName: string
  accountName: string
  accountNumber: string        
  balance: number            
}

// 특정 자산 카테고리 상세 정보
export interface AssetCategoryDetailResponse {
  assetCategory: string
  totalAmount: number         
  accounts: AccountDetail[]
}