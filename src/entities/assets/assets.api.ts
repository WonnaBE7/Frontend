import { fetcher } from '@/shared/utils/fetcher'
import type { AssetCategoryDetailResponse, AssetCategoryRatioResponse, AssetDetailResponse, AssetSummaryMeta } from './assets.entity'
import { mockAssetCategoryDetailResponse, mockAssetCategoryRatio, mockAssetSummaryMeta, mockCategoryDetailMap } from './assets.mock'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAssets = async () => {
    try{
        const res = await fetcher<AssetSummaryMeta>({
            url: `${BASE_URL}/api/assets/main/overview`,
            method: 'GET',
            auth: true
        })
    
        return res.data
    }catch{
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

        return res.data
    } catch {
        return mockCategoryDetailMap[assetCategory]
    }
}