<template>
  <Card class="bg-white border border-gray-150">
    <IconLabel :icon="Eye" class="mb-4">현재 보유 상품</IconLabel>

    <div class="flex flex-row gap-2 items-start w-full">
      <!-- 예적금 -->
      <div class="flex flex-col flex-1">
        <div class="flex flex-row items-center gap-2 mb-2">
          <PiggyBankIcon class="w-4 h-4 text-blue-500" />
          <Typography type="M_14_120" class="text-gray-700">예적금</Typography>
          <Typography v-if="currentProducts" type="B_14_120" class="text-blue-500">
            {{ currentProducts.savings.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts" class="space-y-2 max-h-56 overflow-y-auto pr-1">
          <div
            v-if="currentProducts.savings.count > 0"
            v-for="product in currentProducts.savings.products"
            :key="product.productId"
            @click="openProductDetail(product, 'savings')"
            class="bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ truncateText(product.productName, 9) }}
              </Typography>
              <Typography type="M_12_120" class="text-blue-600 truncate max-w-full">
                연 {{ product.interestRate }}%
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <!-- 카드 -->
      <div class="flex flex-col flex-1">
        <div class="flex items-center gap-2 mb-2">
          <CreditCardIcon class="w-4 h-4 text-green-500" />
          <Typography type="M_14_120" class="text-gray-700">카드</Typography>
          <Typography v-if="currentProducts" type="B_14_120" class="text-green-500">
            {{ currentProducts.cards.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts" class="space-y-2 max-h-56 overflow-y-auto pr-1">
          <div
            v-if="currentProducts.cards.count > 0"
            v-for="card in currentProducts.cards.products"
            :key="card.cardId"
            @click="openProductDetail(card, 'card')"
            class="bg-green-50 p-3 rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ truncateText(card.cardName, 9) }}
              </Typography>
              <Typography type="M_12_120" class="text-green-600 truncate max-w-full">
                {{ card.benefitDescription }}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <!-- 보험 -->
      <div class="flex flex-col flex-1">
        <div class="flex items-center gap-2 mb-2 max-h-56 overflow-y-auto pr-1">
          <ShieldIcon class="w-4 h-4 text-purple-500" />
          <Typography type="M_14_120" class="text-gray-700">보험</Typography>
          <Typography v-if="currentProducts" type="B_14_120" class="text-purple-500">
            {{ currentProducts.insurances.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts" class="space-y-2">
          <div
            v-if="currentProducts.insurances.count > 0"
            v-for="insurance in currentProducts.insurances.products"
            :key="insurance.productId"
            @click="openProductDetail(insurance, 'insurance')"
            class="bg-purple-50 p-3 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ truncateText(insurance.insuranceName, 9) }}
              </Typography>
              <Typography type="M_12_120" class="text-purple-600 truncate max-w-full">
                {{ insurance.coverage }}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 상세 모달들 -->
    <SavingsDetailModal
      :isOpen="isSavingsOpen"
      :data="savingsDetail"
      @close="closeSavings"
    />
    <CardDetailModal
      :isOpen="isCardOpen"
      :data="cardDetail"
      @close="closeCard"
    />
    <InsuranceDetailModal
      :isOpen="isInsuranceOpen"
      :data="insuranceDetail"
      @close="closeInsurance"
    />
  </Card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import {
  Eye,
  PiggyBank as PiggyBankIcon,
  CreditCard as CreditCardIcon,
  Shield as ShieldIcon
} from 'lucide-vue-next'

import SavingsDetailModal from './SavingsDetailModal.vue'
import CardDetailModal from './CardDetailModal.vue'
import InsuranceDetailModal from './InsuranceDetailModal.vue'

import type {
  SavingsDetailResponse,
  CardDetailResponse,
  InsuranceDetailResponse,
  CurrentProductsResponse
} from '@/entities/recommend/recommend.entity'
import { getCurrentSummary, getUserCards, getUserInsurances, getUserSavings } from '@/entities/recommend/recommend.api'

const currentProducts  = ref<CurrentProductsResponse | null>(null)

onMounted(async () => {
  currentProducts.value = await getCurrentSummary()
})

/** 모달 상태 & 데이터(타입별 분리) */
const isSavingsOpen   = ref(false)
const isCardOpen      = ref(false)
const isInsuranceOpen = ref(false)

const savingsDetail   = ref<SavingsDetailResponse | null>(null)
const cardDetail      = ref<CardDetailResponse | null>(null)
const insuranceDetail = ref<InsuranceDetailResponse | null>(null)

/** 유틸 */
function truncateText(text: string | null | undefined, maxLength: number): string {
  if (!text) return ''
  return text.length <= maxLength ? text : text.substring(0, maxLength) + '...'
}

function getProductId(item: any, type: 'savings' | 'card' | 'insurance'): string {
  return type === 'card' ? item.cardId : item.productId
}

/** 상세 열기 */
async function openProductDetail(item: any, type: 'savings' | 'card' | 'insurance') {
  const productId = getProductId(item, type)
  try {
    if (type === 'savings') {
      const detail = await getUserSavings(Number(productId))
      savingsDetail.value = detail
      isSavingsOpen.value = true
    } else if (type === 'card') {
      const detail = await getUserCards(Number(productId))
      cardDetail.value = detail
      isCardOpen.value = true
    } else {
      const detail = await getUserInsurances(Number(productId))
      insuranceDetail.value = detail
      isInsuranceOpen.value = true
    }
  } catch (e) {
    console.error('상세 조회 실패:', e)
  }
}

/** 닫기 */
function closeSavings() {
  isSavingsOpen.value = false
  savingsDetail.value = null
}
function closeCard() {
  isCardOpen.value = false
  cardDetail.value = null
}
function closeInsurance() {
  isInsuranceOpen.value = false
  insuranceDetail.value = null
}
</script>