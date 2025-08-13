<template>
    <div class="flex flex-row gap-4 mb-4"> 
        <Button
            class="flex-4"
            @click="requestCard"
        >
        상품 선택하기
        </Button>
        <Button 
            @click="toggleWish"
            class="flex-1 border bg-white"
        >
            <HeartIcon 
                :class="isWishedLocal ? 'text-sub-red-p fill-sub-red-p' : 'bg-white text-gray-900 '" 
            />
        </Button>
        <ApplySuccessModal 
            v-model:visible="showSuccess"
            @close="handleModalClose"
        />
    </div>
</template>

<script setup lang="ts">
import Button from '@/shared/ui/atoms/Button.vue';
import { HeartIcon } from 'lucide-vue-next';
import { useRoute, useRouter } from 'vue-router';
import { fetchWish } from '../../wish-list/service/add-remove-wish.service';
import type { CardApplicationRequest } from '@/entities/recommend/recommend.entity';
import { postRequestCard } from '../service/request-card.service';
import ApplySuccessModal from '../../ui/ApplySuccessModal.vue';
import { ref } from 'vue';

const router = useRouter()
const props = defineProps<{
    request : CardApplicationRequest
    isWished: boolean
}>()

const showSuccess = ref<boolean>(false)
const isWishedLocal = ref<boolean>(props.isWished)

async function requestCard() {
    const res = await postRequestCard(props.request)
    if (res.code === 200) {
        showSuccess.value = true
    }
}

function handleModalClose() {
  router.push('/recommend') 
}

const route = useRoute()
const cardsId = route.query.productId as string
const type = route.query.productType as string
async function toggleWish() {
    const action = isWishedLocal.value ? 'remove' : 'add'
    await fetchWish({
      action,
      productType: type,
      productId: cardsId
    })
    isWishedLocal.value = !isWishedLocal.value
}
</script>