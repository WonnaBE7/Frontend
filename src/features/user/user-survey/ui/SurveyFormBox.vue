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
        <Tag> 현 직업 상태</Tag>
        <Typography type="M_12_120">7/9</Typography>
      </div>
      <Typography type="M_14_120" class="w-full px-1 mb-4 md:mb-6">
        현재 직업 상태를 선택해주세요!
      </Typography>
      <CustomDropdown
        class="w-full"
        v-model="sourceData"
        :options="incomeSource"
      />
    </Card>
    <Card class="bg-white border border-gray-150">
      <div class="w-full flex justify-between mb-4 md:mb-6">
        <Tag> 소득 종류 </Tag>
        <Typography type="M_12_120">8/9</Typography>
      </div>
      <Typography type="M_14_120" class="w-full px-1 mb-4 md:mb-6">
        현재 소득 상태를 선택해주세요!
      </Typography>
      <CustomDropdown
        class="w-full"
        v-model="employmentData"
        :options="incomeEmployment"
      />
    </Card>
    <Card class="bg-white border border-gray-150">
      <div class="w-full flex justify-between mb-4 md:mb-6">
        <Tag> 직업 </Tag>
        <Typography type="M_12_120">9/9</Typography>
      </div>
      <Typography type="M_14_120" class="w-full px-1 mb-4 md:mb-6">
        현재 직업 상태를 선택해주세요!
      </Typography>
      <CustomDropdown
        class="w-full"
        v-model="incomeData"
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
import { questions, choices, choices2, job , incomeSource, incomeEmployment} from '@/features/user/user-survey/constants/userSurvey.ts'

import {
  getUserSurveyData,
  postUserSurveyData,
  patchUserSurveyData
} from '../service/user-survey.service.ts'
import type { UserSurveyData } from '@/entities/user/user.entity.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
const answers = ref<Record<string, string | number>>({})
const sourceData = ref<string>('')
const employmentData = ref<string>('')
const incomeData = ref<string>('')

const boolTags = ['술', '담배', '운동', '가족간 질병', '이전 질병']

function getChoices(tag: string) {
  if (boolTags.includes(tag)) return choices2
  if (tag === '가족 구성원') return choices
  return []
}

onMounted(async () => {
  const existing = await getUserSurveyData()
  if (existing) {
    answers.value['담배'] = existing.lifestyleSmoking === 1 ? 1 : 2
    answers.value['술'] = existing.lifestyleAlcoholFreq === 1 ? 1 : 2
    answers.value['운동'] = existing.lifestyleExerciseFreq === 1? 1 : 2
    answers.value['가족 구성원'] = existing.householdSize
    answers.value['가족간 질병'] = existing.lifestyleFamilyMedical === 1 ? 1 : 2
    answers.value['이전 질병'] = existing.lifestyleBeforeDiseases === 1 ? 1 : 2
    sourceData.value = existing.incomeSourceType
    employmentData.value = existing.incomeEmploymentStatus
    incomeData.value = existing.incomeJobType
  }
})

async function submitAnswers() {
  const payload: UserSurveyData = {
    lifestyleSmoking: answers.value['담배'] as number,
    lifestyleAlcoholFreq: answers.value['술'] as number,
    lifestyleExerciseFreq: answers.value['운동'] as number,
    householdSize: Number(answers.value['가족 구성원']),
    incomeSourceType: sourceData.value,
    incomeEmploymentStatus:employmentData.value,
    lifestyleFamilyMedical: answers.value['가족간 질병'] as number,
    lifestyleBeforeDiseases: answers.value['이전 질병'] as number,
    incomeJobType: incomeData.value,
  }

  const existing = await getUserSurveyData()

  if (!existing) {
    await postUserSurveyData(payload)
    alert('설문 저장 완료')
    router.push('/user/')
  } else {
    await patchUserSurveyData(payload)
    alert('설문 수정 완료')
    router.push('/user/')
    console.log('✅ PATCH: 설문 수정 완료')
  }
}
</script>