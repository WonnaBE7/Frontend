<template>
      <div class="bg-gray-50 mb-4 p-4 rounded-md">
        <div class="flex flex-row justify-between mb-4">
          <Typography type="B_14_140">{{ title }}</Typography>
          <Trash2Icon
            v-if="isMyPost"
            class="w-5 h-5 text-gray-400 cursor-pointer hover:text-red-400 transition"
            @click="emit('delete')"
          />
          <BookmarkIcon
            v-else
            :class="[
              'w-5 h-5 cursor-pointer transition',
              isScrapped ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'
            ]"
            @click="toggleScrap"
          />
        </div>
    
        
        <Typography type="R_12_140" class="text-gray-500 mb-4 line-clamp-2">
          {{ content }}
        </Typography>
    
        <div class="flex flex-row items-center justify-between">
          <!-- 작성자 / 태그 -->
          <div class="flex items-center gap-2">
            <Typography type="M_12_120">{{ author }}</Typography>
            <Tag>{{ tag }}</Tag>
          </div>
      
          <!-- 좋아요 / 댓글 -->
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <div
              class="flex items-center gap-1 cursor-pointer"
              @click="toggleLike"
            >
              <HeartIcon
                :class="[
                  'w-4 h-4 transition',
                  isLiked ? 'text-red-500 fill-red-500' : 'text-red-500'
                ]"
              />
              <Typography type="M_12_120">{{ likeCount }}</Typography>
            </div>
            <div class="flex items-center gap-1">
              <component :is="MessageCircle"class="w-4 h-4 text-blue-500"></component> <Typography type="M_12_120">{{ commentCount }}</Typography>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import Tag from '@/shared/ui/atoms/Tag.vue'
  import { HeartIcon, BookmarkIcon, Trash2Icon, MessageCircle } from 'lucide-vue-next'

  
 defineProps<{
    title: string
    content: string
    author: string
    tag: string
    likeCount: number
    commentCount: number
  }>()
  
  const emit = defineEmits<{
    (e: 'delete'): void
  }>()
  
  // 현재 라우트 기준
  const route = useRoute()
  const isMyPost = computed(() => route.path.includes('/board/mypost'))
  
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