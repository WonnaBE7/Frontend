<template>
    <AppLayout>
        <IntroduceBox :productInfo="cardsData.productInfo"/>
        <ChartBox :comparisonChart="cardsData.comparisonChart"/>
        <NoteBox :note="cardsData.note"/>
        <ProductButtonBox/>
    </AppLayout>
</template>
<script setup lang="ts">
import ChartBox from '@/features/recommend/ui/ChartBox.vue';

import NoteBox from '@/features/recommend/card-detail/ui/NoteBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';
import { mockCardDetailPage } from '@/entities/recommend/recommend.mock';
import ProductButtonBox from '@/features/recommend/card-detail/ui/ProductButtonBox.vue';
import IntroduceBox from '@/features/recommend/card-detail/ui/IntroduceBox.vue';
const cardsData =mockCardDetailPage
</script>