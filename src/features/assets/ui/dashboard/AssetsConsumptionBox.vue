<template>
  <Card class="w-full">
    <div class="w-full flex flex-row">
      <IconLabel :icon="Wallet" class="mb-4">자산 & 소비 현황</IconLabel>
      <RouterLink
      to="/assets">
        <component :is="ChevronRight"></component>
      </RouterLink>
    </div>
      <AssetTypeTab :tabs="tabs" :selected="selectedTab" @update:selected="onTabChange" />
      <RouterLink
      to="/assets"
      class="w-full">
        <Typography type="B_16_120" class="flex bg-sub-yellow-bg w-full items-center justify-center p-3 rounded-md mt-4 mb-4">총 자산: {{ formattedTotal }}원</Typography>
        <AssetBarChart :data="chartData[selectedTab]" />
      </RouterLink>
  </Card>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue'
import AssetTypeTab from '@/features/assets/ui/AssetTypeTab.vue'
import AssetBarChart from '@/features/assets/ui/AssetBarChart.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { Wallet, ChevronRight } from 'lucide-vue-next'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'

import { mockAssetItems } from '@/entities/assets/assets.mock'
import {assetTabs } from '@/entities/assets/assets.entity'
import type { AssetTabKey } from '@/entities/assets/assets.entity'

const tabs = assetTabs
const selectedTab = ref<AssetTabKey>('자산 현황')

const chartData = mockAssetItems
const totalAmount = 12500000
const formattedTotal = totalAmount.toLocaleString()

function onTabChange(tab: AssetTabKey) {
  selectedTab.value = tab
}
</script>