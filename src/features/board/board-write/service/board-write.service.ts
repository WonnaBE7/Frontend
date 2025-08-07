import type { Board } from "@/entities/board/board.entity";
import { fetcher } from "@/shared/utils/fetcher";


//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export interface CreateBoardData {
    title: string,
    content: string,
}

export const postCreateBoard = async (categoryId :number, input:CreateBoardData) =>{
    const res = await fetcher<Board[]>({
        url: `${BASE_URL}/api/community/board/create/${categoryId}`,
        method: 'POST',
        auth: true,
        body : input
    })
    return res

}