<template>
  <AppLayout>
    <UserTitle label="마이 페이지"/>
    <UserProfileCard />
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
  import UserSettingsMenu from '@/features/user/ui/user-profile/UserSettingsMenu.vue';
  import UserTitle from '@/features/user/ui/UserTitle.vue';
</script>