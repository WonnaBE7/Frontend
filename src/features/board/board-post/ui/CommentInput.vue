<template>
    <Card>
        <div class="w-full flex flex-row gap-4">
            <div class="w-8 h-8 rounded-full bg-gray-100 text-center text-sm text-gray-600 flex items-center justify-center">
                나
            </div>
            
            <textarea
                v-model="comment"
                placeholder="댓글을 입력하세요..."
                class="w-full h-20 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-sub-yellow-p text-sm"
            ></textarea>
        </div>
        <div class="flex justify-end w-full mt-4">
            <Button
                class="max-w-[120px]"
                @click="submitComment"
                >
                댓글 작성
            </Button>
        </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import Button from '@/shared/ui/atoms/Button.vue';
import Card from '@/shared/ui/atoms/Card.vue';
import { ref } from 'vue'
  
  const comment = ref('')
  
  const emit = defineEmits<{
    (e: 'submit', content: string): void
  }>()
  
  const submitComment = () => {
    if (comment.value.trim() === '') return
    emit('submit', comment.value)
    comment.value = ''
  }
  </script>