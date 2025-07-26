import type { CommunityPreview } from './community.entity'

export const mockCommunities: CommunityPreview[] = [
  {
    communityId: 1,
    communityName: '자린고비형',
    simpleDescription: '불필요한 지출은 철철히 억제',
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
    communityName: '욜로형',
    simpleDescription: '즐길 땐 확실히 즐긴다',
    memberCount: 25000,
    latestBoard: '일주일에 한 번은 무조건 스테이크',
  },
  {
    communityId: 4,
    communityName: '새싹투자형',
    simpleDescription: '재테크에 첫 발을 내딛는 초보자',
    memberCount: 16000,
    latestBoard: 'ETF가 뭐에요? 처음 시작하는 투자',
  },
  {
    communityId: 5,
    communityName: '공격투자형',
    simpleDescription: '고위험 고수익을 노리는 재테크 전략가',
    memberCount: 12000,
    latestBoard: '1주일에 수익률 10% 목표 달성 후기',
  },
]