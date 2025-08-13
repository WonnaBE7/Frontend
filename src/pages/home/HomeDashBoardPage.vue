<template>
  <AppLayout>
      <AssetsConsumptionBox/>
      <FinTypeBox />
      <CurrentGoalBox/>
      <Top3PostBox/>
  </AppLayout> 
</template>

<script setup lang="ts">
import AssetsConsumptionBox from '@/features/assets/main/ui/AssetsConsumptionBox.vue';
import CurrentGoalBox from '@/features/goal/main/ui/CurrentGoalBox.vue';
import FinTypeBox from '@/features/assets/main/ui/FinTypeBox.vue';
import Top3PostBox from '@/features/assets/main/ui/Top3PostBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import { onMounted } from 'vue';
import { initMainData } from '@/features/init/initMainData';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/entities/user/auth.store';

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (!authStore.accessToken) {
    router.push('/user/login')
  }
  initMainData()
})


</script>