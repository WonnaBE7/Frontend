<template>
    <Card class="bg-white border border-gray-150 p-4">
      <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p">가입 조건</IconLabel>
  
      <div class="mt-4 w-full">
        <Typography type="B_12_120" class="mb-1">{{datas.joinConditions}}</Typography>
        <Typography type="B_12_120" class="mb-1">{{datas.requiredDocuments}}</Typography>
        <ul class="list-disc ml-4">
          <li v-for="item in datas.specialNotes" :key="item">
            <Typography type="M_12_120" class="w-full">{{ item }}</Typography>
          </li>
        </ul>
      </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue';
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { MessageCircle } from 'lucide-vue-next';
  import type { SavingsTermsAndConditions } from '@/entities/recommend/recommend.entity';
  
  const props = defineProps<{
    termsAndConditions: SavingsTermsAndConditions
  }>()
  const datas = props.termsAndConditions;
  </script>