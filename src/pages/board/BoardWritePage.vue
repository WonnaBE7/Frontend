<template>
    <AppLayout>
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
  
      <Card class="bg-sub-yellow-bg border-yellow-s text-yellow-p mt-4">
        <Typography type="B_14_120" class="w-full">💡 글쓰기 팁</Typography>
        <ul class="list-disc ml-16 mt-1 w-full">
          <li><Typography type="M_12_120">구체적이고 명확한 제목을 작성해주세요</Typography></li>
          <li><Typography type="M_12_120">다른 사람에게 도움이 되는 내용을 공유해주세요</Typography></li>
          <li><Typography type="M_12_120">서로 존중하는 댓글 문화를 만들어가요</Typography></li>
        </ul>
      </Card>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
    import { ref, computed, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Card from '@/shared/ui/atoms/Card.vue'
    import AppLayout from '@/shared/layout/AppLayout.vue'
    import { finTypes, finTypeIcons } from '@/shared/constants/finTypes.constants'
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import Input from '@/shared/ui/atoms/Input.vue'
    import type { CreatePostPayload } from '@/entities/board/board.entity'
    import Button from '@/shared/ui/atoms/Button.vue'
  
  const route = useRoute()
  const selectedCategory = ref('')
  
  onMounted(() => {
    selectedCategory.value = (route.query.category as string) ?? ''
  })
  
  const selectedOption = computed(() =>
    finTypes.find(type => type.label === selectedCategory.value)
  )
  
  const otherOptions = computed(() =>
    finTypes.filter(type => type.label !== selectedCategory.value)
  )
  
  const title = ref('')
  const content = ref('')
  const router = useRouter()

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
    

    // 이전 페이지로 이동
    router.back()
  }
  </script>