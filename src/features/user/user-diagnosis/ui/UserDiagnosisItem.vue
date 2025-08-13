<template>
  <Card  v-if="tag !== '직업'" class="bg-white border border-gray-150">
    <div class="w-full flex justify-between mb-4 md:mb-6">
      <Tag>{{ tag }}</Tag>
      <Typography type="M_12_120">{{ index }}/{{ total }}</Typography>
    </div>
    <Typography type="M_14_120" class="w-full px-1 mb-6 md:mb-8">{{ label }}</Typography>
      <div 
      class="w-full flex p-1"
      :class="choices.length > 3 ?  'justify-between' : 'ml-2 !justify-start gap-12'">
        <label
          v-for="choice in choices"
          :key="choice.id"
          class="flex flex-col items-center cursor-pointer"
        >
        <input
          type="radio"
          class="sr-only"
          :name="`q-${index}`"
          :value="choice.id"                             
          :checked="selected === choice.id"
          @change="() => emit('update:selected', choice.id)" 
        />
          <div
            class="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-gray-400 flex items-center justify-center"
          >
            <div
              v-if="selected === choice.id"
              class="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-sub-yellow-p"
            ></div>
          </div>
          <Typography type="M_12_120" class="mt-2 md:mt-3">{{ choice.label }}</Typography>
        </label>
      </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'

defineProps<{
  tag: string
  label: string
  index: number
  total: number
  choices: { id:number, value: number | string; label: string }[]
  selected: string | number | boolean | null | undefined
}>()

const emit = defineEmits<
  (e: 'update:selected', value: boolean | number | string )=> void
>()
</script>