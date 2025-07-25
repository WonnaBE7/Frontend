<template>
    <Card class="bg-white">
      <ConsumptionTabs
        :tabs="tabs"
        :selectedTab="selectedTab"
        @update:selectedTab="selectedTab = $event"
      />
  
      <MonthNavigator
        :displayedLabel="displayedLabel"
        :baseDate="baseDate"
        @prev="goPrevMonth"
        @next="goNextMonth"
      />
  
      <ConsumptionInfoDisplay
        :amount="displayedAmount"
        :date="displayedDate"
      />
    </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue'
  import ConsumptionTabs from './CunsumptionTabs.vue'
  import MonthNavigator from './MonthNavigator.vue'
  import ConsumptionInfoDisplay from './ConsumptionInfoDisplay.vue'
  import { useConsumptionSummary } from '../../service/useConsumptionSummary'
  
  const {
    tabs,
    selectedTab,
    baseDate,
    displayedAmount,
    displayedDate,
    displayedLabel,
    goPrevMonth,
    goNextMonth
  } = useConsumptionSummary()
  </script>