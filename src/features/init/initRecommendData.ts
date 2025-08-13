import { useRecommendationStore } from "@/entities/recommend/recommend.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initRecommendData = async () => {
  const userStore = useUserProfileStore()
  const recommendStore = useRecommendationStore()
  
  await userStore.fetchUserProfile()

  await Promise.all([
    recommendStore.fetchWishlist(),
    recommendStore.fetchCurrentProducts(),  
    
    recommendStore.fetchCardRecommendation(),
    recommendStore.fetchInsuranceRecommendation(),
    recommendStore.fetchSavingsRecommendation(),
  ])
}
