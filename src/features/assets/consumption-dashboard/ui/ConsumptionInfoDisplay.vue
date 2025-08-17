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

const props = withDefaults(defineProps<{
  amount?: string | number | null
  date?: string | null
  type: 'current' | 'estimated' | 'today'
}>(), {
  amount: '0원',
  date: ''
})

function normalizeAmount(a: unknown): string {
  if (
    a === undefined || a === null ||
    a === '' ||
    a === 'undefined' || a === 'null'
  ) return '0원'

  if (typeof a === 'number' && Number.isFinite(a)) {
    return `${Math.floor(a).toLocaleString()}원`
  }

  const s = String(a)
  const parsed = Number(s.replace(/[^\d.-]/g, ''))
  if (Number.isFinite(parsed)) {
    return `${Math.floor(parsed).toLocaleString()}원`
  }

  return s || '0원'
}

const safeAmount = computed(() => normalizeAmount(props.amount))
const safeDate = computed(() => {
  const d = props.date
  if (d === undefined || d === null || d === '' || d === 'undefined' || d === 'null') return ''
  return d
})

const router = useRouter()
function handleClick() {
  if (props.type === 'estimated') return
  router.push({ path: '/assets/consumption/detail', query: { type: props.type } })
}
</script>