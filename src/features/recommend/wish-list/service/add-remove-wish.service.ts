import { fetcher } from "@/shared/utils/fetcher";

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface wishData {
    action : string,
    productType:string,
    productId:string
}

// 관심 상품 추가 삭제
export const fetchWish = async (wishData : wishData) =>{
    const res = await fetcher({
        url: `${BASE_URL}/api/user/wishlist`,
        method: 'POST',
        auth: true,
        body: wishData
    })
    return res
}