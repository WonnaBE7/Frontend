import { fetcher } from '@/shared/utils/fetcher'
import { mockMyBoards, mockMyWriteScrap, mockScrapedBoards, mockTop3Boards } from './board.mock'
import type { Board, WriteScrapedSummary } from './board.entity'

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardTop3 = async () => {
    try{
        const res = await fetcher<Board[]>({
            url: `${BASE_URL}/api/community/board/top3`,
            method: 'GET',
            auth: true
        })
        return res.data
    }catch{
        return mockTop3Boards
    }
}

export const getUserScraped = async () =>{
    try{
        const res = await fetcher<Board[]>({
            url: `${BASE_URL}/api/community/user/scraped`,
            method: 'GET',
            auth: true,
          })

          return res.data
    }catch{
        return mockScrapedBoards
    }
}

export const getUserWrited = async () =>{
    try{
        const res = await fetcher<Board[]>({
            url: `${BASE_URL}/api/community/user/writed`,
            method: 'GET',
            auth: true,
        })

        return res.data
    }catch{
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
        return res.data
    }catch{
        return mockMyWriteScrap
    }
}