<template>
  <AppLayout>
    <UserTitle :label="'워너비 선택'" :subText="userSubTextMap['워너비 선택']" />
    <ChooseWonnabe />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
import ChooseWonnabe from '@/features/user/user-choose-wonnabe/ui/ChooseWonnabe.vue';

import { onMounted } from 'vue';
import { useUserProfileStore } from '@/entities/user/user.store';

const userStore = useUserProfileStore()

onMounted(async ()=>{
  await userStore.fetchUserProfile()
})

</script>