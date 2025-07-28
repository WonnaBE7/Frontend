<template>
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4">
        {{user.nowME}} 추천 상품
      </IconLabel>
      <GoalProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :isSelected="selectedProductId === product.id"
        :isCurrentPageSimulation="isSimulationPage"
        @select="handleSelect"
        class="mb-4"
        />
    </Card>
  
    <Button class="mb-4" @click="submitSelectedProduct">
      <IconLabel :icon="CheckCircle" class="flex justify-center">목표 리포트 간직하기</IconLabel>
    </Button>
  </template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/shared/ui/atoms/Button.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import { CheckCircle, MessageCircleIcon } from 'lucide-vue-next'
import GoalProductCard from '../../goal-report/ui/GoalProductCard.vue';
import type { RecommendedProduct } from '@/entities/goal/goal.entity';
import { useRoute } from 'vue-router';
import {mockUserProfile } from '@/entities/user/user.mock'

defineProps<{
  products: RecommendedProduct[]
}>()

const user = mockUserProfile

const route = useRoute()
const isSimulationPage = route.path.startsWith('/goal/simulation')

const selectedProductId = ref<number | null>(null)

function handleSelect(productId: number) {
  selectedProductId.value = productId
}

function submitSelectedProduct() {
  if (selectedProductId.value !== null) {
    console.log({
      selectedProductId: selectedProductId.value,
      status: 'PUBLISHED'
    })
    // TODO: 서버 통신 후 성공하면 router.push('/goal')
  } else {
    console.warn('선택된 상품이 없습니다.')
  }
}
</script>