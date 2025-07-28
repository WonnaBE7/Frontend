<template>
    <div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center flex-col">
      <Typography type="B_28_160" class="text-white mb-4">미래에서 메시지가 왔어요!</Typography>
      <button
        @click="emit('openMessage')"
        aria-label="편지 열기"
        class="focus:outline-none"
      >
        <MailWarning
          alt="편지 아이콘"
          class="w-40 h-40 text-gray-50 animate-shake"
        />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { MailWarning } from 'lucide-vue-next'
  
  const emit = defineEmits<{
    (e: 'openMessage'): void
  }>()
  </script>
  
  <style scoped>
  @keyframes shake {
    0% { transform: rotate(0deg); }
    15% { transform: rotate(6deg); }
    30% { transform: rotate(-6deg); }
    45% { transform: rotate(4deg); }
    60% { transform: rotate(-4deg); }
    75% { transform: rotate(2deg); }
    100% { transform: rotate(0deg); }
  }
  
  .animate-shake {
    animation: shake 1.2s ease-in-out infinite;
  }
  </style>