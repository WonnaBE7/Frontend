<template>
    <Typography type="B_18_120" class="mb-4">
      {{ categoryLabelMap[data.consumptionCategory] }} 상세 내역
    </Typography>
    <ConsumptionDetailBar
      :category="data.consumptionCategory"
      :transactions="data.transactions"
    />
  </template>
  
 <script setup lang="ts">
import { computed } from 'vue'
import { categoryLabelMap } from '@/entities/assets/assets.constants'
import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'

import {
  mockFoodTransactions,
  mockShoppingTransactions,
  mockTransportTransactions,
  mockFinancialTransactions,
  mockOtherTransactions,
  mockTodayFoodTransactions,
  mockTodayShoppingTransactions,
  mockTodayTransportTransactions,
  mockTodayFinancialTransactions,
  mockTodayOtherTransactions,
} from '@/entities/assets/consumption/consumption.mock'

import type { ConsumptionCategoryDetail } from '@/entities/assets/consumption/consumption.entity'

const props = defineProps<{
  category: string
  type: 'current' | 'today'
}>()

const monthlyMap: Record<string, ConsumptionCategoryDetail> = {
  food: mockFoodTransactions,
  shopping: mockShoppingTransactions,
  transport: mockTransportTransactions,
  financial: mockFinancialTransactions,
  other: mockOtherTransactions,
}

const todayMap: Record<string, ConsumptionCategoryDetail> = {
  food: mockTodayFoodTransactions,
  shopping: mockTodayShoppingTransactions,
  transport: mockTodayTransportTransactions,
  financial: mockTodayFinancialTransactions,
  other: mockTodayOtherTransactions,
}

const data = computed(() => {
  return props.type === 'today' ? todayMap[props.category] : monthlyMap[props.category]
})
</script>