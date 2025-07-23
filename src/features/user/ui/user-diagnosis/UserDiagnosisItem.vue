<template>
  <Card>
    <div class="w-full flex justify-between mb-4">
      <Tag>{{ tag }}</Tag>
      <Typography type="M_12_120">{{ index }}/{{ total }}</Typography>
    </div>
    <Typography type="M_14_120" class="w-full px-1 mb-4">{{ label }}</Typography>
    <div class="w-full flex justify-between p-1">
      <label
        v-for="choice in choices"
        :key="choice.value"
        class="flex flex-col items-center cursor-pointer"
      >
        <input
          type="radio"
          class="sr-only"
          :name="`q-${index}`"
          :value="choice.value"
          v-model="selected"
        />
        <div
          class="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center"
        >
          <div
            v-if="selected === choice.value"
            class="w-2.5 h-2.5 rounded-full bg-sub-yellow-p"
          ></div>
        </div>
        <Typography type="M_12_120" class="mt-1">{{ choice.label }}</Typography>
      </label>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'

defineProps<{
  tag: string
  label: string
  index: number
  total: number
  choices: { value: number; label: string }[]
}>()

const selected = ref<number | null>(null)
</script>