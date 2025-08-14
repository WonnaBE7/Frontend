import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getInsuranceDetailView = async (insuranceId: number, wannabeId: number | null) => {
    let url = `${BASE_URL}/api/products/insurances?productId=${insuranceId}`
    if (wannabeId !== null) {
      url += `&wannabeId=${wannabeId}`
    }
  
    const res = await fetcher({
      url,
      method: 'GET',
      auth: true,
    })
    console.log('보험 상세 상품 조회!!! : ', res)
    return res.data
  }