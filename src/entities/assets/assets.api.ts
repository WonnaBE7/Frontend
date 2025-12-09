import { fetcher } from '@/shared/utils/fetcher'
import type { AssetCategoryDetailResponse, AssetCategoryRatioResponse, AssetDetailResponse, AssetSummaryMeta } from './assets.entity'
import { mockAccountDetail, mockAssetCategoryDetailResponse, mockAssetCategoryRatio, mockAssetSummaryMeta, mockCategoryDetailMap } from './assets.mock'


const BASE_URL = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export const getCodefAssets = async () => {
    const res = await fetcher({
        url: `${BASE_URL}/api/assets/sync?force=true`,
        method: 'POST',
        auth: true
    })
    console.log('Codef 실행 : ',res)
    return res
}

export const getAssets = async () => {
    if (USE_MOCK) {
        console.log('MOCK 모드: 자산 데이터 mock 사용')
        return mockAssetSummaryMeta
    }

    try{
        const res = await fetcher<AssetSummaryMeta>({
            url: `${BASE_URL}/api/assets/main/overview`,
            method: 'GET',
            auth: true
        })

        return res.data
    }catch{
        console.log('API 실패: 자산 데이터 mock 사용')
        return mockAssetSummaryMeta
    }
}

export const getAssetsCategoryRatio = async () => {
    try{
        const res = await fetcher<AssetCategoryRatioResponse>({
            url: `${BASE_URL}/api/assets/categories`,
            method: 'GET',
            auth: true
        })
        return res.data
    }catch{
        return mockAssetCategoryRatio
    }
}

export const getAssetsSummary = async () => {
    try{
        const res = await fetcher<AssetDetailResponse>({
            url: `${BASE_URL}/api/assets/detail`,
            method: 'GET',
            auth: true
        })
        return res.data
    }catch{
        return mockAssetCategoryDetailResponse
    }
}

export const getAssetCategoryDetail = async (assetCategory: string) => {
    try {
        const res = await fetcher<AssetCategoryDetailResponse>({
            url: `${BASE_URL}/api/assets/detail/assetCategory?assetCategory=${assetCategory}`,
            method: 'GET',
            auth: true,
        })
        console.log('총자산 상세페이지 - 카테고리별 계좌', res)
        return res.data 
    } catch {
        return mockCategoryDetailMap[assetCategory]
    }
}


export interface AccountTransaction {
  transactionName: string
  transactionDate: string // YYYY-MM-DD
  transactionTime: string // HH:mm:ss
  amount: number
}
export interface AccountDetailResponse {
  bankName: string
  accountName: string
  accountNumber: string
  transactions: AccountTransaction[]
}

export const getAccountDetail = async (accountId: number) => {
    try{
    const res = await fetcher<AccountDetailResponse>({
        url: `${BASE_URL}/api/assets/detail/accountId?accountId=${accountId}`,
        method: 'GET',
        auth: true
    })
    return res.data }
    catch{
        return mockAccountDetail
    }
}