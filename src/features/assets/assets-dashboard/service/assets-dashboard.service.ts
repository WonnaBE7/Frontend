import { fetcher } from "@/shared/utils/fetcher";
import type { AssetCategoryRatioResponse, AssetDetailResponse } from "@/entities/assets/assets.entity";
import { mockAssetCategoryRatio, mockAssetCategoryDetailResponse } from "@/entities/assets/assets.mock";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

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