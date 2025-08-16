<template>
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="ChartColumn" class="w-full">나의 금융 성향</IconLabel>
  
      <FinTypeColCard
        class="w-1/2"
        :label="result?.personaName ?? '-'"
        :descript="descript?.description ?? ''"
      />
      <div class="w-1/2 bg-gradient-to-br from-sub-orange-p to-sub-yellow-p rounded-3xl px-4 py-2 mt-3 flex items-center justify-center">
        <Typography type="B_16_120" class="text-white">
          유사도 {{ similarityText }}
        </Typography>
      </div>
    </Card>
  
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="ChartSpline" class="w-full mb-4">세부 점수</IconLabel>
  
      <div class="w-full grid grid-cols-2 gap-3">
        <Card class="bg-gray-BGDim gap-1 p-3 !mb-0">
            <Typography type="M_12_120" class="text-gray-500">금융활동성</Typography>
            <Typography type="B_14_120" class="mb-2">{{ activityPercent }}점</Typography>
            <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
                    :style="{ width: activityPercent + '%' }"></div>
            </div>
        </Card>

        <Card class="bg-gray-BGDim gap-1 p-3 !mb-0">
            <Typography type="M_12_120" class="text-gray-500">소비패턴</Typography>
            <Typography type="B_14_120" class="mb-2">{{ spendingPercent }}점</Typography>
            <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
                    :style="{ width: spendingPercent + '%' }"></div>
            </div>
        </Card>
  
        <Card class="bg-gray-BGDim gap-1 p-3 !mb-0">
            <Typography type="M_12_120" class="text-gray-500">계획방식</Typography>
            <Typography type="B_14_120" class="mb-2">{{ planningPercent }}점</Typography>
            <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
                    :style="{ width: planningPercent + '%' }"></div>
            </div>
        </Card>

        <Card class="bg-gray-BGDim gap-1 p-3 !mb-0">
            <Typography type="M_12_120" class="text-gray-500">리스크성향</Typography>
            <Typography type="B_14_120" class="mb-2">{{ riskPercent }}점</Typography>
            <div class="w-full h-2 bg-gray-150 rounded-full overflow-hidden">
                <div class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
                    :style="{ width: riskPercent + '%' }"></div>
            </div>
        </Card>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { useDiagnosisStore } from '@/entities/user/user.store'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { computed, onMounted } from 'vue'
  import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
  import { financialTendencyList } from '@/shared/constants/finTypes.constants'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import { ChartColumn, ChartSpline } from 'lucide-vue-next'
  
  const store = useDiagnosisStore()
  onMounted(() => store.hydrate())
  
  const result = computed(() => store.result)
  const descript = computed(() =>
    financialTendencyList.find(f => f.name === result.value?.personaName)
  )
  
  function toPercentFloor1(v?: number) {
    if (typeof v !== 'number' || Number.isNaN(v)) return 0
    const pct = Math.floor(v * 1000) / 10 
    return Math.min(pct, 100)
  }
  
  const similarityPercent = computed(() => toPercentFloor1(result.value?.similarity))
  const similarityText = computed(() => `${similarityPercent.value.toFixed(1)}%`)
  
  const activityPercent  = computed(() => toPercentFloor1(result.value?.activityScore))
  const spendingPercent  = computed(() => toPercentFloor1(result.value?.spendingScore))
  const planningPercent  = computed(() => toPercentFloor1(result.value?.planningScore))
  const riskPercent      = computed(() => toPercentFloor1(result.value?.riskScore))
  
  </script>