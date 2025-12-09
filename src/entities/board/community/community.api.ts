import { fetcher} from '@/shared/utils/fetcher';
import type { CommunityPreview } from '../board.entity';
import { mockCommunities } from './community.mock';
import type { CommunityList } from './community.entity';


const BASE_URL = import.meta.env.VITE_API_BASE_URL


export const getCommunity = async () => {
    try {
        const res = await fetcher<CommunityList>({
            url: `${BASE_URL}/api/community/list`,
            method: 'GET',
            auth: true
        })
        console.log('게시판 목록 조회 : ', res.data)
        return res.data
    } catch {
        return {
            communities: mockCommunities
        }
    }
};

export const getCommunityTop3 = async () => {
    try{
        const res = await fetcher<CommunityPreview[]>({
            url: `${BASE_URL}/api/community/list/top3`,
            method: 'GET',
            auth: true
        })
        console.log('인기 게시판 조회(게시판 메인 페이지용) : ',res.data)
        return res.data
    }catch{
        return mockCommunities.slice(0,3)
    }
}

