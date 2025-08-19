<template>
  <Card class="p-4 bg-white border border-gray-150 w-full">
    <div v-if="props.modal"class="w-full flex items-center justify-end mb-8 " variant="outline" @click="emit('close')">
        <X class="w-4 h-4 mr-1" /> 
    </div>
    <div class="flex w-full justify-between items-center mb-2">
      <Typography type="M_14_120">약관 동의</Typography>
      <div class="flex flex-row gap-2">
        <input type="checkbox" :checked="allChecked" @change="toggleAll" />
        <Typography type="M_14_120">전체동의</Typography>
      </div>
    </div>
    <hr class="mb-2" />

    <div
      v-for="(term, index) in terms"
      :key="index"
      class="flex w-full justify-start items-center mb-2"
    >
      <input
        type="checkbox"
        :value="term.id"
        v-model="checkedInternal"
        @change="syncAllChecked"
        class="mb-2"
      />
      <Typography
        type="M_14_120"
        class="ml-2 mb-2"
        :class="term.required ? 'text-sub-red-p' : 'text-sub-aqua-p'"
      >
        [{{ term.required ? '필수' : '선택' }}]
      </Typography>
      <Typography type="M_14_120" class="ml-1 mb-2">{{ term.label }}</Typography>
    </div>

    
      <Button v-if="props.modal" class="mt-4">
        <div @click="handleKakaoLogin"
          class="flex flex-row items-center justify-center gap-2">
          <MessageCircle class="w-4 h-4 fill-gray-900" />
          카카오 로그인으로 이동하기
        </div>
      </Button>

    
  </Card>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, computed } from 'vue'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import { terms } from '../constants/terms.constants'
import { X , MessageCircle} from 'lucide-vue-next'

const props = defineProps<{
  modal?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:checked', value: string[]): void
  (e: 'close'): void
  (e: 'kakao-login'): void
}>()

const checkedInternal = ref<string[]>([])
const allChecked = ref<boolean>(false)

const isAllRequiredChecked = computed(() =>
  terms.filter(t => t.required).every(t => checkedInternal.value.includes(t.id))
)

watch(
  () => checkedInternal.value,
  (newVal) => {
    allChecked.value = newVal.length === terms.length
    emit('update:checked', newVal)
  },
  { deep: true }
)

const toggleAll = () => {
  if (allChecked.value) {
    checkedInternal.value = []
  } else {
    checkedInternal.value = terms.map(term => term.id)
  }
}

const syncAllChecked = () => {
  allChecked.value = checkedInternal.value.length === terms.length
}

const handleKakaoLogin = () => {
  if (!isAllRequiredChecked.value) {
    alert('필수 약관에 모두 동의해야 카카오 로그인이 가능합니다.')
    return
  }
  emit('kakao-login')
}
</script>