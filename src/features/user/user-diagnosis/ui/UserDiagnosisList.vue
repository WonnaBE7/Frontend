<template>
  <div class="flex flex-col">
    <UserDiagnosisItem
      v-for="(item, i) in questions"
      :key="i"
      :tag="item.tag"
      :label="item.label"
      :index="i + 1"
      :total="questions.length"
      :choices="choices"
      v-model:selected="answers[i]"
    />
    <Button class="mb-4" @click="submitAnswers">저장하기</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserDiagnosisItem from './UserDiagnosisItem.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import {choices, questions} from '@/features/user/user-diagnosis/constants/userDiagnosis'
import { submitNowmeDiagnosis } from '@/features/user/user-diagnosis/services/diagnosis.service.ts'
import { useRouter } from 'vue-router'

const answers = ref<(number | null)[]>(Array(questions.length).fill(null))
const router = useRouter()


const submitAnswers = async () => {
  const completed = answers.value.every(answer => answer !== null)
  if (!completed) {
    alert('모든 질문에 답해주세요.')
    return
  }

  const payload = {
    diagnosis_answers: answers.value as number[]
  }

  try {
    await submitNowmeDiagnosis(payload)
    alert('진단 결과가 저장되었습니다.')
    router.push('/user')
  } catch (err: any) {
    console.error('❌ 제출 실패:', err.message)
    alert('저장 중 오류가 발생했습니다.')
  }
}


</script>