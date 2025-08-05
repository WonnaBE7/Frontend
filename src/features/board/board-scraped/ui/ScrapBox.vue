<template>
    <PostPreviewCard
        v-for="post in store.scraped"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />
</template>

<script setup lang="ts">
import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
import { usePostPreviewStore } from '@/entities/board/board.store';

const store = usePostPreviewStore()
</script>