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

////
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('@/pages/recommend/RecommendPage.vue'),
    meta: { title: '상품 추천' }
  },
  {
    path: '/board',
    name: 'Board',
    component: () => import('@/pages/board/BoardPage.vue'),
    meta: { title: '게시판' }
  },
  {
    path: '/goal',
    name: 'Goal',
    component: () => import('@/pages/goal/GoalSimulationPage.vue'),
    meta: { title: '목표 시뮬레이션' }
  },

  /// 
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/UserProfilePage.vue'),
    meta: { title: '유저 페이지' }
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
  /// 유저
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