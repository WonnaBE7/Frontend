<template>
  <component
    :is="tag"
    :class="[
      'font-pretendard',
      fontSizeClass,
      fontWeightClass,
      customClass
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  type: { type: String, required: true }, // 예: H1, Body2, Small4
  tag: { type: String, default: 'p' }, // 기본은 p 태그로
  customClass: { type: String, default: '' }
})

// 매핑 정의
const fontMap: Record<string, { size: string; weight: string }> = {
  B_22_160: { size: 'text-h1', weight: 'font-bold' },
  M_22_160: { size: 'text-h2', weight: 'font-medium' },
  B_20_160: { size: 'text-h3', weight: 'font-bold' },
  B_20_120: { size: 'text-h4', weight: 'font-bold' },
  B_18_120: { size: 'text-subtitle', weight: 'font-bold' },
  B_16_160: { size: 'text-body-lg-1', weight: 'font-bold' },
  M_16_160: { size: 'text-body-lg-2', weight: 'font-medium' },
  B_16_140: { size: 'text-body-lg-3', weight: 'font-bold' },
  M_16_140: { size: 'text-body-lg-4', weight: 'font-medium' },
  B_16_120: { size: 'ttext-body-lg-5', weight: 'font-bold' },
  M_16_120: { size: 'ttext-body-lg-6', weight: 'font-medium' },
  B_14_140: { size: 'text-body-1', weight: 'font-bold' },
  B_14_160: { size: 'text-body-2', weight: 'font-bold' },
  M_14_160: { size: 'text-body-2', weight: 'font-medium' },
  M_14_140: { size: 'text-body-3', weight: 'font-medium' },
  B_14_120: { size: 'text-body-4', weight: 'font-bold' },
  M_14_120: { size: 'text-body-5', weight: 'font-medium' },
  B_12_140: { size: 'text-small-1', weight: 'font-bold' },
  M_12_140: { size: 'text-small-2', weight: 'font-medium' },
  B_12_120: { size: 'text-small-3', weight: 'font-bold' },
  M_12_120: { size: 'text-small-4', weight: 'font-medium' },
  B_10_120: { size: 'text-small-5', weight: 'font-bold' },
  M_10_120: { size: 'text-small-6', weight: 'font-medium' }
}

const { size, weight } = fontMap[props.type] || { size: 'text-base', weight: '' }
const fontSizeClass = size
const fontWeightClass = weight
</script>