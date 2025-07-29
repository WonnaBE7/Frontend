<template>
    <Button>
        목표 완료하기
    </Button>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue';

defineProps<{
    goalId :number
}>()


</script>