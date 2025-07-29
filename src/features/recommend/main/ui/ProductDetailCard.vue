<template>
    <Card class="bg-sub-yellow-bg mb-4">
      <Header label="소비 현황" icon="TrendingUp" color="text-sub-yellow-p" />
      <InfoItem
        label="이번달 사용액"
        :value="(currentAmount ?? 0).toLocaleString() + '원'"
      />
      <InfoItem label="실적 달성률" :value="performanceRate + '%'" />
      <ProgressBar :percentage="performanceRate" />
    </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue'
  import Header from './common/Header.vue'
  import InfoItem from './common/InfoItem.vue'
  import ProgressBar from './common/ProgressBar.vue'
  
  defineProps<{ currentAmount: number, performanceRate: number }>()
  </script>