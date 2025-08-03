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
import { useRecommendationStore } from '@/entities/recommend/recommend.store';
import { useUserProfileStore } from '@/entities/user/user.store';
import { onMounted } from 'vue';

const recommendStore = useRecommendationStore()
const userStore = useUserProfileStore()

onMounted(async () => {
  await userStore.fetchUserProfile()

  await Promise.all([
    recommendStore.fetchSavingsRecommendation(),
    recommendStore.fetchCardRecommendation(),
    recommendStore.fetchInsuranceRecommendation(),
  ])
})

</script>