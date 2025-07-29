<template>
    <div ref="dropdownRef" class="relative inline-block w-36">
      <!-- 드롭다운 버튼 -->
      <button
        @click="toggleDropdown"
        @blur="handleBlur"
        class="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white text-gray-800
               focus:outline-none focus:ring-2 focus:ring-sub-yellow-p 
               flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <Typography type="M_14_120">{{ selectedOption.label }}</Typography>
        <svg 
          class="w-4 h-4 text-gray-500 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M7 7l3 3 3-3" />
        </svg>
      </button>
  
      <!-- 드롭다운 메뉴 -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95 -translate-y-1"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 -translate-y-1"
      >
        <div
          v-if="isOpen"
          class="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-50"
        >
          <ul class="py-1">
            <li
              v-for="option in options"
              :key="option.value"
              @click="selectOption(option)"
              class="px-3 py-2 text-sm text-gray-800 hover:bg-sub-yellow-bg cursor-pointer
                     transition-colors duration-150"
              :class="{ 'bg-sub-yellow-bg text-sub-yellow-p font-medium': option.value === modelValue }"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
import Typography from './Typography.vue'
  
  interface DropdownOption {
    value: string
    label: string
  }
  
  interface Props {
    modelValue: string
    options: DropdownOption[]
  }
  
  interface Emits {
    (e: 'update:modelValue', value: string): void
  }
  
  const props = defineProps<Props>()
  const emit = defineEmits<Emits>()
  
  const isOpen = ref(false)
  const dropdownRef = ref<HTMLElement>()
  
  const selectedOption = computed(() => {
    return props.options.find(option => option.value === props.modelValue) || props.options[0]
  })
  
  function toggleDropdown() {
    isOpen.value = !isOpen.value
  }
  
  function selectOption(option: DropdownOption) {
    emit('update:modelValue', option.value)
    isOpen.value = false
  }
  
  function handleBlur(event: FocusEvent) {
    // 클릭한 요소가 드롭다운 컨테이너 내부가 아닌 경우에만 닫기
    const relatedTarget = event.relatedTarget as HTMLElement
    if (!relatedTarget || !dropdownRef.value?.contains(relatedTarget)) {
      setTimeout(() => {
        isOpen.value = false
      }, 150)
    }
  }
  </script>