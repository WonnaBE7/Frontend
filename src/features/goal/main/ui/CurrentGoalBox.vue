<template>
  <Card class="bg-white border border-gray-150">
    <div class="w-full flex flex-row justify-between items-center">
      <IconLabel :icon="Target">
        목표 달성 현황
      </IconLabel>
      <RouterLink to="/goal">
        <component :is="ChevronRight" class="text-gray-500" />
      </RouterLink>
    </div>

    <div
      v-for="goal in goals"
      :key="goal.id"
      class="w-full"
    >
      <CurrentGoal
        :label="goal.goalName"
        :category="goal.categoryName"
        :finType="goal.nowmeName"
        :percent="goal.progressRate.toString()"
        :color="''"
        class="bg-gray-BGDim "
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Target, ChevronRight } from 'lucide-vue-next'
import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import { mockGoalSummary } from '@/entities/goal/goal.mock'

const goals = mockGoalSummary.goals
</script>