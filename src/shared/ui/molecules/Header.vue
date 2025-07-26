<template>
  <header
    class="w-full md:max-w-[768px] h-16 px-4 flex items-center justify-between bg-white shadow-sm fixed top-0 z-10 left-1/2 -translate-x-1/2"
  >
    <img src="/header-icon.png" alt="WonnaBE Logo" class="h-6" />

    <RouterLink
      to="/user"
      :class="[
        'flex items-center justify-end w-full text-gray-900 mr-2',
      ]"
    >
      <User class="w-5 h-5" />
    </RouterLink>
  </header>
</template>
<script setup lang="ts">
import { User } from 'lucide-vue-next'
</script>