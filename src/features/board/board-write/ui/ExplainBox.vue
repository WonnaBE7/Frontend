<template>
    <Card class="bg-sub-yellow-bg border-yellow-s text-yellow-p mt-4">
        <Typography type="B_14_120" class="w-full">💡 글쓰기 팁</Typography>
        <ul class="list-disc ml-16 mt-1 w-full">
            <li><Typography type="M_12_120">구체적이고 명확한 제목을 작성해주세요</Typography></li>
            <li><Typography type="M_12_120">다른 사람에게 도움이 되는 내용을 공유해주세요</Typography></li>
            <li><Typography type="M_12_120">서로 존중하는 댓글 문화를 만들어가요</Typography></li>
        </ul>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
</script>