<template>
    <AppLayout>
        <IntroduceBox v-if="cardsData" :productInfo="cardsData.productInfo"/>
        <ChartBox v-if="cardsData && cardsData.comparisonCharts?.length" :commonChartData="chartData"/>
        <NoteBox v-if="cardsData" :note="cardsData.note"/>
        <InputAccount v-model="linkedAccount"/>
        <ProductButtonBox :request="requestCard"/>
    </AppLayout>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { CardApplicationRequest, CardDetailPageResponse, CommonChartData } from '@/entities/recommend/recommend.entity'
import { getCardDetailView } from '@/features/recommend/card-detail/service/card-detail.service'
import ChartBox from '@/features/recommend/ui/ChartBox.vue'
import NoteBox from '@/features/recommend/card-detail/ui/NoteBox.vue'
import AppLayout from '@/shared/layout/AppLayout.vue'
import ProductButtonBox from '@/features/recommend/card-detail/ui/ProductButtonBox.vue'
import IntroduceBox from '@/features/recommend/card-detail/ui/IntroduceBox.vue'
import InputAccount from '@/features/recommend/card-detail/ui/InputAccount.vue'

const route = useRoute()
const productId = computed(() => Number(route.query.productId))
const cardsData = ref<CardDetailPageResponse | null>(null)

console.log('그냥 찍었을 때',route.query.productId)
console.log('상품 아이디', productId.value)
onMounted(async () => {
  if (!isNaN(productId.value)) {
    cardsData.value = await getCardDetailView(productId.value)
  } else {
    console.error('Invalid productId:', route.query.productId)
  }
})

const chartData = computed<CommonChartData>(() => {
  if (!cardsData.value) return {} as CommonChartData
  return {
    cardName: cardsData.value.productInfo.cardName,
    labels: cardsData.value.productInfo.labels,
    currentUserData: cardsData.value.productInfo.currentUserData,
    comparisonCharts: cardsData.value.comparisonCharts
  }
})

const linkedAccount = ref('')

const requestCard = computed<CardApplicationRequest>(() => {
  if (!cardsData.value) return {} as CardApplicationRequest
  return {
    productType: 'card',
    cardId: cardsData.value.productInfo.cardId,
    cardType: cardsData.value.productInfo.cardType,
    linkedAccount: linkedAccount.value
  }
})
</script>