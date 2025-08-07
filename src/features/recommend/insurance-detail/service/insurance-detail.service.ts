import { mockInsuranesDetailPage } from "@/entities/recommend/recommend.mock";
import { fetcher } from "@/shared/utils/fetcher";

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getInsuranceDetailView = async (id : number) =>{
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/products/insurances/${id}`,
            method: 'POST',
            auth: true,
          })
          return res.data
    }catch{
        return mockInsuranesDetailPage
    }
}