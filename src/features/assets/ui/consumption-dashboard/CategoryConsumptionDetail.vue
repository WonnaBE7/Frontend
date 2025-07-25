<template>
    <Card class="bg-white w-full">
      <ul class="space-y-4 w-full">
        <li v-for="item in store.categoryData" :key="item.consumptionCategory">
          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="`bg-[var(--${colorMap[item.consumptionCategory]})]`"
              ></span>
              <span>{{ categoryLabelMap[item.consumptionCategory] }}</span>
            </div>
            <div class="text-right">
              <strong>{{ item.amount }}원</strong>
              <div
                :class="item.diffFromLastMonth.startsWith('+') ? 'text-red-500' : 'text-blue-500'"
              >
                {{
                  store.selectedTab === 'today' ? '전일 대비' : '지난달 대비'
                }}
                {{ item.diffFromLastMonth }}원
              </div>
            </div>
          </div>
  
          <div class="h-1 bg-gray-200 mt-1">
            <div
              class="h-full"
              :style="{
                width: item.percentage + '%',
                backgroundColor: `var(--${colorMap[item.consumptionCategory]})`
              }"
            ></div>
          </div>
  
          <Typography type="small-2" class="text-gray-600 mt-1">
            {{ item.percentage.toFixed(2) }}%
          </Typography>
        </li>
      </ul>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { useConsumptionStore } from '@/entities/assets/consumption/consumption.store.ts'
  import { colorMap, categoryLabelMap } from '@/entities/assets/assets.constants'
  import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
  
  const store = useConsumptionStore()
  </script>