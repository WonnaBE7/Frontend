<template>
    <Card
        class="bg-white border border-gray-150"
    >
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4"> 상품 개요</IconLabel>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_14_140" >보험 이름 </Typography>
            <Typography type="M_14_140" class="text-sub-orange-p" >{{data.productName}}</Typography>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_14_140" >보험 회사 </Typography>
            <Typography type="M_14_140" class="text-sub-orange-p" >{{data.providerName}}</Typography>
        </div>
        <div class="flex flex-row w-full items-center justify-between mb-2">
            <Typography type="M_12_140">Match Score</Typography>
            <div class="flex flex-row items-center gap-2">
                <component :is="Star" class="fill-sub-orange-p text-sub-yellow-p w-4 h-4"/>
                <Typography type="B_14_140">{{data.score}}</Typography>   
            </div>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">보장종류</Typography>
            <Typography type="B_12_140" class="text-sub-orange-p">{{data.coverageType}}</Typography>
            
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">보장한도</Typography>
            <Typography type="B_12_140" class="text-sub-green-p">{{data.coverageLimit}}</Typography>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">자기부담금</Typography>
            <Typography type="B_12_140" class="text-sub-orange-p">{{data.deductible}}</Typography>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">평균 월보험료</Typography>
            <Typography type="B_12_140" class="text-sub-orange-p">{{data.average_premium}}</Typography>
        </div>
        
    </Card>
</template>
<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import { MessageCircle, Star } from 'lucide-vue-next';
import Typography from '@/shared/ui/atoms/Typography.vue';
import type { InsuranceProductInfo } from '@/entities/recommend/recommend.entity';

const props = defineProps<{
    productInfo : InsuranceProductInfo
}>()

  const data = props.productInfo

</script>