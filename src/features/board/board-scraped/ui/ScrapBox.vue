<template>
  <PostPreviewCard
      v-for="post in scrapedPosts"
      :key="post.boardId"
      :boardId="post.boardId"
      :title="post.title"
      :content="post.content"
      :userName="post.userName"
      :categoryId="post.categoryId"
      :categoryName="post.categoryName"
      :likeCount="post.likeCount"
      :commentCount="post.commentCount"
      :isScraped="post.isScraped"
      :isLiked="post.isLiked"
      :createdAt="post.createdAt"
      class="bg-white"
  />
</template>

<script setup lang="ts">
  import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
  import { usePostPreviewStore } from '@/entities/board/board.store';
  import { computed, onMounted } from 'vue';

  const store = usePostPreviewStore()
  onMounted(() => {
    store.fetchUserScarped()
  })
  const scrapedPosts = computed(() => store.scraped ?? [])
</script>