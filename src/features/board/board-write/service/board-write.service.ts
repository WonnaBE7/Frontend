import type { Board } from "@/entities/board/board.entity";
import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface boardData {
    communityId: number
    title: string,
    content: string,
}

export const postCreateBoard = async (categoryId :number, input:boardData) =>{
    try{
        const res = await fetcher<Board[]>({
            url: `${BASE_URL}/api/community/${categoryId}/board/create`,
            method: 'POST',
            auth: true,
            body : input
        })
        return res.code
    }catch{
        return '500'
    }
}