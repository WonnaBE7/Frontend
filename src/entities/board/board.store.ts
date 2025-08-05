import { defineStore } from 'pinia'
import type { Board, WriteScrapedSummary } from './board.entity'
import { getBoardTop3 } from './board.api'
import { getWriteScrapCount, getUserScraped, getUserWrited} from './board.api'

export const usePostPreviewStore = defineStore('postPreview', {
  state: () => ({
    posts: null as Board[] | null,
    scraped: null as Board[] | null,
    writed : null as Board[] | null,
  }),
  actions: {
    async fetchAssetsMain() {
        this.posts = await getBoardTop3()
    },
    async fetchUserScarped() {
      this.scraped = await getUserScraped()
    },
    async fetchUserWrited() {
      this.writed = await getUserWrited()
    },  

    toggleLike(boardId: number) {
      if (!this.posts) return
      const post = this.posts.find((p) => p.boardId === boardId)
      if (post) post.isLiked = !post.isLiked
    },

    toggleScrap(boardId: number) {
      if (!this.posts) return
      const post = this.posts.find((p) => p.boardId === boardId)
      if (post) post.isScraped = !post.isScraped
    },
  },
})


export const useWriteScrapStore = defineStore('likeScrapStore',{
  state: () =>({
    count : null as WriteScrapedSummary | null
  }),
  actions :{
    async fetchLikeScrap(){
      this.count = await getWriteScrapCount()
    }
  }
})


import { ref } from 'vue'

interface BoardState {
  posts: Board[]
  lastBoardId: number | null
  hasMore: boolean
}

export const useBoardStore = defineStore('boardStore', () => {
  const boardMap = ref<Record<number, BoardState>>({})

  function initCategory(categoryId: number) {
    if (!boardMap.value[categoryId]) {
      boardMap.value[categoryId] = {
        posts: [],
        lastBoardId: null,
        hasMore: true,
      }
    }
  }

  function updateCategory(categoryId: number, newPosts: Board[], lastId: number | null, hasMore: boolean) {
    boardMap.value[categoryId] = {
      posts: [...boardMap.value[categoryId].posts, ...newPosts],
      lastBoardId: lastId,
      hasMore,
    }
  }

  function resetCategory(categoryId: number) {
    delete boardMap.value[categoryId]
  }

  return {
    boardMap,
    initCategory,
    updateCategory,
    resetCategory,
  }
})


export const useCommunityBoardStore = defineStore('communityBoard', {
  state: () => ({
    boardsByCategory: {} as Record<number, Board[]>,
    lastBoardIdByCategory: {} as Record<number, number | null>,
  }),
  actions: {
    setBoards(categoryId: number, boards: Board[]) {
      this.boardsByCategory[categoryId] = boards
    },
    appendBoards(categoryId: number, newBoards: Board[]) {
      this.boardsByCategory[categoryId] ??= []
      this.boardsByCategory[categoryId].push(...newBoards)
    },
    setLastBoardId(categoryId: number, id: number | null) {
      this.lastBoardIdByCategory[categoryId] = id
    },
    resetCategory(categoryId: number) {
      delete this.boardsByCategory[categoryId]
      delete this.lastBoardIdByCategory[categoryId]
    }
  },
  getters: {
    getBoards: state => (categoryId: number) => state.boardsByCategory[categoryId] ?? [],
    getLastBoardId: state => (categoryId: number) => state.lastBoardIdByCategory[categoryId] ?? null,
  }
})