<template>
  <Card class="bg-white border border-gray-150 sm:mb-4">
    <div class="w-full flex flex-row items-center justify-between">
      <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'">
        워너비 게시판 인기글
      </IconLabel>
      <RouterLink to="/board">
        <component :is="ChevronRight" />
      </RouterLink>
    </div>

    <!-- 데이터 있을 때만 렌더 (초기 undefined 경고 방지) -->
    <template v-if="topPosts.length">
      <PostPreviewCard
        v-for="post in topPosts"
        :key="post.boardId"
        class="bg-gray-BGDim"
        :board-id="post.boardId"
        :title="post.title"
        :content="post.content"
        :user-name="post.userName"
        :category-id="post.categoryId"
        :category-name="post.categoryName"
        :like-count="post.likeCount"
        :comment-count="post.commentCount"
        :is-scraped="post.isScraped"
        :is-liked="post.isLiked"
        :created-at="post.createdAt"
      />
    </template>
    <!-- 필요 없으면 else 블록은 지워도 됨 -->
    <template v-else>
      <!-- 로딩/빈 상태를 표시하고 싶으면 여기에 스켈레톤/문구 -->
      <div class="text-gray-400 text-sm mt-3">인기글을 불러오는 중...</div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import PostPreviewCard from '@/shared/ui/molecules/PostPreviewCard.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { MessageCircleIcon, ChevronRight } from 'lucide-vue-next'
import { usePostPreviewStore } from '@/entities/board/board.store'

const postStore = usePostPreviewStore()

onMounted(async () => {
  await postStore.fetchBoardTop3()
})

// 배열 보장 (null 안전)
const topPosts = computed(() => postStore.posts ?? [])
</script>