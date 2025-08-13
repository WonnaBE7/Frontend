import type { CardApplicationRequest } from "@/entities/recommend/recommend.entity";
import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const postRequestCard = async (request : CardApplicationRequest) =>{
    const res = await fetcher({
        url: `${BASE_URL}/api/users/card/apply`,
        method: 'POST',
        auth: true,
        body: request
    })
    return res
}