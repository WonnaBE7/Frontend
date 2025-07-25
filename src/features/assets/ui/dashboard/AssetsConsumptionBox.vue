<template>
  <Card class="w-full bg-white">
    <div class="w-full flex flex-row">
      <IconLabel :icon="Wallet" class="mb-4">자산 & 소비 현황</IconLabel>
      <RouterLink
      to="/assets">
        <component :is="ChevronRight"></component>
      </RouterLink>
    </div>
    <TotalAssets :meta="mockAssetSummaryMeta" :type="'자산'"/>
    <TotalAssets :meta="mockConsumptionSummaryMeta" :type="'소비'"/>
  </Card>
  </template>
  
  <script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import TotalAssets from '@/features/assets/ui/TotalAssets.vue'
import { Wallet, ChevronRight } from 'lucide-vue-next'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { mockAssetSummaryMeta, mockConsumptionSummaryMeta } from '@/entities/assets/assets.mock'
</script>