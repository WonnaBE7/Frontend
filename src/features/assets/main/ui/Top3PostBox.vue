<template>
    <Card class="bg-white border border-gray-150">
      <div class="w-full flex flex-row">
        <IconLabel IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4" >
            워너비 게시판 인기글
        </IconLabel>
        <RouterLink
            to="/board">
            <component :is="ChevronRight"></component>
        </RouterLink>
      </div>
      <PostPreviewCard
        v-for="post in topPosts"
        :key="post.boardId"
        v-bind="post"
        class="bg-gray-BGDim"
      />
   </Card>
  </template>
  
  <script setup lang="ts">
    import { computed } from 'vue';
    import Card from '@/shared/ui/atoms/Card.vue';
    import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue';
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
    import { MessageCircleIcon, ChevronRight } from 'lucide-vue-next';
    import { usePostPreviewStore } from '@/entities/board/board.store'
    const postStore = usePostPreviewStore() 
    const topPosts = computed(() => postStore.top3Posts)
  
  </script>