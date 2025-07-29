<template>
    <AppLayout>
      <IntroduceBox/>
      <ChartBox/>
      <MainFeaturesBox/>
      <TermsAndConditionsBox/>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import ChartBox from '@/features/recommend/savings-detail/ui/ChartBox.vue';
  import IntroduceBox from '@/features/recommend/savings-detail/ui/IntroduceBox.vue';
  import MainFeaturesBox from '@/features/recommend/savings-detail/ui/MainFeaturesBox.vue';
  import TermsAndConditionsBox from '@/features/recommend/savings-detail/ui/TermsAndConditionsBox.vue';
  import AppLayout from '@/shared/layout/AppLayout.vue'
  </script>