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
import { useTransactionDetailStore } from '@/entities/consumption/consumption.store'

const props = defineProps<{ type: 'current' | 'today' }>()
const data = ref<MonthlyTransactionDetail | TodayTransactionDetail | null>(null)

const store = useTransactionDetailStore()
onMounted(() => {
  if (props.type === 'today') {
    data.value = store.todayTransactionDetail
  } else {
    data.value = store.monthlyTransactionDetail
  }
})
</script>