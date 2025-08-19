<template>
    <AppLayout>
      <IntroduceBox v-if="insurancesData" :productInfo="insurancesData.productInfo"/>
      <ChartBox v-if="chartData && insurancesData?.comparisonChart" :commonChartData="chartData"/>
      <MaturityInfoBox v-if="insurancesData?.maturityInfo" :maturityInfo="insurancesData.maturityInfo"/>
      <ProductButtonBox v-if="insurancesData" :request="requestInsurance" :isWished="insurancesData.productInfo.wished"/>
    </AppLayout>
</template>
<script setup lang="ts">
  import ChartBox from '@/features/recommend/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/insurance-detail/ui/IntroduceBox.vue';
  import ProductButtonBox from '@/features/recommend/insurance-detail/ui/ProductButtonBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import type { CommonChartData, InsuranceApplicationRequest, InsurancesDetailPageResponse } from '@/entities/recommend/recommend.entity';
  import { useRoute } from 'vue-router';
  import { computed, onMounted, ref } from 'vue';
  import { getInsuranceDetailView } from '@/features/recommend/insurance-detail/service/insurance-detail.service';
  import MaturityInfoBox from '@/features/recommend/insurance-detail/ui/MaturityInfoBox.vue';

  const route = useRoute()
  const productId = computed(() => Number(route.query.productId))
  const insurancesData = ref<InsurancesDetailPageResponse | null>(null)
  const wonnaBEId = computed(() => {
    const id = route.query.wonnaBEId
    return id != null ? Number(id) : null
  })

  onMounted(async () => {
    if (!isNaN(productId.value)) {
      console.log('보험 상세보기id 값들',productId.value, wonnaBEId.value);
      
      insurancesData.value = await getInsuranceDetailView(productId.value, wonnaBEId.value)
    } else {
      console.error('Invalid productId:', route.query.productId)
    }
  })

  const chartData = computed<CommonChartData>(() => {
    if (!insurancesData.value) return {} as CommonChartData
    return {
      name: insurancesData.value.productInfo.productName,
      labels: insurancesData.value.productInfo.labels,
      currentUserData: insurancesData.value.productInfo.currentUserData,
      comparisonCharts: insurancesData.value.comparisonChart
    }
  })

  const requestInsurance = computed<InsuranceApplicationRequest>(() => {
    if (!insurancesData.value) return {} as InsuranceApplicationRequest
    return {
      productType: 'insurance',
      insuranceId: insurancesData.value.productInfo.productId,
    }
  })
</script>