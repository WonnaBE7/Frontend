<template>
  <Card class="bg-white border border-gray-150 p-4">
    <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p">
      주요 특징
    </IconLabel>

    <div class="mt-4 w-full">
      <Typography type="B_12_120" class="mb-1">
        {{ props.maturityInfo.coverageDesc }}
      </Typography>

      <!-- note를 줄바꿈해서 표시 -->
      <ul class="w-full list-disc pl-4">
        <li
          v-for="(line, idx) in formattedNote"
          :key="idx"
          class="mt-1"
        >
          <Typography type="M_12_120">{{ line }}</Typography>
        </li>
      </ul>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MaturityInfo } from '@/entities/recommend/recommend.entity'
import Card from '@/shared/ui/atoms/Card.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { MessageCircle } from 'lucide-vue-next'

const props = defineProps<{
  maturityInfo: MaturityInfo
}>()

// 콤마 기준으로 split 후 trim 처리
const formattedNote = computed(() => {
  if (!props.maturityInfo.note) return []
  return props.maturityInfo.note
    .split(',')
    .map(s => s.trim()) // 앞뒤 공백 제거
    .filter(Boolean)
})
</script>