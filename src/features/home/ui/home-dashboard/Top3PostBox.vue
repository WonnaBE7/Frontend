<template>
    <Card>
        <IconLabel IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4" >
            워너비 게시판 인기글
        </IconLabel>
      <PostPreviewCard
        v-for="post in topPosts"
        :key="post.boardId"
        v-bind="post"
      />
   </Card>
  </template>
  
  <script setup lang="ts">
    import { computed } from 'vue';
    import Card from '@/shared/ui/atoms/Card.vue';
    import PostPreviewCard from '@/features/board/ui/PostPreviewCard.vue'
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
    import { MessageCircleIcon } from 'lucide-vue-next';
    import { usePostPreviewStore } from '@/entities/board/board.store'
    const postStore = usePostPreviewStore() 
    const topPosts = computed(() => postStore.top3Posts)
  
  </script>