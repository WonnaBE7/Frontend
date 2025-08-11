import type { SavingsApplicationRequest } from "@/entities/recommend/recommend.entity";
import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const postRequestSavings = async (request : SavingsApplicationRequest) =>{
    const res = await fetcher({
        url: `${BASE_URL}/api/products/savings/apply`,
        method: 'POST',
        auth: true,
        body: request
    })
    return res
}