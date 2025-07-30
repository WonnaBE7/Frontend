/** 자산 분석 요약 정보 */
export interface AssetSummaryMeta {
  totalAmount: number
  changeRate: number
  changeAmount: number
}

// 소비 현황
export interface ConsumptionSummaryMeta {
  monthlyConsumption: number     
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
  amount: number               // 문자열에서 숫자로 수정
  accountsCount: number        
}
export interface AssetDetailResponse {
  categories: AssetDetailItem[]
}

// 자산 계좌에 대한 내용
export interface AssetAccountDetail {
  bankName: string
  accountName: string
  accountNumber: string         // number에서 string으로 (계좌번호는 보통 문자열)
  balance: number              // 문자열에서 숫자로 수정
}
export interface AssetCategoryDetail {
  assetCategory: string
  totalAmount: number          // 문자열에서 숫자로 수정
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
  bankName: string
  accountName: string
  accountNumber: string        // number에서 string으로 (계좌번호는 보통 문자열)
  balance: number             // 문자열에서 숫자로 수정
}

// 특정 자산 카테고리 상세 정보
export interface AssetCategoryDetailResponse {
  assetCategory: string
  totalAmount: number         // 문자열에서 숫자로 수정
  accounts: AccountDetail[]
}