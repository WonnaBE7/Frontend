<template>
    <AppLayout>
      <AllGoalBox 
        :color1="'bg-sub-yellow-p'"
        :color2="'bg-sub-yellow-p'"
        :icon1="Target"
        :icon2="CircleDollarSign"
        :content1="data.totalGoalCount.toString()"
        :content2="data.totalTargetAmount.toLocaleString() + '원'"
        :label1="'총 목표'"
        :label2="'총 목표 금액'"
      />
        <GoalSummaryBox
          :goals="data.goals"
        />
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import AllGoalBox from '@/features/goal/main/ui/AllGoalBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import {mockGoalSummary} from '@/entities/goal/goal.mock'
  import GoalSummaryBox from '@/features/goal/main/ui/GoalSummaryBox.vue';
  import { Target, CircleDollarSign } from 'lucide-vue-next';

  const data = mockGoalSummary

  </script>