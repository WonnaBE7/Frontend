<template>
  <Card class="w-full bg-white border border-gray-150">
    <div class="w-full flex flex-row">
      <IconLabel :icon="Wallet" class="mb-4 sm:mb-6">자산 & 소비 현황</IconLabel>
      <RouterLink
      to="/assets">
        <component :is="ChevronRight"></component>
      </RouterLink>
    </div>
    <TotalAssets v-if="assetsData" :meta="assetsData" :type="'자산'"/>
    <TotalAssets v-if="conusmptionData" :meta="conusmptionData" :type="'소비'" class="!mb-0"/>
  </Card>
  </template>
  
  <script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import TotalAssets from '@/features/assets/ui/TotalAssets.vue'
import { Wallet, ChevronRight } from 'lucide-vue-next'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { getAssets } from '@/entities/assets/assets.api'
import { getConsumption } from '@/entities/consumption/comsumption.api'
import type { AssetSummaryMeta } from '@/entities/assets/assets.entity'
import type { ConsumptionSummaryMeta } from '@/entities/consumption/consumption.entity'
import { onMounted, ref } from 'vue'


const assetsData = ref<AssetSummaryMeta | null>(null)
const conusmptionData = ref<ConsumptionSummaryMeta | null>(null)
onMounted(async () => {
  assetsData.value = await getAssets()
  conusmptionData.value = await getConsumption()
})

</script>