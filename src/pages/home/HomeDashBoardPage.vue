<template>
  <AppLayout>
      <AssetsConsumptionBox/>
      <FinTypeBox />
      <CurrentGoalBox/>
      <Top3PostBox/>
  </AppLayout>
</template>

<script setup lang="ts">
import AssetsConsumptionBox from '@/features/home/ui/home-dashboard/AssetsConsumptionBox.vue';
import CurrentGoalBox from '@/features/home/ui/home-dashboard/CurrentGoalBox.vue';
import FinTypeBox from '@/features/home/ui/home-dashboard/FinTypeBox.vue';
import Top3PostBox from '@/features/home/ui/home-dashboard/Top3PostBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'

</script>