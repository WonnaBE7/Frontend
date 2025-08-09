import { useAssetsMain } from "@/entities/assets/assets.store"
import { usePostPreviewStore } from "@/entities/board/board.store"
import { useConsumptionMain} from "@/entities/consumption/consumption.store"
import { useGoalStore } from "@/entities/goal/goal.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initMainData = async () => {
  const userStore = useUserProfileStore()
  const consumptionMain = useConsumptionMain()
  const goalStore = useGoalStore()
  const assetsMain = useAssetsMain()
  const postPreviewStore = usePostPreviewStore()
  
  await Promise.all([
    // 홈 페이지
    !userStore.profile && userStore.fetchUserProfile(),
    
     // 자산 메인 페이지
    !assetsMain.meta && assetsMain.fetchAssetsMain(),
    !consumptionMain.meta && consumptionMain.fetchConsumptionMain(),

    // 목표 데이터 조회 - 진행 중 
    !goalStore.publishedGoals.length && goalStore.fetchPublishedGoals(),  

    // 인기 글 top 3
    !postPreviewStore.posts && postPreviewStore.fetchBoardTop3(),
  ])
}
