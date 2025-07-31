<template>
  <div class="flex flex-row justify-between w-full gap-1 sm:gap-2 p-2 sm:p-3 bg-white">
    <Button
      v-for="tab in tabs"
      :key="tab"
      class="px-3 py-1 transition flex justify-center"
      :class="selected === tab
        ? 'bg-sub-yellow-p text-black'
        : 'bg-white text-gray-500 hover:bg-gray-50'"
      @click="$emit('update:selected', tab)"
    >
      <Typography type="B_14_120" class="flex flex-row justify-center items-center gap-2">
        <component :is="tab==='자산 현황' ? Wallet: DollarSign" class="w-4 h-4"></component> {{ tab }}
      </Typography>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue';
import type { AssetTabKey } from '@/entities/assets/assets.entity';
import { DollarSign, Wallet } from 'lucide-vue-next';
import Typography from '@/shared/ui/atoms/Typography.vue';


defineProps<{
  selected: AssetTabKey
  tabs: readonly AssetTabKey[]
}>()

defineEmits<{
  (e: 'update:selected', tab: AssetTabKey): void
}>()
</script>