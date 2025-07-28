<template>
  <AppLayout>
    <FutureMessageCard 
      v-if="report"
      :message="report.futureMeMessage" 
      :modal="false" 
    />

    <RecommendedProductBox
      v-if="report"
      :products="report.recommendedProducts"
    />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGoalSimulationStore } from '@/entities/goal/goal.store'
import type { GoalSimulationResponse } from '@/entities/goal/goal.entity'
import AppLayout from '@/shared/layout/AppLayout.vue'
import FutureMessageCard from '@/features/goal/goal-report/ui/FutureMessageCard.vue'
import RecommendedProductBox from '@/features/goal/goal-simulation-result/ui/RecommendedProductBox.vue'

const goalSimulationStore = useGoalSimulationStore()
const report = ref<GoalSimulationResponse | null>(null)

onMounted(() => {
  report.value = goalSimulationStore.result
})
</script>