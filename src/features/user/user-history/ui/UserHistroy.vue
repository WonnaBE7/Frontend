<template>
  <div class="grid grid-cols-3 gap-2">
    <div v-for="type in types" :key="type.label">
      <Card class="bg-white border border-gray-150">
        <FinTypeColCard
          :label="type.label"
          :descript="type.descript"
        />
      </Card>
    </div>
  </div>

  <Card class="mt-2 justify-start bg-white border border-gray-150">
    <Typography class="w-full" type="B_16_120">이번 달 현황</Typography>
    <FinTypeRowCard :label="lastType.label" :descript="lastType.descript"></FinTypeRowCard>
  </Card>

  <Button class="flex tems-center justify-center mb-4" @click="goToDiagnosis">
    <IconLabel :icon="RefreshCw">재진단 하기</IconLabel>
  </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import FinTypeRowCard from '@/shared/ui/molecules/FinTypeRowCard.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import { RefreshCw } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { finTypeMonth } from '@/shared/constants/finTypes.constants'

const types = finTypeMonth

const lastType = computed(() => types.at(-1)!)
const router = useRouter()

function goToDiagnosis() {
    router.push({ path: '/user/diagnosis'})
}
</script>