import { fetcher } from '@/shared/utils/fetcher';
import { community } from '@/entities/board/community/community.api';
import type { CommunityPreview } from '@/entities/board/community/community.entity';

export const getCommunityList = async (): Promise<CommunityPreview[]> => {
  const response = await fetcher(community.getCommunityList());
  return response.data.communities;
};