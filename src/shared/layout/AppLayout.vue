<template>
  <div class="flex flex-col min-h-screen  bg-gray-BGDim">
    <OfflineIndicator />
    <PWAUpdatePrompt />
    <Header />
    <main class="flex-1 px-4 sm:px-5 pt-16 pb-12 w-full md:max-w-[768px] mx-auto">
      <slot />
    </main>
    <Navigator />
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/ui/atoms/Header.vue'
import Navigator from '@/shared/ui/atoms/Navigator.vue'
import PWAUpdatePrompt from '@/shared/ui/organisms/PWAUpdatePrompt.vue'
</script>