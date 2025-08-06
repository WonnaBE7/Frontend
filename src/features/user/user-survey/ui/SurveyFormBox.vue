<template>
  <div class="flex flex-col">
    <UserDiagnosisItem
      v-for="(item, i) in questions"
      :key="i"
      :tag="item.tag"
      :label="item.label"
      :index="i + 1"
      :total="questions.length"
      :choices="getChoices(item.tag)"
      v-model:selected="answers[item.tag]"
    />
    <Card class="bg-white border border-gray-150">
      <div class="w-full flex justify-between mb-4 md:mb-6">
        <Tag> 직업 </Tag>
        <Typography type="M_12_120">7/7</Typography>
      </div>
      <Typography type="M_14_120" class="w-full px-1 mb-4 md:mb-6">
        현재 직업 상태를 선택해주세요!
      </Typography>
      <CustomDropdown
        class="w-full"
        v-model="jobAnswer"
        :options="job"
      />
    </Card>
    <Button @click="submitAnswers" class="mb-4">제출</Button>
  </div>
</template><script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue'
import UserDiagnosisItem from '../../user-diagnosis/ui/UserDiagnosisItem.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import { questions, choices, choices2, job } from '@/features/user/user-survey/constants/userSurvey.ts'

import { useUserProfileStore } from '@/entities/user/user.store'
import {
  getUserSurveyData,
  postUserSurveyData,
  patchUserSurveyData
} from '../service/user-survey.service.ts'
import type { UserSurveyData } from '@/entities/user/user.entity'

const userStore = useUserProfileStore()
const userId = userStore.profile?.userId || ''

const answers = ref<Record<string, string | number>>({})
const jobAnswer = ref<string>('')

const boolTags = ['술', '담배', '운동', '가족간 질병', '이전 질병']

function getChoices(tag: string) {
  if (boolTags.includes(tag)) return choices2
  if (tag === '가족 구성원') return choices
  return []
}

onMounted(async () => {
  const existing = await getUserSurveyData()
  if (existing) {
    answers.value['담배'] = existing.lifestyle_smoking ? 1 : 2
    answers.value['술'] = existing.lifestyle_drinking ? 1 : 2
    answers.value['운동'] = existing.lifestyle_exercise ? 1 : 2
    answers.value['가족 구성원'] = existing.household_size
    answers.value['가족간 질병'] = existing.lifestyle_family_medical ? 1 : 2
    answers.value['이전 질병'] = existing.lifestyle_before_diseases ? 1 : 2
    jobAnswer.value = existing.income_job_type
  }
})

async function submitAnswers() {
  const payload: UserSurveyData = {
    user_id: userId,
    lifestyle_smoking: answers.value['담배'] === 1,
    lifestyle_drinking: answers.value['술'] === 1,
    lifestyle_exercise: answers.value['운동'] === 1,
    household_size: Number(answers.value['가족 구성원']),
    lifestyle_family_medical: answers.value['가족간 질병'] === 1,
    lifestyle_before_diseases: answers.value['이전 질병'] === 1,
    income_job_type: jobAnswer.value,
  }

  const existing = await getUserSurveyData()
  const isMock = !existing?.user_id || existing.user_id === ''

  if (isMock) {
    await postUserSurveyData(payload)
    console.log('✅ POST: 설문 최초 제출 완료')
  } else {
    await patchUserSurveyData(payload)
    console.log('✅ PATCH: 설문 수정 완료')
  }
}
</script>