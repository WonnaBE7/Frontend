<template>
    <AppLayout>
      <UserTitle :label="'나의 금융 히스토리'" :subText="userSubTextMap['나의 금융 히스토리']" />
      <UserHistroy/>
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
import UserHistroy from '@/features/user/user-history/ui/UserHistroy.vue';
</script>