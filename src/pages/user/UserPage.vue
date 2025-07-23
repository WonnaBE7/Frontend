<template>
  <AppLayout>
    <UserProfileCard :profile="userProfile" />
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
import { getMockUserProfile } from '@/features/user/services/userProfile.service'
import UserSettingsMenu from '@/features/user/ui/UserSettingsMenu.vue';

const userProfile = getMockUserProfile()
</script>