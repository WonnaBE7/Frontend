<template>
  <Card class="bg-white border border-gray-150">
    <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4">
      {{ selectedFinName }} 추천 상품
    </IconLabel>

    <!-- 탭 -->
    <div class="flex flex-row gap-2 mb-4 w-full bg-gray-BGDim p-2">
      <Button
        v-for="tab in productTabs"
        :key="tab.value"
        @click="selectTab(tab.value)"
        :class="selectedTab === tab.value ? 'bg-sub-yellow-p text-white' : '!bg-gray-BGDim text-gray-600'"
      >
        {{ tab.label }}
      </Button>
    </div>

    <!-- 본문 -->
    <template v-if="isPersonaReady">
      <template v-if="currentProducts.length > 0">
        <template v-for="product in currentProducts" :key="getProductKey(product)">
          <CardProductCard
            v-if="product.productType === 'card'"
            :product="product"
            @click="goToDetail(product)"
            class="mb-4"
          />
          <InsuranceProductCard
            v-else-if="product.productType === 'insurance'"
            :product="product"
            @click="goToDetail(product)"
            class="mb-4"
          />
          <SavingsProductCard
            v-else
            :product="product"
            @click="goToDetail(product)"
            class="mb-4"
          />
        </template>
      </template>
      <template v-else>
        <p class="text-sm text-gray-500">추천 상품이 없습니다.</p>
      </template>
    </template>

    <template v-else>
      <p class="text-sm text-gray-500">추천 상품을 불러오는 중입니다...</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/shared/ui/atoms/Card.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { MessageCircleIcon } from 'lucide-vue-next'

import CardProductCard from './CardProductCard.vue'
import SavingsProductCard from './SavingsProductCard.vue'
import InsuranceProductCard from './InsuranceProductCard.vue'

import { useUserProfileStore } from '@/entities/user/user.store'
import { useRecommendationStore } from '@/entities/recommend/recommend.store'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'

import type {
  RecommendedSavingsProduct,
  RecommendedCardProduct,
  RecommendedInsuranceProduct,
  ProductType
} from '@/entities/recommend/recommend.entity'

const userStore = useUserProfileStore()
const recommendStore = useRecommendationStore()
const router = useRouter()

const selectedFinName = computed(
  () => userStore.selectedFinType.name || userStore.profile?.wonnaBE?.[0] || '금융'
)

const selectedFinType = computed(() => userStore.selectedFinType)
const personaId = computed(() => selectedFinType.value.id)
const isPersonaReady = computed(() => !!personaId.value)

const productTabs = [
  { value: 'savings' as ProductType, label: '예적금' },
  { value: 'card' as ProductType, label: '카드' },
  { value: 'insurance' as ProductType, label: '보험' }
]
const selectedTab = ref<ProductType>('savings')

const currentProducts = computed(() => {
  if (!isPersonaReady.value) return []
  switch (selectedTab.value) {
    case 'savings':
      console.log('예적금 가져온다~',recommendStore.getSavingsByPersona(personaId.value as number))
      return recommendStore.getSavingsByPersona(personaId.value as number)
    case 'card':
      return recommendStore.getCardsByPersona(personaId.value as number)
    case 'insurance':
      return recommendStore.getInsurancesByPersona(personaId.value as number)
    default:
      return []
  }
})

function selectTab(tabValue: ProductType) {
  selectedTab.value = tabValue
}

/** personaId가 세팅되는 순간에만 추천 API 호출 */
watch(
  () => personaId.value,
  async (id) => {
    if (!id) return
    await Promise.all([
      recommendStore.fetchSavingsRecommendation(),
      recommendStore.fetchCardRecommendation(),
      recommendStore.fetchInsuranceRecommendation(),
    ])
  },
  { immediate: true }
)

/** 프로필 기반으로 초기 페르소나 세팅 (지연) */
onMounted(() => {
  setTimeout(() => {
    const wonnaBE = userStore.profile?.wonnaBE
    if (wonnaBE?.length) {
      const finType = financialTendencyList.find(item => item.name === wonnaBE[0])
      if (finType) {
        userStore.setSelectedFinType({ id: finType.id, name: finType.name })
      }
    }
  }, 300)
})

/** key / 라우팅 */
function getProductKey(
  product: RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct
): string {
  return 'cardId' in product ? product.cardId : product.productId
}

function goToDetail(
  product: RecommendedSavingsProduct | RecommendedCardProduct | RecommendedInsuranceProduct
) {
  let productId: string
  let routePath: string
  let productType: string

  if ('productId' in product && product.productType === 'savings') {
    productId = product.productId
    productType = product.productType
    routePath = '/recommend/savings/detail'
  } else if ('cardId' in product) {
    productId = product.cardId
    productType = product.productType
    routePath = '/recommend/card/detail'
  } else {
    productId = product.productId
    productType = product.productType
    routePath = '/recommend/insurance/detail'
  }

  router.push({ path: routePath, query: { productId, productType } })
}
</script>