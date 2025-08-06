import { fetcher } from "@/shared/utils/fetcher";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface CardApplicationRequest {
    productType: 'card'
    cardId: string
    cardType: string
    linkedAccount: string 
  }

export const postRequestCard = async (request : CardApplicationRequest) =>{
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/users/card/apply`,
            method: 'POST',
            auth: true,
            body: request
          })
          return res.code
    }catch{
        return '201'
    }
}