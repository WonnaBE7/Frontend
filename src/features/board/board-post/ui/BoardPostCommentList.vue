<template>
    <Card class="bg-white border border-gray-150">
      <Typography type="B_14_140" class="flex flex-row w-full items-center border-b border-gray-200 pb-2 md:pb-4">
        <MessageCircle class="w-4 text-sub-aqua-p mr-2"/> 댓글 {{ comments.length }}
      </Typography>
      <div v-for="comment in comments" :key="comment.commentId" class="mt-4 md:mt-6 w-full">
        <div class="flex flex-row  items-center gap-2 md:gap-4">
          <Typography type="B_12_140">{{ comment.userName }} </Typography>
          <NoBorderTag color="bg-gray-150">{{ comment.nowme }}</NoBorderTag>
        </div>
        <Typography type="M_12_140" class="mt-1 md:mt-2 text-gray-500">{{ comment.content }}</Typography>
        <div
          class="flex items-center gap-1 md:gap-2 cursor-pointer mt-2 md:mt-4"
          @click="toggleLike"
        >
          <HeartIcon
            :class="[
              'w-4 h-4 md:w-5 md:h-5 transition',
              isLiked ? 'text-sub-red-p fill-sub-red-p' : 'text-sub-red-p'
            ]"
          />
          <Typography type="M_12_120">{{ comment.likeCount }}</Typography>
        </div>
      </div>
      
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import type { Comment } from '@/entities/board/comment/comment.entity'
  import Card from '@/shared/ui/atoms/Card.vue';
  import { MessageCircle, HeartIcon } from 'lucide-vue-next';
  import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue';

  defineProps<{ comments: Comment[]}>()

  const isLiked = ref(false)
  const toggleLike = () => {
    isLiked.value = !isLiked.value
  }

  </script>