<template>
    <div class="w-full cursor-pointer" @click="$emit('click', product)">
      <Card class="bg-gray-BGDim !mb-0 hover:bg-gray-50 transition-colors">
        <div class="flex flex-row items-center justify-between w-full mb-2">
          <Typography type="B_16_140">{{ productName }}</Typography>
          <Typography type="B_14_120" class="flex flex-row items-center gap-2">
            <component :is="Star" class="fill-sub-yellow-p text-sub-yellow-p w-4"/>
            {{ product.matchScore }}
          </Typography>
        </div>
        
        <div class="flex flex-col items-start w-full">
            <Typography type="M_12_120" class="text-gray-500 mb-1">
            {{ companyName }}
            </Typography>
            <!-- 혜택/특징 표시 -->
            <Typography v-if="benefit" type="M_10_120" class="justify-start mb-1 text-sub-yellow-p bg-sub-yellow-bg px-2 py-1 rounded">
                {{ benefit }}
            </Typography>
        </div>
        <!-- 상품별 특성 정보 -->
        <div class="flex flex-row items-center justify-between w-full">
          <div class="flex flex-row">
            <Typography type="M_12_120" class="text-gray-500 mr-1">
              {{ rateLabel }}:
            </Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ rateValue }}
            </Typography>
          </div>
          <component :is="ChevronRight"/>
        </div>
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import type { 
    RecommendedSavingsProduct, 
    RecommendedCardProduct, 
    RecommendedInsuranceProduct 
  } from '@/entities/recommend/recommend.entity'
import { ChevronRight, Star } from 'lucide-vue-next';
  
  const props = defineProps<{
    product: RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct
  }>()
  
  defineEmits<{
    (e: 'click', product: typeof props.product): void
  }>()
  
  // 상품 타입별 이름 추출
  const productName = computed(() => {
    if ('productName' in props.product) return props.product.productName
    if ('cardName' in props.product) return props.product.cardName
    if ('insuranceName' in props.product) return props.product.insuranceName
    return ''
  })
  
  // 상품 타입별 회사명 추출
  const companyName = computed(() => {
    if ('bankName' in props.product) return props.product.bankName
    if ('cardCompany' in props.product) return props.product.cardCompany
    if ('insuranceCompany' in props.product) return props.product.insuranceCompany
    return ''
  })
  
  // 상품 타입별 요율 라벨
  const rateLabel = computed(() => {
    if ('interestRate' in props.product) return '금리'
    if ('mainBenefit' in props.product) return '혜택'
    if ('mainCoverage' in props.product) return '보장'
    return ''
  })
  
  // 상품 타입별 요율 값
  const rateValue = computed(() => {
    if ('interestRate' in props.product) return `연 ${props.product.interestRate}%`
    if ('mainBenefit' in props.product) return props.product.mainBenefit
    if ('mainCoverage' in props.product) return props.product.mainCoverage
    return ''
  })
  
  // 추가 혜택 정보
  const benefit = computed(() => {
    if ('type' in props.product) return props.product.type
    if ('cardType' in props.product) return props.product.cardType
    if ('monthlyPremium' in props.product) return `월 ${props.product.monthlyPremium.toLocaleString()}원`
    return ''
  })
  </script>