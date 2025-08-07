<template>
    <IconLabel :icon="MonitorDot" iconClass="text-sub-yellow-p" class="mt-8 mb-4">내 활동</IconLabel>
    <div class="flex flex-row grid-flow-row-2 gap-4 w-full">
        <Card class="border bg-white gap-2" @click="goToWrite">
            <IconLabel :icon="Pen" iconClass="text-sub-red-p" class="flex justify-center items-center">{{store.count?.write}}</IconLabel>
            <Typography type="M_14_140" class=" text-gray-500">내가 쓴 글</Typography>
        </Card>
        <Card class="border bg-white gap-2" @click="goToScrap">
            <IconLabel :icon="BookmarkIcon" iconClass="text-sub-yellow-p" class="flex justify-center items-center">{{store.count?.scrap}}</IconLabel>
            <Typography type="M_14_140" class=" text-gray-500">스크랩한 글</Typography>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
    import Card from '@/shared/ui/atoms/Card.vue';
    import Typography from '@/shared/ui/atoms/Typography.vue';
    import { BookmarkIcon, Pen, MonitorDot } from 'lucide-vue-next';
    import { useRouter } from 'vue-router'
    import { useWriteScrapStore } from '@/entities/board/board.store';

    const store = useWriteScrapStore()
    const router = useRouter()

    function goToScrap (){
        router.push({ path: '/board/scraped'})
    }

    function goToWrite (){
        router.push({ path: '/board/writed'})
    }
</script>