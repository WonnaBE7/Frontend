<template>
  <AppLayout>
    <UserProfileCard :profile="userProfile" />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
import { getMockUserProfile } from '@/features/user/services/userProfile.service'

const userProfile = getMockUserProfile()
</script>