<template>
    <AppLayout>
      <Card
        v-if="detail"
        class="bg-sub-yellow-bg mb-4 sm:mb-6 md:mb-8 border border-sub-yellow-c"
      >
        <Typography type="B_18_120" class="mb-2 w-full">{{ detail.bankName }}</Typography>
        <Typography type="M_14_140" class="mb-1 w-full">{{ detail.accountName }}</Typography>
        <Typography type="M_12_120" class="text-gray-400 w-full">{{ detail.accountNumber }}</Typography>
      </Card>
  
      <Typography type="B_18_120" class="mb-4 sm:mb-6 md:mb-8">계좌 거래 내역</Typography>
  
      <div
        v-if="detail?.transactions?.length"
        v-for="(tx, idx) in detail.transactions"
        :key="idx"
        class="mb-4 sm:mb-6 md:mb-8"
      >
        <Card class="border border-gray-150">
          <div class="flex flex-row w-full justify-between items-center">
            <div>
              <Typography type="M_14_140" class="text-gray-800">
                {{ tx.transactionName }}
              </Typography>
              <Typography type="M_14_140" class="text-gray-800">
                {{ tx.transactionDate }}
              </Typography>
              <Typography type="M_12_120" class="text-gray-200">
                {{ tx.transactionTime }}
              </Typography>
            </div>
            <Typography 
              type="B_16_120"
              :class="tx.amount < 0 ? 'text-sub-red-p' : 'text-sub-aqua-p'"
            >
              {{ formatAmount(tx.amount) }}원
            </Typography>
          </div>
        </Card>
      </div>
  
      <Card v-else>
        <div class="text-gray-500 py-6">계좌 정보를 불러오는 중...</div>
      </Card>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { getAccountDetail, getCodefAssets, type AccountDetailResponse } from '@/entities/assets/assets.api'
  
  const route = useRoute()
  const detail = ref<AccountDetailResponse | null>(null)
  
  function formatAmount(v: number) {
    const sign = v < 0 ? '-' : '+'
    return `${sign}${Math.abs(v).toLocaleString()}`
  }
  
  onMounted(async () => {
    const accountIdParam = route.params.accountId
    const accountId = Number(accountIdParam)
    console.log('가져온 params',route.params.accountId)

    if (!accountId || Number.isNaN(accountId)) {
      console.error('잘못된 accountId:', accountIdParam)
      return
    }
  
    await getCodefAssets()
    try {
      detail.value = await getAccountDetail(accountId)
      console.log('계좌 상세정보',detail.value)
    } catch (e) {
      console.error('계좌 상세 로드 실패:', e)
    }

  })
  </script>