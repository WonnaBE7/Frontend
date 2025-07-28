<template>
  <AppLayout>
    <TitleTab :selected="selectedTab" @update:selected="onTabChange"/>
    <div class="mt-8">
      <AssetSummary v-if="selectedTab === '자산 현황'" />
      <ConsumptionSummary v-else-if="selectedTab === '소비 분석'" />
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import TitleTab from '@/features/assets/ui/TitleTab.vue'
import AssetSummary from '@/features/assets/assets-dashboard/ui/AssetSummary.vue'
import ConsumptionSummary from '@/features/assets/consumption-dashboard/ui/ConsumptionSummary.vue'
import { ref } from 'vue'
import type {AssetTabKey } from '@/entities/assets/assets.entity'

const selectedTab = ref<AssetTabKey>('자산 현황')
function onTabChange(tab: AssetTabKey) {
  selectedTab.value = tab
}
</script>