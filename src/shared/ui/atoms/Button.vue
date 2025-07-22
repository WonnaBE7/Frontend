<template>
    <button
        :type="type"
        :class="[
            'w-full px-4 py-2 rounded font-pretendard text-xs',
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

const defaultClass = 'bg-sub-yellow-p text-black hover:bg:sub-yellow-s'
</script>