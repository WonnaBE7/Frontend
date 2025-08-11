import { fetcher } from '@/shared/utils/fetcher'
import { mockMyWriteScrap } from './board.mock'
import type { Board, BoardsPayload, WriteScrapedSummary } from './board.entity'


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardTop3 = async (): Promise<Board[]> => {
    const res = await fetcher<{ boards: Board[] }>({
      url: `${BASE_URL}/api/community/board/top3`,
      method: 'GET',
      auth: true,
    })
    return res.data.boards ?? []    
  }

export const getUserScraped = async (): Promise<Board[]> => {
    const res = await fetcher<BoardsPayload>({
      url: `${BASE_URL}/api/community/user/scraped`,
      method: 'GET',
      auth: true,
    })

    console.log('스크랩한거 가져옴!', res.data)
    return res.data?.boards ?? []   
  }
  
  export const getUserWrited = async (): Promise<Board[]> => {
    const res = await fetcher<BoardsPayload>({
      url: `${BASE_URL}/api/community/user/writed`,
      method: 'GET',
      auth: true,
    })
    console.log('내가 쓴글 가져옴!')
    return res.data?.boards ?? []
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