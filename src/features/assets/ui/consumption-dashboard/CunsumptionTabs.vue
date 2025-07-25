<template>
    <div class="w-full bg-gray-50 grid grid-cols-3 gap-2 p-1">
      <Button
        v-for="tab in tabs"
        :key="tab.key"
        @click="$emit('update:selectedTab', tab.key)"
        :class="[
          selectedTab === tab.key
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
  import type { TabType } from '../../service/useConsumptionSummary'
  
  defineProps<{
    tabs: { key: TabType; label: string }[]
    selectedTab: TabType
  }>()
  
  defineEmits<{
    (e: 'update:selectedTab', value: TabType): void
  }>()
</script>