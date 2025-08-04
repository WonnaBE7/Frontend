<template>
    <Typography type="B_18_120">나의 금융 WonnaBE</Typography>
    <Typography type="M_10_120" class="text-gray-500">확인하고 싶은 WonnaBE 선택해보세요</Typography>
  
    <div class="grid grid-cols-3 gap-4 mt-4">
      <Card 
        v-for="type in userProfile?.wonnaBE" 
        @click="selectWonnaBE(type)"
        :key="type" 
        class="bg-white border border-gray-150">
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
  import { financialTendencyList, finTypeIcons } from '@/shared/constants/finTypes.constants'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { useUserProfileStore } from '@/entities/user/user.store'
  import { computed } from 'vue'
  
  const userStore = useUserProfileStore()
  const userProfile = computed(() => userStore.profile)
  const finTypeDescriptMap: Record<string, string> = Object.fromEntries(
    financialTendencyList.map(item => [item.name, item.description])
  )

  const finTypeIdMap: Record<string, number> = Object.fromEntries(
    financialTendencyList.map((item) => [item.name, item.id])
  )

  function selectWonnaBE(typeName: string) {
    const typeId = finTypeIdMap[typeName]
    if (!typeId) {
      console.warn(`❌ 해당 name에 대응되는 id가 없습니다: ${typeName}`)
      return
    }
    userStore.setSelectedFinType({
      id: typeId,
      name: typeName,
    })
  }
  </script>