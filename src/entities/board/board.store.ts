import { defineStore } from 'pinia'
import type { Board } from './board.entity'
import { mockTop3Boards } from './board.mock'

export const usePostPreviewStore = defineStore('postPreview', {
  state: () => ({
    posts: mockTop3Boards as Board[],
  }),
  getters: {
    top3Posts: (state) => state.posts.slice(0, 3),
  },
  actions: {
    toggleLike(boardId: number) {
      const post = this.posts.find((p) => p.boardId === boardId)
      if (post) post.isLiked = !post.isLiked
    },
    toggleScrap(boardId: number) {
      const post = this.posts.find((p) => p.boardId === boardId)
      if (post) post.isScraped = !post.isScraped
    },
  },
})