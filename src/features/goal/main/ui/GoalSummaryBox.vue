<template>
    <Button
      class="fixed bottom-24 right-4 z-40 bg-sub-yellow-p hover:bg-sub-yellow-d text-white 
             rounded-full w-14 h-14 flex items-center justify-center max-w-[56px]"
      @click="goToSimulation"
    >
      <component :is="FilePlus" class="w-5 h-5" />
    </Button>
  
    <!-- 정렬 드롭다운 -->
    <div class="w-full flex flex-row justify-between mb-4 items-center">
      <IconLabel :icon="Target">목표 리스트</IconLabel>
      <CustomDropdown
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
  
    <!-- 정렬된 목표 목록 -->
    <div>
      <Card 
        v-for="goal in sortedGoals"
        :key="goal.id"
        class="bg-white border border-gray-150 mb-4"
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
        <div class="flex flex-row w-full gap-2 mt-2">
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
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import type { Goal } from '@/entities/goal/goal.entity'
  
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import Button from '@/shared/ui/atoms/Button.vue'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import CurrentGoal from '@/shared/ui/molecules/CurrentGoal.vue'
  import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue' // 새로 추가
  
  import { Calendar, FilePlus, Target } from 'lucide-vue-next'
  
  const props = defineProps<{ goals: Goal[] }>()
  const router = useRouter()
  
  const selectedSort = ref('dateAsc') // 정렬 기준
  
  // 드롭다운 옵션들
  const sortOptions = [
    { value: 'dateAsc', label: '오름차순' },
    { value: 'dateDesc', label: '내림차순' },
    { value: 'statusProgress', label: '진행중' },
    { value: 'statusComplete', label: '완료' }
  ]
  
  function goToReport(goalId: number) {
    router.push({ path: '/goal/report', query: { goalId: goalId.toString() } })
  }
  
  function goToSimulation() {
    router.push({ path: '/goal/simulation/input' })
  }
  
  // 🔽 정렬된 goals 계산
  const sortedGoals = computed(() => {
    const list = [...props.goals]
    switch (selectedSort.value) {
      case 'dateAsc':
        return list.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      case 'dateDesc':
        return list.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
      case 'statusProgress':
        return list.filter(goal => goal.status === 'PUBLISHED')
      case 'statusComplete':
        return list.filter(goal => goal.status === 'ACHIEVED')
      default:
        return list
    }
  })
  </script>