<template>
  <AppLayout>
      <UserProfileBox/>
      <UserLogBox/>
      <PopularTop3Box/>
      <Button
        class="fixed bottom-24 right-4 z-40 bg-sub-yellow-p hover:bg-sub-yellow-d text-white 
              rounded-full flex items-center justify-center max-w-[56px] max-h-[56px] w-14 h-14"
        @click="goToWrite"
      >
        <component :is="FilePlus" class="w-5 h-5 sm:w-7 sm:h-7" />
      </Button>
  </AppLayout>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue'
import {FilePlus} from 'lucide-vue-next'
import PopularTop3Box from '@/features/board/main/ui/PopularTop3Box.vue';
import UserLogBox from '@/features/board/main/ui/UserLogBox.vue';
import UserProfileBox from '@/features/board/main/ui/UserProfileBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import { useRouter } from 'vue-router';

const router = useRouter()

function goToWrite() {
    router.push({
      path: '/board/write',
    })
  } 
</script>