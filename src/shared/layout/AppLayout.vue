<template>
  <div class="scrollbar-hide flex justify-center bg-white">
    <div
      class="w-full md:max-w-[768px] bg-gray-BGDim min-h-screen flex flex-col overscroll-none"
    >
      <PWAUpdatePrompt />
      <Header />
      <main class="scrollbar-hide flex-grow p-4 sm:px-5 pt-20 pb-20 bg-gray-BGDim">
        <slot />
      </main>
      <Navigator />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/ui/molecules/Header.vue'
import Navigator from '@/shared/ui/molecules/Navigator.vue'
import PWAUpdatePrompt from '@/shared/ui/organisms/PWAUpdatePrompt.vue'
</script>