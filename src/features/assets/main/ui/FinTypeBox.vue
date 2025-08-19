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
        <FinTypeRowCard 
            v-if="user.profile" 
            :label="user.profile.nowME" 
            :descript="getFinancialTypeDescription(user.profile.nowME)"
        ></FinTypeRowCard>
        <IconLabel :icon="TrendingUp" :iconClass="'text-sub-yellow-p'">
            되고 싶은 나,
            <span class="ml-2 text-sub-yellow-p">WonnaBE</span>
        </IconLabel>
        <div v-if="user.profile?.wonnaBE.length"  class="flex flex-row" >
            <div
                v-for="type in user.profile.wonnaBE"
                :key="type"
            >
                <FinTypeColCard
                    :label="type"
                    class="border-none"
                />
            </div>            
        </div>
        <Card 
            v-else
            class="bg-gray-BGDim !mb-0 mt-4"
        >
            <Typography type="M_12_140" class="text-gray-500">WonnaBE를 선택하지 않았습니다!</Typography>
        </Card>
    </Card>
</template>

<script setup lang="ts">
    import Card from '@/shared/ui/atoms/Card.vue';
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
    import FinTypeRowCard from '@/shared/ui/molecules/FinTypeRowCard.vue';
    import FinTypeColCard from '@/shared/ui/molecules/FinTypeColCard.vue';
    import { TrendingUp, ChevronRight } from 'lucide-vue-next';
    import { useUserProfileStore } from '@/entities/user/user.store';
    import { financialTendencyList } from '@/shared/constants/finTypes.constants';

    const user = useUserProfileStore()

    const getFinancialTypeDescription = (typeName: string): string => {
        const matchedType = financialTendencyList.find(type => type.name === typeName);
        return matchedType ? matchedType.description : 'NowMe 진단 되지않은 상태입니다!';
    }
</script>