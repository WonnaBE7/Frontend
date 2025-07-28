<template>
  <TotalAssets :meta="mockAssetSummaryMeta" :type="'자산'" />
  <Card class="bg-white border border-gray-150">
    <AssetBarChart :data="chartData" />
  </Card>

  <Card class="w-full mt-4 flex flex-col bg-white border border-gray-150">
    <Typography type="B_18_120" class="w-full">
      자산 상세 내역
    </Typography>

    <AssetDetailBar
      v-for="category in mockAssetCategoryDetailResponse.categories"
      :key="category.assetCategory"
      :assetCategory="category.assetCategory"
      :amount="`${category.amount.toLocaleString()}원`"
      :accountsCount="category.accountsCount.toString()"
      :cardBg="'bg-gray-BGDim mb-0 mt-4'"
      :iconText="categoryLabelMap[category.assetCategory]"
    />
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import TotalAssets from '../../ui/TotalAssets.vue'
import AssetBarChart from './AssetBarChart.vue'
import AssetDetailBar from './AssetDetailBar.vue'
import { categoryLabelMap } from '@/entities/assets/assets.constants'
import {
  mockAssetSummaryMeta,
  mockAssetCategoryRatio,
  mockAssetCategoryDetailResponse
} from '@/entities/assets/assets.mock'

const chartData = computed(() =>
  mockAssetCategoryRatio.categories.map(category => ({
    type: category.assetCategory,
    label: categoryLabelMap[category.assetCategory],
    percentage: category.percentage
  }))
)
</script>