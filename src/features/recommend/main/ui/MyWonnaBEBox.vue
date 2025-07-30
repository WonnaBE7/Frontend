<template>
    <Typography type="B_18_120">나의 금융 WonnaBE</Typography>
    <Typography type="M_10_120" class="text-gray-500">확인하고 싶은 WonnaBE 선택해보세요</Typography>
  
    <div class="grid grid-cols-3 gap-4 mt-4">
      <Card v-for="type in user.wonnaBE" :key="type" class="bg-white border border-gray-150">
        <FinTypeColCard
          :label="type"
          :descript="finTypeDescriptMap[type]"
          :icon="finTypeIcons[type]"
          class="border-none"
        />
      </Card>
    </div>
  </template>
  
  <script setup lang="ts">
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
  import { mockUserProfile } from '@/entities/user/user.mock'
  import { finTypes, finTypeIcons } from '@/shared/constants/finTypes.constants'
import Card from '@/shared/ui/atoms/Card.vue'
  
  // 유저 정보
  const user = mockUserProfile
  
  // label -> descript 매핑 객체 생성
  const finTypeDescriptMap: Record<string, string> = Object.fromEntries(
    finTypes.map(item => [item.label, item.descript])
  )
  </script>