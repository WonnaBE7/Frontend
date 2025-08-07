import { usePostPreviewStore, useWriteScrapStore } from "@/entities/board/board.store"
import { useCommunityListStore } from "@/entities/board/community/community.store"
import { useGoalStore } from "@/entities/goal/goal.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initBoardData = async () => {
  const userStore = useUserProfileStore()
  const goalStore = useGoalStore()
  const postPreviewStore = usePostPreviewStore()
  const communtyList = useCommunityListStore()
  const countWriteScrap =useWriteScrapStore()
  
  await Promise.all([
    // 홈 페이지
    !userStore.profile && userStore.fetchUserProfile(),
    !goalStore.publishedGoals.length && goalStore.fetchPublishedGoals(),  // 목표 데이터 조회 - 진행 중 

    // 게시글
    // 인기 글 top 3
    !postPreviewStore.posts && postPreviewStore.fetchAssetsMain(),
    !postPreviewStore.scraped && postPreviewStore.fetchUserScarped(),// 내가 스크랩한 글 미리보기
    !postPreviewStore.writed && postPreviewStore.fetchUserWrited(), // 내가 작성한 글 미리보기
    !countWriteScrap.count && countWriteScrap.fetchWriteScrap(), // 내가 스크랩한, 내가 쓴 글 갯수

    // 커뮤니티
    !communtyList.all && communtyList.fetchCommunityList(),
    !communtyList.top3 && communtyList.fetchCommunityTop3(),
  ])
}
