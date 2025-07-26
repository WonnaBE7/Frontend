<template>
  <div class="w-full py-4 px-4 bg-gray-BGDim rounded-xl">
    <div class="flex items-center w-full">
      <!-- ✅ 아이콘 표시 -->
      <Typography type="B_22_160" class="mr-4">
        {{ categoryIcon }}
      </Typography>

      <div class="flex-1">
        <Typography type="B_14_120">{{ label }}</Typography>
        <div class="flex gap-2 mt-2">
          <NoBorderTag color="bg-gray-100">{{ category }}</NoBorderTag>
          <NoBorderTag color="bg-gray-100">{{ finType }}</NoBorderTag>
        </div>
      </div>

      <div class="text-right ml-4 min-w-[64px]">
        <Typography type="B_22_160" class="text-sub-yellow-p">{{ percent }}%</Typography>
        <Typography type="M_10_120" class="text-gray-500">달성률</Typography>
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
}>()

// ✅ 아이콘 추출 로직
const categoryIcon = computed(() => {
  return goalCategoryIcons[props.category] || '📦'
})
</script>