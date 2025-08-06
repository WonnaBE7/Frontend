import { mockCardDetailPage } from "@/entities/recommend/recommend.mock";
import { fetcher } from "@/shared/utils/fetcher";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCardDetailView = async (cardId : number) =>{
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/products/cards/${cardId}`,
            method: 'POST',
            auth: true,
          })
          return res.data
    }catch{
        return mockCardDetailPage
    }
}