<template>
    <AppLayout>
        <IntroduceBox :productInfo="cardsData.productInfo"/>
        <ChartBox :comparisonChart="cardsData.comparisonCharts"/>
        <NoteBox :note="cardsData.note"/>
        <InputAccount/>
        <ProductButtonBox/>
    </AppLayout>
</template>
<script setup lang="ts">
import ChartBox from '@/features/recommend/ui/ChartBox.vue';

import NoteBox from '@/features/recommend/card-detail/ui/NoteBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';
import { mockCardDetailPage } from '@/entities/recommend/recommend.mock';
import ProductButtonBox from '@/features/recommend/main/ui/ProductButtonBox.vue';
import IntroduceBox from '@/features/recommend/card-detail/ui/IntroduceBox.vue';
import InputAccount from '@/features/recommend/card-detail/ui/InputAccount.vue';

const cardsData =mockCardDetailPage
//바꿔야할 것 - 여기 query통해서 오는게 type이랑 id니까 활용 할 것


</script>