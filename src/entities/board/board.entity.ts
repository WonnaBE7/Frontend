export interface Board {
    boardId: number
    title: string
    content: string
    userName: string
    category: string
    likeCount: number
    commentCount: number
    isScraped: boolean
    isLiked: boolean
    createdAt: string
  }