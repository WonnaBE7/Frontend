import type { Board } from "@/entities/board/board.entity";
import { mockBoardsByCategoryId } from "@/entities/board/board.mock";
import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface sizeData {
    pageSize: number
    lastBoardId: number | null
}

export const getCategoryBoard = async (categoryId :number, input:sizeData) =>{
    try{
        const res = await fetcher<Board[]>({
            url: `${BASE_URL}/api/community/board/${categoryId}`,
            method: 'POST',
            auth: true,
            body : input
        })
        return res.data
    }catch{
        return mockBoardsByCategoryId[categoryId] ?? [];
    }
}