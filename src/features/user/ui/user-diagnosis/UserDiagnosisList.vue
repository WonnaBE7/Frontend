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
import UserDiagnosisItem from '@/features/user/ui/user-diagnosis/UserDiagnosisItem.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import {choices, questions} from '@/features/user/constants/userDiagnosis.ts'
const answers = ref<(number | null)[]>(Array(questions.length).fill(null))

const submitAnswers = () => {
  console.log('진단 결과:', answers.value)
}
</script>