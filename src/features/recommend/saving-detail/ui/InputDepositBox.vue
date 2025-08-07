<template>
    <Card class="bg-white border border-gray-150">
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">월 입금 가격</IconLabel>
        <Input label="월 입금 금액" v-model="mothlyDeposit" class="w-full"/>
        <Typography type="M_12_120" class="w-full text-sub-orange-p mt-1 p-2 bg-sub-orange-bg border border-sub-orange-p">
            월 입금 금액 : {{ parseInt(mothlyDeposit || '0').toLocaleString() }}원
        </Typography>
    </Card>
</template>

<script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import Input from '@/shared/ui/atoms/Input.vue';
import {  MessageCircle } from 'lucide-vue-next';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';

const mothlyDeposit = defineModel<string>()

</script>