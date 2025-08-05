<template>
    <PostPreviewCard
        v-for="post in store.writed"
        :key="post.boardId"
        v-bind="post"
        class="bg-white"
      />
</template>

<script setup lang="ts">
import { usePostPreviewStore } from '@/entities/board/board.store';
import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'

const store = usePostPreviewStore()
</script>