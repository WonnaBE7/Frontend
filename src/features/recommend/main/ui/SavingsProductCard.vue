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
        <div class="flex flex-row items-center w-full gap-2 mb-2">
            <Typography type="M_12_120" class="text-gray-500 mb-1">
              {{ product.bankName }}
            </Typography>
        </div>
  
        <div class="flex justify-between w-full">
          <div class="flex items-center gap-1">
            <Typography type="M_12_120" class="text-gray-500">금리:</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              연 {{ product.baseRate.toFixed(2) }}%
            </Typography>
            <Typography type="M_12_120" class="text-gray-500 ml-2">최대:</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ product.maxRate.toFixed(2) }}%
            </Typography>
          </div>
          <ChevronRight />
        </div>
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ChevronRight, Star } from 'lucide-vue-next'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import type { RecommendedSavingsProduct } from '@/entities/recommend/recommend.entity'
  
  defineProps<{ product: RecommendedSavingsProduct }>()
  defineEmits<(e: 'click', product: RecommendedSavingsProduct) => void>()
  </script>