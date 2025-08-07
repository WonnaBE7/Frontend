<template>
  <PostPreviewCard
      v-for="post in writedPosts"
      :key="post.boardId"
      v-bind="post"
      class="bg-white"
  />
</template>

<script setup lang="ts">
  import { usePostPreviewStore } from '@/entities/board/board.store';
  import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
import { computed, onMounted } from 'vue';

  const store = usePostPreviewStore()
  onMounted(() => {
    store.fetchUserScarped()
  })
  const writedPosts = computed(() => store.writed ?? [])
</script>