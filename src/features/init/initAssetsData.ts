import { useAssetsCategoryRatio, useAssetsDetail, useAssetsMain } from "@/entities/assets/assets.store"
import { useConsumptionMain, useConsumptionStore, useTransactionDetailStore  } from "@/entities/consumption/consumption.store"
import { useUserProfileStore } from "@/entities/user/user.store"


export const initAssetsData = async () => {
  const userStore = useUserProfileStore()
  const consumptionMain = useConsumptionMain()
  const assetsMain = useAssetsMain()
  const assetsDetail = useAssetsDetail()
  const categoryRatio = useAssetsCategoryRatio()
  const consumptionStore = useConsumptionStore()
  const consumptionMonthToday = useTransactionDetailStore()
  await Promise.all([
    // 홈 페이지
    userStore.fetchUserProfile(),
    consumptionMain.fetchConsumptionMain(),

    // 자산 메인 페이지
    assetsMain.fetchAssetsMain(),
    assetsDetail.fetchAssetsDetail(),
    categoryRatio.fetchAssetsCategoryRatio(),

     // 월별 소비, 예상 월 소비, 일 소비 요약, 차트 데이터 까지
    consumptionStore.fetchConsumptionData(),
    
    consumptionMonthToday.fetchMonthlyTransactionDetail(),
    consumptionMonthToday.fetchTodayTransactionDetail()
  ])
}
