<template>
    <Card class="bg-white">
        <Typography v-if="wishList" type="B_18_120" class="w-full mb-4">
          관심 금융 상품 {{wishList.totalCount}}개
        </Typography>
    
        <RecommendProductCard
          v-if="wishList"
          v-for="product in wishList.products"
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
  import type { WishlistProduct } from '@/entities/recommend/recommend.entity'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { useRouter } from 'vue-router'
  import { computed, } from 'vue'
  import { useRecommendationStore } from '@/entities/recommend/recommend.store'

  const router = useRouter()
  const store = useRecommendationStore()
  const wishList = computed(() => store.wishlist)

  function getProductKey(product: WishlistProduct) {
    if (product.productType === 'card') return product.cardId
    return product.productId
  }
  
  function goToDetail(product: WishlistProduct) {
    let routePath ='' as string
    let productId = '' as string
    let productType ='' as string
    
    if (product.productType === 'savings') {
      productId = product.productId
      productType = product.productType
      routePath = '/recommend/savings/detail'
    } else if (product.productType === 'card') {
      productId = product.cardId
      productType = product.productType
      routePath = '/recommend/card/detail'
    } else if (product.productType === 'insurance') {
      productId = product.productId
      productType = product.productType
      routePath = '/recommend/insurance/detail'
    }

    router.push({
      path: routePath,
      query: { productId, productType }
    })
  }
  </script>