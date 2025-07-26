<template>
    <AppLayout>
      <UserTitle :label="'회원 가입'" :subText="userSubTextMap['회원 가입']" />
      <UserSignupForm />
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserSignupForm from '@/features/user/user-signup/ui/UserSignupForm.vue';
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'

</script>