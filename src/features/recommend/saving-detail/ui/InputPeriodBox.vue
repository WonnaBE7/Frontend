<template>
    <Card class="bg-white border border-gray-150">
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">적금 기간</IconLabel>
        <Input label="적금 기간" v-model="savingPeriod" class="w-full"/> 
        <Typography type="M_12_120" class="w-full text-sub-orange-p mt-1 p-2 bg-sub-orange-bg border border-sub-orange-p">
            목표 기간 : {{ parseInt(savingPeriod || '0').toLocaleString() }}개월
        </Typography>
    </Card>
</template>

<script setup lang="ts">
import Typography from '@/shared/ui/atoms/Typography.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import Input from '@/shared/ui/atoms/Input.vue';
import {  MessageCircle } from 'lucide-vue-next';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';

const savingPeriod = defineModel<string>()

</script>