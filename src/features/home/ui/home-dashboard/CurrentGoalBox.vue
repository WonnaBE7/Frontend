<template>
    <Card>
        <IconLabel :icon="Target">
            목표 달성 현황
        </IconLabel>
        <div v-for="(item, idx) in goals" :key="idx" class="w-full mt-4">
            <CurrentGoal
                :icon="item.icon"
                :label="item.label"
                :category="item.category"
                :finType="item.finType"
                :percent="item.percent"
            />
        </div>
    </Card>
</template>

<script setup lang="ts">
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import Card from '@/shared/ui/atoms/Card.vue'
import { Target, Airplay, Wallet } from 'lucide-vue-next'
import CurrentGoal from '@/features/goal/CurrentGoal.vue';

const goals = [
  {
    icon: Target,
    label: '바르셀로나 여행',
    category: '여행',
    finType: '자린 고비형',
    percent: '65',
  },
  {
    icon: Wallet,
    label: '디지털 노마드 준비',
    category: '커리어',
    finType: '알뜰살뜰형',
    percent: '32',
  },
  {
    icon: Airplay,
    label: '내 집 마련',
    category: '부동산',
    finType: '성실 투자형',
    percent: '78',
  },
]
</script>