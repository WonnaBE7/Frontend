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
import SplashScreen from '@/shared/ui/organisms/SplashScreen.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import { ref, watch } from 'vue'
import { userSignup } from '@/features/user/user-signup/services/signup.service'
import { useRouter } from 'vue-router'
import AgreeMentBox from './AgreeMentBox.vue'
import { terms } from '../constants/terms.constants'

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter();

const checked = ref<string[]>([])
const allChecked = ref<boolean>(false)

watch(checked, (newVal) => {
  allChecked.value = newVal.length === terms.length
})
const onSubmit = async () => {
  const missingRequiredTerms = terms
    .filter(t => t.required && !checked.value.includes(t.id))
    .map(t => `- ${t.label}`)

  // ✅ 비밀번호 길이 체크
  if (password.value.length < 6) {
    alert('비밀번호는 최소 6글자 이상 입력해야 합니다.')
    return
  }

  // ✅ 이메일 형식 체크
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    alert('올바른 이메일 주소를 입력해주세요.')
    return
  }

  if (missingRequiredTerms.length > 0) {
    alert(
      `필수 약관에 모두 동의해야 가입할 수 있습니다.\n\n동의가 필요한 항목:\n${missingRequiredTerms.join('\n')}`
    )
    return
  }

  try {
    const res = await userSignup({
      name: name.value,
      email: email.value,
      password: password.value,
    })
    if (res.code === 200) {
      alert('회원가입이 완료되었습니다!')
      router.push('/user/login')
    }
  } catch (error) {
    console.log(name.value, email.value, password.value)
  }
}
</script>