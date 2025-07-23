<template>
    <div class="flex flex-col">
        <Typography type="Body1">{{label}}</Typography>
        <input 
            class="w-full px-2 py-2 border border-gray-500 rounded mb-2 text-xs"
            :placeholder="label.length > 5 ? '': label === '비밀번호' ? `${label}를 입력하세요` : `${label}을 입력하세요`"
        >
    </div>
</template>

<script setup lang="ts">
import Typography from './Typography.vue';

defineProps({
    label:{
        type : String,
        required: true
    }
})
</script>