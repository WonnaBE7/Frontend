<template>
  <AppLayout>
      <GoalSimulationInputForm/>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue';
import GoalSimulationInputForm from '@/features/goal/goal-simulation-input/ui/GoalSimulationInputForm.vue';
import { onMounted } from 'vue';
import { useUserProfileStore } from '@/entities/user/user.store';

const userStore = useUserProfileStore()

onMounted(async ()=>{
  await userStore.fetchUserProfile()
})
</script>