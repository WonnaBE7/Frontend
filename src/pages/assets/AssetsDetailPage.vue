<template>
  <AppLayout>
    <AssetsDetailSummary />
  </AppLayout>
</template>

<script setup lang="ts">
    import { getCodefAssets } from '@/entities/assets/assets.api'
import { useAssetCategoryDetailStore } from '@/entities/assets/assets.store'
    import AssetsDetailSummary from '@/features/assets/assets-detail/ui/AssetsDetailSummary.vue'
    import AppLayout from '@/shared/layout/AppLayout.vue'
    import { computed, onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const store = useAssetCategoryDetailStore()
    const route = useRoute()
    
    export type AssetCategoryType = 'checking' | 'savings' | 'investment' | 'insurance' | 'other' | 'pension'
    const category = computed(() => route.query.category as AssetCategoryType)

    onMounted(async () => {
      //await getCodefAssets()
      await store.fetchAllCategoryDetails(category.value)

    })
</script>