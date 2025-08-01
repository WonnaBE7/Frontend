import { fetcher } from '@/shared/utils/fetcher'
import type { AssetSummaryMeta } from './assets.entity'
import { mockAssetSummaryMeta } from './assets.mock'

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

