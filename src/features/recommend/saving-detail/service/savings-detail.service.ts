import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getSavingsDetailView = async (productId : number, wannabeId : number | null) =>{
    let url = `${BASE_URL}/api/products/savings?productId=${productId}`
    if (wannabeId !== null) {
      url += `&wannabeId=${wannabeId}`
    }
    const res = await fetcher({
        url,
        method: 'GET',
        auth: true,
    })
    console.log('예적금 상세 상품 조회!!! : ',res);
    return res.data
}