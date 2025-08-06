<template>
    <AppLayout>
      <IntroduceBox v-if="savingsData" :productInfo="savingsData.productInfo"/>
      <ChartBox v-if="chartData && savingsData?.comparisonCharts" :commonChartData="chartData"/>
      <MaturityInfoBox v-if="savingsData?.maturityInfo" :maturityInfo="savingsData.maturityInfo"/>
      <InputDepositBox v-model.number="monthlyDeposit"/>
      <InputPeriodBox v-model.number="savingsPeriod"/>
      <ProductButtonBox :request="requestSavings"/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import ChartBox from '@/features/recommend/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/saving-detail/ui/IntroduceBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import MaturityInfoBox from '@/features/recommend/saving-detail/ui/MaturityInfoBox.vue';
  import { useRoute } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import type { CommonChartData, SavingsApplicationRequest, SavingsDetailPageResponse } from '@/entities/recommend/recommend.entity';
  import { getSavingsDetailView } from '@/features/recommend/saving-detail/service/savings-detail.service';
  import ProductButtonBox from '@/features/recommend/saving-detail/ui/ProductButtonBox.vue';
  import InputDepositBox from '@/features/recommend/saving-detail/ui/InputDepositBox.vue';
  import InputPeriodBox from '@/features/recommend/saving-detail/ui/InputPeriodBox.vue';

  
  const route = useRoute()
  const productId = computed(() => Number(route.query.productId))
  const savingsData = ref<SavingsDetailPageResponse | null>(null)

  onMounted(async () => {
    if (!isNaN(productId.value)) {
      savingsData.value = await getSavingsDetailView(productId.value)
    } else {
      console.error('Invalid productId:', route.query.productId)
    }
  })

  const savingsPeriod = ref(0)
  const monthlyDeposit = ref(0)

const chartData = computed<CommonChartData>(() => {
  if (!savingsData.value) return {} as CommonChartData
  return {
    name: savingsData.value.productInfo.productName,
    labels: savingsData.value.productInfo.labels,
    currentUserData: savingsData.value.productInfo.currentUserData,
    comparisonCharts: savingsData.value.comparisonCharts
  }
})

const requestSavings = computed<SavingsApplicationRequest>(() => {
  if (!savingsData.value) return {} as SavingsApplicationRequest
  return {
    productType: 'savings',
    productId: savingsData.value.productInfo.productId,
    productName: savingsData.value.productInfo.productName,
    monthlyDeposit: monthlyDeposit.value,
    savingsPeriod: savingsPeriod.value
  }
})
  </script>
