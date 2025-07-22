<template>
  <div id="app" class="safe-top-white overscroll-none overflow-x-hidden font-sans min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import '@/style.css'
</script>