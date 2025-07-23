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
    H1: { size: 'text-h1', weight: 'font-bold' },
    H2: { size: 'text-h2', weight: 'font-medium' },
    H3: { size: 'text-h3', weight: 'font-bold' },
    H4: { size: 'text-h4', weight: 'font-bold' },
    Subtitle: { size: 'text-subtitle', weight: 'font-bold' },
    Body1: { size: 'text-body-1', weight: 'font-bold' },
    Body2: { size: 'text-body-2', weight: 'font-medium' },
    Body3: { size: 'text-body-3', weight: 'font-medium' },
    Body4: { size: 'text-body-4', weight: 'font-bold' },
    Body5: { size: 'text-body-5', weight: 'font-medium' },
    Small1: { size: 'text-small-1', weight: 'font-bold' },
    Small2: { size: 'text-small-2', weight: 'font-medium' },
    Small3: { size: 'text-small-3', weight: 'font-bold' },
    Small4: { size: 'text-small-4', weight: 'font-medium' },
    Small5: { size: 'text-small-5', weight: 'font-bold' },
    Small6: { size: 'text-small-6', weight: 'font-medium' }
  }
  
  const { size, weight } = fontMap[props.type] || { size: 'text-base', weight: '' }
  const fontSizeClass = size
  const fontWeightClass = weight
  </script>