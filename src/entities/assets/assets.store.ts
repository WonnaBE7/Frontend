import { defineStore } from 'pinia'
import type { AssetCategoryDetailResponse, AssetCategoryRatioResponse, AssetDetailResponse, AssetSummaryMeta, AssetTabKey } from '@/entities/assets/assets.entity'
import { getAssets } from './assets.api'
import { getAssetsCategoryRatio, getAssetsSummary } from '@/features/assets/assets-dashboard/service/assets-dashboard.service'
import { getAssetCategoryDetail } from '@/features/assets/assets-detail/service/assets-detail.service'

export const useAssetTabStore = defineStore('assetTab', {
  state: () => ({
    selectedTab: '자산 현황' as AssetTabKey,
  }),
  actions: {
    setTab(tab: AssetTabKey) {
      this.selectedTab = tab
    },
  },
})

export const useAssetsMain = defineStore('assetsMain', {
  state : () => ({
    meta: null as AssetSummaryMeta | null,
  }),
  actions: {
    async fetchAssetsMain() {
      this.meta = await getAssets()
    }
  }
})

export const useAssetsDetail = defineStore('assetsDetail',{
    state: ()=> ({
      meta: null as AssetDetailResponse | null,
    }),
    actions : {
      async fetchAssetsDetail() {
        this.meta = await getAssetsSummary()
      }
    }
})

export const useAssetsCategoryRatio = defineStore('assetsCategoryRatio',{
  state: ()=> ({
    meta: null as AssetCategoryRatioResponse | null,
  }),
  actions : {
    async fetchAssetsCategoryRatio() {
      this.meta = await getAssetsCategoryRatio()
    }
  }
})

const categories = ['checking', 'savings', 'investment', 'insurance', 'other'] as const
export type AssetCategoryType = typeof categories[number]

export const useAssetCategoryDetailStore = defineStore('assetCategoryDetail', {
  state: () => ({
    categoryDetails: {} as Record<AssetCategoryType, AssetCategoryDetailResponse | null>,
  }),

  actions: {
    async fetchAllCategoryDetails() {
      for (const category of categories) {
        const data = await getAssetCategoryDetail(category)
        this.categoryDetails[category] = data
      }
    },

    getCategoryDetail(category: AssetCategoryType) {
      return this.categoryDetails[category]
    },
  },
})