<template>
    <Card>
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-2">
          <component :is="icon" class="w-5 h-5" />
          <Typography type="M_14_140">{{ label }}</Typography>
        </div>
        <Typography type="M_14_140"> <ChevronRight class="w-5 h-5" /></Typography>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ChevronRight } from 'lucide-vue-next'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  
  defineProps<{
    icon: any,
    label: string
  }>()
  </script>