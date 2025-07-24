<template>
    <div  class="w-full">
      <div class="flex h-4 rounded-full overflow-hidden mb-4">
        <div
          v-for="item in data"
          :key="item.type"
          class="h-full"
          :style="{ width: item.percentage + '%', backgroundColor: colorMap[item.type] }"
        ></div>
      </div>
      <ul class="flex grid grid-cols-2 gap-x-4 gap-y-2">
        <li v-for="item in data" :key="item.type" class="flex items-center gap-1">
          <span
            class="w-2.5 h-2.5 rounded-full"
            :style="{ backgroundColor: colorMap[item.type] }"
          ></span>
          <Typography type="B_12_120">{{ item.label }} {{ item.percentage }}%</Typography>
          
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue';

  interface AssetItem {
    type: string
    label: string
    percentage: number
  }
  
  defineProps<{
    data: AssetItem[]
  }>()
  
  const colorMap: Record<string, string> = {
    입출금: '#ffd500',
    저축: '#78c65f',
    투자: '#2a9fd6',
    연금: '#ff9900',
    포인트: '#ff6b6b',
  }
  </script>