<template>
  <UserTitle label="자산 분석" subText="자산 현황과 소비 패턴을 분석하고 관리하세요" />
  <AssetTypeTab :tabs="tabs" :selected="selected" @update:selected="$emit('update:selected', $event)" />
</template>

<script setup lang="ts">
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import AssetTypeTab from './AssetTypeTab.vue';
import { assetTabs } from '@/entities/assets/assets.entity';
import type { AssetTabKey } from '@/entities/assets/assets.entity';

// 부모로부터 받는 selected 값
defineProps<{
  selected: AssetTabKey
}>()

// 클릭한 탭을 부모에게 전달
defineEmits<{
  (e: 'update:selected', tab: AssetTabKey): void
}>()

// 내부 상태는 필요 없음, props + emit만 쓰면 됨
const tabs = assetTabs;
</script>