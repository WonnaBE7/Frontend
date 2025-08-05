<template>
  <div class="flex flex-col w-full h-full justify-center">
    <div class="mb-40">
      <LabelInput label="이메일" v-model="email" class="mb-4" />
      <LabelInput label="비밀번호" type="password" v-model="password" class="mb-8" />

      <Button class="mt-4" @click="handleLogin">로그인</Button>

      <Button class="mt-4">
        <div class="flex flex-row items-center justify-center gap-2">
          <MessageCircle class="w-4 h-4 fill-gray-900" />
          카카오로 로그인하기
        </div>
      </Button>

      <Typography 
        @click="goSignup"
        type="M_12_120" 
        class="w-full flex justify-center mt-4 text-gray-500">
          회원가입 하러가기
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import { MessageCircle } from 'lucide-vue-next'
import { userLogin } from '@/features/user/user-login/services/login.service'
import { useAuthStore } from '@/entities/user/auth.store'
import Typography from '@/shared/ui/atoms/Typography.vue'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try {
    const res = await userLogin({ email: email.value, password: password.value })
    const { accessToken, user } = res

    authStore.login(accessToken, user)

  router.push('/')
  } catch (err: any) {
    alert(err.message || '로그인에 실패했습니다.')
  }
}
function goSignup(){
  router.push('/user/signup')
}
</script>