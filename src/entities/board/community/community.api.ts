import { fetcher} from '@/shared/utils/fetcher';
import type { CommunityPreview } from '../board.entity';
import { mockCommunities } from './community.mock';

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCommunity = async () => {
  try{
    const res = await fetcher<CommunityPreview[]>({
        url: `${BASE_URL}/api/community/list`,
        method: 'GET',
        auth: true
    })
    return res.data
  }catch{
      return mockCommunities
  }
};

export const getCommunityTop3 = async () => {
    try{
        const res = await fetcher<CommunityPreview[]>({
            url: `${BASE_URL}/api/community/list/top3`,
            method: 'GET',
            auth: true
        })
        return res.data
    }catch{
        return mockCommunities.slice(0,3)
    }
}

