<template>
    <Card class="bg-sub-yellow-bg mb-6">
      <Typography type="M_16_120" class="w-full">
        총 {{ label }} 금액
      </Typography>
      <Typography type="B_22_160" class="w-full">
        {{ details.totalAmount }}
      </Typography>
    </Card>
  
    <Typography type="B_18_120" class="mb-3">보유 계좌</Typography>
  
    <div v-for="account in details.accounts" :key="account.accountNumber" class="mb-3">
      <Card class="border border-gray-150">
        <div class="flex flex-row w-full justify-between items-center">
            <div>
                <Typography type="M_14_140" class="text-gray-800">
                {{ account.bankName }}
                </Typography>
                <Typography type="M_12_120" class="text-gray-200">
                {{ account.accountNumber }}
                </Typography>
            </div>
            <Typography type="B_16_120">
            {{ account.balance }}원
            </Typography>
        </div>
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue'
  import { useRoute } from 'vue-router'
  import { mockCategoryDetailMap } from '@/entities/assets/assets.mock'
  import { categoryLabelMap } from '@/entities/assets/assets.constants'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  
  const route = useRoute()
  const category = route.query.category as string
  const label = categoryLabelMap[category] || '자산'
  const details = mockCategoryDetailMap[category] || { totalAmount: '0', accounts: [] }

  </script>