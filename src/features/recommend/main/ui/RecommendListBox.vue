<template>
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4">
        {{user.nowME}} 추천 상품
      </IconLabel>
      
      <!-- 탭 버튼들 -->
      <div class="flex flex-row gap-2 mb-4 w-full bg-gray-BGDim p-2">
        <Button 
          v-for="tab in productTabs"
          :key="tab.value"
          @click="selectTab(tab.value)"
          :class="selectedTab === tab.value ? 'bg-sub-yellow-p text-white' : '!bg-gray-BGDim text-gray-600'"
        >
          {{ tab.label }}
        </Button>
      </div>
  
      <!-- 상품 리스트 -->
      <RecommendProductCard
        v-for="product in currentProducts"
        :key="getProductKey(product)"
        :product="product"
        @click="goToDetail(product)"
        class="mb-4"
      />
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Button from '@/shared/ui/atoms/Button.vue'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import { MessageCircleIcon } from 'lucide-vue-next'
  import RecommendProductCard from './RecommendProductCard.vue'
  import type { 
    RecommendedSavingsProduct, 
    RecommendedCardProduct, 
    RecommendedInsuranceProduct,
    ProductType 
  } from '@/entities/recommend/recommend.entity'
  import { 
    mockSavingsRecommendation,
    mockCardRecommendation,
    mockInsuranceRecommendation
  } from '@/entities/recommend/recommend.mock'
  
  import { mockUserProfile } from '@/entities/user/user.mock'
  const user = mockUserProfile

  const router = useRouter()
  
  // 탭 정의
  const productTabs = [
    { value: 'savings' as ProductType, label: '예적금' },
    { value: 'card' as ProductType, label: '카드' },
    { value: 'insurance' as ProductType, label: '보험' }
  ]
  
  const selectedTab = ref<ProductType>('savings')
  
  // 현재 선택된 탭의 상품들
  const currentProducts = computed(() => {
    switch (selectedTab.value) {
      case 'savings':
        return mockSavingsRecommendation.products
      case 'card':
        return mockCardRecommendation.products
      case 'insurance':
        return mockInsuranceRecommendation.products
      default:
        return []
    }
  })
  
  function selectTab(tabValue: ProductType) {
    selectedTab.value = tabValue
  }
  
  // v-for key를 위한 헬퍼 함수
  function getProductKey(product: RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct): string {
    if ('cardId' in product) return product.cardId
    return product.productId
  }
  
  function goToDetail(product: RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct) {
  let productId: string
  let routePath: string

  if ('productId' in product && 'interestRate' in product) {
    // 예적금 상품
    productId = product.productId
    routePath = '/recommend/savings/detail'
  } else if ('cardId' in product) {
    // 카드 상품
    productId = product.cardId
    routePath = '/recommend/card/detail'
  } else {
    // 보험 상품
    productId = product.productId
    routePath = '/recommend/insurance/detail'
  }

  router.push({
    path: routePath,
    query: {productId}
  })
}
  </script>