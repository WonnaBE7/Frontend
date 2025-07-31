<template>
  <header
    class="w-full md:max-w-[768px] h-16 px-4 md:px-8 flex items-center justify-between fixed top-0 z-10 left-1/2 -translate-x-1/2 bg-white"
  >
    <div class="flex items-center w-full relative">
      <!-- ← 버튼 -->
      <button v-if="showBackButton" @click="goBack" class="mr-2 z-10">
        <span class="text-xl">&lt;</span>
      </button>

      <!-- 왼쪽 로고 -->
      <img
        v-if="isBasePath"
        src="/header-icon.png"
        alt="WonnaBE Logo"
        class="h-6"
      />

      <!-- 가운데 타이틀 + 아이콘 -->
      <div
        v-else
        class="text-center flex items-center gap-2"
      >
        <component
          v-if="isLucideIcon"
          :is="lucideIcons[routeIcon?.value]"
          class="w-5 h-5 sm:w-7 sm:h-7"
        />
        <span v-else-if="isEmojiIcon" class="text-base">
          {{ routeIcon?.value }}
        </span>
        <span class="font-bold text-base">{{ routeTitle }}</span>
      </div>

      <!-- 우측 프로필 아이콘 -->
      <RouterLink to="/user" class="ml-auto text-gray-900 z-10">
        <User class="w-5 h-5 sm:w-7 sm:h-7" />
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  User,
  Star,
  Home,
  FolderKanban,
  ListTodo,
  BadgePercent,
  BookOpenCheck,
  BookmarkIcon,
  CreditCard,
  Pen
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// ✅ 루트 경로인지 여부
const basePaths = ['/', '/assets', '/recommend', '/goal', '/user', '/board']
const isBasePath = computed(() => basePaths.includes(route.path))

// ✅ 뒤로가기 버튼은 루트 경로가 아닐 때만 보이도록
const showBackButton = computed(() => !isBasePath.value)

// ✅ 라우트 제목
const routeTitle = computed(() => route.meta?.title || '')

// ✅ meta.icon 처리
const routeIcon = computed(
  () =>
    (route.meta?.icon as { type: 'lucide' | 'emoji'; value: string }) || null
)
const isLucideIcon = computed(() => routeIcon.value?.type === 'lucide')
const isEmojiIcon = computed(() => routeIcon.value?.type === 'emoji')


// ✅ 지원하는 Lucide 아이콘 등록
const lucideIcons: Record<string, any> = {
  Star,
  Home,
  FolderKanban,
  ListTodo,
  BadgePercent,
  BookOpenCheck,
  BookmarkIcon,
  CreditCard,
  Pen
}

const goBack = () => router.back()
</script>