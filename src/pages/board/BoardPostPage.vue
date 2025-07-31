<template>
    <AppLayout>
      <BoardPostContent :post="post" />
      <BoardPostCommentList :post="post" :comments="comments" />
      <CommentInput @submit="handleCommentSubmit" />
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import { useRoute } from 'vue-router'
  import { mockBoards } from '@/entities/board/board.mock'
  import { mockComments } from '@/entities/board/comment/comment.mock'
  import CommentInput from '@/features/board/board-post/ui/CommentInput.vue'
  import BoardPostContent from '@/features/board/board-post/ui/BoardPostContent.vue'
  import BoardPostCommentList from '@/features/board/board-post/ui/BoardPostCommentList.vue'
  
  const route = useRoute()
  const boardId = Number(route.params.id)
  const post = mockBoards.find((b) => b.boardId === boardId)!
  const comments = mockComments.filter((c) => c.boardId === boardId)
  const handleCommentSubmit = (newComment: string) => {
    console.log('작성된 댓글:', newComment)
  }
  </script>