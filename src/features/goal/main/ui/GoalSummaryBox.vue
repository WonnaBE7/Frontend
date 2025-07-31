<template>
  <Button
    class="fixed bottom-24 right-4 z-40 bg-sub-yellow-p hover:bg-sub-yellow-d text-white 
           rounded-full w-14 h-14 flex items-center justify-center max-w-[56px]"
    @click="goToSimulation"
  >
    <component :is="FilePlus" class="w-5 h-5 sm:w-7 sm:h-7" />
  </Button>

  <div class="w-full flex flex-row justify-between mb-4 items-center">
    <IconLabel :icon="Target">목표 리스트</IconLabel>
    <CustomDropdown
      v-model="selectedStatus"
      :options="sortOptions"
    />
  </div>

  <div>
    <Card 
      v-for="goal in goals"
      :key="goal.id"
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
      />
      <div class="flex flex-row w-full gap-2">
        <Card class="bg-sub-yellow-bg">
          <Typography type="M_10_120" class="w-full mb-2">목표 금액</Typography>
          <Typography type="B_12_120" class="w-full">{{ goal.targetAmount.toLocaleString() }}원</Typography>
        </Card>
        <Card class="bg-sub-yellow-bg">
          <Typography type="M_10_120" class="w-full mb-2">현재 달성</Typography>
          <Typography type="B_12_120" class="w-full">{{ goal.currentAmount.toLocaleString() }}원</Typography>
        </Card>
      </div>
      <div class="flex flex-row items-center gap-4 w-full">
        <Typography type="B_12_120" class="flex flex-row items-center">
          <component :is="Calendar" class="w-4 mr-2" />
          {{ goal.goalDurationMonths }}개월 
        </Typography>
        <Typography type="M_12_120" class="text-gray-500">시작일: {{ goal.startDate }}</Typography>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchGoals } from '@/entities/goal/goal.api'
import type { Goal } from '@/entities/goal/goal.entity'

import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue'
import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue'
import { mockGoalSummary } from '@/entities/goal/goal.mock'
import { Calendar, FilePlus, Target } from 'lucide-vue-next'

const selectedStatus = ref<'PUBLISHED' | 'ACHIEVED'>('PUBLISHED')
const sortOptions = [
  { value: 'PUBLISHED', label: '진행중' },
  { value: 'ACHIEVED', label: '완료' }
]

const goals = ref<Goal[]>([])
const router = useRouter()

function goToReport(goalId: number) {
  router.push({ path: '/goal/report', query: { goalId: goalId.toString() } })
}

function goToSimulation() {
  router.push({ path: '/goal/simulation/input' })
}

const loadGoals = async () => {
  try {
    const res = await fetchGoals(selectedStatus.value)
    goals.value = res.data.goals
  } catch (err) {
    console.error('목표 불러오기 실패:', err)
  }
}

watch(selectedStatus, () => {
  loadGoals()
})

onMounted(async () => {
  try {
    const res = await fetchGoals('PUBLISHED')
    goals.value = res.data.goals
  } catch (e) {
    console.warn('✅ 백엔드 서버가 꺼져있으므로 mock 데이터를 사용합니다.')
    goals.value = mockGoalSummary.goals
  }
})
</script>