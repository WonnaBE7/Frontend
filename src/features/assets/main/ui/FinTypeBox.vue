<template>
    <Card class="bg-white border border-gray-150">
        <div class="w-full flex flex-row">
            <IconLabel :icon="TrendingUp" :iconClass="'text-sub-yellow-p'">
                현재의 나,
                <span class="ml-2 text-sub-yellow-p">NowME</span>
            </IconLabel>
            <RouterLink
            to="/user">
                <component :is="ChevronRight"></component>
            </RouterLink>
        </div>
        <FinTypeRowCard v-if="user.profile" :label="user.profile.nowME" descript="불필요한 소비를 철저히 줄이고 최대한 저축하는 성향"></FinTypeRowCard>
        <IconLabel :icon="TrendingUp" :iconClass="'text-sub-yellow-p'">
            되고 싶은 나,
            <span class="ml-2 text-sub-yellow-p">WonnaBE</span>
        </IconLabel>
        <div class="flex flex-row" >
            <div
                v-if="user.profile"
                v-for="type in user.profile.wonnaBE"
                :key="type"
            >
                <FinTypeColCard
                    :label="type"
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
    import { TrendingUp, ChevronRight } from 'lucide-vue-next';
    import { useUserProfileStore } from '@/entities/user/user.store';

    const user = useUserProfileStore()
</script>