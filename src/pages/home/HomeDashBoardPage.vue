<template>
  <AppLayout>
      <AssetsConsumptionBox/>
      <FinTypeBox />
      <CurrentGoalBox/>
      <Top3PostBox/>
  </AppLayout> 
</template>

<script setup lang="ts">
import AssetsConsumptionBox from '@/features/assets/main/ui/AssetsConsumptionBox.vue';
import CurrentGoalBox from '@/features/goal/main/ui/CurrentGoalBox.vue';
import FinTypeBox from '@/features/assets/main/ui/FinTypeBox.vue';
import Top3PostBox from '@/features/assets/main/ui/Top3PostBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue'

</script>