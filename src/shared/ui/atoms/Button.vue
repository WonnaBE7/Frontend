<template>
    <button
        :class="[
            'w-full px-4 py-2 rounded font-pretendard text-sm',
            customClass
            ]"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps({
    type: {type : String, default : "button"},
    customClass : {type : String, default : " "}
})
</script>