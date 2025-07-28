<template>
    <div>
      <Card class="mb-4 bg-white">
        <Typography type="B_14_140" class="w-full">게시판 선택</Typography>
        <select v-model="selectedCategory" class="form-select w-full border rounded p-2">
          <option disabled value="">게시판을 선택해주세요</option>
          <option
            v-if="selectedOption"
            :value="selectedOption.label"
          >
            {{ finTypeIcons[selectedOption.label] }} {{ selectedOption.label }} - {{ selectedOption.descript }}
          </option>
          <option
            v-for="type in otherOptions"
            :key="type.label"
            :value="type.label"
          >
            {{ finTypeIcons[type.label] }} {{ type.label }} - {{ type.descript }}
          </option>
        </select>
      </Card>
  
      <Card class="mb-4 bg-white">
        <Typography type="B_14_140" class="w-full">제목</Typography>
        <Input v-model="title" label="제목" />
      </Card>
  
      <Card class="mb-4 bg-white">
        <Typography type="B_14_140" class="w-full">내용</Typography>
        <textarea
          v-model="content"
          placeholder="내용을 입력해주세요..."
          class="form-textarea w-full border rounded p-2"
          style="min-height: 200px; resize: none;"
        />
      </Card>
  
      <Button @click="submit">
        등록
      </Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import Input from '@/shared/ui/atoms/Input.vue'
  import Button from '@/shared/ui/atoms/Button.vue'
  import { finTypes, finTypeIcons } from '@/shared/constants/finTypes.constants'
  import type { CreatePostPayload } from '@/entities/board/board.entity'
  
  const selectedCategory = ref('')
  const title = ref('')
  const content = ref('')
  const route = useRoute()
  const router = useRouter()
  
  onMounted(() => {
    selectedCategory.value = (route.query.category as string) ?? ''
  })
  
  const selectedOption = computed(() =>
    finTypes.find(type => type.label === selectedCategory.value)
  )
  
  const otherOptions = computed(() =>
    finTypes.filter(type => type.label !== selectedCategory.value)
  )
  
  function getCommunityIdByLabel(label: string): number {
    return finTypes.findIndex(type => type.label === label) + 1
  }
  
  function submit() {
    if (!selectedCategory.value || !title.value || !content.value) {
      alert('모든 필드를 입력해주세요!')
      return
    }
  
    const payload: CreatePostPayload = {
      communityId: getCommunityIdByLabel(selectedCategory.value),
      title: title.value,
      content: content.value,
    }
  
    console.log('📦 전송할 데이터:', payload)
    router.back()
  }
  </script>