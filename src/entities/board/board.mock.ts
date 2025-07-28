// board.mock.ts

import type { Board, CommunityPreview, CommentSummary, WriteScrapedSummary } from './board.entity'

export const mockBoards: Board[] = [
  {
    boardId: 1,
    title: '투자 초보 포트폴리오 조언 구합니다.',
    content: '저는 매달 50만원 이하로 생활하려고 노력 중입니다.',
    userName: '절약왕123',
    category: '새싹투자형',
    likeCount: 12,
    commentCount: 8,
    isScraped: false,
    isLiked: true,
    createdAt: '2025-07-23',
  },
  {
    boardId: 2,
    title: '요즘 카드 혜택 뭐가 제일 좋아요?',
    content: '신한카드 좋다는데 다른 카드도 궁금해요.',
    userName: '금융왕',
    category: '자린고비형',
    likeCount: 22,
    commentCount: 15,
    isScraped: true,
    isLiked: false,
    createdAt: '2025-07-22',
  },
  {
    boardId: 3,
    title: '적금만으로 충분할까요?',
    content: '금리 낮은 요즘 투자도 고려 중입니다.',
    userName: '무계획러',
    category: '공격투자형',
    likeCount: 9,
    commentCount: 3,
    isScraped: false,
    isLiked: false,
    createdAt: '2025-07-21',
  },
  {
    boardId: 4,
    title: '생활비 아끼는 꿀팁 공유해요!',
    content: '마트 세일 시간대 이용해서 아껴요.',
    userName: '절약고수',
    category: '소확행형',
    likeCount: 18,
    commentCount: 7,
    isScraped: true,
    isLiked: true,
    createdAt: '2025-07-20',
  },
  {
    boardId: 5,
    title: '부자되는 지름길은?',
    content: '지출 줄이고 자동이체 적금이 최고예요.',
    userName: '부자될래',
    category: '자린고비형',
    likeCount: 31,
    commentCount: 12,
    isScraped: false,
    isLiked: true,
    createdAt: '2025-07-19',
  },
  {
    boardId: 6,
    title: '처음 투자, 뭘로 시작할까요?',
    content: '펀드, ETF 고민됩니다!',
    userName: '투자새싹',
    category: '새싹투자형',
    likeCount: 5,
    commentCount: 1,
    isScraped: false,
    isLiked: false,
    createdAt: '2025-07-18',
  },
  {
    boardId: 7,
    title: '소확행 비용으로 여행 가기',
    content: '국내 소도시 여행 추천받아요!',
    userName: '감성소비자',
    category: '소확행형',
    likeCount: 15,
    commentCount: 6,
    isScraped: true,
    isLiked: false,
    createdAt: '2025-07-17',
  },
  {
    boardId: 8,
    title: '단기 고수익 전략 뭐 있나요?',
    content: '비트코인 단타 어때요?',
    userName: '단타왕',
    category: '공격투자형',
    likeCount: 13,
    commentCount: 9,
    isScraped: false,
    isLiked: true,
    createdAt: '2025-07-16',
  },
  {
    boardId: 9,
    title: '마트 대신 전통시장 가보셨나요?',
    content: '물가 비교해봤어요.',
    userName: '시장러버',
    category: '자린고비형',
    likeCount: 17,
    commentCount: 4,
    isScraped: false,
    isLiked: false,
    createdAt: '2025-07-15',
  },
]

export const mockTop3Boards: Board[] = [
  mockBoards[1],
  mockBoards[4],
  mockBoards[0],
]

export const mockCommunityTop3: CommunityPreview[] = [
  {
    communityId: 1,
    communityName: '자린고비형',
    simpleDescription: '불필요한 지출은 철저히 억제',
    memberCount: 37000,
    latestBoard: '월 50만원으로 생활하기 챌린지',
  },
  {
    communityId: 2,
    communityName: '소확행형',
    simpleDescription: '소소한 행복을 추구하는 소비 패턴',
    memberCount: 28000,
    latestBoard: '스타벅스 말고 동네 카페 가기',
  },
  {
    communityId: 3,
    communityName: 'YOLO형',
    simpleDescription: '즐길 땐 확실히 즐긴다',
    memberCount: 25000,
    latestBoard: '일주일에 한 번은 무조건 스테이크',
  },
]

export const mockComments: CommentSummary[] = [
  {
    commentId: 1,
    userName: '절약왕123',
    nowme: '자린고비형',
    content: '밥 먹어요',
    likeCount: 12,
  },
  {
    commentId: 2,
    userName: '절약싫어',
    nowme: '경험소비형',
    content: '돈 아끼죠',
    likeCount: 13,
  },
]
// 스크랩한 게시글만 (isScraped === true)
export const mockScrapedBoards: Board[] = mockBoards.filter((b) => b.isScraped)

// 좋아요 누른 게시글만 (isLiked === true)
export const mockLikedBoards: Board[] = mockBoards.filter((b) => b.isLiked)

// 내가 쓴 글 (예: userName === '절약왕123')
export const mockMyBoards: Board[] = mockBoards.filter((b) => b.userName === '절약왕123')


// 쓴글과 스크랩 숫자
export const mockMyWriteScrap: WriteScrapedSummary={
  write : 5,
  scrap : 3,
}

export const mockBoardsByCategory: Record<string, Board[]> = mockBoards.reduce((acc, board) => {
  if (!acc[board.category]) {
    acc[board.category] = []
  }
  acc[board.category].push(board)
  return acc
}, {} as Record<string, Board[]>)