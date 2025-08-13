<template>
    <Card class="bg-white border border-gray-150 p-4">
      <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p">주요 특징</IconLabel>
  
      <div class="mt-4 w-full">
        <Typography type="B_12_120" class="mb-1">{{ props.maturityInfo.coverageDesc }}</Typography>
        <Typography type="M_12_120" class="w-full">{{ props.maturityInfo.note }}</Typography>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import type { MaturityInfo } from '@/entities/recommend/recommend.entity';
  import Card from '@/shared/ui/atoms/Card.vue';
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { MessageCircle } from 'lucide-vue-next';
  
    const props = defineProps<{
      maturityInfo : MaturityInfo
    }>()

  </script>