<template>
    <Card>
      <IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4" >
        워너비 게시판 인기글
    </IconLabel>
      <PostPreviewCard
        v-for="post in topPosts"
        :key="post.boardId"
        v-bind="post"
      />
   </Card>
  </template>
  
  <script setup lang="ts">
  import Card from '@/shared/ui/atoms/Card.vue';
  import PostPreviewCard from '@/features/board/ui/PostPreviewCard.vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
import { MessageCircleIcon } from 'lucide-vue-next';
  
  const topPosts = [
    {
      boardId: 1,
      title: '투자 초보 포트폴리오 조언 구합니다.',
      content: '저는 매달 50만원 이하로 생활하려고 노력 중입니다. 꿀팁 있으신 분 공유해주세요!',
      author: '절약왕123',
      tag: '새싹투자형',
      likeCount: 12,
      commentCount: 8,
    },
    {
      boardId: 2,
      title: '요즘 카드 혜택 뭐가 제일 좋아요?',
      content: '생활비 아끼는 데 제일 좋은 카드 추천받고 싶어요. 신한이 좋을까요 국민이 좋을까요?',
      author: '금융왕',
      tag: '자린고비형',
      likeCount: 22,
      commentCount: 15,
    },
    {
      boardId: 3,
      title: '적금만으로 충분할까요?',
      content: '적금으로 모으는 중인데 요즘 금리가 낮아서 투자로 전환해야 할지 고민입니다.',
      author: '무계획러',
      tag: '공격투자형',
      likeCount: 9,
      commentCount: 3,
    },
  ]
  </script>