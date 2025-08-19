<template>
    <Card class="w-full bg-white">
      <IconLabel :icon="Star" iconClass="text-sub-yellow-p" class="mb-6">인기 상품 TOP 3</IconLabel>
      <ul class="w-full space-y-4">
        <li
          v-if="items"
           v-for="(item, index) in items"
          :key="item.productName"
          class="flex justify-between items-center text-sm"
        >
        <div class="flex items-center gap-4 justify-start">
            <div class="flex items-center justify-center w-6 h-6 rounded-full bg-gray-150">
              {{ index + 1 }}
            </div>
            <div>
              <Typography type="B_14_120" class="text-gray-900 mb-2">
                {{ item.productName }}
              </Typography>
              <Typography type="M_12_120" class="text-gray-500">
                - {{ item.description }}
              </Typography>
            </div>
          </div>
          <NoBorderTag color="bg-gray-150">
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
  import { productTypeLabelMap } from '@/entities/board/product/product.constants'
  import { onMounted, ref } from 'vue';
  import type { PopularProduct } from '@/entities/board/product/product.entity';
  import { getCommunityRecommendTop3 } from '@/features/board/main/service/popular-top3.service';

  const props = defineProps<{
    communityId:number
  }>()
  const items = ref<PopularProduct[] | null>(null)
  onMounted( async ()=>{
    items.value = await getCommunityRecommendTop3(props.communityId)
  })
  
</script>
