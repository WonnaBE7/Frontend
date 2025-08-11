import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const deleteBoard = async(communityId : number, boardId : number) => {
    const res = await fetcher({
        url: `${BASE_URL}/api/community/board/delete?communityId=${communityId}&boardId=${boardId}`,
        method:'PATCH',
        auth: true,
    })
    return res
}