<template>
    <Card class="bg-white border border-gray-150">
        <UserProfileCard/>
        <Typography type="B_16_140" class="w-full mt-4 mb-4">진행 중인 목표</Typography>
        <div class="flex flex-row w-full gap-4 overflow-x-auto">
            <div
            v-for="goal in goals"
            :key="goal.id"
            class="min-w-[240px] max-w-[240px] flex-shrink-0"
            >
                <Card class="bg-gray-BGDim">
                    <Typography type="B_14_120" class="w-full mb-2">{{goal.goalName}}</Typography>
                    <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
                        <div
                            class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
                            :style="{ width: `${goal.progressRate}%` }"
                        ></div>
                    </div>
                    <div class="w-full flex flex-row justify-between">
                        <Typography type="M_12_140" class="text-gray-500">{{goal.progressRate}}% 달성</Typography>
                        <Tag>{{goal.categoryName}}</Tag>
                    </div>
                </Card>
            </div>
        </div>
    </Card>
</template>
<script setup lang="ts">
import Tag from '@/shared/ui/atoms/Tag.vue'
import { mockGoals } from '@/entities/goal/goal.mock';
import UserProfileCard from '@/shared/ui/molecules/UserProfileCard.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';

const goals= mockGoals;

</script>