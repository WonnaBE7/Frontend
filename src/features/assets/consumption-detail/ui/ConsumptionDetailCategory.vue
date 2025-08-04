<template>
    <Typography v-if="data" type="B_18_120" class="mb-4 sm:mb-6">
      {{ categoryLabelMap[data.consumptionCategory] }} 상세 내역
    </Typography>
    <ConsumptionDetailBar
      v-if="data"
      :category="data.consumptionCategory"
      :transactions="data.transactions"
    />
  </template>
  
 <script setup lang="ts">
import { computed} from 'vue'
import { categoryLabelMap } from '@/entities/assets/assets.constants'
import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { useTransactionCategoryDetailStore, type ConsumptionCategoryKey } from '@/entities/consumption/consumption.store';

const props = defineProps<{
  category: ConsumptionCategoryKey
  type: 'current' | 'today'
}>()

const store = useTransactionCategoryDetailStore()
const data = computed(() => {
  return props.type === 'today'
    ? store.getTodayDetail(props.category)
    : store.getMonthlyDetail(props.category)
})


</script>