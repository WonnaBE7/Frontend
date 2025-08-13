import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getInsuranceDetailView = async (id : number) =>{
    const res = await fetcher({
        url: `${BASE_URL}/api/products/insurances/${id}`,
        method: 'GET',
        auth: true,
    })
    console.log('보험 상세 상품 조회!!! : ',res);
    return res.data
}