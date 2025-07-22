import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import HomePage from '@/pages/home/HomePage.vue'
import RecommendPage from '@/pages/recommend/RecommendPage.vue'
import BoardPage from '@/pages/board/BoardPage.vue'
import GoalSimulationPage from '@/pages/goal/GoalSimulationPage.vue'
import UserPage from '@/pages/user/UserPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: '홈'
    }
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: RecommendPage,
    meta: {
      title: '상품 추천'
    }
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardPage,
    meta: {
      title: '게시판'
    }
  },
  {
    path: '/goal',
    name: 'Goal',
    component: GoalSimulationPage,
    meta: {
      title: '목표 시뮬레이션'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: UserPage,
    meta: {
      title: '유저 페이지'
    }
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

router.beforeEach((to,_from, next) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title}`
  }
  
  next()
})