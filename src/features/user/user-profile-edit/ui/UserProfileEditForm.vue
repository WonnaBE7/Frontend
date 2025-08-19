<template>
    <form class="flex flex-col gap-6 w-full">
      <LabelInput label="이름" v-model="form.name" />
      <LabelInput label="비밀번호" v-model="form.password" type="password" />
    
      <div class="flex flex-row gap-4 mt-32">
        <Button
            type="submit"
            label="white"
            @click.prevent="goBack"
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
  import { putUserProfile } from '@/features/user/user-profile-edit/services/profile-edit.service'
  import { useRouter } from 'vue-router'

  interface FormData {
    name: string
    password: string
  }

  const form = ref<FormData>({
    name: '',
    password: ''
  })

  const router = useRouter()

  const handleSubmit = async () => {
    const { name, password } = form.value

    if (!name.trim() || !password.trim()) {
      alert('이름과 비밀번호를 모두 입력해주세요.')
      return
    }

    try {
      const res = await putUserProfile({ name, password })
      if (res.code === 200) {
        // 모달 넣기
        console.log('수정 완료:')
        alert('사용자 정보가 성공적으로 수정되었습니다.')
        router.push('/user')
      }
    } catch (err: any) {
      console.error('수정 실패:', err.message)
      alert('오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  function goBack() {
    router.back()
  }
</script>