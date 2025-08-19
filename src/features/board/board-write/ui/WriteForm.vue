<template>
  <div>
    <Card class="mb-4 bg-white border border-gray-150">
      <Typography type="B_14_140" class="w-full">게시판 선택</Typography>
      <CustomDropdown
        class="w-full mt-2"
        v-model="selectedCategory"
        :options="finTypeDropdownOptions"
      />
    </Card>

    <Card class="mb-4 bg-white border border-gray-150">
      <Typography type="B_14_140" class="w-full mb-2">제목</Typography>
      <Input v-model="title" label="제목" />
    </Card>

    <Card class="mb-4 bg-white border border-gray-150">
      <Typography type="B_14_140" class="w-full mb-2">내용</Typography>
      <textarea
        v-model="content"
        placeholder="내용을 입력해주세요..."
        class="form-textarea w-full border border-gray-150 rounded p-2"
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
  import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue'
  import { finTypes, finTypeIcons } from '@/shared/constants/finTypes.constants'
  import { postCreateBoard, type CreateBoardData } from '../service/board-write.service'

  const selectedCategory = ref<string>('')
  const title = ref<string>('')
  const content = ref<string>('')
  const route = useRoute()
  const router = useRouter()

  const finTypeDropdownOptions = computed(() => [
    { value: '', label: '카테고리 선택' },
    ...finTypes.map((type) => ({
      value: type.label,
      label: `${finTypeIcons[type.label]} ${type.label} - ${type.descript}`
    }))
  ])
  onMounted(() => {
    selectedCategory.value = (route.query.category as string) ?? ''
  })

  function getCommunityIdByLabel(label: string): number {
    return finTypes.findIndex(type => type.label === label) + 1
  }

  async function submit() {
    if (!selectedCategory.value || !title.value || !content.value) {
      alert('모든 필드를 입력해주세요!')
      return
    }
    const categoryId = getCommunityIdByLabel(selectedCategory.value)
    const payload: CreateBoardData = {
      title: title.value,
      content: content.value,
    }
    const res = await postCreateBoard(categoryId, payload);
    
    if(res.code === 200){
      router.back()
    }
  }
</script>