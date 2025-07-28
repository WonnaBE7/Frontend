<template>
    <Card class="bg-white border border-gray-150">
        <IconLabel
            :icon="Sparkles"
            class="mb-4"
        >
            목표 진행 현황
        </IconLabel>
        <AllGoalBox 
            :color1="'bg-sub-yellow-p'"
            :color2="'bg-sub-orange-p'"
            :icon1="Calendar"
            :icon2="MoveUpRight"
            :content1="goal.goalDurationMonths.toLocaleString() + '개월'"
            :content2="goal.remainingMonths.toLocaleString() + '개월'"
            :label1="'목표 기간'"
            :label2="'남은 기간'"
            class="mb-4"
        />

        <Card class="bg-sub-orange-bg border border-sub-orange-s !mb-0">
            <Typography type="B_12_140" class="w-full mb-2">월 저축 현황</Typography>
            <Typography type="B_18_120" class="w-full mb-2">{{goal.monthlySaveAmount.toLocaleString()}}원</Typography>
            <Typography type="M_12_120" class="w-full">목표 달성을 위한 월 필요 금액</Typography>
        </Card>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import AllGoalBox from '../../main/ui/AllGoalBox.vue';
import {  MoveUpRight, Calendar, Sparkles } from 'lucide-vue-next'
import type { GoalReport } from '@/entities/goal/goal.entity'
import Typography from '@/shared/ui/atoms/Typography.vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';

defineProps<{
  goal: GoalReport
}>()


</script>