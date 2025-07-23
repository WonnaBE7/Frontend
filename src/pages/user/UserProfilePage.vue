<template>
  <AppLayout>
    <UserTitle label="마이 페이지"/>
    <UserProfileCard :profile="userProfile" />
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import UserProfileCard from '@/features/user/ui/userProfile/UserProfileCard.vue';
  import { getMockUserProfile } from '@/features/user/services/userProfile.service'
  import UserSettingsMenu from '@/features/user/ui/userProfile/UserSettingsMenu.vue';
  import UserTitle from '@/features/user/ui/UserTitle.vue';

  const userProfile = getMockUserProfile()
</script>