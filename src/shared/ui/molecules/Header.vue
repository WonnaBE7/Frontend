<template>
  <header
    class="w-full md:max-w-[768px] h-16 px-4 md:px-8 flex items-center justify-between fixed top-0 z-10 left-1/2 -translate-x-1/2 bg-white"
  >
    <div class="flex items-center w-full">
      <!-- 왼쪽: 뒤로가기 아이콘 -->
      <button v-if="showBackButton" @click="goBack" class="mr-2">
        <span class="text-xl">&lt;</span>
      </button>

      <!-- 중앙: 로고 -->
      <img v-if="!showBackButton" src="/header-icon.png" alt="WonnaBE Logo" class="h-6" />

      <!-- 오른쪽: 사용자 아이콘 -->
      <RouterLink
        to="/user"
        class="ml-auto text-gray-900"
      >
        <User class="w-5 h-5 sm:w-7 sm:h-7" />
      </RouterLink>
    </div>
  </header>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { User } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const basePaths = ['/', '/assets', '/recommend', '/goal', '/user', '/board']
const showBackButton = computed(() => !basePaths.includes(route.path))

const goBack = () => router.back()
</script>