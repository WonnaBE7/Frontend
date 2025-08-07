<template>
    <div class="flex flex-row gap-4 mb-4"> 
        <Button
            class="flex-4"
            @click="requestInsurance"
        >상품 선택하기</Button>
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
import ApplySuccessModal from '../../ui/ApplySuccessModal.vue';
import Button from '@/shared/ui/atoms/Button.vue';
import { Heart } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';
import { fetchWish } from '../../wish-list/service/add-remove-wish.service';
import type { InsuranceApplicationRequest } from '@/entities/recommend/recommend.entity';
import { postRequestInsurance } from '../service/request-insurance.service';
import { ref } from 'vue';

const router = useRouter()
const props = defineProps<{
    request: InsuranceApplicationRequest
    isWished: boolean
}>()

const showSuccess = ref<boolean>(false)
const isWishedLocal = ref<boolean>(props.isWished)

async function requestInsurance(){
    const res = await postRequestInsurance(props.request)
    if (res.code === 200) {
        showSuccess.value = true
    }
}

function handleModalClose() {
  router.push('/recommend') 
}

const route = useRoute()
const insuranceId = route.query.productId as string
const type = route.query.productType as string

async function toggleWish() {
    const action = isWishedLocal.value ? 'remove' : 'add'
    console.log('관심 상품 테스트',action, type, insuranceId )
    await fetchWish({
      action,
      productType: type,
      productId: insuranceId
    })
    
    isWishedLocal.value = !isWishedLocal.value
}
</script>