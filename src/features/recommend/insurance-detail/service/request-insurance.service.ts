import type { InsuranceApplicationRequest } from "@/entities/recommend/recommend.entity";
import { fetcher } from "@/shared/utils/fetcher";

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const postRequestInsurance = async (request : InsuranceApplicationRequest) =>{
    const res = await fetcher({
        url: `${BASE_URL}/api/users/insurance/apply`,
        method: 'POST',
        auth: true,
        body: request
    })
    return res

}