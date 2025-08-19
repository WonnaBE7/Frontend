<template>
    <Teleport to="body">
        <div v-if="visible" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div class="bg-white rounded-lg p-6 relative w-[90%] max-w-sm">
            <button
                class="absolute top-2 right-2 text-gray-500"
                @click="handleClose"
            >
                ✖
            </button>
  
          <div class="text-center">
            <Typography type="B_14_120">성공적으로 신청했습니다!</Typography>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
  
  <script setup lang="ts">
  
import Typography from '@/shared/ui/atoms/Typography.vue';

defineProps<{ visible: boolean }>()
const emit = defineEmits(['update:visible', 'close'])

function handleClose() {
  emit('update:visible', false)
  emit('close')
}
  </script>