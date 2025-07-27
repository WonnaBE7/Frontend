<template>
    <div class="space-y-6">
        <Typography type="B_18_120" class="mb-4">
            {{date}} 거래 내역
        </Typography>
  
      <ConsumptionDetailBar
        :category="type"
        :transactions="data.transactions"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
  import {
    mockCurrentDateTransactions,
    mockTodayTransactions,
  } from '@/entities/assets/consumption/consumption.mock'
  import type { ConsumptionDateSummary } from '@/entities/assets/consumption/consumption.entity'
  import { formatDateLabel } from '@/shared/utils/formatDateLabel.ts'
  
  const props = defineProps<{ type: 'current' | 'today' }>()
  
  const mockMap: Record<'current' | 'today', ConsumptionDateSummary> = {
    current: mockCurrentDateTransactions,
    today: mockTodayTransactions,
  }
  
  const data = computed(() => mockMap[props.type])
  const date = computed(() => formatDateLabel(data.value.date))
  </script>