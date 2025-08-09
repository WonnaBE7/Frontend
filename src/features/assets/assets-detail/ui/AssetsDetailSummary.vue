<template >
  <Card class="bg-sub-yellow-bg mb-4 sm:mb-6 md:mb-8 border border-sub-yellow-c">
    <Typography type="M_16_120" class="w-full">
      총 {{ label }} 금액
    </Typography>
    <Typography v-if="details"  type="B_22_160" class="w-full">
      {{ details.totalAmount.toLocaleString() }}원
    </Typography>
  </Card>
  
  <Typography type="B_18_120" class="mb-4 sm:mb-6 md:mb-8">보유 계좌</Typography>
  
  <div v-if="details" v-for="account in details.accounts" :key="account.accountNumber" class="mb-4 sm:mb-6 md:mb-8">
    <Card class="border border-gray-150">
      <div class="flex flex-row w-full justify-between items-center">
          <div>
            <Typography type="M_14_140" class="text-gray-800 ">
                {{ account.bankName }}
              </Typography>
              <Typography type="M_14_140" class="text-gray-800 ">
                {{ account.accountName }}
              </Typography>
              <Typography type="M_12_120" class="text-gray-200">
                {{ account.accountNumber }}
              </Typography>
          </div>
          <Typography type="B_16_120">
          {{ account.balance.toLocaleString() }}원
          </Typography>
      </div>
    </Card>
  </div>
</template>
  
<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { categoryLabelMap } from '@/entities/assets/assets.constants'
  import { useAssetCategoryDetailStore } from '@/entities/assets/assets.store'
  
  const route = useRoute()
  const category = route.query.category as "checking" | "savings" | "investment" | "insurance" | "other"
  const label = categoryLabelMap[category] || '자산'
  
  const store = useAssetCategoryDetailStore()
  const details = computed(() => store.getCategoryDetail(category))
</script>