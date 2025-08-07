<template>
  <Card class="bg-white border border-gray-150">
    <Typography type="B_14_140" class="flex flex-row w-full items-center border-b border-gray-200 pb-2 md:pb-4">
      <MessageCircle class="w-4 text-sub-aqua-p mr-2" />
      댓글 {{ comments.length }}
    </Typography>

    <div
      v-for="comment in comments"
      :key="comment.commentId"
      class="mt-4 md:mt-6 w-full"
    >
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center gap-2 md:gap-4">
          <Typography type="B_12_140">{{ comment.userName }}</Typography>
          <NoBorderTag color="bg-gray-150">{{ comment.nowme }}</NoBorderTag>
        </div>

        <Trash2Icon
          v-if="comment.userId === myUserId"
          class="w-4 h-4 text-gray-400 hover:text-sub-red-p cursor-pointer"
          @click="emit('delete-comment', comment.commentId)"
        />
      </div>

      <Typography type="M_12_140" class="mt-1 md:mt-2 text-gray-500">
        {{ comment.content }}
      </Typography>

      <div
        class="flex items-center gap-1 md:gap-2 cursor-pointer mt-2 md:mt-4"
      >
        <HeartIcon
          :class="[
            'w-4 h-4 md:w-5 md:h-5 transition',
            comment.isLiked ? 'text-sub-red-p fill-sub-red-p' : 'text-sub-red-p'
          ]"
          @click="toggleCommentLike(comment)"
        />
        <Typography type="M_12_120">{{ comment.likeCount }}</Typography>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useUserProfileStore } from '@/entities/user/user.store'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import type { Comment } from '@/entities/board/comment/comment.entity'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { MessageCircle, HeartIcon, Trash2Icon } from 'lucide-vue-next'
  import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue'
  import { patchCommentLike } from '../service/board-comment.service'

  const props = defineProps<{ 
    comments: Comment[]
    boardId : number
    communityId : number
  }>()

  const emit = defineEmits<(e: 'delete-comment', commentId: number) => void>()

  const profile = useUserProfileStore()
  const myUserId = computed(() => profile.profile?.userId)

  async function toggleCommentLike (comment: Comment) {
    comment.isLiked = !comment.isLiked
    comment.isLiked ? comment.likeCount++ : comment.likeCount--

    try {
      await patchCommentLike(props.communityId, props.boardId, comment.commentId)
    } catch (e) {
      console.error('댓글 좋아요 실패:', e)
    }
  }
</script>