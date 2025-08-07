<template>
  <div class="space-y-3 sm:space-y-5">
    <ConsumptionDetailBar
      v-if="data"
      :category="type"
      :transactions="data.transactions"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
  import type { MonthlyTransactionDetail, TodayTransactionDetail } from '@/entities/consumption/consumption.entity'
  import { useTransactionDetailStore } from '@/entities/consumption/consumption.store'

  const props = defineProps<{ type: 'current' | 'today' }>()
  const store = useTransactionDetailStore()

  const data = computed<MonthlyTransactionDetail | TodayTransactionDetail | null>(() => {
    return props.type === 'today'
      ? store.todayTransactionDetail
      : store.monthlyTransactionDetail
  })
</script>