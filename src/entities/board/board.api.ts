import { fetcher } from '@/shared/utils/fetcher'
import { mockMyWriteScrap, mockTop3Boards, mockScrapedBoards, mockMyBoards } from './board.mock'
import type { Board, BoardsPayload, WriteScrapedSummary } from './board.entity'


const BASE_URL = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export const getBoardTop3 = async (): Promise<Board[]> => {
    if (USE_MOCK) {
        console.log('MOCK 모드: Top3 게시글 mock 데이터 사용')
        return mockTop3Boards
    }

    try {
        const res = await fetcher<{ boards: Board[] }>({
          url: `${BASE_URL}/api/community/board/top3`,
          method: 'GET',
          auth: true,
        })
        return res.data.boards ?? []
    } catch {
        console.log('API 실패: Top3 게시글 mock 데이터 사용')
        return mockTop3Boards
    }
  }

export const getUserScraped = async (): Promise<Board[]> => {
    try {
        const res = await fetcher<BoardsPayload>({
          url: `${BASE_URL}/api/community/user/scraped`,
          method: 'GET',
          auth: true,
        })
        console.log('스크랩한거 가져옴>>>>', res.data)
        return res.data?.boards ?? []
    } catch {
        return mockScrapedBoards
    }
  }

  export const getUserWrited = async (): Promise<Board[]> => {
    try {
        const res = await fetcher<BoardsPayload>({
          url: `${BASE_URL}/api/community/user/writed`,
          method: 'GET',
          auth: true,
        })
        console.log('내가 쓴글 가져옴!',res)
        return res.data?.boards ?? []
    } catch {
        return mockMyBoards
    }
  }

export const getWriteScrapCount = async () => {
    try{
        const res = await fetcher<WriteScrapedSummary>({
            url: `${BASE_URL}/api/community/number`,
            method: 'GET',
            auth: true
        })
        console.log('내가 작성한 글과 스크랩의 수 조회 : ', res.data)
        return res.data
    }catch{
        return mockMyWriteScrap
    }
}