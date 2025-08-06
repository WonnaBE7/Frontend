<template>
    <AppLayout>
        <AssetsDetailSummary/>
    </AppLayout>
  </template>
<script setup lang="ts">
import { useAssetCategoryDetailStore } from '@/entities/assets/assets.store';
import AssetsDetailSummary from '@/features/assets/assets-detail/ui/AssetsDetailSummary.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'
import { onMounted } from 'vue';
  
const store =  useAssetCategoryDetailStore()

onMounted(async()=>{
    await store.fetchAllCategoryDetails()
})
</script>