<template>
  <PostPreviewCard
      v-for="post in writedPosts"
      :key="post.boardId"
      :board-id="post.boardId"
      :title="post.title"
      :content="post.content"
      :user-name="post.userName"
      :category-id="post.categoryId"
      :category-name="post.categoryName"
      :like-count="post.likeCount"
      :comment-count="post.commentCount"
      :is-scraped="post.isScraped"
      :is-liked="post.isLiked"
      :created-at="post.createdAt"
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