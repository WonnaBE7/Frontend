<template>
  <UserSettingsItem v-if="store.accessToken" :icon="User" label="회원정보 수정" />
  <UserSettingsItem v-if="store.accessToken" :icon="Settings" label="워너비 선택" />
  <UserSettingsItem v-if="store.accessToken" :icon="NotebookPen" label="금융 성향 진단" />
  <UserSettingsItem v-if="store.accessToken" :icon="BookOpenText" label="추가 정보 입력" />
  <UserSettingsItem v-if="store.accessToken" :icon="Clock" label="나의 금융 히스토리" />
  <UserSettingsItem v-if="!store.accessToken" :icon="Pen" label="회원 가입" />
  <UserSettingsItem v-if="!store.accessToken" :icon="Pen" label="로그인" />
</template>

<script setup lang="ts">
import { User, Settings, BookOpenText, Clock, Pen, NotebookPen } from 'lucide-vue-next'
import UserSettingsItem from './UserSettingsItem.vue'
import { useAuthStore } from '@/entities/user/auth.store';

const store = useAuthStore()
</script>