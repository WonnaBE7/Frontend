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
      :disabled="!hasNextPage || isLoading"
      @click="nextPage"
      class="flex items-center px-4 py-2 text-gray-500"
      :class="{ 'opacity-40 cursor-not-allowed': !hasNextPage || isLoading }"
    >
      <span v-if="isLoading" class="mr-2">로딩중...</span>
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

// URL의 카테고리 이름으로 ID 매핑
const category = route.params.category as string
const matched = financialTendencyList.find(t => t.name === category)
const categoryId = matched?.id ?? null

// 목록/페이지네이션 상태
const posts = ref<Board[]>([])
const lastBoardId = ref<number | null>(null)
const pageSize = 5
const currentPage = ref<number>(1)
const isLoading = ref(false)
const reachedEnd = ref(false) // 더 이상 가져올 데이터가 없을 때 true

onMounted(() => {
  if (categoryId !== null) {
    loadMore()
  }
})

/** 서버에서 pageSize 만큼 추가로 가져와 뒤에 붙이기 */
async function loadMore() {
  if (isLoading.value || reachedEnd.value || categoryId === null) return
  isLoading.value = true
  try {
    const newPosts = await getCategoryBoard(categoryId, {
      pageSize,
      lastBoardId: lastBoardId.value,
    })

    if (Array.isArray(newPosts) && newPosts.length > 0) {
      posts.value.push(...newPosts)
      lastBoardId.value = newPosts[newPosts.length - 1].boardId ?? null
      if (newPosts.length < pageSize) {
        reachedEnd.value = true
      }
    } else {
      reachedEnd.value = true
    }
  } finally {
    isLoading.value = false
  }
}

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return posts.value.slice(start, start + pageSize)
})

/**
 * 다음 페이지가 이미 로드되어 있거나,
 * 아직 끝(마지막 페이지)에 도달하지 않았으면(hasNextPage) true
 */
const hasNextPage = computed(() => {
  const nextStart = currentPage.value * pageSize
  return nextStart < posts.value.length || !reachedEnd.value
})

/** 다음 페이지로 이동 (필요하면 먼저 더 로드) */
async function nextPage() {
  const nextStart = currentPage.value * pageSize

  // 다음 페이지 데이터가 아직 없고, 더 가져올 수 있으면 먼저 로드
  if (nextStart >= posts.value.length && !reachedEnd.value) {
    await loadMore()
  }

  // 로드가 되었거나 이미 충분하다면 페이지 증가
  if (nextStart < posts.value.length) {
    currentPage.value++
  }
}

/** 이전 페이지로 이동 */
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

/** 글쓰기 이동 */
function goToWrite() {
  router.push({ path: '/board/write', query: { category } })
}
</script>