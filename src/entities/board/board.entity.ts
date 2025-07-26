// 게시글 기본 정보 (목록 및 상세 공통)
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

// 인기 커뮤니티 / 전체 커뮤니티 미리보기
export interface CommunityPreview {
  communityId: number
  communityName: string
  simpleDescription: string
  memberCount: number
  latestBoard: string
}

// 댓글 정보
export interface CommentSummary {
  commentId: number
  userName: string
  nowme: string
  content: string
  likeCount: number
}

// 작성한 글 / 스크랩 한 글 숫자
export interface WriteScrapedSummary{
  write : number,
  scrap : number
}