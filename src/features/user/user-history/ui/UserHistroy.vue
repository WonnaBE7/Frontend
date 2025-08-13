<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="type in types" :key="type.typeName">
      <Card class="bg-white border border-gray-150">
        <FinTypeColCard
          :label="type.typeName"
          :descript="type.diagnosedDate"
        />
      </Card>
    </div>
  </div>

  <Card class="mt-2 justify-start bg-white border border-gray-150">
    <Typography class="w-full" type="B_16_120">이번 달 현황</Typography>
    <FinTypeRowCard v-if="lastType" :label="lastType.typeName" :descript="lastType.diagnosedDate"></FinTypeRowCard>
  </Card>

  <Button class="flex tems-center justify-center mb-4" @click="goToDiagnosis">
    <IconLabel :icon="RefreshCw">재진단 하기</IconLabel>
  </Button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import FinTypeRowCard from '@/shared/ui/molecules/FinTypeRowCard.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { RefreshCw } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { getUserNowmeHistory } from '../services/user-history.service'
import { useUserProfileStore } from '@/entities/user/user.store'
import type { UserHistoryResponse } from '@/entities/user/user.entity'

const userStore = useUserProfileStore()
const userId = userStore.profile?.userId
const types = ref<UserHistoryResponse[] | null>(null)

onMounted(async()=>{
  types.value = await getUserNowmeHistory(String(userId))
})

const lastType = computed(() => {
  if (!types.value || types.value.length === 0) return null
  return types.value[types.value.length - 1]
})
const router = useRouter()

function goToDiagnosis() {
    router.push({ path: '/user/diagnosis'})
}
</script>