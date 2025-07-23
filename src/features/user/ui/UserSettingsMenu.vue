<template>
  <UserSettingsItem :icon="User" label="회원정보 수정" />
  <UserSettingsItem :icon="Settings" label="워너비 변경" />
  <UserSettingsItem :icon="RefreshCcw" label="금융 성향 재진단" />
  <UserSettingsItem :icon="Clock" label="나의 금융 히스토리" />
</template>

<script setup lang="ts">
import { User, Settings, RefreshCcw, Clock } from 'lucide-vue-next'
import UserSettingsItem from './UserSettingsItem.vue'
</script>