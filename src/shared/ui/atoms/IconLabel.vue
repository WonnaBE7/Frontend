<template>
    <Typography type="B_18_120" class="w-full flex flex-row">
      <component :is="icon" class="w-5 h-5 mr-2" :class="iconClass" />
      <slot/>
    </Typography>
  </template>
  
  <script setup lang="ts">
    import Typography from './Typography.vue'

  defineProps<{
    icon: any
    iconClass?: string
  }>()
  </script>