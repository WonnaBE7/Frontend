<template>
    <CardBox>
        <img
            v-if="finImage"
            :src="finImage"
            alt="성향 이미지"
            class="w-full p-4"
        >
        <Typography type="Body1">{{label}}</Typography>
        <Typography type="Small2">{{descript}}</Typography>
    </CardBox>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import CardBox from '../atoms/Card.vue'
import Typography from '../atoms/Typography.vue'
import { finTypeImages } from '@/shared/assets/fintype'

const props = defineProps({
    label : String,
    descript : String
})

const finImage = computed(() => {
  const image = finTypeImages[props.label || '']
  if (!image) console.warn(`${props.label}에 대한 이미지가 없습니다.`)
  return image
})
</script>