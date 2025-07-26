<template>
    <div class="flex flex-col items-center mb-4">
        <Typography type="B_22_160">{{ label }}</Typography>
        <Typography type="M_14_140" class="text-gray-500">{{ subText }}</Typography>
    </div>
</template>
  
<script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue'

defineProps({
    label: { type: String, required: true },
    subText :{ type: String, required: true }
})

</script>