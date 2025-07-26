<template>
  <nav
    class="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 w-full  md:max-w-[768px]
           bg-white border-gray-200 flex justify-around items-center h-20  border-t border-gray-200"
  >
    <RouterLink
      v-for="item in navItems"
      :key="item.name"
      :to="item.path"
      :class="[
        'flex flex-col items-center justify-center w-full py-2 text-gray-500',
        (route.path === item.path || route.path.startsWith(item.path + '/')) ? 'text-sub-yellow-p' : '',
        'hover:text-sub-yellow-c'
      ]"
    >
      <component :is="item.icon" class="w-5 h-5 mb-1" />
      <span class="text-xs mb-4">{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { Home, Star, Target, ChartNoAxesCombined, MessageSquare } from 'lucide-vue-next'

const route = useRoute()

const navItems = ref([
  { name: 'Board', path: '/board', label: '게시판', icon: MessageSquare },
  { name: 'Goal', path: '/goal', label: '목표', icon: Target },
  { name: 'Home', path: '/', label: '홈', icon: Home },
  { name: 'Recommend', path: '/recommend', label: '추천', icon: Star },
  { name: 'Assets', path: '/assets', label: '자산분석', icon: ChartNoAxesCombined }
])
</script>