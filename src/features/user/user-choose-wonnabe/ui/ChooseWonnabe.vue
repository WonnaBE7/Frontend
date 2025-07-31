<template>
  <div>
    <div class="flex justify-center w-full mb-4 rounded-full">
      <Tag>{{ selected.length }}/3 선택됨</Tag>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <Card
        v-for="type in types"
        :key="type.id"
        @click="toggleSelect(type.name)"
        :class="[
          'cursor-pointer transition rounded-xl bg-white border border-gray-150',
          selected.includes(type.name) ? 'ring-2 ring-sub-yellow-p' : ''
        ]"
      >
          <FinTypeColCard
            :label="type.name"
            :descript="type.description"
          />
      </Card>
    </div>

    <Button
      class="mt-4 w-full"
      :disabled="selected.length === 0"
      @click="submit"
    >
      워너비 설정 완료
    </Button>

    <Button label="white" class="mt-4 mb-4" @click="submitNowMe">
      선택하지 않고 NowMe로 추천받기
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import { financialTendencyList } from '@/shared/constants/finTypes.constants'
import { updateWonnaBESelections } from '../services/choose-wannabe.service'
import { router } from '@/app/router'

const toggleSelect = (label: string) => {
  if (selected.value.includes(label)) {
    selected.value = selected.value.filter((v) => v !== label)
  } else if (selected.value.length < 3) {
    selected.value.push(label)
  }
}

const emit = defineEmits<{
  (e: 'submit', selected: string[]): void
  (e: 'submit-nowme'): void
}>()


const submitNowMe = () => {
  emit('submit-nowme')
}
const selected = ref<string[]>([])
const types = financialTendencyList 


const getSelectedIds = () => {
  return types
    .filter((t) => selected.value.includes(t.name))
    .map((t) => t.id)
}

const submit = async () => {
  const selectedIds = getSelectedIds()
  console.log(selectedIds)
  try {
    const res = await updateWonnaBESelections({
      selected_wonnabe_ids: selectedIds,
    })
    console.log('✅ 워너비 선택 저장 완료:', res.message)
    router.push('/user')
  } catch (e) {
    console.error('❌ 워너비 선택 저장 실패:', e)
  }
}
</script>