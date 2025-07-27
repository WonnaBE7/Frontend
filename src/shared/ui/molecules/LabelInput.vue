<!-- LabelInput.vue -->
<template>
    <div>
      <label class="block mb-1">{{ label }}</label>
      <input
        v-model="modelValue"
        :type="type"
        class="w-full px-2 py-2 border rounded"
        :placeholder="placeholder"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    label: { type: String, required: true },
    type: { type: String, default: 'text' }
  })
  
  const modelValue = defineModel<string>()
  
  const placeholder = props.label.length > 5
    ? ''
    : props.label === '비밀번호'
      ? `${props.label}를 입력하세요`
      : `${props.label}을 입력하세요`
  </script>