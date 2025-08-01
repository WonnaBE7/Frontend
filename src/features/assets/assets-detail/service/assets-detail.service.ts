import { fetcher } from '@/shared/utils/fetcher'
import type { AssetCategoryDetailResponse } from '@/entities/assets/assets.entity'
import { mockCategoryDetailMap } from '@/entities/assets/assets.mock'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAssetCategoryDetail = async (assetCategory: string) => {
    try{
        const res = await fetcher<AssetCategoryDetailResponse>({
            url: `${BASE_URL}/api/assets/detail?assetCategory=${assetCategory}`,
            method: 'GET',
            auth: true,
        })

        return res.data
    }catch{
        return mockCategoryDetailMap[assetCategory]
  } 
}