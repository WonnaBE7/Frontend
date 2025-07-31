<template>
    <Button 
      @click="goToWishlist"
      class="bg-white flex flex-row items-center justify-center w-full border border-gray-150 hover:bg-gray-50 transition-colors mb-4"
      :disabled="mockWishlist.totalCount === 0"
    >
    <Typography type="B_16_140" class="flex !flex-row gap-2 items-center"><Heart class="text-sub-red-p"/>관심상품 보기 ({{ mockWishlist.totalCount || 0 }})</Typography>
    </Button>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import Button from '@/shared/ui/atoms/Button.vue'
  import { Heart } from 'lucide-vue-next'
  import { mockWishlist } from '@/entities/recommend/recommend.mock'
// import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
  
  const router = useRouter()
  
  function goToWishlist() {
    router.push({
      path: '/recommend/wishlist',
    })
  }
  </script>