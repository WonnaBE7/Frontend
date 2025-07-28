<template>
    <div class="w-full flex flex-row justify-between mb-4 items-center">
        <Typography type="B_16_120" class="w-full">목표 리스트</Typography>
        <Button class="w-1/3" @click="goToSimulation">
            <div class="flex flex-row items-center justify-center gap-1">
                <component :is="Plus" class="w-4"/> 
                <Typography type="B_16_120">새 목표</Typography>
            </div>
        </Button>
    </div>
    <div>
        <Card 
            v-for="goal in goals"
            class="bg-white border border-gray-150"
            @click="goToReport(goal.id)"
            >
            <CurrentGoal
                :label="goal.goalName"
                :category="goal.categoryName"
                :finType="goal.nowmeName"
                :percent="goal.progressRate.toString()"
                :color="''"
                class="bg-white"
            ></CurrentGoal>
            <div class="flex flex-row w-full gap-2 mt-2">
                <Card class="bg-sub-yellow-bg">
                    <Typography type="M_10_120" class="w-full mb-2">목표 금액</Typography>
                    <Typography type="B_12_120" class="w-full">{{goal.targetAmount.toLocaleString()}}원</Typography>
                </Card>
                <Card class="bg-sub-yellow-bg">
                    <Typography type="M_10_120" class="w-full mb-2">현재 달성</Typography>
                    <Typography type="B_12_120" class="w-full">{{goal.currentAmount.toLocaleString()}}원</Typography>
                </Card>
            </div>
            <div class="flex flex-row items-center gap-4 w-full" >
                <Typography type="B_12_120" class="flex flex-row items-center">
                    <component :is="Calendar" class="w-4 mr-2"/>
                    {{goal.goalDurationMonths}}개월 
                </Typography>
                <Typography type="M_12_120" class="text-gray-500">시작일: {{goal.startDate}}</Typography>
            </div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import type { Goal } from '@/entities/goal/goal.entity';
import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue';
import { Calendar, Plus } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import Button from '@/shared/ui/atoms/Button.vue';

defineProps<{
    goals : Goal[]
}>()
const router =useRouter()

function goToReport(goalId: number) {
  router.push({ path: '/goal/report', query: { goalId: goalId.toString() } })
}

function goToSimulation() {
  router.push({ path: '/goal/simulation/input'})
}

</script>