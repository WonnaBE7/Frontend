<template>
    <button
        :class="[
            'w-full px-4 py-3 rounded',
            label === 'white' ? 'bg-gray-BGDim text-black border border-gray-200 hover:bg:gray-100':'bg-sub-yellow-p text-black hover:bg:sub-yellow-bg' 
            ]"
    >
        <Typography type="B_14_120">
            <slot />
        </Typography>
    </button>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
    label : {type :String, requried: true}
})
</script>