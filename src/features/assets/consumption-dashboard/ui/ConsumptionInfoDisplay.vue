<template>
  <div
    class="text-center w-full"
    :class="type !== 'estimated' ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'"
    @click="handleClick"
  >
    <Typography type="B_22_160" class="text-black mb-2">
      {{ amount }}
    </Typography>
    <Typography type="M_12_120" class="text-gray-400">
      {{ date }} 기준
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Typography from '@/shared/ui/atoms/Typography.vue'

const router = useRouter()

const props = defineProps<{
  amount: string
  date: string
  type: 'current' | 'estimated' | 'today'
}>()

function handleClick() {
  if (props.type === 'estimated') return
  router.push({ path: '/assets/consumption/detail', query: { type: props.type } })
}
</script>