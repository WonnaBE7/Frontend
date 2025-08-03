<template>
    <div class="w-full cursor-pointer" @click="$emit('click', product)">
      <Card class="bg-gray-BGDim !mb-0 hover:bg-gray-50 transition-colors">
        <div class="flex flex-row justify-between mb-2  w-full">
          <Typography type="B_16_140">{{ product.cardName }}</Typography>
          <Typography type="B_14_120" class="flex flex-row items-center gap-2">
            <Star class="fill-sub-yellow-p text-sub-yellow-p w-4" />
            {{ product.matchScore }}
          </Typography>
        </div>
  
        <div class="flex flex-row items-center w-full gap-2 mb-2">
            <Typography type="M_12_120" class="text-gray-500 mb-1">
              {{ product.cardCompany }}
            </Typography>
            <Typography type="M_10_120" class="justify-start mb-1  text-sub-yellow-p bg-sub-yellow-bg px-2 py-1 rounded">
              {{ product.cardType }}
            </Typography>
        </div>

        <div class="flex flex-row gap-1 md:gap-2 w-full">
          <Typography type="M_12_120" class="text-gray-500">혜택:</Typography>
          <Typography type="M_12_120" class="text-sub-green-p">
            {{ product.mainBenefit }}
          </Typography>
        </div>
        <div class="flex justify-between w-full">
          <div class="flex items-center gap-1">
            <Typography type="M_12_120" class="text-gray-500">국내 연회비:</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ product.annualFeeDomestic }}
            </Typography>
            <Typography type="M_12_120" class="text-gray-500 ml-2">해외 연회비:</Typography>
            <Typography type="M_12_120" class="text-sub-green-p">
              {{ product.annualFeeOverSeas }}
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
  import type { RecommendedCardProduct } from '@/entities/recommend/recommend.entity'
  
  defineProps<{ product: RecommendedCardProduct }>()
  defineEmits<{ (e: 'click', product: RecommendedCardProduct): void }>()
  </script>