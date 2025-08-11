import { mockPopularProducts } from "@/entities/board/product/product.mock"
import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCommunityRecommendTop3 = async(communityId : number) => {
    try{
        const res = await fetcher({
            url: `${BASE_URL}/api/community/popular/${communityId}`,
            method:'GET',
            auth: true,
        })
        console.log('인기 상품 조회',res)
        return res.data
    }
    catch{
        return mockPopularProducts
    }
}