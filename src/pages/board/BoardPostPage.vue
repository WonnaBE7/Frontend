<!-- BoardPostPage.vue -->
<template>
  <AppLayout>
    <BoardPostContent 
      v-if="post" 
      :post="post"
      :boardId="boardId" 
      :communityId="communityId"
    />
    <BoardPostCommentList
      :comments="comments ?? []"
      :boardId="boardId"
      :communityId="communityId"
      @delete-comment="handleDeleteComment"
    />
    <CommentInput @submit="handleCommentSubmit" />
  </AppLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppLayout from '@/shared/layout/AppLayout.vue'
import { useRoute } from 'vue-router'
import { getBoardPost } from '@/features/board/board-post/service/board-post.service'

import CommentInput from '@/features/board/board-post/ui/CommentInput.vue'
import BoardPostContent from '@/features/board/board-post/ui/BoardPostContent.vue'
import BoardPostCommentList from '@/features/board/board-post/ui/BoardPostCommentList.vue'
import type { Board } from '@/entities/board/board.entity'
import type { Comment } from '@/entities/board/comment/comment.entity'
import { financialTendencyList, finTypeIcons } from '@/shared/constants/finTypes.constants'
import { getBoardComment, patchBoardComment, postBoardComment } from '@/features/board/board-post/service/board-comment.service'

const route = useRoute()

const boardId = Number(route.params.id)
const communityLabel = route.query.category as string
const communityId = getCommunityIdByLabel(communityLabel)

const post = ref<Board | null>(null)
const comments = ref<Comment[] | null>(null)

function getCommunityIdByLabel(label: string): number {
  const item = financialTendencyList.find((type) => type.name === label)
  return item?.id ?? -1
}

onMounted(async () => {
  post.value = await getBoardPost(communityId, boardId)  
  const res = await getBoardComment(communityId, boardId)
  comments.value = Array.isArray(res) ? res : (res?.comments ?? [])
})

const handleCommentSubmit = async (newComment: string) => {
  const res = await postBoardComment(communityId, boardId, newComment)
  if (res.code === 200) {
    const refreshed = await getBoardComment(communityId, boardId)
    comments.value = Array.isArray(refreshed) ? refreshed : (refreshed?.comments ?? [])
  } else {
    alert('댓글 등록에 실패했습니다.')
  }
}

const handleDeleteComment = async (commentId: number) => {
  const res = await patchBoardComment(communityId, boardId, commentId)
  if (res.code === 200) {
    comments.value = comments.value?.filter(c => c.commentId !== commentId) ?? []
  } else {
    alert('댓글 삭제에 실패했습니다.')
  }
}
</script>