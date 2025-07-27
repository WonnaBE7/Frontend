<template>
    <input 
      class="w-full px-2 py-2 border border-gray-500 rounded mb-2 fontSize-body-5"
      v-model="modelValue"
      :placeholder="placeholder"
    />
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })
  
  const modelValue = defineModel<string>()
  
  const placeholder = props.label.length > 5
    ? ''
    : props.label === '비밀번호'
      ? `${props.label}를 입력하세요`
      : `${props.label}을 입력하세요`
  </script>