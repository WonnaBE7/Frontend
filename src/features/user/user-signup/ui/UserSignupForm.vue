<template>
  <LabelInput v-model="name" label="이름" class="mb-4" />
  <LabelInput v-model="email" label="이메일" class="mb-4" />
  <LabelInput v-model="password" label="비밀번호" type="password" class="mb-8" />

  <AgreeMentBox
    v-model:checked="checked"
  />
  <Button class="mt-4 w-full" @click="onSubmit">
    회원가입 및 자산 연동하기
  </Button>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import { ref, watch } from 'vue'
import { signup } from '@/features/user/user-signup/services/signup.service'
import { useRouter } from 'vue-router'
import AgreeMentBox from './AgreeMentBox.vue'
import { terms } from '../constants/terms.constants'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter();

const checked = ref<string[]>([])
const allChecked = ref(false)

watch(checked, (newVal) => {
  allChecked.value = newVal.length === terms.length
})

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
    router.push('/user/diagnosis')
  } catch (error) {
      console.log(name.value, email.value, password.value)
      alert('회원가입에 실패했습니다.')
  }
}
</script>