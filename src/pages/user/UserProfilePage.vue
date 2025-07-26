<template>
  <AppLayout>
    <UserTitle :label="'마이 페이지'" :subText="userSubTextMap['마이 페이지']" />
    <UserProfileCard />
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
  import UserSettingsMenu from '@/features/user/ui/user-profile/UserSettingsMenu.vue';
  import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
  import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
</script>