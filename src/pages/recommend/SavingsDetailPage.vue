<template>
    <AppLayout>
      <IntroduceBox :productInfo="savingsData.productInfo"/>
      <ChartBox :comparisonChart="savingsData.comparisonCharts"/>
      <MainFeaturesBox :mainFeatures="savingsData.mainFeatures"/>
      <TermsAndConditionsBox :termsAndConditions="savingsData.termsAndConditions"/>
      <ProductButtonBox/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import ChartBox from '@/features/recommend/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/saving-detail/ui/IntroduceBox.vue';
  import MainFeaturesBox from '@/features/recommend/saving-detail/ui/MainFeaturesBox.vue';
  import ProductButtonBox from '@/features/recommend/main/ui/ProductButtonBox.vue';
  import TermsAndConditionsBox from '@/features/recommend/saving-detail/ui/TermsAndConditionsBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  import { mockSavingsDetailPage } from '@/entities/recommend/recommend.mock';

  const savingsData =mockSavingsDetailPage
  //바꿔야할 것 - 여기 query통해서 오는게 type이랑 id니까 활용 할 것
  </script>