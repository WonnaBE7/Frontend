<template>
  <Card class="bg-white">
    <Typography v-if="wishList" type="B_18_120" class="w-full mb-4">
      관심 금융 상품 {{ wishList.totalCount }}개
    </Typography>

    <template v-if="wishList">
      <template v-for="product in wishList.products" :key="getProductKey(product)">
        <CardProductCard
          v-if="product.productType === 'card'"
          :product="product"
          @click="goToDetail(product)"
          class="mb-4"
        />
        <SavingsProductCard
          v-else-if="product.productType === 'savings'"
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
        <p v-else class="text-red-500">알 수 없는 상품 유형입니다</p>
      </template>
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
import type { WishlistProduct } from '@/entities/recommend/recommend.entity'

const store = useRecommendationStore()
const router = useRouter()

const wishList = computed(() => store.wishlist)

function getProductKey(product: WishlistProduct) {
  return product.productType === 'card' ? product.cardId : product.productId
}

onMounted(async () => {
  if (!store.wishlist || store.wishlist.products.length === 0) {
    await store.fetchWishlist()
  }
})

function goToDetail(product: WishlistProduct) {
  let path = ''
  let productId = ''
  const productType = product.productType

  if (productType === 'card') {
    path = '/recommend/card/detail'
    productId = product.cardId
  } else if (productType === 'savings') {
    path = '/recommend/savings/detail'
    productId = product.productId
  } else if (productType === 'insurance') {
    path = '/recommend/insurance/detail'
    productId = product.productId
  }

  router.push({
    path,
    query: { productId, productType }
  })
}


</script>