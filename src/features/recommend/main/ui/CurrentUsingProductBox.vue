<template>
  <Card class="bg-white border border-gray-150">
    <IconLabel :icon="Eye" class="mb-4">현재 보유 상품</IconLabel>

    <div class="flex flex-row gap-4 items-start">
      <!-- 예적금 -->
      <div class="flex flex-col flex-1">
        <div class="flex flex-row items-center gap-2 mb-2">
          <PiggyBankIcon class="w-4 h-4 text-blue-500" />
          <Typography type="M_14_120" class="text-gray-700">예적금</Typography>
          <Typography type="B_14_120" class="text-blue-500">
            {{ currentProducts.deposits.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts.deposits.count > 0" class="space-y-2">
          <div
            v-for="product in currentProducts.deposits.products"
            :key="product.productId"
            @click="openProductDetail(product, 'savings')"
            class="bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ product.productName }}
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
          <Typography type="B_14_120" class="text-green-500">
            {{ currentProducts.cards.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts.cards.count > 0" class="space-y-2">
          <div
            v-for="card in currentProducts.cards.products"
            :key="card.cardId"
            @click="openProductDetail(card, 'card')"
            class="bg-green-50 p-3 rounded-lg cursor-pointer hover:bg-green-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ card.cardName }}
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
        <div class="flex items-center gap-2 mb-2">
          <ShieldIcon class="w-4 h-4 text-purple-500" />
          <Typography type="M_14_120" class="text-gray-700">보험</Typography>
          <Typography type="B_14_120" class="text-purple-500">
            {{ currentProducts.insurances.count }}개
          </Typography>
        </div>

        <div v-if="currentProducts.insurances.count > 0" class="space-y-2">
          <div
            v-for="insurance in currentProducts.insurances.products"
            :key="insurance.productId"
            @click="openProductDetail(insurance, 'insurance')"
            class="bg-purple-50 p-3 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors"
          >
            <div class="flex flex-col">
              <Typography type="B_12_120" class="text-gray-800 truncate max-w-full">
                {{ insurance.insuranceName }}
              </Typography>
              <Typography type="M_12_120" class="text-purple-600 truncate max-w-full">
                {{ insurance.coverage }}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 상세 모달 -->
    <ProductDetailModal
      :isOpen="isModalOpen"
      :productDetail="selectedProductDetail"
      :productType="selectedProductType"
      @close="closeModal"
    />
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import {
  Eye,
  PiggyBank as PiggyBankIcon,
  CreditCard as CreditCardIcon,
  Shield as ShieldIcon
} from 'lucide-vue-next'
import {
  mockCurrentProducts,
  mockSavingsDetail,
  mockCardDetail,
  mockInsuranceDetail
} from '@/entities/recommend/recommend.mock'
import ProductDetailModal from './ProductDetailModal.vue'
import type {
  SavingsDetailResponse,
  CardDetailResponse,
  InsuranceDetailResponse
} from '@/entities/recommend/recommend.entity'

const currentProducts = mockCurrentProducts

const isModalOpen = ref(false)
const selectedProductDetail = ref<SavingsDetailResponse | CardDetailResponse | InsuranceDetailResponse | null>(null)
const selectedProductType = ref<'savings' | 'card' | 'insurance'>('savings')

// 타입에 따라 상품 ID 추출
function getProductId(item: any, type: 'savings' | 'card' | 'insurance'): string {
  return type === 'card' ? item.cardId : item.productId
}

// 모달 오픈
function openProductDetail(item: any, type: 'savings' | 'card' | 'insurance') {
  const productId = getProductId(item, type)
  selectedProductDetail.value = getProductDetail(productId, type)
  selectedProductType.value = type
  isModalOpen.value = true
}

// 모달 닫기
function closeModal() {
  isModalOpen.value = false
  selectedProductDetail.value = null
}

// 현재는 mock 기반 조회
function getProductDetail(_productId: string, type: 'savings' | 'card' | 'insurance') {
  switch (type) {
    case 'savings':
      return mockSavingsDetail
    case 'card':
      return mockCardDetail
    case 'insurance':
      return mockInsuranceDetail
    default:
      return null
  }
}
</script>