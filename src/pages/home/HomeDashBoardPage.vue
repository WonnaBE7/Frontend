<template>
  <AppLayout>
      <AssetsConsumptionBox/>
      <FinTypeBox />
      <CurrentGoalBox/>
      <Top3PostBox/>
  </AppLayout>
</template>

<script setup lang="ts">
import AssetsConsumptionBox from '@/features/assets/ui/dashboard/AssetsConsumptionBox.vue';
import CurrentGoalBox from '@/features/assets/ui/dashboard/CurrentGoalBox.vue';
import FinTypeBox from '@/features/assets/ui/dashboard/FinTypeBox.vue';
import Top3PostBox from '@/features/assets/ui/dashboard/Top3PostBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'

</script>