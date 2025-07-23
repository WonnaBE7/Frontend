<template>
    <div class="flex flex-col items-center mb-4">
        <Typography type="B_22_160">{{ label }}</Typography>
        <Typography type="M_14_140" class="text-gray-500">{{ subText }}</Typography>
    </div>
</template>
  
<script setup lang="ts">
import { computed } from 'vue'
import Typography from '@/shared/ui/atoms/Typography.vue'

const props = defineProps({
    label: { type: String, required: true }
})

const subText = computed(() => {
    switch (props.label) {
        case '회원 가입':
            return '금융 코치 서비스에 오신 것을 환영합니다'
        case '마이 페이지':
            return '금융 코치 서비스에 오신 것을 환영합니다'
        case '회원정보 수정':
            return '회원님의 정보를 최신 상태로 유지해주세요'
        case '금융 성향 진단':
            return '더 정확한 추천을 위해 간단한 설문에 참여해주세요'
        case '워너비 선택':
            return '되고 싶은 금융 유형을 최대 3개까지 선택하세요'
        case '나의 금융 히스토리':
            return '최근 12개월간의 금융 유형 변화를 확인하세요'
        default:
            return ''
    }
})
</script>