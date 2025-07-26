<template>
    <Card class="bg-white border border-gray-150">
        <Typography type="B_16_140" class="w-full mt-4 mb-4">내 활동</Typography>
        <div class="flex flex-row grid-flow-row-2 gap-4 w-full">
            <Card class="border">
                <IconLabel :icon="Pen" iconClass="text-sub-red-p" class="flex justify-center items-center">{{myWriteScrap.write}}</IconLabel>
                <Typography type="M_14_140" class="mt-4 text-gray-500">내가 쓴 글</Typography>
            </Card>
            <Card class="border">
                <IconLabel :icon="BookmarkIcon" iconClass="text-sub-yellow-p" class="flex justify-center items-center">{{myWriteScrap.scrap}}</IconLabel>
                <Typography type="M_14_140" class="mt-4 text-gray-500">스크랩한 글</Typography>
            </Card>
        </div>
    </Card>
</template>
<script setup lang="ts">
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import { BookmarkIcon, Pen } from 'lucide-vue-next';
import { mockMyWriteScrap } from '@/entities/board/board.mock';

const myWriteScrap = mockMyWriteScrap
</script>