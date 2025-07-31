<template>
    <AppLayout>
      <Card class="bg-white border border-gray-150">
        <Typography type="B_16_120" class="w-full mb-4">총 목표 현황</Typography>
        <AllGoalBox 
          :color1="'bg-sub-yellow-p'"
          :color2="'bg-sub-orange-p'"
          :icon1="Target"
          :icon2="CircleDollarSign"
          :content1="data.totalGoalCount.toString()"
          :content2="data.totalTargetAmount.toLocaleString() + '원'"
          :label1="'총 목표'"
          :label2="'총 목표 금액'"
        />
      </Card>
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
  import Card from '@/shared/ui/atoms/Card.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';

  const data = mockGoalSummary

  </script>