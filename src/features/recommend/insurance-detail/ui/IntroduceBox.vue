<template>
    <Card
        class="bg-white border border-gray-150"
    >
        <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4"> 상품 개요</IconLabel>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">Match Score</Typography>
            <div class="flex flex-row items-center gap-2">
                <component :is="Star" class="fill-sub-orange-p text-sub-yellow-p w-4"/>
                <Typography type="B_14_140">{{data.matchScore}}</Typography>   
            </div>
        </div>
        <div class="flex flex-row w-full justify-between mb-2">
            <Typography type="M_12_140">주요 혜택(prefer)</Typography>
            <Typography type="B_12_140" class="text-sub-orange-p">{{data.mainBenefit}}</Typography>
            
        </div>
        <div class="flex flex-row w-full justify-between mb-4">
            <Typography type="M_12_140">금리(base_rate)</Typography>
            <Typography type="B_12_140" class="text-sub-green-p">{{data.benefitRate}}</Typography>
        </div>
        <Typography type="M_12_140">{{data.description}}</Typography>
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