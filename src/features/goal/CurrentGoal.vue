<template>
    <div class="w-full py-8 px-4 bg-gray-50 rounded-xl">
      <div class="flex items-center w-full">
        <component :is="icon" class="w-8 h-8 text-gray-400 mr-4" />
  
        <div class="flex-1">
          <Typography type="B_14_120">{{ label }}</Typography>
          <div class="flex gap-2 mt-2">
            <NoBorderTag color="bg-gray-200">{{ category }}</NoBorderTag>
            <NoBorderTag color="bg-gray-200">{{ finType }}</NoBorderTag>
          </div>
        </div>
  
        <div class="text-right ml-4 min-w-[64px]">
          <Typography type="B_22_160" class="text-sub-yellow-p">{{ percent }}%</Typography>
          <Typography type="M_10_120" class="text-gray-500">달성률</Typography>
        </div>
      </div>
  
      <div class="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          class="h-full bg-sub-yellow-p transition-all duration-300"
          :style="{ width: percent + '%' }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  
  defineProps({
    icon: { type: Object },
    label: String,
    finType: String,
    category: String,
    percent: String,
  })
  </script>