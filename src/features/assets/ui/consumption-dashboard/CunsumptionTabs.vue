<template>
  <div class="w-full bg-gray-50 grid grid-cols-3 gap-2 p-1 mb-2">
    <Button
      v-for="tab in store.tabs"
      :key="tab.key"
      @click="store.selectedTab = tab.key"
      :class="[
        store.selectedTab === tab.key
          ? 'bg-white text-gray-900'
          : '!bg-gray-50 text-gray-400'
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