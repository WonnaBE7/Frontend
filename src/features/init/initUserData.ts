import { useAssetCategoryDetailStore, useAssetsCategoryRatio, useAssetsDetail, useAssetsMain } from "@/entities/assets/assets.store"
import { useConsumptionMain, useConsumptionStore, useTransactionCategoryDetailStore, useTransactionDetailStore } from "@/entities/consumption/consumption.store"
import { useGoalStore } from "@/entities/goal/goal.store"
import { useRecommendationStore } from "@/entities/recommend/recommend.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initUserData = async () => {
  const userStore = useUserProfileStore()
  const consumptionMain = useConsumptionMain()
  const goalStore = useGoalStore()
  const assetsMain = useAssetsMain()
  const assetsDetail = useAssetsDetail()
  const categoryRatio = useAssetsCategoryRatio()
  const categoryDetail = useAssetCategoryDetailStore()
  const consumptionStore = useConsumptionStore()
  const transactionDetail = useTransactionDetailStore()
  const transactionCategoryDetail = useTransactionCategoryDetailStore()
  const recommendStore = useRecommendationStore()

  await Promise.all([
    // 홈 페이지
    !userStore.profile && userStore.fetchUserProfile(),
    !consumptionMain.meta && consumptionMain.fetchConsumptionMain(),
    !goalStore.publishedGoals.length && goalStore.fetchPublishedGoals(),  // 목표 데이터 조회 - 진행 중 
    !goalStore.achievedGoals.length && goalStore.fetchAchievedGoals(),    // 목표 데이터 조회 - 완료

    // 자산 메인 페이지
    !assetsMain.meta && assetsMain.fetchAssetsMain(),
    !assetsDetail.meta && assetsDetail.fetchAssetsDetail(),
    !categoryRatio.meta && categoryRatio.fetchAssetsCategoryRatio(),
    !Object.keys(categoryDetail.categoryDetails).length && categoryDetail.fetchAllCategoryDetails(),

     // 월별 소비, 예상 월 소비, 일 소비 요약, 차트 데이터 까지
    !consumptionStore.categoryData && consumptionStore.fetchConsumptionData(),

    // 월별 일별 소비 내역
    !transactionDetail.todayTransactionDetail && transactionDetail.fetchTodayTransactionDetail(),
    !transactionDetail.monthlyTransactionDetail && transactionDetail.fetchMonthlyTransactionDetail(),

    // 월별 일별 카테고리 소비 내역
    !Object.keys(transactionCategoryDetail.todayDetails).length && transactionCategoryDetail.fetchAllTodayDetails(),
    !Object.keys(transactionCategoryDetail.monthlyDetails).length && transactionCategoryDetail.fetchAllMonthlyDetails(),

    // 상품 추천 관련
    !recommendStore.wishlist && recommendStore.fetchWishlist(),
    !recommendStore.currentProducts && recommendStore.fetchCurrentProducts(),
  ])
}

// export const initUserData = async () => {
//   await Promise.all([
//     // 홈 페이지
//     useUserProfileStore().fetchUserProfile(),
//     useConsumptionMain().fetchConsumptionMain(),
//     useGoalStore().fetchPublishedGoals(), // 목표 데이터 조회 - 진행 중 
//     useGoalStore().fetchAchievedGoals(),  // 목표 데이터 조회 - 완료

//     // 자산 메인 페이지
//     useAssetsMain().fetchAssetsMain(), // 이것도 홈에서 쓰임
//     useAssetsDetail().fetchAssetsDetail(),
//     useAssetsCategoryRatio().fetchAssetsCategoryRatio(),
//     useAssetCategoryDetailStore().fetchAllCategoryDetails(),

//     // 월별 소비, 예상 월 소비, 일 소비 요약, 차트 데이터 까지
//     useConsumptionStore().fetchConsumptionData(),

//     // 월별 일별 소비 내역
//     useTransactionDetailStore().fetchTodayTransactionDetail(),
//     useTransactionDetailStore().fetchMonthlyTransactionDetail(),

//     // 월별 일별 카테고리 소비 내역
//     useTransactionCategoryDetailStore().fetchAllTodayDetails(),
//     useTransactionCategoryDetailStore().fetchAllMonthlyDetails(),

//     // 상품 추천 관련
//     useRecommendationStore().fetchWishlist(),
//     useRecommendationStore().fetchCurrentProducts(),
//   ])
// }