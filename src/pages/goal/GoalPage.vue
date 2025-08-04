<template>
    <AppLayout>
      <Card class="bg-white border border-gray-150">
        <Typography type="B_16_120" class="w-full mb-4">현재 목표 현황</Typography>
        <AllGoalBox 
          :color1="'bg-sub-yellow-p'"
          :color2="'bg-sub-orange-p'"
          :icon1="Target"
          :icon2="CircleDollarSign"
          :content1="totalGoalCount.toString()"
          :content2="totalTargetAmount.toLocaleString() + '원'"
          :label1="'총 목표'"
          :label2="'총 목표 금액'"
        />
      </Card>
      <GoalSummaryBox/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import AllGoalBox from '@/features/goal/main/ui/AllGoalBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import GoalSummaryBox from '@/features/goal/main/ui/GoalSummaryBox.vue';
  import { Target, CircleDollarSign } from 'lucide-vue-next';
  import Card from '@/shared/ui/atoms/Card.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { computed } from 'vue';
  import { useGoalStore } from '@/entities/goal/goal.store';

  const store = useGoalStore()

  const totalGoalCount = computed(() => store.totalGoalCount)
  const totalTargetAmount = computed(() => store.totalTargetAmount)

  </script>