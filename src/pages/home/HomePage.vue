<template>
  <AppLayout>
    <CardBox>
      <h2 class="font-bold text-lg mb-2">메인 페이지</h2>
    </CardBox>
    
    <LabelInput  label="이름"></LabelInput>
    <LabelInput  label="이메일"></LabelInput>
    
    <Button customClass="bg-sub-yellow-p text-black hover:bg:sub-yellow-bg">
      노란 버튼
    </Button>
    <Button customClass="bg-gray-50 text-black border border-gray-500 hover:bg:gray-100">
      하얀 버튼
    </Button>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/atoms/LabelInput.vue'
import CardBox from '@/shared/ui/atoms/CardBox.vue'
</script>