<template>
  <AppLayout>
    <WriteForm/>
    <ExplainBox/>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import WriteForm from '@/features/board/board-write/ui/WriteForm.vue'
import ExplainBox from '@/features/board/board-write/ui/ExplainBox.vue'
</script>