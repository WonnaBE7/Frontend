<template>
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'">
        {{user.nowME}} 추천 상품
      </IconLabel>
      <GoalProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :isSelected="selectedProductId === product.id"
        :isCurrentPageSimulation="isSimulationPage"
        @select="handleSelect"
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
import type { GoalReportSaveRequest, RecommendedProduct } from '@/entities/goal/goal.entity';
import { useRoute } from 'vue-router';
import {mockUserProfile } from '@/entities/user/user.mock'
import { useGoalSimulationStore } from '@/entities/goal/goal.store'
import { patchGoalSelection } from '../service/simulation-result.service';
import { router } from '@/app/router';

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

const goalStore = useGoalSimulationStore()

async function submitSelectedProduct() {
  const goalId = goalStore.result?.goalId

  if (!goalId || selectedProductId.value === null) {
    console.warn('목표 ID 또는 선택된 상품이 없습니다.')
    return
  }

  const payload: GoalReportSaveRequest = {
    selectedProductId: selectedProductId.value,
    status: 'PUBLISHED',
  }

  try {
    await patchGoalSelection(goalId, payload)
    console.log(goalId, payload)
    console.log('목표 저장 성공')
    router.push('/goal')
  } catch (e) {
    console.log(goalId, payload)
    console.error('목표 저장 실패:', e)
    router.push('/goal')
  }
}
</script>