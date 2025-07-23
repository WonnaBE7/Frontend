<template>
  <AppLayout>
    <Card>
      <h2 class="font-bold text-lg mb-2">메인 페이지</h2>
    </Card>
    
    <LabelInput  label="이름"></LabelInput>
    <LabelInput  label="이메일"></LabelInput>
    
    <div class="flex flex-row w-full gap-4">
      <FinTypeCard label="자린고비형" descript="돈없어요 ㅠ"></FinTypeCard>
      <FinTypeCard label="YOLO 형" descript="즐겨요 ㅠ"></FinTypeCard>
      <FinTypeCard label="자린고비형" descript="돈없어요 ㅠ"></FinTypeCard>
    </div>

    <Card>
      <Input label="테스트"/>
    </Card>

    <Tag>
      여행
    </Tag>
    <NoBorderTag color="bg-sub-yellow-p text-white">
      추가 추천
    </NoBorderTag>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/shared/layout/AppLayout.vue'
import LabelInput from '@/shared/ui/molecules/LabelInput.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import FinTypeCard from '@/shared/ui/molecules/FinTypeCard.vue'
import Input from '@/shared/ui/atoms/Input.vue'
import Tag from '@/shared/ui/atoms/Tag.vue'
import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue'
</script>