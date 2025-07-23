<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="type in types" :key="type.label">
      <FinTypeCard
        :label="type.label"
        :descript="type.descript"
      />
    </div>
  </div>

  <!-- 마지막 성향 정보 카드 -->
  <Card class="mt-2 justify-start">
    <Typography class="w-full" type="B_16_120">이번 달 현황</Typography>
    <div class="flex flex-row w-full items-center">
      <img
        v-if="finImage"
        :src="finImage"
        alt="성향 이미지"
        class="w-2/5 p-4"
      />
      <div class="w-3/5">
        <Typography type="B_16_120">{{ lastType.label }}</Typography>
        <Typography type="M_14_120" class="text-gray-500">{{ lastType.descript }} 현재</Typography>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FinTypeCard from '@/shared/ui/molecules/FinTypeCard.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import { finTypeMonth } from '@/entities/finType/finTypes'
import { finTypeImages } from '@/shared/assets/fintype'

// 전체 타입 목록
const types = finTypeMonth

// 마지막 타입
const lastType = computed(() => types.at(-1)!)

// 마지막 타입의 이미지
const finImage = computed(() => {
  const image = finTypeImages[lastType.value.label]
  if (!image) console.warn(`${lastType.value.label}에 대한 이미지가 없습니다.`)
  return image
})
</script>