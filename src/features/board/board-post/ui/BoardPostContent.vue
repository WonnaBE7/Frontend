<template>
    <Card class="bg-white border border-gray-150">
      <Typography type="B_14_140" class="w-full">{{ post.title }}</Typography>
      
      <div class="flex w-full items-center gap-2 md:gap-4 mt-4 md:mt-6">
        <Typography type="M_12_140">{{ post.userName }}</Typography>
        <NoBorderTag :color="'bg-gray-100'">{{ post.category }}</NoBorderTag>
      </div>
      <Typography type="M_12_140" class="text-gray-600 mt-4 w-full border-b border-gray-150 pb-4 md:pb-6">{{ post.content }}</Typography>
      <div class="flex flex-row w-full items-center justify-between mt-4 md:mt-6">
        <div class="flex flex-row items-center">
          <HeartIcon
            :class="[
              'w-4 h-4 md:w-5 md:h-5 transition mr-1 md:mr-2',
              isLiked ? 'text-sub-red-p fill-sub-red-p' : 'text-sub-red-p'
            ]"
              @click="toggleLike"
          />
          <Typography type="M_12_120" class="mr-4">{{ post.likeCount }}</Typography>
          <BookmarkIcon
              :class="[
              'w-5 h-5 sm:w-7 sm:h-7 cursor-pointer transition mr-1 md:mr-2',
              isScrapped ? 'text-sub-yellow-p fill-sub-yellow-p' : 'text-sub-yellow-p'
            ]"
            @click="toggleScrap"
          />
          <Typography type="M_12_120" class="w-auto">스크랩</Typography>
        </div>
        <Typography type="M_12_120" class="text-gray-150 text-right">{{post.createdAt}}</Typography>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { BookmarkIcon, HeartIcon } from 'lucide-vue-next';
  import type { Board } from '@/entities/board/board.entity'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue'
  import Card from '@/shared/ui/atoms/Card.vue';
  defineProps<{ post: Board }>()

  // 상태: 좋아요, 스크랩
  const isLiked = ref(false)
  const isScrapped = ref(false)
  
  const toggleLike = () => {
    isLiked.value = !isLiked.value
  }
  const toggleScrap = () => {
    isScrapped.value = !isScrapped.value
  }
  </script>