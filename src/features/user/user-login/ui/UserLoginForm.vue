<template>
    <div class="flex flex-col w-full">
      <LabelInput label="이메일" v-model="email" class="mb-4" />
      <LabelInput label="비밀번호" type="password" v-model="password" class="mb-8" />
  
      <Button class="mt-4" @click="handleLogin">로그인</Button>
  
      <Button class="mt-4">
        <div class="flex flex-row items-center justify-center gap-2">
            <MessageCircle class="w-4 h-4 fill-gray-900" />
            카카오로 로그인하기
        </div>
      </Button>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '@/shared/ui/atoms/Button.vue'
  import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
  import { MessageCircle } from 'lucide-vue-next'
  
  const email = ref('')
  const password = ref('')
  
  const handleLogin = () => {
    console.log('이메일:', email.value)
    console.log('비밀번호:', password.value)
  }
</script>