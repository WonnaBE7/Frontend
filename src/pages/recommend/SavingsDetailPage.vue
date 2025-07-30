<template>
    <AppLayout>
      <IntroduceBox :productInfo="savingsData.productInfo"/>
      <ChartBox :comparisonChart="savingsData.comparisonChart"/>
      <MainFeaturesBox :mainFeatures="savingsData.mainFeatures"/>
      <TermsAndConditionsBox :termsAndConditions="savingsData.termsAndConditions"/>
      <ProductButtonBox/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import ChartBox from '@/features/recommend/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/saving-detail/ui/IntroduceBox.vue';
  import MainFeaturesBox from '@/features/recommend/saving-detail/ui/MainFeaturesBox.vue';
  import ProductButtonBox from '@/features/recommend/saving-detail/ui/ProductButtonBox.vue';
  import TermsAndConditionsBox from '@/features/recommend/saving-detail/ui/TermsAndConditionsBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import { mockSavingsDetailPage } from '@/entities/recommend/recommend.mock';

  const savingsData =mockSavingsDetailPage
  </script>