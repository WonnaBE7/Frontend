<template>
  <div class="mt-4 w-full cursor-pointer" @click="$emit('click', product)">
    <Card class="bg-gray-BGDim !mb-0 hover:bg-gray-50 transition-colors">
      <div class="flex justify-between mb-2 w-full">
        <Typography type="B_16_140">{{ product.productName }}</Typography>
        <Typography type="B_14_120" class="flex items-center gap-2">
          <Star class="fill-sub-yellow-p text-sub-yellow-p w-4" />
          {{ product.score.toFixed(2) }}
        </Typography>
      </div>

      <Typography type="M_12_120" class="text-gray-500 mb-3 w-full">
        {{ product.providerName }}
      </Typography>

      <div class="flex justify-between items-center w-full">
        <div class="flex flex-col gap-1">
          <!-- note 줄바꿈 + 라벨/값 색상 적용 -->
          <div v-for="(line, idx) in noteLines" :key="idx" class="flex flex-row gap-1 w-full">
            <Typography type="M_12_120" class="text-gray-500">
              {{ line.label }}:
            </Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ line.value }}
            </Typography>
          </div>

          <div class="flex flex-row gap-1 w-full">
            <Typography type="M_12_120" class="text-gray-500">보장 한도:</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ product.coverageLimit }}
            </Typography>
          </div>

          <div class="flex flex-row gap-1 w-full">
            <Typography type="M_12_120" class="text-gray-500">금액</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ product.myMoney }}
            </Typography>
          </div>
        </div>

        <ChevronRight />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronRight, Star } from 'lucide-vue-next'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import type { RecommendedInsuranceProduct } from '@/entities/recommend/recommend.entity'

const props = defineProps<{ product: RecommendedInsuranceProduct }>()
defineEmits<(e: 'click', product: RecommendedInsuranceProduct) => void>()

// note를 줄바꿈 + 날짜 변환 + 라벨/값 분리
const noteLines = computed(() => {
  if (!props.product?.note) return []
  return props.product.note.split(',').map(item => {
    const [label, rawValue] = item.split(':').map(s => s.trim())
    let value = rawValue

    // 날짜 포맷 변환 (YYYYMMDD → YYYY-MM-DD)
    if (/^\d{8}$/.test(rawValue)) {
      value = `${rawValue.slice(0, 4)}-${rawValue.slice(4, 6)}-${rawValue.slice(6)}`
    }

    return { label, value }
  })
})
</script>