<template>
  <component
    :is="tag"
    :class="[
      'font-pretendard',
      ...fontSizeClass,
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
const fontMap: Record<string, { size: string[]; weight: string }> = {
  B_28_160: {
    size: ['text-r-28-160', 'sm:text-r-30-160', 'md:text-r-32-160'],
    weight: 'font-bold'
  },
  B_22_160: {
    size: ['text-r-22-160', 'sm:text-r-24-160', 'md:text-r-26-160'],
    weight: 'font-bold'
  },
  M_22_160: {
    size: ['text-r-22-160', 'sm:text-r-24-160', 'md:text-r-26-160'],
    weight: 'font-medium'
  },
  B_20_160: {
    size: ['text-r-20-160', 'sm:text-r-22-160', 'md:text-r-24-160'],
    weight: 'font-bold'
  },
  B_20_120: {
    size: ['text-r-20-120', 'sm:text-r-22-120', 'md:text-r-24-120'],
    weight: 'font-bold'
  },
  B_18_120: {
    size: ['text-r-18-120', 'sm:text-r-20-120', 'md:text-r-22-120'],
    weight: 'font-bold'
  },
  B_16_160: {
    size: ['text-r-16-160', 'sm:text-r-18-160', 'md:text-r-20-160'],
    weight: 'font-bold'
  },
  M_16_160: {
    size: ['text-r-16-160', 'sm:text-r-18-160', 'md:text-r-20-160'],
    weight: 'font-medium'
  },
  B_16_140: {
    size: ['text-r-16-140', 'sm:text-r-18-140', 'md:text-r-20-140'],
    weight: 'font-bold'
  },
  M_16_140: {
    size: ['text-r-16-140', 'sm:text-r-18-140', 'md:text-r-20-140'],
    weight: 'font-medium'
  },
  B_16_120: {
    size: ['text-r-16-120', 'sm:text-r-18-120', 'md:text-r-20-120'],
    weight: 'font-bold'
  },
  M_16_120: {
    size: ['text-r-16-120', 'sm:text-r-18-120', 'md:text-r-20-120'],
    weight: 'font-medium'
  },
  B_14_140: {
    size: ['text-r-14-140', 'sm:text-r-18-140', 'md:text-r-22-140'],
    weight: 'font-bold'
  },
  B_14_160: {
    size: ['text-r-14-160', 'sm:text-r-16-160', 'md:text-r-18-160'],
    weight: 'font-bold'
  },
  M_14_160: {
    size: ['text-r-14-160', 'sm:text-r-16-160', 'md:text-r-18-160'],
    weight: 'font-medium'
  },
  M_14_140: {
    size: ['text-r-14-140', 'sm:text-r-16-140', 'md:text-r-18-140'],
    weight: 'font-medium'
  },
  B_14_120: {
    size: ['text-r-14-120', 'sm:text-r-16-120', 'md:text-r-18-120'],
    weight: 'font-bold'
  },
  M_14_120: {
    size: ['text-r-14-120', 'sm:text-r-16-120', 'md:text-r-18-120'],
    weight: 'font-medium'
  },
  B_12_140: {
    size: ['text-r-12-140', 'sm:text-r-14-140', 'md:text-r-16-140'],
    weight: 'font-bold'
  },
  M_12_140: {
    size: ['text-r-12-140', 'sm:text-r-14-140', 'md:text-r-16-140'],
    weight: 'font-medium'
  },
  B_12_120: {
    size: ['text-r-12-120', 'sm:text-r-14-120', 'md:text-r-16-120'],
    weight: 'font-bold'
  },
  M_12_120: {
    size: ['text-r-12-120', 'sm:text-r-14-120', 'md:text-r-16-120'],
    weight: 'font-medium'
  },
  B_10_120: {
    size: ['text-r-10-120', 'sm:text-r-12-120', 'md:text-r-14-120'],
    weight: 'font-bold'
  },
  M_10_120: {
    size: ['text-r-10-120', 'sm:text-r-12-120', 'md:text-r-14-120'],
    weight: 'font-medium'
  }
}

const { size, weight } = fontMap[props.type] || { size: 'text-base', weight: '' }
const fontSizeClass = size
const fontWeightClass = weight
</script>