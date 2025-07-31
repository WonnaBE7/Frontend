<template>
    <AppLayout>
    <PopularTop3Card/>
    <PostPreviewCard
        v-for="post in posts"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />

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
  import {FilePlus} from 'lucide-vue-next'
  import Button from '@/shared/ui/atoms/Button.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
  import { mockBoardsByCategory } from '@/entities/board/board.mock'
  import PopularTop3Card from '@/features/recommend/main/ui/PopularTop3Card.vue'
  
  const route = useRoute()
  const router = useRouter()
  const category = route.params.category as string
  const posts = computed(() => mockBoardsByCategory[category] ?? [])

  function goToWrite() {
    router.push({
      path: '/board/write',
      query: { category }
    })
  } 
  </script>