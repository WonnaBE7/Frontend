<template>
    <div class="flex justify-center items-center gap-4 mt-4 mb-2">
      <button @click="goPrevMonth">
        <ChevronLeft class="w-5 h-5" />
      </button>
  
      <IconLabel :icon="Wallet" iconClass="text-red-700"> {{ displayedLabel }}</IconLabel>
  
      <button @click="goNextMonth" :disabled="isCurrentMonth">
        <ChevronRight
          class="w-5 h-5"
          :class="{ 'opacity-30': isCurrentMonth }"
        />
      </button>
    </div>
</template>
  
  <script setup lang="ts">
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { ChevronLeft, ChevronRight, Wallet } from 'lucide-vue-next'
  import dayjs from 'dayjs'
  
  const { displayedLabel, baseDate } = defineProps<{
    displayedLabel: string
    baseDate: dayjs.Dayjs
  }>()
  
  const emit = defineEmits<{
    (e: 'prev'): void
    (e: 'next'): void
  }>()
  
  const goPrevMonth = () => emit('prev')
  const goNextMonth = () => emit('next')
  
  const isCurrentMonth = dayjs().isSame(baseDate, 'month')
  </script>