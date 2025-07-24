<template>
  <div>
    <div class="flex justify-center w-full mb-4 rounded-full">
      <Tag>{{ selected.length }}/3 선택됨</Tag>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="type in types"
        :key="type.label"
        @click="toggleSelect(type.label)"
        :class="[
          'cursor-pointer transition rounded-xl',
          selected.includes(type.label) ? 'ring-2 ring-yellow-400' : ''
        ]"
      >
        <Card>
          <FinTypeColCard
            :label="type.label"
            :descript="type.descript"
          />
        </Card>
      </div>
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
import { finTypes } from '@/entities/finType/finTypes.ts'

const selected = ref<string[]>([])

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

const submit = () => {
  console.log(selected.value);
}

const submitNowMe = () => {
  emit('submit-nowme')
}

const types = finTypes
</script>