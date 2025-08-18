<template>
  <div
    id="app"
    class="safe-top-white overscroll-none overflow-x-hidden font-sans min-h-screen
           pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]
           pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]"
  >
    <RouterView />

    <!-- 전역 스플래시 -->
    <transition name="fade">
      <div
        v-if="ui.globalSplash"
        class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      >
        <SplashScreen />
        <div v-if="ui.message" class="mt-4 text-gray-700">{{ ui.message }}</div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import '@/style.css'
import { useUiStore } from '@/entities/ui/ui.store'
import SplashScreen from '@/shared/ui/organisms/SplashScreen.vue'

const ui = useUiStore()
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>