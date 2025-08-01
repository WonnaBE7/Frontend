import { defineStore } from 'pinia'
import type { AssetTabKey } from '@/entities/assets/assets.entity'

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