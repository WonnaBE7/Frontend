<template>
  <UserTitle label="자산 분석" subText="자산 현황과 소비 패턴을 분석하고 관리하세요" class="mb-4"/>
  <AssetTypeTab :tabs="tabs" :selected="selected" @update:selected="$emit('update:selected', $event)" />
</template>

<script setup lang="ts">
  import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
  import AssetTypeTab from './AssetTypeTab.vue';
  import { assetTabs } from '@/entities/assets/assets.entity';
  import type { AssetTabKey } from '@/entities/assets/assets.entity';

  defineProps<{
    selected: AssetTabKey
  }>()

  defineEmits<(e: 'update:selected', tab: AssetTabKey) => void>()

  const tabs = assetTabs;
</script>