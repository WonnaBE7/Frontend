<template>
  <div class="flex justify-center items-center gap-4 mt-4 mb-2">
    <button v-if="!disableNavigation" @click="goPrevMonth">
      <ChevronLeft
        class="w-5 h-5"
        :class="{ 'opacity-30': disableNavigation }"
      />
    </button>

    <IconLabel :icon="icon" :iconClass="iconClass">
      {{ props.displayedLabel }}
    </IconLabel>

    <button v-if="!disableNavigation" @click="goNextMonth" :disabled="isCurrentMonth">
      <ChevronRight
        class="w-5 h-5"
        :class="{ 'opacity-30': isCurrentMonth }"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { ChevronLeft, ChevronRight, Wallet, TrendingUp, ChartColumnIncreasing } from 'lucide-vue-next'
import dayjs from 'dayjs'
import { computed, toRef } from 'vue'

const props = defineProps<{
  displayedLabel: string
  baseDate: dayjs.Dayjs
}>()

const baseDate = toRef(props, 'baseDate')

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()

const goPrevMonth = () => emit('prev')
const goNextMonth = () => emit('next')


const disableNavigation = computed(() => props.displayedLabel === '예상 월 소비' || props.displayedLabel === '오늘의 소비')
const isCurrentMonth = computed(() => dayjs().isSame(baseDate.value, 'month'))

const icon = computed(() => {
  if (props.displayedLabel === '예상 월 소비') return TrendingUp
  if (props.displayedLabel === '오늘의 소비') return ChartColumnIncreasing
  return Wallet
})

const iconClass = computed(() => {
  if (props.displayedLabel === '예상 월 소비') return 'text-sub-aqua-p'
  if (props.displayedLabel === '오늘의 소비') return 'text-sub-green-p'
  return 'text-sub-red-p'
})
</script>