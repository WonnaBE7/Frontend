<template>
    <AppLayout>
        <IntroduceBox :productInfo="cardsData.productInfo"/>
        <ChartBox :comparisonChart="cardsData.comparisonCharts"/>
        <NoteBox :note="cardsData.note"/>
        <InputAccount v-model="linkedAccount"/>
        <ProductButtonBox :request="requestCard"/>
    </AppLayout>
</template>
<script setup lang="ts">
import ChartBox from '@/features/recommend/ui/ChartBox.vue';
import NoteBox from '@/features/recommend/card-detail/ui/NoteBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';
import { mockCardDetailPage } from '@/entities/recommend/recommend.mock';
import ProductButtonBox from '@/features/recommend/card-detail/ui/ProductButtonBox.vue';
import IntroduceBox from '@/features/recommend/card-detail/ui/IntroduceBox.vue';
import InputAccount from '@/features/recommend/card-detail/ui/InputAccount.vue';
import { computed, ref } from 'vue';
import type { CardApplicationRequest } from '@/entities/recommend/recommend.entity';

const cardsData =mockCardDetailPage
const linkedAccount = ref('')

const requestCard = computed<CardApplicationRequest>(() => ({
  productType: 'card',
  cardId: cardsData.productInfo.cardId,
  cardType: cardsData.productInfo.cardType,
  linkedAccount: linkedAccount.value.toString(), 
}))
</script>