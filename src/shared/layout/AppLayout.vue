<template>
  <div class="layout-wrapper">
    <Header />
    <div class="layout-container">
      <slot />
    </div>
    <Navigator/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/ui/atoms/Header.vue'
import Navigator from '@/shared/ui/atoms/Navigator.vue';
</script>

<style scoped>
.layout-wrapper {
  @apply flex justify-center bg-white min-h-screen;
}

.layout-container {
  @apply w-full max-w-[360px] md:max-w-[768px] bg-gray-BGDim px-4 sm:px-5 pt-16 pb-12;
}
</style>