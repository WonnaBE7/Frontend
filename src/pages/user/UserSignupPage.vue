<template>
    <AppLayout>
      <UserTitle label="회원 가입"/>
      <UserSignupForm />
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/features/user/ui/UserTitle.vue';
import UserSignupForm from '@/features/user/ui/user-signup/UserSignupForm.vue';
</script>