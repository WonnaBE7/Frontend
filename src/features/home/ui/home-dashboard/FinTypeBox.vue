<template>
    <Card>
        <IconLabel :icon="TrendingUp" :iconClass="'text-sub-yellow-p'">
            현재의 나,
            <span class="ml-2 text-sub-yellow-p">NowME</span>
        </IconLabel>
        <FinTypeRowCard label="자린고비형" descript="불필요한 소비를 철저히 줄이고 최대한 저축하는 성향"></FinTypeRowCard>
        <IconLabel :icon="TrendingUp" :iconClass="'text-sub-yellow-p'">
            되고 싶은 나,
            <span class="ml-2 text-sub-yellow-p">WonnaBE</span>
        </IconLabel>
        <div class="flex flex-row" >
            <div
                v-for="type in finTypes"
                :key="type.label"
            >
                <FinTypeColCard
                    :label="type.label"
                    class="border-none"
                />
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
    import Card from '@/shared/ui/atoms/Card.vue';
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
    import FinTypeRowCard from '@/shared/ui/molecules/FinTypeRowCard.vue';
    import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue';
    import { TrendingUp } from 'lucide-vue-next';

    const finTypes = [
        { label: '가족중심형' },
        { label: '경험소비형' },
        { label: '공격투자형' },
    ]

</script>