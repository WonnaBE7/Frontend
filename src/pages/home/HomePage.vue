<template>
  <AppLayout>
    <Card>
      <h2 class="font-bold text-lg mb-2">메인 페이지</h2>
    </Card>
    
    <LabelInput  label="이름"></LabelInput>
    <LabelInput  label="이메일"></LabelInput>
    
    <Button customClass="bg-sub-yellow-p text-black hover:bg:sub-yellow-bg">
      노란 버튼
    </Button>
    <Button customClass="bg-gray-50 text-black border border-gray-500 hover:bg:gray-100">
      하얀 버튼
    </Button>
    <div class="flex flex-row w-full gap-4">
      <FinTypeCard label="자린고비형" descript="돈없어요 ㅠ"></FinTypeCard>
      <FinTypeCard label="YOLO 형" descript="즐겨요 ㅠ"></FinTypeCard>
      <FinTypeCard label="자린고비형" descript="돈없어요 ㅠ"></FinTypeCard>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import Button from '@/shared/ui/atoms/Button.vue'
import LabelInput from '@/shared/ui/atoms/LabelInput.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import FinTypeCard from '@/shared/ui/molecules/FinTypeCard.vue'
</script>