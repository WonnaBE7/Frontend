<template>
  <AppLayout>
      <UserProfileBox/>
      <UserLogBox/>
      <PopularTop3Box/>
  </AppLayout>
</template>

<script setup lang="ts">
import PopularTop3Box from '@/features/board/ui/main/PopularTop3Box.vue';
import UserLogBox from '@/features/board/ui/main/UserLogBox.vue';
import UserProfileBox from '@/features/board/ui/main/UserProfileBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'

</script>