import type { BoardsPayload } from "@/entities/board/board.entity";
import { fetcher } from "@/shared/utils/fetcher";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface SizeData {
    pageSize: number
    lastBoardId: number | null
}

export const getCategoryBoard = async (categoryId :number, input:SizeData) =>{
    const res = await fetcher<BoardsPayload>({
        url: `${BASE_URL}/api/community/board/?communityId=${categoryId}`,
        method: 'POST',
        auth: true,
        body : input
    })
    console.log('게시판 전체 글 조회 - 페이지네이션',res.data)
    return res.data.boards
}