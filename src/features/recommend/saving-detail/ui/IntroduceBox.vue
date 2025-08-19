<template>
    <Card
        class="bg-white border border-gray-150"
    >
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4"> 상품 개요</IconLabel>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_14_140" >예적금 이름 </Typography>
            <Typography type="M_14_140" class="text-sub-orange-p" >{{data.productName}}</Typography>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">Match Score</Typography>
            <div class="flex flex-row items-center gap-2">
                <component :is="Star" class="fill-sub-orange-p text-sub-yellow-p w-4"/>
                <Typography type="B_14_140">{{data.score}}</Typography>   
            </div>
        </div>
        <div class="flex flex-row w-full justify-between items-center mb-2">
            <Typography type="M_12_140">금리</Typography>
            <Typography type="B_12_140" class="text-sub-orange-p">{{data.interestRate}}</Typography>
        </div>
        <div class="flex flex-row w-full justify-between mb-4">
            <Typography type="M_12_140">최대 금리</Typography>
            <Typography type="B_12_140" class="text-sub-green-p">{{data.maxInterestRate}}</Typography>
        </div>
        <Typography type="M_12_140" class="w-full">{{data.benefitSummary}}</Typography>
    </Card>
</template>
<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import { MessageCircle, Star } from 'lucide-vue-next';
import Typography from '@/shared/ui/atoms/Typography.vue';
import type { SavingsProductInfo } from '@/entities/recommend/recommend.entity';

const props = defineProps<{
    productInfo : SavingsProductInfo
}>()

const data = props.productInfo

</script>