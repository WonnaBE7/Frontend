<template>
    <button
        :class="[
            'w-full px-4 py-2 rounded',
            customClass
            ]"
    >
        <Typography type="B_14_140">
            <slot />
        </Typography>
    </button>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
    type: {type : String, default : "button"},
    customClass : {type : String, default : " "}
})
</script>