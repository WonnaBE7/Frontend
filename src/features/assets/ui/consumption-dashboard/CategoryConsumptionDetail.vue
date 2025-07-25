<template>
    <Card class="bg-white w-full">
      <Typography type="B_18_120" class="w-full mb-4">카테고리별 소비 내역</Typography>
      <ul class="space-y-4 w-full">
        <li 
          v-for="item in store.categoryData" 
          :key="item.consumptionCategory" 
          @click="goToDetail(item.consumptionCategory)"
        >
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center gap-2">
              <span
                class="w-2.5 h-2.5 rounded-full"
                :class="`${colorMap[item.consumptionCategory]}`"
              ></span>
              <Typography type="M_14_140">{{ categoryLabelMap[item.consumptionCategory] }}</Typography>
            </div>
            <div class="text-right">
              <Typography type="B_14_160">{{ item.amount }}원</Typography>
              <Typography type ="M_12_140"
                :class="item.diffFromLastMonth.startsWith('+') ? 'text-red-500' : 'text-blue-500'"
              >
                {{
                  store.selectedTab === 'today' ? '전일 대비' : '지난달 대비'
                }}
              </Typography>
              <Typography type ="M_12_140"
                :class="item.diffFromLastMonth.startsWith('+') ? 'text-red-500' : 'text-blue-500'"
              >
              {{ item.diffFromLastMonth }}원
              </Typography>
            </div>
          </div>
  
          <div class="h-2 bg-gray-200 rounded-full mb-2">
            <div
              class="h-full rounded-full"
              :class="`${colorMap[item.consumptionCategory]}`"
              :style="{
                width: item.percentage + '%',
              }"
            ></div>
          </div>
  
          <Typography type="M_12_140" class="text-gray-600 mt-1">
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
import { useRouter } from 'vue-router'

const store = useConsumptionStore()
const router = useRouter()

function goToDetail(category: string) {
  if (store.selectedTab === 'estimated') return // 이동 막기

  router.push({
  path: '/assets/consumption/detail',
  query: {
    category: category,
    label: categoryLabelMap[category],
    type: store.selectedTab === 'today' ? 'today' : 'current',
  },
})
}
</script>