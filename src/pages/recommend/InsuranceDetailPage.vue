<template>
    <AppLayout>
      <IntroduceBox :productInfo="insurancesData.productInfo"/>
      <ChartBox :comparisonChart="insurancesData.comparisonChart"/>
      <MainFeaturesBox :mainFeatures="insurancesData.mainFeatures"/>
      <TermsAndConditionsBox :termsAndConditions="insurancesData.termsAndConditions"/>
      <ProductButtonBox/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import ChartBox from '@/features/recommend/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/insurance-detail/ui/IntroduceBox.vue';
  import MainFeaturesBox from '@/features/recommend/insurance-detail/ui/MainFeaturesBox.vue';
  import ProductButtonBox from '@/features/recommend/insurance-detail/ui/ProductButtonBox.vue';
  import TermsAndConditionsBox from '@/features/recommend/insurance-detail/ui/TermsAndConditionsBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import { mockInsuranesDetailPage } from '@/entities/recommend/recommend.mock';

  const insurancesData =mockInsuranesDetailPage
  </script>