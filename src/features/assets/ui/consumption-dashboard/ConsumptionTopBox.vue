<template>
  <Card class="bg-white">
    <ConsumptionTabs
      :tabs="store.tabs"
      :selectedTab="store.selectedTab"
      @update:selectedTab="store.selectedTab = $event"
    />

    <MonthNavigator
      :displayedLabel="getLabelText()"
      :baseDate="store.baseDate"
      :disableNavigation="disableNavigation()"
      @prev="store.goPrevMonth"
      @next="store.goNextMonth"
    />

    <ConsumptionInfoDisplay
      :amount="store.displayedAmount"
      :date="store.displayedDate"
      :type="store.selectedTab"
    />
  </Card>
</template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue'
  import ConsumptionTabs from './CunsumptionTabs.vue'
  import MonthNavigator from './MonthNavigator.vue'
  import ConsumptionInfoDisplay from './ConsumptionInfoDisplay.vue'
  import { useConsumptionStore } from '@/entities/assets/consumption/consumption.store.ts'

  const store = useConsumptionStore()


const getLabelText = () => {
  switch (store.selectedTab) {
    case 'estimated':
      return '예상 월 소비'
    case 'today':
      return '오늘의 소비'
    default:
      return store.displayedLabel
  }
}

const disableNavigation = () => store.selectedTab !== 'current'

  </script>