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
import { ref, onMounted } from 'vue'
import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
import type { MonthlyTransactionDetail, TodayTransactionDetail } from '@/entities/consumption/consumption.entity'
import { getMonthlyTransactionDetail, getTodayTransactionDetail } from '../service/\bconsumption-detail.service'
import { useConsumptionStore } from '@/entities/consumption/consumption.store'

const props = defineProps<{ type: 'current' | 'today' }>()

const store = useConsumptionStore()
const data = ref<MonthlyTransactionDetail | TodayTransactionDetail | null>(null)

onMounted(async () => {
  if (props.type === 'today') {
    const res = await getTodayTransactionDetail()
    data.value = {
      date: res.date,
      transactions: res.transactions,
    }
  } else {
    const yearMonth = store.baseDate.format('YYYY-MM')
    const res = await getMonthlyTransactionDetail(yearMonth)
    data.value = {
      date: res.yearMonth,
      transactions: res.transactions,
    }
  }
})
</script>