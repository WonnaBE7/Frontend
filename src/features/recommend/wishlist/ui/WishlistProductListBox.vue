<template>
    <Card class="bg-white">
        <Typography type="B_18_120" class="w-full mb-4">관심 금융 상품 {{mockWishlist.totalCount}}개</Typography>
    
        <RecommendProductCard
        v-for="product in currentProducts"
        :key="getProductKey(product)"
        :product="product"
        @click="goToDetail(product)"
        class="mb-4"
        />
    </Card>
  </template>
  
  <script setup lang="ts">
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import RecommendProductCard from '../../main/ui/RecommendProductCard.vue'
  import { mockWishlist } from '@/entities/recommend/recommend.mock'
  import type { WishlistProduct } from '@/entities/recommend/recommend.entity'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const currentProducts = mockWishlist.products
  
  function getProductKey(product: WishlistProduct) {
    if (product.productType === 'card') return product.cardId
    return product.productId
  }
  
  function goToDetail(product: WishlistProduct) {
  let routePath = ''
  let productId = ''

  if (product.productType === 'savings') {
    productId = product.productId
    routePath = '/recommend/savings/detail'
  } else if (product.productType === 'card') {
    productId = product.cardId
    routePath = '/recommend/card/detail'
  } else if (product.productType === 'insurance') {
    productId = product.productId
    routePath = '/recommend/insurance/detail'
  }

  router.push({
    path: routePath,
    query: { productId }
  })
}
  </script>