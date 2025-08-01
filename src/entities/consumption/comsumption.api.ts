import { fetcher } from "@/shared/utils/fetcher"
import type { ConsumptionSummaryMeta } from "./consumption.entity"
import { mockConsumptionSummaryMeta } from "./consumption.mock"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getConsumption = async () => {
    try{
        const res = await fetcher<ConsumptionSummaryMeta>({
            url: `${BASE_URL}/api/assets/consumption/main/overview`,
            method: 'GET',
            auth: true
        })
    
        return res.data
    }catch{
        return mockConsumptionSummaryMeta
    }
}