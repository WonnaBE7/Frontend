import { useAssetCategoryDetailStore, useAssetsCategoryRatio, useAssetsDetail, useAssetsMain } from "@/entities/assets/assets.store"
import { useConsumptionMain, useConsumptionStore, useTransactionCategoryDetailStore, useTransactionDetailStore } from "@/entities/consumption/consumption.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initAssetsData = async () => {
  const userStore = useUserProfileStore()
  const consumptionMain = useConsumptionMain()
  const assetsMain = useAssetsMain()
  const assetsDetail = useAssetsDetail()
  const categoryRatio = useAssetsCategoryRatio()
  const categoryDetail = useAssetCategoryDetailStore()
  const consumptionStore = useConsumptionStore()
  const transactionDetail = useTransactionDetailStore()
  const transactionCategoryDetail = useTransactionCategoryDetailStore()
  
  await Promise.all([
    // 홈 페이지
    !userStore.profile && userStore.fetchUserProfile(),
    !consumptionMain.meta && consumptionMain.fetchConsumptionMain(),

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
  ])
}
