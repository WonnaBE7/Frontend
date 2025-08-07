<template>
  <AppLayout>
    <UserTitle :label="'마이 페이지'" :subText="userSubTextMap['마이 페이지']" />
    <div class="w-full flex justify-end">
      <Tag v-if="store.accessToken" type="M_12_120" class="mb-4"
        @click="clickLogout"
      >
        로그아웃
      </Tag>
    </div>
    <Card class="bg-white border border-gray-150">
      <UserProfileCard />
    </Card>
    <UserSettingsMenu></UserSettingsMenu>
  </AppLayout>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserProfileCard from '@/shared/ui/molecules/UserProfileCard.vue';
import UserSettingsMenu from '@/features/user/user-profile/ui/UserSettingsMenu.vue';
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap'
import { useAuthStore } from '@/entities/user/auth.store';
import Tag from '@/shared/ui/atoms/Tag.vue';
import { userLogout } from '@/features/user/user-profile/services/logout.service';
import { onMounted } from 'vue';
import { initUserData } from '@/features/init/initUserData';

const store = useAuthStore()
async function clickLogout(){
  const res = await userLogout()
  if(res.code === 200){
    await store.logout()
  }
}

onMounted(() => {
  initUserData()
})

</script>