<template>
    <div class="w-full">
      <div class="flex rounded-full overflow-hidden mb-4 sm:mb-6 h-4 sm:h-6 ">
        <div
          v-for="item in data"
          :key="item.type"
          class="h-full"
          :class="colorMap[item.type]"
          :style="{ width: item.percentage + '%' }"
        ></div>
      </div>
      <ul class="flex grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 sm:gap-y-4 md:gap-y-6">
        <li v-for="item in data" :key="item.type" class="flex items-center gap-1 sm:gap-2 md:gap-3">
          <span
            class="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 rounded-full ml-2 sm:ml-3 md:ml-4"
            :class="colorMap[item.type]"
          ></span>
          <Typography type="B_12_120">{{ item.label }} {{ item.percentage }}%</Typography>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue';
import { colorMap } from '@/entities/assets/assets.constants'

  interface AssetItem {
    type: string
    label: string
    percentage: number
  }
  
  defineProps<{
    data: AssetItem[]
  }>()
  
  </script>