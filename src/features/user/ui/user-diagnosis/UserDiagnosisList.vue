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

const choices = [
  { value: 1, label: '매우 아니다' },
  { value: 2, label: '아니다' },
  { value: 3, label: '보통이다' },
  { value: 4, label: '그렇다' },
  { value: 5, label: '매우 그렇다' }
]

const questions = [
  { tag: '소비태도', label: '나는 물건을 살 때 가격을 꼼꼼히 비교하고 신중하게 구매한다.' },
  { tag: '저축/미래준비', label: '나는 매월 일정 금액을 저축하거나 투자하려고 노력한다.' },
  { tag: '리스크선호', label: '나는 높은 수익을 위해 위험한 금융 상품에 투자할 수 있다.' },
  { tag: '계획성', label: '나는 예산 계획을 세우고 지출을 통제하려 노력한다.' },
  { tag: '재무지식', label: '나는 다양한 금융 상품과 투자 수단에 대한 이해가 있다.' }
]

const answers = ref<(number | null)[]>(Array(questions.length).fill(null))

const submitAnswers = () => {
  console.log('진단 결과:', answers.value)
}
</script>