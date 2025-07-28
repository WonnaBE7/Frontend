<template>
    <AppLayout>
    <PopularTop3Card/>
    <PostPreviewCard
        v-for="post in posts"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />
      <Button @click="goToWrite">
        ✏️ 글쓰기
      </Button>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
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