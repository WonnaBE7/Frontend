<template>
      <Card @click="goToPost" class="mt-4 !mb-0">
        <div class="w-full flex flex-row justify-between mb-4">
          <Typography type="B_14_140">{{ title }}</Typography>
          <Trash2Icon
            v-if="isMyPost"
            class="w-5 h-5 sm:w-7 sm:h-7 text-gray-900 cursor-pointer hover:text-sub-red-p transition"
            @click="emit('delete')"
          />
          <BookmarkIcon
            v-else
            :class="[
              'w-5 h-5 sm:w-7 sm:h-7 cursor-pointer transition',
              isScrapped ? 'text-sub-yellow-p fill-sub-yellow-p' : 'text-sub-yellow-p'
            ]"
            @click="toggleScrap"
          />
        </div>
    
        <Typography type="R_12_140" class="text-gray-500 mb-4 line-clamp-2 w-full">
          {{ content }}
        </Typography>
    
        <div class="flex flex-row items-center justify-between w-full">
          <div class="flex items-center gap-2">
            <Typography type="M_12_120">{{ userName }}</Typography>
            <NoBorderTag color="bg-gray-100">{{ category }}</NoBorderTag>
          </div>
      
          <div class="flex items-center gap-4 text-sm text-gray-500">
            <div
              class="flex items-center gap-1 md:gap-2 cursor-pointer"
              @click="toggleLike"
            >
              <HeartIcon
                :class="[
                  'w-4 h-4 md:w-5 md:h-5 transition',
                  isLiked ? 'text-sub-red-p fill-sub-red-p' : 'text-sub-red-p'
                ]"
              />
              <Typography type="M_12_120">{{ likeCount }}</Typography>
            </div>
            <div class="flex items-center gap-1 md:gap-2">
              <component :is="MessageCircle"class="w-4 h-4 md:w-5 md:h-5 text-sub-aqua-p"></component> <Typography type="M_12_120">{{ commentCount }}</Typography>
            </div>
          </div>
        </div>
      </Card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Typography from '@/shared/ui/atoms/Typography.vue'

  import { HeartIcon, BookmarkIcon, Trash2Icon, MessageCircle } from 'lucide-vue-next'
  import NoBorderTag from '../atoms/NoBorderTag.vue'
  import Card from '../atoms/Card.vue'

  
 const props = defineProps<{
    boardId: number
    title: string
    content: string
    userName: string
    category: string
    likeCount: number
    commentCount: number
  }>()
  
  const emit = defineEmits<{
    (e: 'delete'): void
  }>()
  
  // 현재 라우트 기준
  const route = useRoute()
  const isMyPost = computed(() => route.path.includes('/board/write'))
  const router = useRouter()

  // 상태: 좋아요, 스크랩
  const isLiked = ref(false)
  const isScrapped = ref(false)
  
  const toggleLike = () => {
    isLiked.value = !isLiked.value
  }
  const toggleScrap = () => {
    isScrapped.value = !isScrapped.value
  }
  const goToPost = () => router.push(`/board/post/${props.boardId}`)
  </script>