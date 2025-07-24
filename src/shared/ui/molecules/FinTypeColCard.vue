<template>
    <div class="flex flex-col items-center justify-center">
        <img
            v-if="finImage"
            :src="finImage"
            alt="성향 이미지"
            class="w-full p-4"
        >
        <Typography type="B_14_140">{{label}}</Typography>
        <Typography type="M_12_120" class="text-gray-500">{{descript}}</Typography>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Typography from '../atoms/Typography.vue'
import { finTypeImages } from '@/shared/assets/fintype'

const props = defineProps({
    label : String,
    descript : String || ""
})

const finImage = computed(() => {
  const image = finTypeImages[props.label || '']
  if (!image) console.warn(`${props.label}에 대한 이미지가 없습니다.`)
  return image
})
</script>