<template>
  <div class="flex flex-col items-center justify-center max-w-md mx-auto">
    <img
      v-if="finImage"
      :src="finImage"
      alt="성향 이미지"
      class="w-1/3"
    />
    <Typography type="B_20_160" class="mb-4">{{userProfile?.nowME}} 맞춤 목표 설정</Typography>

    <Card class="w-full mb-4 bg-white border border-gray-150">
      <Typography type="B_16_120" class="mb-4 w-full">🎯 목표 카테고리를 선택해주세요</Typography>
      <div class="grid grid-cols-3 gap-2">
        <Tag
          v-for="category in goalCategories"
          :key="category"
          :class="[
            selectedCategory === category
              ? 'bg-sub-yellow-p text-white border-none'
              : 'bg-white text-gray-800'
          ]"
          @click="selectCategory(category)"
        >
          {{ goalCategoryIcons[category] }} {{ category }}
        </Tag>
      </div>
    </Card>

    <Card class="w-full mb-4 bg-white border border-gray-150">
      <Typography type="B_16_120" class="mb-4 w-full">🏁 목표명을 입력해주세요</Typography>
      <Input
        v-model="goalName"
        label="목표명"
        class="w-full mt-2"
      />
    </Card>

    <Card class="w-full mb-4 bg-white border border-gray-150">
      <Typography type="B_16_120" class="mb-4 w-full">💰 목표 금액을 입력해주세요</Typography>
      <Input
        v-model="targetAmountStr"
        label="금액"
        type="number"
        class="w-full mt-2"
      />
      <Typography type="M_12_120" class="w-full text-sub-orange-p mt-1 p-2 bg-sub-orange-bg border border-sub-orange-p">
        목표 금액 : {{ parseInt(targetAmountStr || '0').toLocaleString() }}원
      </Typography>
    </Card>

    <Card class="w-full mb-4 bg-white border border-gray-150">
      <Typography type="B_16_120" class="mb-2 w-full">📆 목표 기간 (개월 수)</Typography>
      <Input
        v-model="goalDurationMonthsStr"
        label="기간"
        type="number"
        class="w-full mt-2"
      />
      <Typography type="M_12_120" class="w-full text-sub-orange-p mt-1 p-2 bg-sub-orange-bg border border-sub-orange-p">
        목표 개월 : {{ parseInt(goalDurationMonthsStr || '0').toLocaleString() }}개월
      </Typography>
    </Card>

    <Button class="w-full mb-4" @click="submitGoal">제출하기</Button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import Typography from '@/shared/ui/atoms/Typography.vue'
import Input from '@/shared/ui/atoms/Input.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Button from '@/shared/ui/atoms/Button.vue'

import { goalCategories, goalCategoryIcons } from '@/shared/constants/goalCategory.constants'
import { finTypeImages } from '@/shared/assets/fintype'
import { useGoalSimulationStore } from '@/entities/goal/goal.store'
import { mockGoalSimulationResponse } from '@/entities/goal/goal.mock'

import type { GoalSimulationInput, GoalSimulationResponse } from '@/entities/goal/goal.entity'
import Tag from '@/shared/ui/atoms/Tag.vue'
import { postGoalSimulation } from '../service/simulation-input.service'
import { useUserProfileStore } from '@/entities/user/user.store'

const selectedCategory = ref<string | null>(null)
const goalName = ref('')
const targetAmountStr = ref('')
const goalDurationMonthsStr = ref('')

const router = useRouter()
const goalSimulationStore = useGoalSimulationStore()
const userStore = useUserProfileStore()
const userProfile = computed(() => userStore.profile)

const finImage = computed(() => {
  const me = userProfile.value?.nowME
  const image = finTypeImages[me ?? '']
  if (!image) console.warn(`${me}에 대한 이미지가 없습니다.`)
  return image
})

const selectCategory = (category: string) => {
  selectedCategory.value = category
}

const submitGoal = async () => {
  if (
    selectedCategory.value === null ||
    !goalName.value ||
    !targetAmountStr.value ||
    !goalDurationMonthsStr.value
  ) {
    alert('모든 항목을 입력해주세요.')
    return
  }

  const categoryId = goalCategories.indexOf(selectedCategory.value)
  if (categoryId === -1) {
    alert('선택한 카테고리가 잘못되었습니다.')
    return
  }

  const requestBody: GoalSimulationInput = {
    goalName: goalName.value,
    categoryId,
    targetAmount: parseInt(targetAmountStr.value),
    goalDurationMonths: parseInt(goalDurationMonthsStr.value),
  }

  let result: GoalSimulationResponse

  try {
    result = await postGoalSimulation(requestBody)
  } catch (e) {
    console.warn('⚠️ 서버 연결 실패, mock 데이터 사용')
    result = mockGoalSimulationResponse
  }

  goalSimulationStore.setResult(result)
  router.push('/goal/simulation/result')
}

</script>