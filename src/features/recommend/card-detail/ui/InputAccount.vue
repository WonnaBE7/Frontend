<template>
    <Card class="bg-white border border-gray-150">
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">연결할 계좌</IconLabel>
        <Input label="연결할 계좌" v-model="linkedAccount" class="w-full"/> 
    </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Input from '@/shared/ui/atoms/Input.vue';
import {  MessageCircle } from 'lucide-vue-next';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';

const linkedAccount = defineModel<string>()

</script>