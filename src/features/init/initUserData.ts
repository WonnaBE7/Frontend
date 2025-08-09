import { useUserProfileStore } from "@/entities/user/user.store"


export const initUserData = async () => {
  const userStore = useUserProfileStore()
  
  await Promise.all([
    // 홈 페이지
    userStore.fetchUserProfile(),
  ])
}
