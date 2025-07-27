<template>
  <Card class="bg-sub-yellow-bg border border-sub-yellow-c">
    <div class="w-full">
      <div class="flex flex-row w-full justify-between">
        <Typography type="M_16_120" class="w-full mb-2 text-gray-400">
          {{ type === '자산' ? '총 자산 현황' : '총 소비 현황' }}
        </Typography>

        <IconLabel
          :icon="TrendingUp"
          class="w-full flex justify-end"
          :class="rateColorClass"
        >
          {{ meta.changeRate }}%
        </IconLabel>
      </div>

      <Typography type="B_22_160" class="mb-2">
        {{ formattedAmount }}
      </Typography>

      <Typography type="M_12_140" class="text-gray-400">
        지난달 대비 {{meta.changeAmount }}원
      </Typography>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { AssetSummaryMeta, ConsumptionSummaryMeta } from '@/entities/assets/assets.entity'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { TrendingUp } from 'lucide-vue-next'
import { computed } from 'vue'

type SummaryType = '자산' | '소비'

const props = defineProps<{
  meta: AssetSummaryMeta | ConsumptionSummaryMeta
  type: SummaryType
}>()

// 변화율 색상 분기 처리
const rateColorClass = computed(() => {
  if (props.meta.changeRate.startsWith('+')) return 'text-blue-500'
  if (props.meta.changeRate.startsWith('-')) return 'text-red-500'
  return 'text-gray-500'
})

// 총 금액 (자산: totalAmount, 소비: monthlyConsumption)
const formattedAmount = computed(() => {
  const amountStr =
    props.type === '자산'
      ? (props.meta as AssetSummaryMeta).totalAmount
      : (props.meta as ConsumptionSummaryMeta).monthlyConsumption
  return `${amountStr}원`
})

</script>