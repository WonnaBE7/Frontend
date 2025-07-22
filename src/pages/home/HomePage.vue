<template>
  <AppLayout>
    <CardBox>
      <h2 class="font-bold text-lg mb-2">메인 페이지</h2>
    </CardBox>
    <Button>
      노란 버튼
    </Button>
    <Button customClass="bg-gray-900 text-white hover:bg-gray-500">
      검정 버튼
    </Button>
    <LabelInput>이름</LabelInput>
    <LabelInput>이메일</LabelInput>
    
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import CardBox from '@/shared/ui/atoms/CardBox.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/atoms/LabelInput.vue'
</script>