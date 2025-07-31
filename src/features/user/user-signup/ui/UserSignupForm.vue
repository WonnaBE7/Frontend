<template>
  <LabelInput v-model="name" label="이름" class="mb-4" />
  <LabelInput v-model="email" label="이메일" class="mb-4" />
  <LabelInput v-model="password" label="비밀번호" type="password" class="mb-8" />

  <Card class="p-4 bg-white border border-gray-150">
    <div class="flex w-full justify-between items-center mb-2">
      <Typography type="M_14_120">약관 동의</Typography>
      <div class="flex flex-row gap-2">
        <input type="checkbox" :checked="allChecked" @change="toggleAll" />
        <Typography type="M_14_120">전체동의</Typography>
      </div>
    </div>
    <hr class="mb-2" />
    <div
      v-for="(term, index) in terms"
      :key="index"
      class="flex w-full justify-start items-center mb-2"
    >
      <input
        type="checkbox"
        :value="term.id"
        v-model="checked"
        @change="syncAllChecked"
        class="mb-2"
      />
      <Typography
        type="M_14_120"
        class="ml-2 mb-2"
        :class="term.required ? 'text-sub-red-p' : 'text-sub-aqua-p'"
      >
        [{{ term.required ? '필수' : '선택' }}]
      </Typography>
      <Typography type="M_14_120" class="ml-1 mb-2">{{ term.label }}</Typography>
    </div>
  </Card>

  <Button class="mt-4 w-full" @click="onSubmit">
    회원가입 및 자산 연동하기
  </Button>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'

import { ref, watch } from 'vue'
import { signup } from '@/features/user/user-signup/services/signup.service'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter();

interface Term {
  id: string
  label: string
  required: boolean
}

const terms: Term[] = [
  { id: 'service', label: '서비스 이용약관', required: true },
  { id: 'privacy', label: '개인정보 수집 및 이용 동의서', required: true },
  { id: 'asset', label: '자산 정보 수집 및 연동 동의서', required: true },
  { id: 'credit', label: '개인신용정보 제3자 제공 동의서', required: true },
  { id: 'marketing', label: '마케팅 활용 동의서', required: false },
]

const checked = ref<string[]>([])
const allChecked = ref(false)

watch(checked, (newVal) => {
  allChecked.value = newVal.length === terms.length
})

const toggleAll = () => {
  if (allChecked.value) {
    checked.value = []
  } else {
    checked.value = terms.map(term => term.id)
  }
}

const syncAllChecked = () => {
  if (checked.value.length === terms.length) {
    allChecked.value = true
  }
}

const onSubmit = async () => {
  const missingRequiredTerms = terms
    .filter(t => t.required && !checked.value.includes(t.id))
    .map(t => `- ${t.label}`)

  if (missingRequiredTerms.length > 0) {
    alert(
      `필수 약관에 모두 동의해야 가입할 수 있습니다.\n\n동의가 필요한 항목:\n${missingRequiredTerms.join('\n')}`
    )
    return
  }
  try {
    const res = await signup({
      name: name.value,
      email: email.value,
      password: password.value,
    })
      console.log(res.code)
      alert('회원가입이 완료되었습니다!')
    router.push('/user/login')
  } catch (error) {
      console.log(name.value, email.value, password.value)
      alert('회원가입에 실패했습니다.')
  }
}
</script>