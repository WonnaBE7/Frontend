<template>
    <AppLayout>
      <UserTitle label="금융 성향 진단"/>
      <UserDiagnosisList />
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/features/user/ui/UserTitle.vue';
import UserDiagnosisList from '@/features/user/ui/user-diagnosis/UserDiagnosisList.vue'
</script>