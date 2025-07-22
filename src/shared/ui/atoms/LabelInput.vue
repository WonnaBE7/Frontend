<template>
    <div class="flex flex-col">
        <label 
            :class="[
                'w-full font-pretendard text-s font-bold mb-2'
            ]"     
        >
            {{label}}
        </label>
        <input 
            class="w-full border border-gray-500 rounded mb-2 text-s"
            :placeholder="label.length > 5 ? '': label === '비밀번호' ? `${label}를 입력하세요` : `${label}을 입력하세요`"
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label:{
        type : String,
        required: true
    }
})
</script>