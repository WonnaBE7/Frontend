<template>
  <Card class="p-4 rounded-xl text-white" :style="gradientStyle">

    <CurrentGoal
      :label="goal.goalName"
      :category="goal.categoryName"
      :finType="goal.nowmeName"
      :percent="goal.progressRate.toString()"
      :color="'white'"
      class="!bg-transparent !text-white mb-4"
    />

    <AllGoalBox 
      :color1="'bg-white/10'"
      :color2="'bg-white/10'"
      :icon1="CircleDollarSign"
      :icon2="Target"
      :content1="goal.targetAmount.toLocaleString() + '원'"
      :content2="goal.currentAmount.toLocaleString() + '원'"
      :label1="'목표 금액'"
      :label2="'현재 금액'"
    />
  </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import AllGoalBox from '../../main/ui/AllGoalBox.vue'
import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue'
import { Target, CircleDollarSign } from 'lucide-vue-next'
import type { GoalReport } from '@/entities/goal/goal.entity'

defineProps<{
  goal: GoalReport
}>()

const gradientStyle = `background: linear-gradient(to right, #302DAC, #5754DA)`
</script>