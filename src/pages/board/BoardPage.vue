<template>
  <AppLayout>
      <UserProfileBox/>
      <UserLogBox/>
      <PopularTop3Box/>
  </AppLayout>
</template>

<script setup lang="ts">
import PopularTop3Box from '@/features/board/main/ui/PopularTop3Box.vue';
import UserLogBox from '@/features/board/main/ui/UserLogBox.vue';
import UserProfileBox from '@/features/board/main/ui/UserProfileBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'

</script>