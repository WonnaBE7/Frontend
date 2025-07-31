<template>
  <div class="w-full bg-gray-BGDim grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2 md:p-3 mb-2 sm:mb-3 md:mb-4">
    <Button
      v-for="tab in store.tabs"
      :key="tab.key"
      @click="store.selectedTab = tab.key"
      :class="[
        store.selectedTab === tab.key
          ? 'bg-white text-gray-900'
          : '!bg-gray-BGDim text-gray-500'
      ]"
    >
      {{ tab.label }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue'
import { useConsumptionStore } from '@/entities/assets/consumption/consumption.store.ts'

const store = useConsumptionStore()
</script>