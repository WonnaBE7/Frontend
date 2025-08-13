import { fetcher } from "@/shared/utils/fetcher"
import type { ConsumptionCategoryDetail, ConsumptionSummaryMeta, EstimatedAndTodayConsumption, MonthlyCategoryConsumption, MonthlyConsumptionSummary, MonthlyTransactionDetail, TodayCategoryConsumption, TodayTransactionDetail } from "./consumption.entity"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getConsumption = async () => {
    const res = await fetcher<ConsumptionSummaryMeta>({
        url: `${BASE_URL}/api/assets/consumption/main/overview`,
        method: 'GET',
        auth: true
    })

    return res.data
}


export const getMonthlyConsumptionSummary = async (yearMonth: string) => {
    const res = await fetcher<MonthlyConsumptionSummary>({
        url: `${BASE_URL}/api/assets/consumption/monthly?yearMonth=${yearMonth}`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 월별 소비 요약 :', res.data)
    return res.data
}

export const getEstimatedAndTodayConsumption = async () => {
    const res = await fetcher<EstimatedAndTodayConsumption>({
        url: `${BASE_URL}/api/assets/consumption/overview`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 월 예상 소비 및 오늘의 소비: ',res)
    return res.data
}

export const getMonthlyCategoryConsumption = async (yearMonth: string) => {
    const res = await fetcher<MonthlyCategoryConsumption>({
        url: `${BASE_URL}/api/assets/consumption/categories?yearMonth=${yearMonth}`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 월별 카테고리 비율:', res)
    return res.data
}

export const getTodayCategoryConsumption = async () => {
    const res = await fetcher<TodayCategoryConsumption>({
        url: `${BASE_URL}/api/assets/consumption/today/categories`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 오늘의 소비 카테고리 비율', res)
    return res.data
}


export const getMonthlyTransactionDetail = async (yearMonth: string) => {
    const res = await fetcher<MonthlyTransactionDetail>({
        url: `${BASE_URL}/api/assets/consumption/transactions?yearMonth=${yearMonth}`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 월별 거래내역 !!!!!!!!!!!!:',res)
    return res.data
}

export const getTodayTransactionDetail = async () => {
    const res = await fetcher<TodayTransactionDetail>({
        url: `${BASE_URL}/api/assets/consumption/transactions/today`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 페이지 - 오늘의 거래내역 :', res.data)
    return res.data
}

export const getMonthlyCategoryDetail = async (consumptionDetailCategory: string, yearMonth : string) => {
    const res = await fetcher<ConsumptionCategoryDetail>({
        url: `${BASE_URL}/api/assets/consumption/transactions/category?category=${consumptionDetailCategory}&yearMonth=${yearMonth}`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 상세페이지 - 카테고리별 상세 거래 내역:' ,res)
    return res.data
}

export const getTodayCategoryDetail = async (consumptionDetailCategory: string) => {
    const res = await fetcher<ConsumptionCategoryDetail>({
        url: `${BASE_URL}/api/assets/consumption/transactions/today/category?category=${consumptionDetailCategory}`,
        method: 'GET',
        auth: true,
    })
    console.log('소비분석 상세페이지 - 오늘의 카테고리별 상세 거래 내역 :',res)
    return res.data
}