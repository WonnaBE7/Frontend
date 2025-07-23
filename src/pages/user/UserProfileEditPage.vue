<template>
    <AppLayout>
      <UserTitle label="회원정보 수정"/>
      <UserProfileCard ></UserProfileCard>
      <UserProfileEditForm></UserProfileEditForm>
    </AppLayout>
  </template>
  
<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
import UserProfileEditForm from '@/features/user/ui/user-profile-edit/UserProfileEditForm.vue'
</script>