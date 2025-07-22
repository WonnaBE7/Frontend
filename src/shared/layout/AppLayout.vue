<template>
  <div class="flex justify-center bg-white min-h-screen">
    <PWAUpdatePrompt />
    <Header />
    <div class="w-full max-w-[360px] md:max-w-[768px] bg-gray-BGDim px-4 sm:px-5 pt-16 pb-12">
      <slot />
    </div>
    <Navigator />
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/ui/atoms/Header.vue'
import Navigator from '@/shared/ui/atoms/Navigator.vue'
import PWAUpdatePrompt from '@/shared/ui/organisms/PWAUpdatePrompt.vue'
</script>