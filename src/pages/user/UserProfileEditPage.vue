<template>
    <AppLayout>
      <UserTitle :label="'회원정보 수정'" :subText="userSubTextMap['회원정보 수정']" />
      <Card class="bg-white border border-gray-150">
        <UserProfileCard ></UserProfileCard>
      </Card>
      <UserProfileEditForm></UserProfileEditForm>
    </AppLayout>
  </template>
  
<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
import UserProfileCard from '@/shared/ui/molecules/UserProfileCard.vue';
import UserProfileEditForm from '@/features/user/user-profile-edit/ui/UserProfileEditForm.vue';
</script>