<template>
    <Card>
        <Typography type="B_18_120">자산 상세 내역</Typography>
        <div
            v-for="item in categories"
            :key ="item.assetCategory"
        >

        </div>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import { mockAssetAnalysis } from '@/entities/assets/assets.mock'

const categories = mockAssetAnalysis.categories
</script>