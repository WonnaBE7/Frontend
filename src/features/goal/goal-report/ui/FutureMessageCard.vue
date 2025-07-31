<template>
  <div
    :class="[
      modal ?'fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center h-full' : 'w-full'
    ]"
  >
    <Card class="!max-w-[320px] md:!max-w-[600px] h-[600px] bg-gradient-to-br from-[#302DAC] to-[#5754DA] text-white rounded-xl p-6 text-center relative">
      <button
        v-if="modal"
        class="absolute top-2 right-4 text-white text-xl"
        @click="emit('close')"
      >
        ✕
      </button>

      <Card class="bg-white bg-opacity-10 !w-auto !px-4 !py-4 md:!px-8 md:!py-8 mb-4">
        <Typography type="B_28_160">
          <Sparkles class="inline w-8 h-8" />
        </Typography>
      </Card>

      <Typography type="B_22_160" class="mb-4">
        미래의 나에게서 온 메시지
      </Typography>

      <Card class="bg-white bg-opacity-10">
        <Typography type="B_16_120" class="leading-relaxed whitespace-pre-line">
          {{ message }}
        </Typography>
      </Card>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { Sparkles } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    message: string
    modal?: boolean
  }>(),
  {
    modal: true
  }
)

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>