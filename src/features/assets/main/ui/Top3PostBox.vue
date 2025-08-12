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

    <div v-if="topPosts.length" class="w-full">
      <PostPreviewCard
        v-for="post in topPosts"
        :key="post.boardId"
        class="bg-gray-BGDim"
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
      />
    </div>
      <Card 
        v-else
        class="bg-gray-BGDim !mb-0 mt-4"
        >
        <Typography type="M_12_140" class="text-gray-500">작성된 게시글이 없습니다</Typography>
      </Card>
  </Card>
</template>

<script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue'
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

const topPosts = computed(() => postStore.posts ?? [])
</script>