<template>
    <AppLayout>
        <IntroduceBox/>
        <ChartBox/>
        <NoteBox/>
    </AppLayout>
</template>
<script setup lang="ts">
import ChartBox from '@/features/recommend/card-detail/ui/ChartBox.vue';
import IntroduceBox from '@/features/recommend/card-detail/ui/IntroduceBox.vue';
import NoteBox from '@/features/recommend/card-detail/ui/NoteBox.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';

</script>