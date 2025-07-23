<template>
    <LabelInput label="이름" class="mb-4"/>
    <LabelInput label="이메일" class="mb-4"/>
    <LabelInput label="비밀번호" class="mb-8"/>
    <Card class="p-4">
      <div class="flex w-full justify-between items-center mb-2">
        <Typography type="M_14_120">약관 동의</Typography>
        <div class="flex flex-row gap-2">
            <input type="checkbox" v-model="allChecked" @change="toggleAll" />
            <Typography type="M_14_120">전체동의</Typography>
        </div>
      </div>
      <hr class="mb-2" />
      <div v-for="(term, index) in terms" :key="index" class="flex w-full justify-startitems-center mb-2">
        <input
          type="checkbox"
          :value="term.id"
          v-model="checked"
          @change="syncAllChecked"
          class="mb-2"
        />
        <Typography 
          type="M_14_120"
          class="ml-2 mb-2"
          :class="term.required ? 'text-red-500' : 'text-blue-500'"
        >
          [{{ term.required ? '필수' : '선택' }}] 
        </Typography>
        <Typography type="M_14_120" class="ml-1 mb-2">{{ term.label }}</Typography>
      </div>
    </Card>
    <Button class="mt-4">회원가입 및 자산 연동하기</Button>
  </template>
  
  <script setup lang="ts">
  import Button from '@/shared/ui/atoms/Button.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
  import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
  import { ref, computed, watch } from 'vue'
  
  interface Term {
    id: string
    label: string
    required: boolean
  }
  
  const terms: Term[] = [
    { id: 'service', label: '서비스 이용약관', required: true },
    { id: 'privacy', label: '개인정보 수집 및 이용 동의서', required: true },
    { id: 'asset', label: '자산 정보 수집 및 연동 동의서', required: true },
    { id: 'credit', label: '개인신용정보 제3자 제공 동의서', required: true },
    { id: 'marketing', label: '마케팅 활용 동의서', required: false },
  ]
  
  const checked = ref<string[]>([])
  const allChecked = computed({
    get: () => checked.value.length === terms.length,
    set: (val: boolean) => {
      checked.value = val ? terms.map(term => term.id) : []
    }
  })
  
  const toggleAll = () => {
    allChecked.value = !allChecked.value
  }
  
  const syncAllChecked = () => {
    if (checked.value.length === terms.length) {
      allChecked.value = true
    }
  }
  
  const isValid = computed(() => {
    return terms.filter(t => t.required).every(t => checked.value.includes(t.id))
  })
  
  defineExpose({ checked, isValid })
  </script>