<template>
  <Card class="bg-white">
    <div class="w-full flex flex-row">
      <IconLabel :icon="Target">
        목표 달성 현황
      </IconLabel>
      <RouterLink
        to="/goal">
          <component :is="ChevronRight"></component>
      </RouterLink>
    </div>
    <div
      v-for="goal in goalStore.goals"
      :key="goal.id"
      class="w-full mt-4"
    >
      <CurrentGoal
        :icon="iconMap[goal.categoryName] || Target"
        :label="goal.goalName"
        :category="goal.categoryName"
        :finType="goal.nowmeName"
        :percent="goal.progressRate.toString()"
      />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Target, Airplay, Wallet, ChevronRight } from 'lucide-vue-next'
import CurrentGoal from '@/features/goal/CurrentGoal.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import { useGoalStore } from '@/entities/goal/goal.store'

const iconMap: Record<string, any> = {
  '부동산': Target,
  '커리어': Wallet,
  '여행': Airplay
}

const goalStore = useGoalStore()
</script>