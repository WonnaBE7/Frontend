<template>
  <div class="flex justify-center">
    <div class="w-full md:max-w-[768px] bg-gray-BGDim flex flex-col overscroll-none min-h-screen">
      <PWAUpdatePrompt />
      <Header />
      <main class="flex-grow px-4 sm:px-5 pt-20 pb-20">
        <slot />
      </main>
      <Navigator />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/ui/atoms/Header.vue'
import Navigator from '@/shared/ui/atoms/Navigator.vue'
import PWAUpdatePrompt from '@/shared/ui/organisms/PWAUpdatePrompt.vue'
</script>