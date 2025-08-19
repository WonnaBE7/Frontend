<template>
    <Card @click="goToPost" class="!mb-0 mt-4">
      <div class="w-full flex flex-row justify-between mb-4">
        <Typography type="B_14_140">{{ truncatedName }}</Typography>
        <Trash2Icon
          v-if="isMyPost"
          class="w-5 h-5 sm:w-7 sm:h-7 text-gray-900 cursor-pointer hover:text-sub-red-p transition"
          @click.stop="handleDelete"
        />
        <BookmarkIcon
          v-else
          :class="[
            'w-5 h-5 sm:w-7 sm:h-7 cursor-pointer transition',
            isScrapped ? 'text-sub-yellow-p fill-sub-yellow-p' : 'text-sub-yellow-p'
          ]"
          @click.stop="toggleScrap"
        />
      </div>
  
      <Typography type="R_12_140" class="text-gray-500 mb-4 line-clamp-2 w-full">
        {{ content }}
      </Typography>
  
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Typography type="M_12_120">{{ userName }}</Typography>
          <NoBorderTag color="bg-gray-100">{{ categoryName }}</NoBorderTag>
        </div>
    
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <div
            class="flex items-center gap-1 md:gap-2 cursor-pointer"
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
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { HeartIcon, BookmarkIcon, Trash2Icon, MessageCircle } from 'lucide-vue-next'
  import NoBorderTag from '../atoms/NoBorderTag.vue'
  import Card from '../atoms/Card.vue'
  import { patchBoardScrap } from '@/features/board/board-post/service/board-post.service'
  import { usePostPreviewStore } from '@/entities/board/board.store'
  import { deleteBoard } from '@/features/board/board-writed/service/delete-board.service'

  
 const props = defineProps<{
    boardId: number
    title: string
    content: string
    userName: string
    categoryId:number
    categoryName: string
    likeCount: number
    commentCount: number
    isScraped : boolean
    isLiked:boolean
    createdAt:string
  }>()
  
  const truncatedName = computed(() => {
    const name = props.title
    return name.length > 10 ? name.slice(0, 9) + '...' : name
  })
  const route = useRoute()
  const isMyPost = computed(() => route.path.includes('/board/write'))
  const router = useRouter()

  const isLiked = computed(() => props.isLiked)
  const isScrapped = computed(() => props.isScraped)
  
  const goToPost = () => {
    router.push({
      path: `/board/post/${props.boardId}`,
      query: { category: props.categoryName }
    })
  }

  const toggleScrap = async () => {
    try {
      await patchBoardScrap(props.categoryId, props.boardId)
      
      const store = usePostPreviewStore()
      store.toggleScrap(props.boardId)

      if (!isScrapped.value) {
        store.scraped = store.scraped?.filter(p => p.boardId !== props.boardId) ?? null
      }
        await store.fetchUserScarped()
    } catch (e) {
      console.error('스크랩 실패', e)
    }
  }

  const handleDelete = async () =>{
    const confirmed = confirm('정말로 이 게시글을 삭제하시겠습니까?')
    if (!confirmed) return

    const res = await deleteBoard(props.categoryId, props.boardId)
    if (res.code === 200) {
      alert('삭제되었습니다.')
      const store = usePostPreviewStore()
      await store.fetchUserWrited()
    } else {
      alert('삭제에 실패했습니다.')
    }
  }
  
  </script>