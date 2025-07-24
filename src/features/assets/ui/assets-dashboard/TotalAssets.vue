<template>
    <Card class="bg-sub-yellow-bg">
        <div class="w-full">
            <div class="flex flex-row w-full justify-between">
                <Typography type="M_16_120" class="w-full mb-2 text-gray-400">총 자산 현황</Typography> 
                <IconLabel :icon="TrendingUp" class="w-full flex justify-end text-gray-400">{{ meta.changeRate }}%</IconLabel>
            </div>
            <Typography type="B_22_160" class="mb-2">
                ₩{{ meta.totalAssets.toLocaleString() }}
            </Typography>
            <Typography type="M_12_140" class="text-gray-400">
                지난달 대비  {{ meta.changeAmount >= 0 ? '+' : '-' }}{{ meta.changeAmount.toLocaleString() }}원
            </Typography>
        </div>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import { mockAssetAnalysis } from '@/entities/assets/assets.mock'
import Typography from '@/shared/ui/atoms/Typography.vue';
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import { TrendingUp } from 'lucide-vue-next';

const meta = mockAssetAnalysis.meta
</script>