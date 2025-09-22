<template>
  <Card class="w-full bg-white border border-gray-150">
    <div class="w-full flex flex-row">
      <IconLabel :icon="Wallet" class="mb-4 sm:mb-6">자산 & 소비 현황</IconLabel>
      <RouterLink
      to="/assets">
        <component :is="ChevronRight"></component>
      </RouterLink>
    </div>
    <TotalAssets v-if="assetsData.meta" :meta="assetsData.meta" :type="'자산'" @click="goAssetsPage('자산 현황')" />
    <TotalAssets v-if="conusmptionData.meta" :meta="conusmptionData.meta" :type="'소비'" class="!mb-0" @click="goAssetsPage('소비 분석')" />
  </Card>
</template>
  
<script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue'
  import TotalAssets from '@/features/assets/ui/TotalAssets.vue'
  import { Wallet, ChevronRight } from 'lucide-vue-next'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import { useAssetsMain, useAssetTabStore } from '@/entities/assets/assets.store'
  import { useConsumptionMain } from '@/entities/assets/consumption/consumption.store'
import { useRouter } from 'vue-router'

  const assetsData = useAssetsMain()
  const conusmptionData = useConsumptionMain()
  const assetTabStore = useAssetTabStore()
  
  const router = useRouter()
  function goAssetsPage(tabKey: '자산 현황' | '소비 분석') {
    assetTabStore.setTab(tabKey) 
    router.push('/assets')
  }
</script>