import type { AssetItem } from './assets.entity'

export const mockAssetItems: Record<string, AssetItem[]> = {
  '자산 현황': [
    { type: '입출금', label: '입출금', percentage: 40 },
    { type: '저축', label: '저축', percentage: 24 },
    { type: '투자', label: '투자', percentage: 20 },
    { type: '연금', label: '연금', percentage: 12 },
    { type: '포인트', label: '포인트', percentage: 4 },
  ],
  '소비 분석': [
    { type: '입출금', label: '식비', percentage: 30 },
    { type: '저축', label: '쇼핑', percentage: 25 },
    { type: '투자', label: '교통', percentage: 15 },
    { type: '연금', label: '문화', percentage: 20 },
    { type: '포인트', label: '기타', percentage: 10 },
  ],
}