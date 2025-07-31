import type { RouteRecordRaw } from 'vue-router'
import BoardCategoryDetailPage from '@/pages/board/BoardCategoryDetailPage.vue'
import { finTypeIcons } from '@/shared/constants/finTypes.constants'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // 홈
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
      title: '자산 상세',
      icon: { type: 'lucide', value: 'CreditCard' }
    }
  },
  {
    path: '/assets/consumption/detail',
    name: 'ConsumptionDetail',
    component: () => import('@/pages/assets/ConsumptionDetailPage.vue'),
    meta: {
      title: '소비 상세',
      icon: { type: 'lucide', value: 'CreditCard' }
    }
  },

  // 상품 추천
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

  // 게시판
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
      icon: { type: 'emoji', value: '' } // 초기값 비워놓음
    },
    beforeEnter: (to, from, next) => {
      const category = to.params.category as string
      if (finTypeIcons[category]) {
        to.meta.icon = { type: 'emoji', value: finTypeIcons[category] }
        to.meta.title = category
      } else {
        to.meta.icon = { type: 'emoji', value: '❓' }
        to.meta.title = '알 수 없음'
      }
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
      icon: { type: 'emoji', value: '📝' } // 기본 fallback 이모지
    },beforeEnter: async (to, from, next) => {
      try {
        const postId = Number(to.params.id)
  
        // ✅ 현재는 mock 데이터에서 찾기
        const { mockBoards } = await import('@/entities/board/board.mock')
        const postData = mockBoards.find((b) => b.boardId === postId)
  
        if (!postData) {
          console.warn(`게시글 ${postId}를 mock에서 찾을 수 없습니다.`)
          next() // fallback
          return
        }
  
        const category = postData.category
        const { finTypeIcons } = await import('@/shared/constants/finTypes.constants')
  
        to.meta.icon = {
          type: 'emoji',
          value: finTypeIcons[category] || '📝'
        }
        to.meta.title = category || '게시글'
  
        next()
      } catch (error) {
        console.error('게시글 정보를 불러오는 중 오류 발생:', error)
        next() // fallback
      }
    }
  },
  //   beforeEnter: async (to, from, next) => {
  //     try {
  //       const postId = to.params.id
  //       // 예시용: 게시글 상세 데이터 가져오는 API 호출
  //       const response = await fetch(`/api/board/posts/${postId}`)
  //       const postData = await response.json()
  
  //       const category = postData.category as string
  
  //       // 이모지 매핑 가져오기
  //       const { finTypeIcons } = await import('@/shared/constants/finTypes.constants')
  
  //       // 메타 정보 덮어쓰기
  //       to.meta.icon = {
  //         type: 'emoji',
  //         value: finTypeIcons[category] || '📝'
  //       }
  //       to.meta.title = category || '게시글'
  
  //       next()
  //     } catch (error) {
  //       console.error('게시글 정보를 불러오지 못했습니다:', error)
  //       next() // 에러가 나도 그냥 진행
  //     }
  //   }
  // },

  // 목표
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

  // 유저
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
    meta: {
      title: '로그인',
      icon: { type: 'lucide', value: 'User' }
    }
  },
  {
    path: '/user/signup',
    name: 'UserSignupPage',
    component: () => import('@/pages/user/UserSignupPage.vue'),
    meta: {
      title: '회원 가입',
      icon: { type: 'lucide', value: 'User' }
    }
  },
  {
    path: '/user/profile-edit',
    name: 'UserProfileEditPage',
    component: () => import('@/pages/user/UserProfileEditPage.vue'),
    meta: {
      title: '회원 정보 수정',
      icon: { type: 'lucide', value: 'User' }
    }
  },
  {
    path: '/user/choose-wonnabe',
    name: 'UserChooseWonnabePage',
    component: () => import('@/pages/user/UserChooseWonnabePage.vue'),
    meta: {
      title: '워버니 선택',
      icon: { type: 'lucide', value: 'User' }
    }
  },
  {
    path: '/user/diagnosis',
    name: 'UserDiagnosisPage',
    component: () => import('@/pages/user/UserDiagnosisPage.vue'),
    meta: {
      title: '유저 금융 상태 진단',
      icon: { type: 'lucide', value: 'User' }
    }
  },
  {
    path: '/user/history',
    name: 'UserHistoryPage',
    component: () => import('@/pages/user/UserHistoryPage.vue'),
    meta: {
      title: '나의 금융 히스토리',
      icon: { type: 'lucide', value: 'User' }
    }
  },

  // 404 fallback
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

router.beforeEach((to, _from, next) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title}`
  }
  next()
})