<template>
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
import Button from '@/shared/ui/atoms/Button.vue';
import { Heart } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const route = useRoute()
const savingsId = route.query.productId as string

function test(){
    console.log(savingsId)
}
</script>