<template>
    <div class="text-center">
      <Typography type="B_22_160" class="text-black mb-2">
        {{ amount }}
      </Typography>
      <Typography type="M_12_120" class="text-gray-400">
        {{ date }} 기준
      </Typography>
    </div>
  </template>
  
  <script setup lang="ts">
  import Typography from '@/shared/ui/atoms/Typography.vue'
  
  defineProps<{
    amount: string
    date: string
  }>()
  </script>