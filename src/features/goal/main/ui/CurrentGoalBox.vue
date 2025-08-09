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

    <!-- goalSummary가 있고 goals 배열이 존재할 때만 렌더링 -->
    <div
      v-if="goalSummary && goalSummary.goals && goalSummary.goals.length > 0"
      class="space-y-2 w-full"
    >
      <div
        v-for="goal in goalSummary.goals"
        :key="goal.id"
        class="w-full"
      >
        <CurrentGoal
          :label="goal.goalName"
          :category="goal.categoryName"
          :finType="goal.nowmeName"
          :percent="goal.progressRate.toString()"
          :color="''"
          class="bg-gray-BGDim"
        />
      </div>
    </div>

    <div 
      v-else-if="goalSummary && goalSummary.goals && goalSummary.goals.length === 0"
      class="text-center py-8 text-gray-500"
    >
      <Typography type="M_14_120">설정된 목표가 없습니다.</Typography>
    </div>
  </Card>
</template>

<script setup lang="ts">
  import { Target, ChevronRight } from 'lucide-vue-next'
  import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { onMounted, ref } from 'vue'
  import { getGoals } from '@/entities/goal/goal.api'
  import type { GoalSummary } from '@/entities/goal/goal.entity'

  const goalSummary = ref<GoalSummary | null>(null)
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      goalSummary.value = await getGoals()
      console.log('Loaded goals:', goalSummary.value) // 디버깅용
    } catch (e) {
      error.value = '목표를 불러오는데 실패했습니다.'
      console.error('Failed to load goals:', e)
    } finally {
      isLoading.value = false
    }
  })
</script>