import { mockBoards } from "@/entities/board/board.mock"
import { fetcher } from "@/shared/utils/fetcher"

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardPost = async(communityId : number, boardId : number) => {
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/community/board/?communityId=${communityId}&boardId=${boardId}`,
            method:'GET',
            auth: true,
        })
        return res.data
    }
    catch{
        return mockBoards.find(t => t.boardId === boardId && t.categoryId === communityId)
    }
}

export const patchBoardtLike = async (communityId: number, boardId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/scrap/?communityId=${communityId}&boardId=${boardId}`,
      method: 'PATCH',
      auth: true,
    })
    return res
}

export const patchBoardScrap = async (communityId: number, boardId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/like/?communityId=${communityId}&boardId=${boardId}`,
      method: 'PATCH',
      auth: true,
    })
    return res
}
