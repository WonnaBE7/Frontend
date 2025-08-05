<template>
  <AppLayout>
    <CurrentUsingProductBox/>
    <MyWonnaBEBox/>
    <WishlistBotton/>
    <RecommendListBox/>
  </AppLayout>
</template>

<script setup lang="ts">
import WishlistBotton from '@/features/recommend/wish-list/ui/WishlistBotton.vue';
import CurrentUsingProductBox from '@/features/recommend/main/ui/CurrentUsingProductBox.vue';
import MyWonnaBEBox from '@/features/recommend/main/ui/MyWonnaBEBox.vue';
import RecommendListBox from '@/features/recommend/main/ui/RecommendListBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/entities/user/auth.store';
import { initRecommendData } from '@/features/init/initRecommendData';

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (!authStore.accessToken) {
    router.push('/user/login')
  }
  initRecommendData()
})

</script>