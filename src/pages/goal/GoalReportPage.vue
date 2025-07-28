<template>
  <AppLayout>
    <ReportTitleBox
      v-if="reportData"
      :goal="reportData"
    />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import ReportTitleBox from '@/features/goal/goal-report/ui/ReportTitleBox.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { mockGoalReports } from '@/entities/goal/goal.mock'
import type { GoalReport } from '@/entities/goal/goal.entity'

const route = useRoute()
const reportData = ref<GoalReport | null>(null)

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