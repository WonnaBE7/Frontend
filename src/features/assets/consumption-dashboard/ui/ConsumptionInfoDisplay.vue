<template>
  <div
    class="text-center w-full mb-2 sm:mb-4"
    :class="type !== 'estimated' ? 'cursor-pointer' : 'cursor-not-allowed'"
    @click="handleClick"
  >
    <Typography type="B_22_160" class="text-gray-900 mb-2 sm:mb-3 md:mb-4">
      {{ safeAmount }}
    </Typography>
    <Typography type="M_12_120" class="text-gray-500">
      {{ safeDate }} 기준
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Typography from '@/shared/ui/atoms/Typography.vue'

// 1) 프롭스를 선택형으로 바꾸고 기본값을 지정
const props = withDefaults(defineProps<{
  amount?: string | number
  date?: string
  type: 'current' | 'estimated' | 'today'
}>(), {
  amount: '0원',
  date: ''
})

// 2) 숫자/문자/의미없는 문자열 모두 안전하게 처리
const safeAmount = computed(() => {
  const v = props.amount
  if (typeof v === 'number') return `${v.toLocaleString()}원`
  if (v == null || v === '' || v === 'undefined' || v === 'null') return '0원'
  return v
})

const safeDate = computed(() => {
  const d = props.date
  if (d == null || d === 'undefined' || d === 'null') return ''
  return d
})

const router = useRouter()
function handleClick() {
  if (props.type === 'estimated') return
  router.push({ path: '/assets/consumption/detail', query: { type: props.type } })
}
</script>