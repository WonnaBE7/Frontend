import type { ConsumptionCategoryDetail, MonthlyTransactionDetail, TodayTransactionDetail } from '@/entities/consumption/consumption.entity'
import { mockMonthlyCategoryDetailMap, mockMonthlyTransactionDetail, mockTodayCategoryDetailMap, mockTodayTransactionDetail } from '@/entities/consumption/consumption.mock'
import { fetcher } from '@/shared/utils/fetcher'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getMonthlyTransactionDetail = async (yearMonth: string) => {
    try{
        const res = await fetcher<MonthlyTransactionDetail>({
            url: `${BASE_URL}/api/assets/consumption/transactions?yearMonth=${yearMonth}`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockMonthlyTransactionDetail
  }
}

export const getTodayTransactionDetail = async () => {
    try{
        const res = await fetcher<TodayTransactionDetail>({
            url: `${BASE_URL}/api/assets/consumption/transactions/today`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockTodayTransactionDetail
  }
}

export const getMonthlyCategoryDetail = async (consumptionDetailCategory: string) => {
    try {
      const res = await fetcher<ConsumptionCategoryDetail>({
        url: `${BASE_URL}/api/assets/consumption/transactions/category?category=${consumptionDetailCategory}`,
        method: 'GET',
        auth: true,
      })
      return res.data
    } catch { 
      return mockMonthlyCategoryDetailMap[consumptionDetailCategory as keyof typeof mockMonthlyCategoryDetailMap]
    }
  }

export const getTodayCategoryDetail = async (consumptionDetailCategory: string) => {
    try{
        const res = await fetcher<ConsumptionCategoryDetail>({
            url: `${BASE_URL}/api/assets/consumption/transactions/today/category?category=${consumptionDetailCategory}`,
            method: 'GET',
            auth: true,
        })

        return res.data
    }catch{
        return mockTodayCategoryDetailMap[consumptionDetailCategory as keyof typeof mockTodayCategoryDetailMap]
  }
}