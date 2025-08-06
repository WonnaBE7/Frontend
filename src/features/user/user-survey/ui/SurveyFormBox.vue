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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue'
import UserDiagnosisItem from '../../user-diagnosis/ui/UserDiagnosisItem.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import { questions, choices, choices2, job } from '@/features/user/user-survey/constants/userSurvey.ts'

const answers = ref<Record<string, string | number>>({})
const jobAnswer = ref<string>('')

function getChoices(tag: string) {
  const boolTags = ['술', '담배', '운동', '가족간 질병', '이전 질병']
  if (boolTags.includes(tag)) return choices2
  if (tag === '가족 구성원') return choices
  return [] 
}

function submitAnswers() {
  console.log(answers.value)
  const boolTags = ['술', '담배', '운동', '가족간 질병', '이전 질병']
  const healthAnswers = boolTags.map(tag => answers.value[tag] === 1)
  const etcAnswers = {
    familySize: answers.value['가족 구성원'] ?? null,
    job: jobAnswer.value || null,
  }

  console.log('건강 관련 ', healthAnswers)
  console.log('기타 정보', etcAnswers)
}
</script>