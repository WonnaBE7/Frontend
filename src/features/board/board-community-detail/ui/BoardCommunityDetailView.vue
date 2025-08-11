<template>
  <PopularTop3Card 
    v-if="categoryId"
    :communityId="categoryId"
  />
  <PostPreviewCard
    v-for="post in pagedPosts"
    :key="post.boardId"
    :boardId="post.boardId"
    :title="post.title"
    :content="post.content"
    :userName="post.userName"
    :categoryId="post.categoryId"
    :categoryName="post.categoryName"
    :likeCount="post.likeCount"
    :commentCount="post.commentCount"
    :isScraped="post.isScraped"
    :isLiked="post.isLiked"
    :createdAt="post.createdAt"
    class="bg-white"
  />
  
  <div class="flex justify-between mt-4 mb-4 px-4">
    <button
      :disabled="currentPage === 1"
      @click="prevPage"
      class="flex items-center px-4 py-2 text-gray-500"
      :class="{ 'opacity-40 cursor-not-allowed': currentPage === 1 }"
    >
      <ChevronLeft class="w-4 h-4 mr-1" />
      이전
    </button>

    <button
      :disabled="!hasNextPage"
      @click="nextPage"
      class="flex items-center px-4 py-2 text-gray-500"
      :class="{ 'opacity-40 cursor-not-allowed': !hasNextPage }"
    >
      다음
      <ChevronRight class="w-4 h-4 ml-1" />
    </button>
  </div>

  <Button
    class="fixed bottom-24 right-4 z-40 bg-sub-yellow-p hover:bg-sub-yellow-d text-white 
          rounded-full flex items-center justify-center max-w-[56px] max-h-[56px] w-14 h-14"
    @click="goToWrite"
  >
    <component :is="FilePlus" class="w-5 h-5 sm:w-7 sm:h-7" />
  </Button>
</template>
  
<script setup lang="ts">
  import { ChevronLeft, ChevronRight, FilePlus } from 'lucide-vue-next'
  import Button from '@/shared/ui/atoms/Button.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { ref, computed, onMounted } from 'vue'
  import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
  import PopularTop3Card from '@/features/recommend/main/ui/PopularTop3Card.vue'
  import { getCategoryBoard } from '../service/board-community-detail.service'
  import type { Board } from '@/entities/board/board.entity'
  import { financialTendencyList } from '@/shared/constants/finTypes.constants'
  
  const route = useRoute()
  const router = useRouter()
  const category = route.params.category as string
  const matched = financialTendencyList.find(t => t.name === category)
  const categoryId = matched?.id ?? null
  
  const posts = ref<Board[]>([])
  const lastBoardId = ref<number | null>(null)
  const pageSize = 5
  const currentPage = ref<number>(1)
  
  onMounted(() => {
    if (categoryId !== null) {
      loadInitialPosts()
    }
  })
  
  async function loadInitialPosts() {
    while (posts.value.length < 5) {
      const newPosts = await getCategoryBoard(categoryId!, {
        pageSize,
        lastBoardId: lastBoardId.value,
      })
  
      if (Array.isArray(newPosts) && newPosts.length > 0) {
        posts.value.push(...newPosts)
        lastBoardId.value = newPosts.at(-1)?.boardId ?? null
        if (newPosts.length < pageSize) break
      } else {
        break
      }
    }
  }
  
  const totalPages = computed(() => {
    return Math.ceil(posts.value.length / pageSize)
  })
  
  const pagedPosts = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return posts.value.slice(start, end)
  })
  
  const hasNextPage = computed(() => {
    return currentPage.value < totalPages.value
  })
  
  function nextPage() {
    if (hasNextPage.value) currentPage.value++
  }
  
  function prevPage() {
    if (currentPage.value > 1) currentPage.value--
  }
  
  function goToWrite() {
    router.push({ path: '/board/write', query: { category } })
  }
</script>