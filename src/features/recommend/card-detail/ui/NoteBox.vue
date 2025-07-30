<template>
    <Card class="bg-white border border-gray-150 p-4">
      <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p">카드 노트</IconLabel>
  
      <div class="mt-4 w-full">
        <Typography type="B_12_120" class="mb-1">{{datas.category}}</Typography>
        <Typography type="B_12_120" class="mb-1">{{datas.previousMonthSpendig}}</Typography>
        <Typography type="B_12_120" class="mb-1">{{datas.usage}}</Typography>
        <Typography type="B_12_120" class="mb-1">{{datas.annualFee}}</Typography>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue';
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { MessageCircle } from 'lucide-vue-next';
  import type { CardNote } from '@/entities/recommend/recommend.entity';
  
  const props = defineProps<{
    note: CardNote
  }>()
  const datas = props.note;
  </script>