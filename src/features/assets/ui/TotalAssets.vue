<template>
  <Card class="bg-sub-yellow-bg border border-sub-yellow-c">
    <div class="w-full">
      <div class="flex flex-row w-full justify-between">
        <Typography type="M_16_120" class="w-full mb-2 sm:mb-3 text-gray-400">
          {{ type === '자산' ? '총 자산 현황' : '총 소비 현황' }}
        </Typography>

        <IconLabel
          :icon="trendIcon"
          class="w-full flex justify-end"
          :class="rateColorClass"
        >
          {{ formattedChangeRate }}%
        </IconLabel>
      </div>

      <Typography type="B_22_160" class="mb-2 sm:mb-3">
        {{ formattedAmount }}
      </Typography>

      <Typography type="M_12_140" class="text-gray-400 mb-2 sm:mb-3">
        지난달 대비 {{ formattedChangeAmount }}원
      </Typography>

      <Typography v-if="route.path.startsWith('/assets')" type="M_10_120" class="flex flex-row items-center gap-2 text-sub-orange-s">
         <component :is="MessageCircleWarning" class="w-4"/> 보험은 총자산에 들어가지 않습니다
      </Typography> 
    </div>
  </Card>
</template>

<script setup lang="ts">
  import type { ConsumptionSummaryMeta } from '@/entities/consumption/consumption.entity'
  import type { AssetSummaryMeta } from '@/entities/assets/assets.entity'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import { TrendingUp, TrendingDown, MessageCircleWarning } from 'lucide-vue-next'
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'

  type SummaryType = '자산' | '소비'

  const route = useRoute()

  const props = defineProps<{
    meta: AssetSummaryMeta | ConsumptionSummaryMeta
    type: SummaryType
  }>()

  const rateColorClass = computed(() => {
    if (props.meta.changeRate > 0) return 'text-sub-aqua-p'
    if (props.meta.changeRate < 0) return 'text-sub-red-p'
    return 'text-gray-500'
  })

  const trendIcon = computed(() => {
    return props.meta.changeRate >= 0 ? TrendingUp : TrendingDown
  })

  const formattedChangeRate = computed(() => {
    const rate = props.meta.changeRate
    if (rate > 0) return `+${rate}`
    return rate.toString()
  })

  const formattedChangeAmount = computed(() => {
    const amount = props.meta.changeAmount
    const formattedNumber = Math.abs(amount).toLocaleString()
    
    if (amount > 0) return `+${formattedNumber}`
    if (amount < 0) return `-${formattedNumber}`
    return formattedNumber
  })

  const formattedAmount = computed(() => {
    const amount =
      props.type === '자산'
        ? (props.meta as AssetSummaryMeta).totalAmount
        : (props.meta as ConsumptionSummaryMeta).monthlyConsumption
    
    return `${amount.toLocaleString()}원`
  })
</script>