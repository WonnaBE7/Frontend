<template>
  <header
    class="w-full md:max-w-[768px] h-16 md:h-20 px-4 md:px-8 flex items-center justify-between fixed top-0 z-10 left-1/2 -translate-x-1/2 bg-white"
  >
    <div class="flex items-center w-full relative">
      <button v-if="showBackButton" @click="goBack" class="mr-2 z-10">
        <component
          :is="ChevronLeft"
          class="w-7 h-7 sm:w-9 sm:h-9"
        />
      </button>

      <img
        v-if="isBasePath"
        src="/header-icon.png"
        alt="WonnaBE Logo"
        class="h-6 md:h-8"
      />
      <div
        v-else
        class="text-center flex items-center gap-2"
      >
        <component
          v-if="isLucideIcon"
          :is="lucideIcons[routeIcon?.value]"
          class="w-7 h-7 sm:w-9 sm:h-9"
        />
        <Typography type="B_18_120" v-else-if="isEmojiIcon" class="text-base">
          {{ routeIcon?.value }}
        </Typography>
        <Typography type="B_18_120" class="font-bold text-base">{{ routeTitle }}</Typography>
      </div>
      <RouterLink to="/user" class="ml-auto text-gray-900 z-10">
        <User class="w-7 h-7 sm:w-9 sm:h-9" />
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
  Pen,
  ChevronLeft
} from 'lucide-vue-next'
import Typography from '../atoms/Typography.vue'

const route = useRoute()
const router = useRouter()

const basePaths = ['/', '/assets', '/recommend', '/goal', '/user', '/board']
const isBasePath = computed(() => basePaths.includes(route.path))

const showBackButton = computed(() => !isBasePath.value)
const routeTitle = computed(() => route.meta?.title || '')
const routeIcon = computed(
  () =>
    (route.meta?.icon as { type: 'lucide' | 'emoji'; value: string }) || null
)
const isLucideIcon = computed(() => routeIcon.value?.type === 'lucide')
const isEmojiIcon = computed(() => routeIcon.value?.type === 'emoji')

const lucideIcons: Record<string, any> = {
  Star,
  Home,
  User,
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