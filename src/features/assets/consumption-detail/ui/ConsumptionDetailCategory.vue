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
import { onMounted, ref, watchEffect } from 'vue'
import { categoryLabelMap } from '@/entities/assets/assets.constants'
import ConsumptionDetailBar from './ConsumptionDetailBar.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import type { ConsumptionCategoryDetail } from '@/entities/consumption/consumption.entity';
import { getMonthlyCategoryDetail, getTodayCategoryDetail } from '../service/\bconsumption-detail.service';

const props = defineProps<{
  category: string
  type: 'current' | 'today'
}>()

const data = ref<ConsumptionCategoryDetail | null>(null)

const fetchDetail = async () => {
  if (props.type === 'today') {
    data.value = await getTodayCategoryDetail(props.category)
  } else {
    data.value = await getMonthlyCategoryDetail(props.category)
  }
}
onMounted(
  fetchDetail
)
watchEffect(() => {
  fetchDetail()
})
</script>