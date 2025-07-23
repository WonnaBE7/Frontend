<template>
    <AppLayout>
      <UserTitle label="나의 금융 히스토리"/>
      <UserHistroy/>
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import UserHistroy from '@/features/user/ui/user-history/UserHistroy.vue';
</script>