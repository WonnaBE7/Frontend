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
    meta: null as AssetSummaryMeta | null,
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
      meta: null as AssetDetailResponse | null,
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
    meta: null as AssetCategoryRatioResponse | null,
  }),
  actions : {
    async fetchAssetsCategoryRatio() {
      this.meta = await getAssetsCategoryRatio()
    }
  },
  persist: true
})

export type AssetCategoryType = 'checking' | 'savings' | 'investment' | 'insurance' | 'other' | 'pension'

export const useAssetCategoryDetailStore = defineStore('assetCategoryDetail', {
  state: () => ({
    categoryDetails: {} as Record<AssetCategoryType, AssetCategoryDetailResponse | null>,
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

