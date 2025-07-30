<template>
  <AppLayout>
    <CurrentUsingProductBox/>
    <MyWonnaBEBox/>
    <WishlistBotton/>
    <RecommendListBox/>
  </AppLayout>
</template>

<script setup lang="ts">
import WishlistBotton from '@/features/recommend/main/ui/WishlistBotton.vue';
import CurrentUsingProductBox from '@/features/recommend/main/ui/CurrentUsingProductBox.vue';
import MyWonnaBEBox from '@/features/recommend/main/ui/MyWonnaBEBox.vue';
import RecommendListBox from '@/features/recommend/main/ui/RecommendListBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
</script>