import { defineStore } from 'pinia'
import type { AssetCategoryDetailResponse, AssetCategoryRatioResponse, AssetDetailResponse, AssetSummaryMeta, AssetTabKey } from '@/entities/assets/assets.entity'
import { getAssetCategoryDetail, getAssets, getAssetsCategoryRatio, getAssetsSummary } from './assets.api'


export const useAssetTabStore = defineStore('assetTab', {
  state: () => ({
    selectedTab: '자산 현황' as AssetTabKey,
  }),
  actions: {
    setTab(tab: AssetTabKey) {
      this.selectedTab = tab
    },
  },
  persist: true
})

export const useAssetsMain = defineStore('assetsMain', {
  state : () => ({
    meta: (import.meta.env.VITE_USE_MOCK === 'true'
      ? { totalAmount: 52000000, changeRate: 9.5, changeAmount: 4500000 }
      : null) as AssetSummaryMeta | null,
  }),
  actions: {
    async fetchAssetsMain() {
      this.meta = await getAssets()
    }
  },
  persist: true
})

export const useAssetsDetail = defineStore('assetsDetail',{
    state: ()=> ({
      meta: (import.meta.env.VITE_USE_MOCK === 'true'
        ? {
            categories: [
              { assetCategory: 'checking', amount: 25000000, accountsCount: 3 },
              { assetCategory: 'savings', amount: 12000000, accountsCount: 2 },
              { assetCategory: 'investment', amount: 8000000, accountsCount: 2 },
              { assetCategory: 'pension', amount: 5000000, accountsCount: 2 },
              { assetCategory: 'insurance', amount: 3000000, accountsCount: 2 },
              { assetCategory: 'other', amount: 2000000, accountsCount: 2 }
            ],
            meta: undefined
          }
        : null) as AssetDetailResponse | null,
    }),
    actions : {
      async fetchAssetsDetail() {
        this.meta = await getAssetsSummary()
      }
    },
    persist: true
})

export const useAssetsCategoryRatio = defineStore('assetsCategoryRatio',{
  state: ()=> ({
    meta: (import.meta.env.VITE_USE_MOCK === 'true'
      ? {
          categories: [
            { assetCategory: 'checking', percentage: 48.1 },
            { assetCategory: 'savings', percentage: 23.1 },
            { assetCategory: 'investment', percentage: 15.4 },
            { assetCategory: 'pension', percentage: 9.6 },
            { assetCategory: 'other', percentage: 3.8 }
          ]
        }
      : null) as AssetCategoryRatioResponse | null,
  }),
  actions : {
    async fetchAssetsCategoryRatio() {
      this.meta = await getAssetsCategoryRatio()
    }
  },
  persist: true
})

export type AssetCategoryType = 'checking' | 'savings' | 'investment' | 'insurance' | 'other' | 'pension'

const getInitialCategoryDetails = (): Record<AssetCategoryType, AssetCategoryDetailResponse | null> => {
  if (import.meta.env.VITE_USE_MOCK === 'true') {
    return {
      checking: {
        assetCategory: 'checking',
        totalAmount: 25000000,
        accounts: [
          { accountId: 1, bankName: '우리은행', accountName: 'ＫＢ마이핏통장', accountNumber: '1002-***-*****56', balance: 15000000 },
          { accountId: 2, bankName: 'KB국민은행', accountName: 'ＫＢ마이핏통장', accountNumber: '123456-**-*****78', balance: 8000000 },
          { accountId: 3, bankName: '신한은행', accountName: 'ＫＢ마이핏통장', accountNumber: '110-***-*****90', balance: 2000000 }
        ]
      },
      savings: {
        assetCategory: 'savings',
        totalAmount: 12000000,
        accounts: [
          { accountId: 4, bankName: '카카오뱅크', accountName: '세이프박스', accountNumber: '3333-**-***556', balance: 6000000 },
          { accountId: 5, bankName: '토스뱅크', accountName: '자동저축', accountNumber: '1004-**-**888', balance: 6000000 }
        ]
      },
      investment: {
        assetCategory: 'investment',
        totalAmount: 8000000,
        accounts: [
          { accountId: 6, bankName: '삼성증권', accountName: '주식계좌', accountNumber: '0000-11-22-33', balance: 8000000 }
        ]
      },
      pension: {
        assetCategory: 'pension',
        totalAmount: 5000000,
        accounts: [
          { accountId: 7, bankName: '삼성증권', accountName: '연금계좌', accountNumber: '0000-11-22-44', balance: 5000000 }
        ]
      },
      insurance: {
        assetCategory: 'insurance',
        totalAmount: 3000000,
        accounts: [
          { accountId: 8, bankName: '삼성생명', accountName: '연금보험', accountNumber: '9000-99-88', balance: 3000000 }
        ]
      },
      other: {
        assetCategory: 'other',
        totalAmount: 2000000,
        accounts: [
          { accountId: 9, bankName: '농협은행', accountName: '예비자금', accountNumber: '1122-33-444', balance: 2000000 }
        ]
      }
    }
  }
  return {} as Record<AssetCategoryType, AssetCategoryDetailResponse | null>
}

export const useAssetCategoryDetailStore = defineStore('assetCategoryDetail', {
  state: () => ({
    categoryDetails: getInitialCategoryDetails(),
  }),

  actions: {
    async fetchAllCategoryDetails(category : AssetCategoryType) {
        const data = await getAssetCategoryDetail(category)
        this.categoryDetails[category] = data
    },

    getCategoryDetail(category: AssetCategoryType) {
      return this.categoryDetails[category]
    },
  },
})

