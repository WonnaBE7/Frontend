<template>
    <BoardCategory :communities="mockCommunities"></BoardCategory>
</template>

<script setup lang="ts">
import BoardCategory from '@/features/board/board-category/ui/BoardCategory.vue'
import {mockCommunities }from '@/entities/board/community/community.mock'

</script>