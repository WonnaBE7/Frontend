<template>
    <form class="flex flex-col gap-6 w-full">
      <LabelInput label="이름" v-model="form.name" />
      <LabelInput label="이메일" v-model="form.email" />
      <LabelInput label="비밀번호" v-model="form.password" type="password" />
    
      <div class="flex flex-row gap-4 mt-32">
        <Button
            type="submit"
            label="white"
            @click.prevent="handleSubmit"
        >
            돌아가기
        </Button>
        <Button
            type="submit"
            customClass="bg-sub-yellow-p text-black hover:bg:sub-yellow-bg"
            @click.prevent="handleSubmit"
        >
            저장하기
        </Button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import Button from '@/shared/ui/atoms/Button.vue'
  
  const form = ref({
    name: '',
    email: '',
    password: ''
  })
  
  const handleSubmit = () => {
    console.log('폼 제출', form.value)
  }
  </script>