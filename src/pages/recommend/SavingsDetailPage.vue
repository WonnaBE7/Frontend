<template>
    <AppLayout>
      <IntroduceBox v-if="savingsData" :productInfo="savingsData.productInfo"/>
      <ChartBox v-if="chartData && savingsData?.comparisonChart" :commonChartData="chartData"/>
      <MaturityInfoBox v-if="savingsData?.maturityInfo" :maturityInfo="savingsData.maturityInfo"/>
      <InputAmountBox v-model="amount"/>
      <InputPaymentBox v-model="payment"/>
      <InputPeriodBox v-model="joinPeriod"/>
      <ProductButtonBox v-if="savingsData" :request="requestSavings" :isWished="savingsData?.productInfo.wished"/>
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
  import InputPeriodBox from '@/features/recommend/saving-detail/ui/InputPeriodBox.vue';
  import InputPaymentBox from '@/features/recommend/saving-detail/ui/InputPaymentBox.vue';
  import InputAmountBox from '@/features/recommend/saving-detail/ui/InputAmountBox.vue';
  
  const route = useRoute()
  const productId = computed(() => Number(route.query.productId))
  const savingsData = ref<SavingsDetailPageResponse | null>(null)
  const wonnaBEId = computed(() => {
    const id = route.query.wonnaBEId
    return id != null ? Number(id) : null
  })

  onMounted(async () => {
    if (!isNaN(productId.value)) {
      console.log('예적금 상세보기id 값들',productId.value, wonnaBEId.value);
      savingsData.value = await getSavingsDetailView(productId.value, wonnaBEId.value)
    } else {
      console.error('Invalid productId:', route.query.productId)
    }
  })

  const joinPeriod = ref<string>('')
  const amount = ref<string>('')
  const payment = ref<string>('')

  const chartData = computed<CommonChartData>(() => {
    if (!savingsData.value) return {} as CommonChartData
    return {
      name: savingsData.value.productInfo.productName,
      labels: savingsData.value.productInfo.labels,
      currentUserData: savingsData.value.productInfo.currentUserData,
      comparisonCharts: savingsData.value.comparisonChart
    }
  })

const requestSavings = computed<SavingsApplicationRequest>(() => {
  if (!savingsData.value) return {} as SavingsApplicationRequest
    return {
      productType: 'savings',
      productId: savingsData.value.productInfo.productId,
      productName: savingsData.value.productInfo.productName,
      amount: amount.value,
      payment: payment.value || '0',
      joinPeriod: joinPeriod.value,
    }
  })
</script>
