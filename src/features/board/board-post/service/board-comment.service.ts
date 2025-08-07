import { mockComments } from "@/entities/board/comment/comment.mock"
import { fetcher } from "@/shared/utils/fetcher"


//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardComment = async(communityId : number, boardId : number) => {
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/community/board/comment/?communityId=${communityId}&boardId=${boardId}`,
            method:'GET',
            auth: true,
        })
        return res.data
    }
    catch{
        return mockComments.slice(0,4)
    }
}

export const postBoardComment = async(communityId : number, boardId : number, content:string) => {
    const res = await fetcher({
        url: `${BASE_URL}/api/community/board/comment/?communityId=${communityId}&boardId=${boardId}`,
        method:'POST',
        auth: true,
        body: {content}
    })
    return res
}

export const patchBoardComment = async (communityId: number, boardId: number, commentId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/comment/delete/?communityId=${communityId}&boardId=${boardId}&commentId=${commentId}`,
      method: 'PATCH',
      auth: true,
    })

    return res
}

export const patchCommentLike = async (communityId: number, boardId: number, commentId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/comment/like/?communityId=${communityId}&boardId=${boardId}&commentId=${commentId}`,
      method: 'PATCH',
      auth: true,
    })
    return res
}
