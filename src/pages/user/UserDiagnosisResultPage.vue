<template>
  <AppLayout>
    <UserDiagnosisResultBox/>
    <Button class="mb-4" @click="goSurvey">추가 정보 입력하기</Button>
    <Button class="mb-4" label="white" @click="goUserProfile">프로필 보러가기</Button>
  </AppLayout>
</template>

<script setup lang="ts">
import UserDiagnosisResultBox from '@/features/user/user-diagnosis-result/UserDiagnosisResultBox.vue';
import Button from '@/shared/ui/atoms/Button.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useUserProfileStore } from '@/entities/user/user.store';

const router = useRouter()

function goSurvey(){
    router.push('/user/survey')
}

function goUserProfile(){
    router.push('/user/profile')
}

const userStore = useUserProfileStore()

onMounted(async ()=>{
  await userStore.fetchUserProfile()
})
</script>