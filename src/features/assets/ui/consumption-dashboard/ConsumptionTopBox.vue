<template>
    <Card class="bg-white">
      <div class="w-full bg-gray-50 flex grid grid-cols-3 gap-2 p-1">
          <Button
            v-for="tab in tabs"
            :key="tab.key"
            @click="selectedTab = tab.key"
            :class="[
                selectedTab === tab.key
                    ? 'bg-white text-gray-900'
                    : '!bg-gray-50 text-gray-400'
            ]"
          >
            {{ tab.label }}
          </Button>
    </div>
    
        <div class="text-center">
            <Typography type="B_22_160" class="text-black mb-1">
                {{ displayedAmount }}
            </Typography>
            <Typography type="M_12_120" class="text-gray-400">
                {{ displayedDate }} 기준
            </Typography>
        </div>
    </Card>
  </template>
  
  <script setup lang="ts">
    import Card from '@/shared/ui/atoms/Card.vue'
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import { ref, computed } from 'vue'
    import { mockMonthlyConsumptionSummary, mockEstimatedAndTodayConsumption } from '@/entities/assets/consumption/consumption.mock'
    import Button from '@/shared/ui/atoms/Button.vue'
  
    const tabs = [
        { key: 'current', label: '이번달 소비' },
        { key: 'estimated', label: '예상 월 소비' },
        { key: 'today', label: '오늘의 소비' }
    ] as const
    
    const selectedTab = ref<'current' | 'estimated' | 'today'>('current') 
    
    const displayedAmount = computed(() => {
        switch (selectedTab.value) {
        case 'current':
            return `${mockMonthlyConsumptionSummary.monthToDateConsumption.amount}원`
        case 'estimated':
            return `${mockEstimatedAndTodayConsumption.estimatedMonthlyConsumption.amount}원`
        case 'today':
            return `${mockEstimatedAndTodayConsumption.todayConsumption.amount}원`
        }
    })
    
    const displayedDate = computed(() => {
        switch (selectedTab.value) {
        case 'current':
            return mockMonthlyConsumptionSummary.monthToDateConsumption.calculatedUntil
        case 'estimated':
            return mockEstimatedAndTodayConsumption.estimatedMonthlyConsumption.calculatedUntil
        case 'today':
            return mockEstimatedAndTodayConsumption.todayConsumption.calculatedDate
        }
    })
  </script>