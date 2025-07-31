import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { mockMonthlyConsumptionSummary, mockEstimatedAndTodayConsumption } from '@/entities/assets/consumption/consumption.mock'
import BoardCategoryDetailPage from '@/pages/board/BoardCategoryDetailPage.vue'
import { finTypeIcons } from '@/shared/constants/finTypes.constants'

const routes: RouteRecordRaw[] = [
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
    component: () => import('@/pages/assets/AssetsDetailPage.vue'),
    meta: {
      icon: { type: 'lucide', value: 'CreditCard' }
    },
    beforeEnter: async (to, _from, next) => {
      const { categoryLabelMap } = await import('@/entities/assets/assets.constants')
      const category = to.query.category as string
      const label = categoryLabelMap[category]
      to.meta.title = label ? `${label} 상세내역` : '자산 상세'
      next()
    }
  },
  {
    path: '/assets/consumption/detail',
    name: 'ConsumptionDetail',
    component: () => import('@/pages/assets/ConsumptionDetailPage.vue'),
    meta: {
      icon: { type: 'lucide', value: 'CreditCard' }
    },
    beforeEnter: async (to, _from, next) => {
      const type = to.query.type as string
      const categoryLabel = to.query.label as string // 예: 식비
  
      // ✅ 날짜 추출
      let dateTitle = ''
      if (type === 'current') {
        const yearMonth = mockMonthlyConsumptionSummary.yearMonth // '2025-07'
        const month = yearMonth?.split('-')[1] ?? 'MM'
        dateTitle = `${month}월`
      } else if (type === 'today') {
        const date = mockEstimatedAndTodayConsumption.todayConsumption.calculatedDate // '2025-07-16'
        const [_, mm, dd] = date?.split('-') ?? ['2025', 'MM', 'DD']
        dateTitle = `${mm}/${dd}`
      }
  
      const title = categoryLabel
        ? `${dateTitle} ${categoryLabel} 거래 내역`
        : `${dateTitle} 거래 내역`
  
      to.meta.title = title
      next()
    }
  },
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
    meta: {
      title: '관심 상품 리스트',
      icon: { type: 'lucide', value: 'Star' }
    }
  },
  {
    path: '/recommend/card/detail',
    name: 'CardDetail',
    component: () => import('@/pages/recommend/CardDetailPage.vue'),
    meta: {
      title: '추천 카드 상품',
      icon: { type: 'lucide', value: 'Star' }
    }
  },
  {
    path: '/recommend/savings/detail',
    name: 'SavingsDetail',
    component: () => import('@/pages/recommend/SavingsDetailPage.vue'),
    meta: {
      title: '추천 예적금 상품',
      icon: { type: 'lucide', value: 'Star' }
    }
  },
  {
    path: '/recommend/insurance/detail',
    name: 'InsuranceDetail',
    component: () => import('@/pages/recommend/InsuranceDetailPage.vue'),
    meta: {
      title: '추천 보험 상품',
      icon: { type: 'lucide', value: 'Star' }
    }
  },
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
    meta: {
      title: '금융 상품 게시판',
      icon: { type: 'lucide', value: 'BookOpenCheck' }
    }
  },
  {
    path: '/board/category/detail/:category',
    name: 'BoardCategoryDetail',
    component: BoardCategoryDetailPage,
    meta: {
      title: '커뮤니티',
      icon: { type: 'emoji', value: '' }
    },
    beforeEnter: (to, _from, next) => {
      const category = to.params.category as string
      to.meta.icon = {
        type: 'emoji',
        value: finTypeIcons[category] || '❓'
      }
      to.meta.title = category || '알 수 없음'
      next()
    }
  },
  {
    path: '/board/writed',
    name: 'BoardWrited',
    component: () => import('@/pages/board/BoardWritedPage.vue'),
    meta: {
      title: '내가 쓴 글',
      icon: { type: 'lucide', value: 'Pen' }
    }
  },
  {
    path: '/board/scraped',
    name: 'BoardScraped',
    component: () => import('@/pages/board/BoardScrapedPage.vue'),
    meta: {
      title: '스크랩한 글',
      icon: { type: 'lucide', value: 'BookmarkIcon' }
    }
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: () => import('@/pages/board/BoardWritePage.vue'),
    meta: {
      title: '글쓰기',
      icon: { type: 'lucide', value: 'Pen' }
    }
  },
  {
    path: '/board/post/:id',
    name: 'BoardPost',
    component: () => import('@/pages/board/BoardPostPage.vue'),
    meta: {
      title: '게시글',
      icon: { type: 'emoji', value: '📝' }
    },
    beforeEnter: async (to, _from, next) => {
      try {
        const postId = Number(to.params.id)
        const { mockBoards } = await import('@/entities/board/board.mock')
        const postData = mockBoards.find((b) => b.boardId === postId)
        if (!postData) {
          console.warn(`게시글 ${postId}을 찾을 수 없습니다.`)
          next()
          return
        }
        const category = postData.category
        to.meta.icon = {
          type: 'emoji',
          value: finTypeIcons[category] || '📝'
        }
        to.meta.title = category || '게시글'
        next()
      } catch (e) {
        console.error(e)
        next()
      }
    }
  },
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
    meta: {
      title: '목표 보고서',
      icon: { type: 'lucide', value: 'ListTodo' }
    }
  },
  {
    path: '/goal/simulation/input',
    name: 'GoalSimulationInput',
    component: () => import('@/pages/goal/GoalSimulationInputPage.vue'),
    meta: {
      title: '목표 시뮬레이션',
      icon: { type: 'lucide', value: 'Pen' }
    }
  },
  {
    path: '/goal/simulation/result',
    name: 'GoalSimulationResult',
    component: () => import('@/pages/goal/GoalSimulationResultPage.vue'),
    meta: {
      title: '목표 시뮬레이션 결과',
      icon: { type: 'lucide', value: 'ListTodo' }
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/UserProfilePage.vue'),
    meta: { title: '유저 페이지' }
  },
  {
    path: '/user/login',
    name: 'UserLoginPage',
    component: () => import('@/pages/user/UserLoginPage.vue'),
    // meta: {
    //   title: '로그인',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
  {
    path: '/user/signup',
    name: 'UserSignupPage',
    component: () => import('@/pages/user/UserSignupPage.vue'),
    // meta: {
    //   title: '회원 가입',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
  {
    path: '/user/profile-edit',
    name: 'UserProfileEditPage',
    component: () => import('@/pages/user/UserProfileEditPage.vue'),
    // meta: {
    //   title: '회원정보 수정',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
  {
    path: '/user/choose-wonnabe',
    name: 'UserChooseWonnabePage',
    component: () => import('@/pages/user/UserChooseWonnabePage.vue'),
    // meta: {
    //   title: '워너비 선택',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
  {
    path: '/user/diagnosis',
    name: 'UserDiagnosisPage',
    component: () => import('@/pages/user/UserDiagnosisPage.vue'),
    // meta: {
    //   title: '유저 금융 상태 진단',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
  {
    path: '/user/history',
    name: 'UserHistoryPage',
    component: () => import('@/pages/user/UserHistoryPage.vue'),
    // meta: {
    //   title: '나의 금융 히스토리',
    //   icon: { type: 'lucide', value: 'User' }
    // }
  },
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

// ✅ from에 타입 명시 (RouteLocationNormalized)
router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  next()
})