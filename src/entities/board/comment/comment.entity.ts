export interface Comment {
  commentId: number
  boardId: number // 해당 댓글이 속한 게시글 ID
  userName: string
  nowme: string // 사용자 워너비 유형
  content: string
  likeCount: number
  createdAt: string
}