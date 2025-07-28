<template>
  <div class="w-full py-4 px-4 rounded-xl">
    <div class="flex items-center w-full">
      <!-- ✅ 아이콘 표시 -->
      <Typography type="B_22_160" class="mr-4">
        {{ categoryIcon }}
      </Typography>

      <div class="flex-1">
        <Typography type="B_14_120">{{ label }}</Typography>
        <div class="flex gap-2 mt-2">
          <NoBorderTag :color="color === 'white' ? 'bg-white/10' : 'bg-gray-100'">
            {{ category }}
          </NoBorderTag>
          <NoBorderTag :color="color === 'white' ? 'bg-white/10' : 'bg-gray-100'">
            {{ finType }}
          </NoBorderTag>
        </div>
      </div>

      <div class="text-right ml-4 min-w-[64px]">
        <Typography
          type="B_22_160"
          :class="color === 'white' ? 'text-white' : 'text-sub-yellow-p'"
        >
          {{ percent }}%
        </Typography>
        <Typography
          type="M_10_120"
          :class="color === 'white' ? 'text-white' : 'text-gray-500'"
        >
          진행률
        </Typography>
      </div>
    </div>

    <div class="mt-4 h-2 w-full bg-gray-1BGDim00 rounded-full overflow-hidden">
      <div
        class="h-full bg-sub-yellow-p transition-all duration-300"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { goalCategoryIcons } from '@/shared/constants/goalCategory.constants'

const props = defineProps<{
  label: string
  finType: string
  category: string
  percent: string
  color : string
}>()

const categoryIcon = computed(() => {
  return goalCategoryIcons[props.category] || '📦'
})
</script>