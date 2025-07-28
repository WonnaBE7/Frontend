import type { Method } from '@/shared/utils/fetcher';

export const community = {
  getCommunityList: () => ({
    url: `${import.meta.env.VITE_APP_API_URL}/api/community/list`,
    method: 'GET' as Method,  // 또는 그냥 'GET'도 가능
    auth: true,
  }),
};