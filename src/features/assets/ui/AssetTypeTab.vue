<template>
  <div class="flex flex-row justify-between w-full gap-1 border border-bg-50 p-1">
    <Button
      v-for="tab in tabs"
      :key="tab"
      class="px-3 py-1 border text-sm font-medium transition"
      :class="selected === tab
        ? 'bg-yellow-400 text-black border-yellow-500'
        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'"
      @click="$emit('update:selected', tab)"
    >
     {{ tab }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue';
import type { AssetTabKey } from '@/entities/assets/assets.entity';


defineProps<{
  selected: AssetTabKey
  tabs: readonly AssetTabKey[]
}>()

defineEmits<{
  (e: 'update:selected', tab: AssetTabKey): void
}>()
</script>