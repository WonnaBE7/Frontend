<template>
  <AppLayout>
    <LetterOverlay
      v-if="showLetterIcon"
      @openMessage="showLetterIcon = false; showMessageModal = true"
    />

    <FutureMessageCard
      v-if="showMessageModal && reportData"
      :message="reportData.futureMeMessage"
      @close="showMessageModal = false"
    />

    <div v-show="!showLetterIcon && !showMessageModal">
      <ReportTitleBox v-if="reportData" :goal="reportData" />
      <ReportCurrentBox v-if="reportData" :goal="reportData" />
      <ReportProductBox
        v-if="reportData"
        :products="reportData.recommendedProducts"
        :selectedProductId="reportData.selectedProductId"
      />
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from '@/shared/layout/AppLayout.vue'
import ReportTitleBox from '@/features/goal/goal-report/ui/ReportTitleBox.vue'
import ReportCurrentBox from '@/features/goal/goal-report/ui/ReportCurrentBox.vue'
import ReportProductBox from '@/features/goal/goal-report/ui/ReportProductBox.vue'
import LetterOverlay from '@/features/goal/goal-report/ui/LetterOverlay.vue'
import FutureMessageCard from '@/features/goal/goal-report/ui/FutureMessageCard.vue'
import { mockGoalReports } from '@/entities/goal/goal.mock'
import type { GoalReport } from '@/entities/goal/goal.entity'

const route = useRoute()
const reportData = ref<GoalReport | null>(null)

const showLetterIcon = ref(true)
const showMessageModal = ref(false)

onMounted(() => {
  const goalIdParam = route.query.goalId
  if (typeof goalIdParam === 'string') {
    const parsedId = parseInt(goalIdParam, 10)
    if (!isNaN(parsedId)) {
      const found = mockGoalReports.find((r) => r.id === parsedId)
      reportData.value = found ?? null
    }
  }
})
</script>