import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 자산 분석 메인
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/HomeDashBoardPage.vue'),
    meta: { title: '홈' }
  },
  {
    path: '/assets',
    name: 'Assets',
    component: () => import('@/pages/assets/AssetsPage.vue')
  },
  {
    path: '/assets/detail',
    name: 'AssetsDetail',
    component: () => import('@/pages/assets/AssetsDetailPage.vue')
  },
  {
    path: '/assets/consumption/detail',
    name: 'ConsumptionDetail',
    component: () => import('@/pages/assets/ConsumptionDetailPage.vue')
  },

//// 상품 추천
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('@/pages/recommend/RecommendPage.vue'),
    meta: { title: '상품 추천' }
  },
  {
    path: '/recommend/wishlist',
    name: 'Wishlist',
    component: () => import('@/pages/recommend/WishlistPage.vue'),
  },
  {
    path: '/recommend/card/detail',
    component: () => import('@/pages/recommend/CardDetailPage.vue'),
  },
  {
    path: '/recommend/savings/detail',
    component: () => import('@/pages/recommend/SavingsDetailPage.vue'),
  },
  {
    path: '/recommend/insurance/detail',
    component: () => import('@/pages/recommend/InsuranceDetailPage.vue'),
  },

  //// 게시판
  {
    path: '/board',
    name: 'Board',
    component: () => import('@/pages/board/BoardPage.vue'),
    meta: { title: '게시판' }
  },
  {
    path: '/board/category',
    name: 'BoardCategory',
    component: () => import('@/pages/board/BoardCategoryPage.vue'),
  },
  {
    path: '/board/category/detail/:category',
    name: 'BoardCategoryDetail',
    component: () => import('@/pages/board/BoardCategoryDetailPage.vue'),
  },
  {
    path: '/board/writed',
    name: 'BoardWrited',
    component: () => import('@/pages/board/BoardWritedPage.vue'),
  },
  {
    path: '/board/scraped',
    name: 'BoardScraped',
    component: () => import('@/pages/board/BoardScrapedPage.vue'),
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: () => import('@/pages/board/BoardWritePage.vue'),
  },
  {
    path: '/board/post/:id',
    name: 'BoardPost',
    component: () => import('@/pages/board/BoardPostPage.vue'),
  },


  /// 목표
  {
    path: '/goal',
    name: 'Goal',
    component: () => import('@/pages/goal/GoalPage.vue'),
    meta: { title: '목표 페이지' }
  },
  {
    path: '/goal/report',
    name: 'GoalReport',
    component: () => import('@/pages/goal/GoalReportPage.vue'),
  },
  {
    path: '/goal/simulation/input',
    name: 'GoalSimulationInput',
    component: () => import('@/pages/goal/GoalSimulationInputPage.vue'),
  },
  {
    path: '/goal/simulation/result',
    name: 'GoalSimulationResult',
    component: () => import('@/pages/goal/GoalSimulationResultPage.vue'),
  },

  /// 유저
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/UserProfilePage.vue'),
    meta: { title: '유저 페이지' }
  },
  {
    path: '/user/login',
    name: 'UserLoginPage',
    component: () => import('@/pages/user/UserLoginPage.vue')
  },
  {
    path: '/user/signup',
    name: 'UserSignupPage',
    component: () => import('@/pages/user/UserSignupPage.vue')
  },
  {
    path: '/user/profile-edit',
    name: 'UserProfileEditPage',
    component: () => import('@/pages/user/UserProfileEditPage.vue')
  },
  {
    path: '/user/choose-wonnabe',
    name: 'UserChooseWonnabePage',
    component: () => import('@/pages/user/UserChooseWonnabePage.vue')
  },
  {
    path: '/user/diagnosis',
    name: 'UserDiagnosisPage',
    component: () => import('@/pages/user/UserDiagnosisPage.vue')
  },
  {
    path: '/user/history',
    name: 'UserHistoryPage',
    component: () => import('@/pages/user/UserHistoryPage.vue')
  },
  /// 
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to,_from, next) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title}`
  }
  
  next()
})