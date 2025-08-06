<template>
    <Card class="bg-white border border-gray-150 p-4">
      <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p">주요 특징</IconLabel>
  
      <div class="mt-4 w-full flex justify-between">
        <Typography type="B_12_120">최대 만기 기간</Typography>
        <Typography type="M_12_120">{{ data.maxJoinPeroid }}</Typography>
      </div>
      <div class="mt-4 mb-2 w-full flex justify-between">
        <Typography type="B_12_120">{{data.title}}</Typography>
      </div>
      <ul class="w-full list-disc pl-4">
        <li v-for="data in data.content" :key="data">
          <Typography type="M_12_120" class="w-full mt-1">{{ data }}</Typography>
        </li>
      </ul>
      
    </Card>
  </template>
  
  <script setup lang="ts">

  import type { MainFeature } from '@/entities/recommend/recommend.entity';
  import Card from '@/shared/ui/atoms/Card.vue';
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { MessageCircle } from 'lucide-vue-next';
  
  const props = defineProps<{
    maturityInfo : MainFeature
  }>()

  const data = props.maturityInfo
  </script>