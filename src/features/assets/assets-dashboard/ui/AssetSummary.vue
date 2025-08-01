<template>
  <TotalAssets v-if="assetsData" :meta="assetsData" :type="'자산'" />
  <Card class="bg-white border border-gray-150 mt-4 sm:mt-6 md:mt-8">
    <AssetBarChart :data="chartData" />
  </Card>

  <Card class="w-full flex flex-col bg-white border border-gray-150 mt-4 sm:mt-6 md:mt-8">
    <Typography type="B_18_120" class="w-full">
      자산 상세 내역
    </Typography>

    <AssetDetailBar
      v-if="assetsSummary"
      v-for="category in assetsSummary.categories"
      :key="category.assetCategory"
      :assetCategory="category.assetCategory"
      :amount="`${category.amount.toLocaleString()}원`"
      :accountsCount="category.accountsCount.toString()"
      :cardBg="'bg-gray-BGDim !mb-0 mt-4'"
      :iconText="categoryLabelMap[category.assetCategory]"
    />
  </Card>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import TotalAssets from '../../ui/TotalAssets.vue'
import AssetBarChart from './AssetBarChart.vue'
import AssetDetailBar from './AssetDetailBar.vue'
import { categoryLabelMap } from '@/entities/assets/assets.constants'
import { getAssets } from '@/entities/assets/assets.api'
import type { AssetSummaryMeta, AssetCategoryRatioResponse, AssetDetailResponse } from '@/entities/assets/assets.entity'
import { getAssetsCategoryRatio, getAssetsSummary } from '../service/\bassets-dashboard.service'

const assetsData = ref<AssetSummaryMeta | null>(null)
const assetsCategoryRatio = ref<AssetCategoryRatioResponse|null>(null)
const assetsSummary = ref<AssetDetailResponse | null>(null)

onMounted(async () => {
  assetsData.value = await getAssets()
  assetsCategoryRatio.value = await getAssetsCategoryRatio()
  assetsSummary.value = await getAssetsSummary()
}) 

const chartData = computed(() => {
  if (!assetsCategoryRatio.value) return []

  return assetsCategoryRatio.value.categories.map(category => ({
    type: category.assetCategory,
    label: categoryLabelMap[category.assetCategory],
    percentage: category.percentage
  }))
})
</script>