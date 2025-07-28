<template>
    <PostPreviewCard
        v-for="post in mockScrapedBoards"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />
</template>

<script setup lang="ts">
import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
import { mockScrapedBoards } from '@/entities/board/board.mock'
</script>