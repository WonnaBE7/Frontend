import type { AssetItem } from './assets.entity'

export const mockAssetItems: Record<string, AssetItem[]> = {
  '자산 현황': [
    { type: 'checking', label: '예금', percentage: 40 },
    { type: 'savings', label: '적금', percentage: 24 },
    { type: 'investment', label: '투자', percentage: 20 },
    { type: 'insurance', label: '연금', percentage: 12 },
    { type: 'other', label: '기타', percentage: 4 },
  ],
  '소비 분석': [
    { type: 'checking', label: '식비', percentage: 30 },
    { type: 'savings', label: '쇼핑', percentage: 25 },
    { type: 'investment', label: '교통', percentage: 15 },
    { type: 'insurance', label: '문화', percentage: 20 },
    { type: 'other', label: '기타', percentage: 10 },
  ],
}

import type { AssetAnalysis } from './assets.entity'

export const mockAssetAnalysis: AssetAnalysis = {
  meta: {
    totalAssets: 52000000,
    changeAmount: 4500000,
    changeRate: 9.5
  },
  categories: [
    {
      assetCategory: 'checking',
      amount: 25000000,
      percentage: 48.1,
      accountsCount: 3
    },
    {
      assetCategory: 'savings',
      amount: 12000000,
      percentage: 23.1,
      accountsCount: 2
    },
    {
      assetCategory: 'investment',
      amount: 8000000,
      percentage: 15.4,
      accountsCount: 2
    },
    {
      assetCategory: 'insurance',
      amount: 5000000,
      percentage: 9.6,
      accountsCount: 2
    },
    {
      assetCategory: 'other',
      amount: 2000000,
      percentage: 3.8,
      accountsCount: 2
    }
  ]
}