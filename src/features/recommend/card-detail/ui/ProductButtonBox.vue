<template>
    <div class="flex flex-row gap-4 mb-4"> 
        <Button
            class="flex-4"
            @click="requestCard"
        >
        상품 선택하기
        </Button>
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
import { fetchWish } from '../../wish-list/service/add-remove-wish.service';
import type { CardApplicationRequest } from '@/entities/recommend/recommend.entity';
import { postRequestCard } from '../service/request-card.service';

const props = defineProps<{
    request : CardApplicationRequest
}>()

async function requestCard(){
    console.log(props.request)
    const res = await postRequestCard(props.request)
    console.log(res)
}
const route = useRoute()
const cardsId = route.query.productId as string
const type = route.query.productType as string
async function test() {
    console.log(cardsId, type)
    const wishdata = {
        action: 'add', //바꿔야할 것 이것도 상품에 추가하는 boolean 값 들어오도록 하면 바꾸기
        productType: type,
        productId: cardsId
    }
    await fetchWish(wishdata)
}
</script>