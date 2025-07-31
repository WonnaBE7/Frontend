<template>
    <Card class="bg-white w-full border border-gray-150">
      <Typography type="B_18_120" class="w-full mb-4 sm:mb-6 md:mb-8">카테고리별 소비 내역</Typography>
      <ul class="space-y-4 mb-4 sm:space-y-6 md:space-y-8 w-full">
        <li 
          v-for="item in store.categoryData" 
          :key="item.consumptionCategory" 
          @click="goToDetail(item.consumptionCategory)"
        >
          <div class="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
            <div class="flex items-center gap-2 sm:gap-3 md:gap-4">
              <span
                class="w-2.5 sm:w-4 md:w-5.5 h-2.5 sm:h-4 md:h-5.5 rounded-full"
                :class="`${colorMap[item.consumptionCategory]}`"
              ></span>
              <Typography type="M_14_140">{{ categoryLabelMap[item.consumptionCategory] }}</Typography>
            </div>
            <div class="text-right">
              <Typography type="B_14_160">{{ item.amount }}원</Typography>
              <Typography type ="M_12_140"
                :class="item.diffFromLastMonth.startsWith('+') ? 'text-sub-red-p' : 'text-sub-aqua-p'"
              >
                {{
                  store.selectedTab === 'today' ? '전일 대비' : '지난달 대비'
                }}
              </Typography>
              <Typography type ="M_12_140"
                :class="item.diffFromLastMonth.startsWith('+') ? 'text-sub-red-p' : 'text-sub-aqua-p'"
              >
              {{ item.diffFromLastMonth }}원
              </Typography>
            </div>
          </div>
  
          <div class="h-2 sm:h-3 md:h-4 bg-gray-BGDim rounded-full mb-2 sm:mb-3 md:mb-4">
            <div
              class="h-full rounded-full"
              :class="`${colorMap[item.consumptionCategory]}`"
              :style="{
                width: item.percentage + '%',
              }"
            ></div>
          </div>
  
          <Typography type="M_12_140" class="text-gray-600 mt-1 sm:mt-2 md:mt-3">
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