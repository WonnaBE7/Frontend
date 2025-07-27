<template>
    <AppLayout>
      <UserTitle :label="'로그인'" :subText="userSubTextMap['회원 가입']" />
      <UserLoginForm />
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserLoginForm from '@/features/user/user-login/ui/UserLoginForm.vue';
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'

</script>