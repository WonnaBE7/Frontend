<template>
    <div class="w-full cursor-pointer" @click="$emit('click', product)">
      <Card class="bg-gray-BGDim !mb-0 hover:bg-gray-50 transition-colors">
        <div class="flex justify-between mb-2 w-full">
          <Typography type="B_16_140">{{ product.productName }}</Typography>
          <Typography type="B_14_120" class="flex items-center gap-2">
            <Star class="fill-sub-yellow-p text-sub-yellow-p w-4" />
            {{ product.totalScore }}
          </Typography>
        </div>
  
        <Typography type="M_12_120" class="text-gray-500 mb-3 w-full">
          {{ product.providerName }}
        </Typography>
  
        <div class="flex justify-between w-full">
          <div class="flex flex-col items-center gap-1">
            <div class="flex flex-row gap-1 w-full">
              <Typography type="M_12_120" class="text-gray-500">보장 유형:</Typography>
              <Typography type="M_12_120" class="text-sub-green-p">
                {{ product.coverageType }}
              </Typography>
            </div>
            <div class="flex flex-row gap-1 w-full">
              <Typography type="M_12_120" class="text-gray-500">보장 한도:</Typography>
              <Typography type="M_12_120" class="text-sub-green-p">
                {{ product.coverageLimit }}
              </Typography>
            </div>
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
  import type { RecommendedInsuranceProduct } from '@/entities/recommend/recommend.entity'
  
  defineProps<{ product: RecommendedInsuranceProduct }>()
  defineEmits<(e: 'click', product: RecommendedInsuranceProduct) => void>()
  </script>