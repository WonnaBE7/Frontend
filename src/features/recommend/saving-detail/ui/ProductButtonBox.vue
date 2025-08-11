<template>
    <div class="flex flex-row gap-4 mb-4"> 
      <Button 
        class="flex-4"
        @click="requestSavings"
      >
        상품 선택하기
      </Button>
  
      <Button 
        @click="toggleWish"
        class="flex-1 border bg-white"
      >
        <component :is="Heart" :class="isWishedLocal ? 'text-sub-red-p fill-sub-red-p' : 'bg-white text-gray-900 '" />
      </Button>
  
      <ApplySuccessModal 
        v-model:visible="showSuccess"
        @close="handleModalClose"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import ApplySuccessModal from '../../ui/ApplySuccessModal.vue'
  import Button from '@/shared/ui/atoms/Button.vue'
  import { Heart } from 'lucide-vue-next'
  import { useRoute, useRouter } from 'vue-router'
  import { fetchWish } from '../../wish-list/service/add-remove-wish.service'
  import type { SavingsApplicationRequest } from '@/entities/recommend/recommend.entity'
  import { postRequestSavings } from '../service/request-savings.service'
  import { ref } from 'vue'
  
  const router = useRouter()
  const props = defineProps<{
    request: SavingsApplicationRequest
    isWished: boolean
  }>()
  
  const showSuccess = ref(false)
  const isWishedLocal = ref<boolean>(props.isWished)
  
  async function requestSavings() {
    const res = await postRequestSavings(props.request)
    if (res.code === 200) {
      showSuccess.value = true
    }
  }
  
  function handleModalClose() {
    router.push('/recommend') 
  }
  
  const route = useRoute()
  const savingsId = route.query.productId as string
  const type = route.query.productType as string
  
  async function toggleWish() {
    const action = isWishedLocal.value ? 'remove' : 'add'
    await fetchWish({
      action,
      productType: type,
      productId: savingsId
    })
    
    isWishedLocal.value = !isWishedLocal.value
  }
  </script>