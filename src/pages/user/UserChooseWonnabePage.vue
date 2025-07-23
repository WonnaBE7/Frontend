<template>
  <AppLayout>
    <UserTitle label="워너비 선택" />
    <ChooseWonnabe @submit="handleSubmit" />
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import UserTitle from '@/features/user/ui/UserTitle.vue'
import ChooseWonnabe from '@/features/user/ui/user-choose-wonnabe/ChooseWonnabe.vue'

const handleSubmit = (selected: string[]) => {
  console.log('제출된 워너비:', selected)
}
</script>