<template>
  <PostPreviewCard
      v-for="post in scrapedPosts"
      :key="post.boardId"
      v-bind="post as Board"
      class="bg-white"
  />
</template>

<script setup lang="ts">
  import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
  import { usePostPreviewStore } from '@/entities/board/board.store';
  import type { Board } from '@/entities/board/board.entity';
import { computed, onMounted } from 'vue';

  const store = usePostPreviewStore()
  onMounted(() => {
    store.fetchUserScarped()
  })
  const scrapedPosts = computed(() => store.scraped ?? [])
</script>