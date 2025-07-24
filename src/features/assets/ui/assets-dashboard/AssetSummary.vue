<template>
    <TotalAssets />
  
    <Card>
      <AssetBarChart :data="chartData[selectedTab]" />
    </Card>
  
    <Card class="w-full mt-4 flex flex-col ">
      <Typography type="B_18_120" class="w-full mb ">자산 상세 내역</Typography>
      <AssetDetailBar
        v-for="category in mockAssetAnalysis.categories"
        :key="category.assetCategory"
        :assetCategory="category.assetCategory"
        :amount="`₩${category.amount.toLocaleString()}`"
        :percentage="category.percentage.toString()"
        :accountsCount="category.accountsCount.toString()"
        :cardBg="'bg-gray-100 mb-0 mt-4'"
        :iconText="categoryLabelMap[category.assetCategory]"
      />
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import TotalAssets from './TotalAssets.vue'
  import AssetBarChart from '../AssetBarChart.vue'
  import AssetDetailBar from '../AssetDetailBar.vue'
  import type { AssetTabKey } from '@/entities/assets/assets.entity'
  import { mockAssetItems, mockAssetAnalysis } from '@/entities/assets/assets.mock'
  import {categoryLabelMap} from '@/entities/assets/assets.constants'
import Typography from '@/shared/ui/atoms/Typography.vue'
  const selectedTab = ref<AssetTabKey>('자산 현황')
  const chartData = mockAssetItems
  
  // 아이콘 텍스트 (카테고리 한글명)
  
  </script>