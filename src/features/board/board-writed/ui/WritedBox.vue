<template>
    <PostPreviewCard
        v-for="post in mockMyBoards"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />
</template>

<script setup lang="ts">
import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
import { mockMyBoards } from '@/entities/board/board.mock'
</script>