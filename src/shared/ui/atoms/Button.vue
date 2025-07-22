<template>
    <button
        :class="[
            'w-full px-4 py-2 rounded font-pretendard text-sm',
            defaultClass,
            customClass
        ]"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    type: {type : String, default : "button"},
    customClass : {type : String, default : " "}
})

const defaultClass = 'bg-sub-yellow-p text-black hover:bg:sub-yellow-bg'
</script>