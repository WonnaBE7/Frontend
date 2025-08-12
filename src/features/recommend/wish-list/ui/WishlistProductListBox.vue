<template>
  <Card class="bg-white">
    <Typography v-if="wishList" type="B_18_120" class="w-full mb-4">
      관심 금융 상품 {{ totalCount }}개
    </Typography>

    <!-- 카드 -->
    <template v-if="wishList?.cards.length">
      <CardProductCard
        v-for="card in wishList.cards"
        :key="card.cardId"
        :product="card"
        @click="goToDetail(card, 'card')"
        class="mb-4"
      />
    </template>

    <!-- 예적금 -->
    <template v-if="wishList?.savings.length">
      <SavingsProductCard
        v-for="saving in wishList.savings"
        :key="saving.productId"
        :product="saving"
        @click="goToDetail(saving, 'savings')"
        class="mb-4"
      />
    </template>

    <!-- 보험 -->
    <template v-if="wishList?.insurances.length">
      <InsuranceProductCard
        v-for="insurance in wishList.insurances"
        :key="insurance.productId"
        :product="insurance"
        @click="goToDetail(insurance, 'insurance')"
        class="mb-4"
      />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import CardProductCard from '../../main/ui/CardProductCard.vue'
import SavingsProductCard from '../../main/ui/SavingsProductCard.vue'
import InsuranceProductCard from '../../main/ui/InsuranceProductCard.vue'
import { useRecommendationStore } from '@/entities/recommend/recommend.store'
import type {
  RecommendedCardProduct,
  RecommendedSavingsProduct,
  RecommendedInsuranceProduct,
  ProductType,
  WishlistProduct
} from '@/entities/recommend/recommend.entity'

const store = useRecommendationStore()
const router = useRouter()

const wishList = computed(() => store.wishlist)
const totalCount = computed(() => wishList.value?.totalCount || 0)

onMounted(async () => {
    await store.fetchWishlist()
})

function getProductId(product: WishlistProduct): string {
  return product.productType === 'card' ? product.cardId : product.productId
}

function goToDetail(
  product: RecommendedCardProduct | RecommendedSavingsProduct | RecommendedInsuranceProduct,
  productType: ProductType
) {
  const pathMap: Record<ProductType, string> = {
    card: '/recommend/card/detail',
    savings: '/recommend/savings/detail',
    insurance: '/recommend/insurance/detail'
  }
  const productId = getProductId(product)
  router.push({
    path: pathMap[productType],
    query: { productId, productType }
  })
}
</script>