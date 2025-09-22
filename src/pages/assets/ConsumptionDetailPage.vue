<template>
  <AppLayout>
    <template v-if="category && (type === 'current' || type === 'today')">
      <ConsumptionDetailCategory :category="category" :type="type" />
    </template>
    <template v-else-if="type === 'current' || type === 'today'">
      <ConsumptionDetailDate :type="type" />
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from '@/shared/layout/AppLayout.vue'
import ConsumptionDetailCategory from '@/features/assets/consumption-detail/ui/ConsumptionDetailCategory.vue'
import ConsumptionDetailDate from '@/features/assets/consumption-detail/ui/ConsumptionDetailDate.vue'
import { useTransactionCategoryDetailStore, useTransactionDetailStore, type ConsumptionCategoryKey } from '@/entities/assets/consumption/consumption.store'
import { getCodefAssets } from '@/entities/assets/assets.api'

const consumptionCategoryStoore = useTransactionCategoryDetailStore()
const consumptionStoore = useTransactionDetailStore()

const route = useRoute()
const category = computed(() => route.query.category as ConsumptionCategoryKey || '') 
const type = computed(() => route.query.type as 'current' | 'today' | undefined)

onMounted(async () => {
  await getCodefAssets()
  if(category.value){
    await consumptionCategoryStoore.fetchAllTodayDetails(category.value)
    await consumptionCategoryStoore.fetchAllMonthlyDetails(category.value)
  }
  await consumptionStoore.fetchMonthlyTransactionDetail()
  await consumptionStoore.fetchTodayTransactionDetail()

})
</script>