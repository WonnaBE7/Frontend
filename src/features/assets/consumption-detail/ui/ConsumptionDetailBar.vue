<template>
  <div class="space-y-3 sm:space-y-5">
    <Card
      v-for="tx in transactions"
      :key="tx.transactionName + tx.transactionTime"
      class="border border-gray-150 bg-white"
    >
      <div class="flex items-center gap-3 sm:gap-4 w-full justify-between">
        <div class="flex flex-row mb-1 sm:mb-2">
          <div class="bg-gray-BGDim w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 flex items-center justify-center rounded-full mr-2">
            <component :is="iconMap[category] ?? iconMap.default" class="w-5 h-5 sm:w-7 sm:h-7 text-gray-500" />
          </div>
          <div>
            <Typography type="M_16_140" class="text-gray-900 mb-2 sm:mb-3 md:mb-4">
              {{ tx.transactionName }}
            </Typography>
            <Typography type="M_12_120" class="text-gray-500">
              <span>{{ formatTime(tx.transactionDate, tx.transactionTime) }}</span>
              <span class="mx-1">•</span>
              <span>{{ tx.accountName }} 결제</span>
            </Typography>
          </div>
        </div>

        <Typography type="B_16_140" class="text-sub-red-p">
          {{ tx.amount }}원
        </Typography>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { Utensils, Bus, Wallet, CircleDollarSign, CalendarCheck } from 'lucide-vue-next'

import type { ConsumptionCategory, ConsumptionTransaction } from '@/entities/assets/consumption/consumption.entity'

type BarCategory = ConsumptionCategory | 'today' | 'current'

defineProps<{
  category: BarCategory
  transactions: ConsumptionTransaction[]
}>()

const iconMap: Record<string, any> = {
  food: Utensils,
  shopping: Wallet,
  transport: Bus,
  financial: CircleDollarSign,
  other: CalendarCheck,
  current: CalendarCheck,
  today: CalendarCheck,
  default: Wallet,
}

function formatTime(date: string, time: string): string {
  const today = new Date().toISOString().split('T')[0]
  if (date === today) return `${time}`

  const yester = new Date()
  yester.setDate(yester.getDate() - 1)
  const yesterStr = yester.toISOString().split('T')[0]
  if (date === yesterStr) return `어제 ${time}`

  return `${date} ${time}`
}
</script>