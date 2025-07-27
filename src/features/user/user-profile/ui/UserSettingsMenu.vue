<template>
  <UserSettingsItem :icon="User" label="회원정보 수정" />
  <UserSettingsItem :icon="Settings" label="워너비 선택" />
  <UserSettingsItem :icon="RefreshCcw" label="금융 성향 진단" />
  <UserSettingsItem :icon="Clock" label="나의 금융 히스토리" />
  <UserSettingsItem :icon="Pen" label="회원 가입" />
  <UserSettingsItem :icon="Pen" label="로그인" />
</template>

<script setup lang="ts">
import { User, Settings, RefreshCcw, Clock, Pen } from 'lucide-vue-next'
import UserSettingsItem from './UserSettingsItem.vue'
</script>