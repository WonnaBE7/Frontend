<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="type in types" :key="type.label">
      <Card>
        <FinTypeColCard
          :label="type.label"
          :descript="type.descript"
        />
      </Card>
    </div>
  </div>

  <!-- 마지막 성향 정보 카드 -->
  <Card class="mt-2 justify-start">
    <Typography class="w-full" type="B_16_120">이번 달 현황</Typography>
    <FinTypeRowCard :label="lastType.label" :descript="lastType.descript"></FinTypeRowCard>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import { finTypeMonth } from '@/entities/finType/finTypes'
import FinTypeRowCard from '@/shared/ui/molecules/FinTypeRowCard.vue'

// 전체 타입 목록
const types = finTypeMonth

// 마지막 타입
const lastType = computed(() => types.at(-1)!)
</script>