import { fetcher } from '@/shared/utils/fetcher'
import type {EstimatedAndTodayConsumption, MonthlyCategoryConsumption, MonthlyConsumptionSummary, TodayCategoryConsumption } from '@/entities/consumption/consumption.entity'
import { mockEstimatedAndTodayConsumption, mockMonthlyCategoryConsumption, mockMonthlyConsumptionSummary, mockTodayCategoryConsumption } from '@/entities/consumption/consumption.mock'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getMonthlyConsumptionSummary = async (yearMonth: string) => {
    try{
        const res = await fetcher<MonthlyConsumptionSummary>({
            url: `${BASE_URL}/api/assets/consumption/monthly?yearMonth=${yearMonth}`,
            method: 'GET',
            auth: true,
        })

        return res.data
    }catch{
        return mockMonthlyConsumptionSummary
  }
}

export const getEstimatedAndTodayConsumption = async () => {
    try{
        const res = await fetcher<EstimatedAndTodayConsumption>({
            url: `${BASE_URL}/api/assets/consumption/overview`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockEstimatedAndTodayConsumption
  }
}

export const getMonthlyCategoryConsumption = async (yearMonth: string) => {
    try{
        const res = await fetcher<MonthlyCategoryConsumption>({
            url: `${BASE_URL}/api/assets/consumption/categories?yearMonth=${yearMonth}`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockMonthlyCategoryConsumption
  }
}

export const getTodayCategoryConsumption = async () => {
    try{
        const res = await fetcher<TodayCategoryConsumption>({
            url: `${BASE_URL}/api/assets/consumption/today/categories`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockTodayCategoryConsumption
  }
}