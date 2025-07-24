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

  // 통합 타입 (탭 UI에서 사용)
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