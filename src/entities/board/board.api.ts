import { fetcher } from '@/shared/utils/fetcher'
import type { Goal } from '../goal/goal.entity'
import { mockTop3Boards } from './board.mock'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardTop3 = async () => {
    try{
        const res = await fetcher<Goal>({
            url: `${BASE_URL}/api/community/list/top3`,
            method: 'GET',
            auth: true
        })
    
        return res.data
    }catch{
        return mockTop3Boards
    }
}

