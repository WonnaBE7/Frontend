<template>
  <div class="flex flex-col w-full h-full justify-center">
    <div class="mb-40">
      <LabelInput label="이메일" v-model="email" class="mb-4" />
      <LabelInput label="비밀번호" type="password" v-model="password" class="mb-8" />

      <Button class="mt-4" @click="handleLogin">로그인</Button>

      <Button class="mt-4">
        <div 
          @click="toggleModal"
          class="flex flex-row items-center justify-center gap-2">
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

      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40"
       > 
        <AgreeMentBox
          v-model:checked="checked"
          :modal="true"
          @close="showModal = false"
          @kakao-login="goKakao"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AgreeMentBox from '../../user-signup/ui/AgreeMentBox.vue'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import { MessageCircle } from 'lucide-vue-next'
import { userLogin } from '@/features/user/user-login/services/login.service'
import { useAuthStore } from '@/entities/user/auth.store'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { terms } from '../../user-signup/constants/terms.constants'

const authStore = useAuthStore()
const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const showModal = ref<boolean>(false)
const checked = ref<string[]>([])
const allChecked = ref<boolean>(false)

watch(checked, (newVal) => {
  allChecked.value = newVal.length === terms.length
})

const handleLogin = async () => {
  try {
    const res = await userLogin({ email: email.value, password: password.value })
    if(res.code === 200){
      const { accessToken, user } = res.data
      authStore.login(accessToken, user)
      
      router.push('/')
    }
  } catch (err: any) {
    alert(err.message || '로그인에 실패했습니다.')
  }
}

function goSignup(){
  router.push('/user/signup')
}

function toggleModal(){
  showModal.value = !showModal.value
}

function goKakao() {
  showModal.value = false
  alert('카카오 로그인 실행')
}
</script>