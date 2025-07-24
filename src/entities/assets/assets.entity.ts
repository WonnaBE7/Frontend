// 자산 카테고리
export interface AssetCategory {
    assetCategory: 'checking' | 'savings' | 'investment' | 'insurance' | 'other'
    amount: number
    percentage: number
  }
  
  // 자산 요약
  export interface AssetSummary {
    totalAmount: number
    categories: AssetCategory[]
  }
  
  // 소비 카테고리
  export interface ConsumptionCategory {
    consumptionCategory: 'living' | 'transport' | 'shoppingLeisure' | 'financial' | 'other'
    amount: number
    percentage: number
  }
  
  // 소비 요약
  export interface ConsumptionSummary {
    totalAmount: number
    categories: ConsumptionCategory[]
  }

  export interface AssetItem {
    type: string
    label: string
    percentage: number
  }

  /** 카테고리별 자산 항목 */
export interface AssetCategoryItem {
    assetCategory: string
    amount: number
    percentage: number
    accountsCount: number
  }
  
  /** 자산 분석 요약 정보 */
  export interface AssetSummaryMeta {
    totalAssets: number
    changeAmount: number
    changeRate: number
  }
  
  /** 전체 자산 분석 응답 구조 */
  export interface AssetAnalysis {
    meta: AssetSummaryMeta
    categories: AssetCategoryItem[]
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