<template>
    <Card class="w-full bg-white">
      <IconLabel :icon="Star" iconClass="text-sub-yellow-p" class="mb-4">인기 상품 TOP 3</IconLabel>
      <ul class="w-full space-y-4">
        <li
          v-for="item in items"
          :key="item.productName"
          class="flex justify-between items-center text-sm"
        >
          <div class="flex items-start gap-2 justify-center">
            <Typography type="B_14_120" class="text-gray-900">{{ item.productId}}</Typography>
            <div>
              <Typography type="B_14_120" class="text-gray-900 mb-2">{{ item.productName }}</Typography>
              <Typography type="M_12_120" class="text-gray-500"> - {{ item.description }}</Typography>
            </div>
          </div>
          <NoBorderTag color="bg-gray-BGDim">
            {{ productTypeLabelMap[item.type] }}
          </NoBorderTag>
        </li>
      </ul>
    </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue';
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { Star } from 'lucide-vue-next';
  import {mockPopularProducts} from '@/entities/board/product/product.mock'
  import { productTypeLabelMap } from '@/entities/board/product/product.constants'

  const items = mockPopularProducts
  
  </script>
