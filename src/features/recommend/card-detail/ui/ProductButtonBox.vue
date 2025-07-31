<template>
    <Card class="bg-white">
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">연결할 계좌</IconLabel>
        <Input label="연결할 계좌" :v-model="linkedAccount" class="w-full"/> 
    </Card>
    <div class="flex flex-row gap-4 mb-4">
        <Button
            class="flex-4"
        >상품 선택하기</Button>
        <Button 
            @click ="test"
            class="bg-white border border-gay-150 flex-1"
        >
            <component :is="Heart"></component>
        </Button>
    </div>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Input from '@/shared/ui/atoms/Input.vue';
import Button from '@/shared/ui/atoms/Button.vue';
import { Heart, MessageCircle } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';

const route = useRoute()
const savingsId = route.query.productId as string
const linkedAccount = ref(0);

function test(){
    console.log(savingsId)
}
</script>