<template>
    <input 
        class="w-full px-2 py-2 border border-gray-500 rounded mb-2 fontSize-body-5"
        :placeholder="label.length > 5 ? '': label === '비밀번호' ? `${label}를 입력하세요` : `${label}을 입력하세요`"
    >
</template>

<script setup lang="ts">

defineProps({
    label:{
        type : String,
        required: true
    }
})
</script>