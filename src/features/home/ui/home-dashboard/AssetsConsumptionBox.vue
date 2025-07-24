<template>
   <Card class="w-full">
    <IconLabel :icon="Wallet" class="mb-4">자산 & 소비 현황</IconLabel>
    <AssetTypeTab :tabs="tabs" :selected="selectedTab" @update:selected="onTabChange" />
    <Typography type="B_16_120" class="flex bg-yellow-50 w-full items-center justify-center p-3 rounded-md mt-4 mb-4">총 자산: {{ formattedTotal }}원</Typography>
    <AssetBarChart :data="chartData[selectedTab]" />
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import AssetTypeTab from '@/features/home/ui/AssetTypeTab.vue'
  import AssetBarChart from '@/features/home/ui/AssetBarChart.vue'
    import Card from '@/shared/ui/atoms/Card.vue'
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import { Wallet } from 'lucide-vue-next'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'

  const tabs = ['자산 현황', '소비 분석']  as const
  type TabKey = (typeof tabs)[number]  
  const selectedTab = ref<TabKey>('자산 현황')
  
  const chartData = {
    '자산 현황': [
      { type: '입출금', label: '입출금', percentage: 40 },
      { type: '저축', label: '저축', percentage: 24 },
      { type: '투자', label: '투자', percentage: 20 },
      { type: '연금', label: '연금', percentage: 12 },
      { type: '포인트', label: '포인트', percentage: 4 },
    ],
    '소비 분석': [
      { type: '입출금', label: '식비', percentage: 30 },
      { type: '저축', label: '쇼핑', percentage: 25 },
      { type: '투자', label: '교통', percentage: 15 },
      { type: '연금', label: '문화', percentage: 20 },
      { type: '포인트', label: '기타', percentage: 10 },
    ], 
  } 
  
  const totalAmount = 12500000
  const formattedTotal = totalAmount.toLocaleString()
  
  function onTabChange(tab: TabKey) {
    selectedTab.value = tab
  }
  </script>