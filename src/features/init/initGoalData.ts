import { useGoalStore } from "@/entities/goal/goal.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initGoalData = async () => {
  const userStore = useUserProfileStore()
  const goalStore = useGoalStore()

  await Promise.all([
    // 홈 페이지
    userStore.fetchUserProfile(),
    goalStore.fetchPublishedGoals(),  // 목표 데이터 조회 - 진행 중 
    goalStore.fetchAchievedGoals(),    // 목표 데이터 조회 - 완료
  ])
}
