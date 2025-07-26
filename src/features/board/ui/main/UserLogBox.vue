<template>
    <Card class="bg-white border border-gray-150">
        <Typography type="B_16_140" class="w-full mt-4 mb-4">내 활동</Typography>
        <div class="flex flex-row grid-flow-row-3 gap-2 w-full">
            <Card class="border">
                <IconLabel :icon="Pen" iconClass="text-sub-red-p">{{}}</IconLabel>
                <Typography type="M_12_140" class="mt-4 text-gray-500">내가 쓴 글</Typography>
            </Card>
            <Card class="border">
                <IconLabel :icon="MessageCircle" iconClass="text-sub-aqua-p">{{}}</IconLabel>
                <Typography type="M_12_140" class="mt-4 text-gray-500">내 댓글</Typography>
            </Card>
            <Card class="border">
                <IconLabel :icon="BookmarkIcon" iconClass="text-sub-yellow-p">{{}}</IconLabel>
                <Typography type="M_12_140" class="mt-4 text-gray-500">스크랩한 글</Typography>
            </Card>
        </div>
    </Card>
</template>
<script setup lang="ts">
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import { BookmarkIcon, MessageCircle, Pen } from 'lucide-vue-next';

</script>