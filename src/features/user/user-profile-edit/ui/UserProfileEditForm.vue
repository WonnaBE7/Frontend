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
  import { updateUserProfile } from '@/features/user/user-profile-edit/services/profile-edit.service'
  import { useRouter } from 'vue-router'
  const form = ref({
    name: '',
    email: '',
    password: ''
  })
  const router = useRouter()
  const handleSubmit = async () => {
  try {
    const { name, password } = form.value
    const res = await updateUserProfile({ name, password })
    
    console.log('수정 완료:', res.message)
    alert('사용자 정보가 성공적으로 수정되었습니다.')
    router.push('/user')
  } catch (err: any) {
    console.error('수정 실패:', err.message)
    alert('오류가 발생했습니다. 다시 시도해주세요.')
  }
}
  </script>