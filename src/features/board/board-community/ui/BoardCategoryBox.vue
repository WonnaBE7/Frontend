<template>
    <BoardCategory v-if="store.all" :communities="store.all"></BoardCategory>
</template>

<script setup lang="ts">
import { useCommunityListStore } from '@/entities/board/community/community.store';
import BoardCategory from '@/features/board/board-community/ui/BoardCategory.vue'

const store = useCommunityListStore()


</script>