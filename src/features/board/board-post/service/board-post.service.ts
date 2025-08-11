import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getBoardPost = async(communityId : number, boardId : number) => {
    const res = await fetcher({
        url: `${BASE_URL}/api/community/board/?communityId=${communityId}&boardId=${boardId}`,
        method:'GET',
        auth: true,
    })
    console.log('게시글 정보 조회 :', res.data.data);
    
    return res.data.data
}

export const patchBoardtLike = async (communityId: number, boardId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/like/?communityId=${communityId}&boardId=${boardId}`,
      method: 'PATCH',
      auth: true,
    })
    return res
}

export const patchBoardScrap = async (communityId: number, boardId: number) => {
    const res = await fetcher({
      url: `${BASE_URL}/api/community/board/scrap/?communityId=${communityId}&boardId=${boardId}`,
      method: 'PATCH',
      auth: true,
    })
    return res
}
