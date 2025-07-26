<template>
  <AppLayout>
    <UserTitle :label="'마이 페이지'" :subText="userSubTextMap['마이 페이지']" />
    <Card class="bg-white border border-gray-150">
      <UserProfileCard />
    </Card>
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import UserProfileCard from '@/features/user/ui/UserProfileCard.vue';
  import UserSettingsMenu from '@/features/user/ui/user-profile/UserSettingsMenu.vue';
  import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
  import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
</script>