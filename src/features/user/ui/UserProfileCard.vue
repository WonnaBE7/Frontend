<template>
    <div class="w-full flex justify-left items-center space-x-4">
        <img :src="finImage" alt="프로필 이미지" class="w-20 h-20 rounded-full" />
        <div>
            <Typography type="B_16_120">{{ userProfile.name }}</Typography>
            <div class="mt-1">
                <NoBorderTag color="bg-gray-BGDim">{{ userProfile.nowME }}</NoBorderTag>
            </div>
            <Typography type="M_12_140" class="text-gray-500 mt-1">
                {{ userProfile.job }} · 월 {{ formattedIncome }}
            </Typography>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { computed } from 'vue';
    import { finTypeImages } from '@/shared/assets/fintype';
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue';
    import { mockUserProfile } from '@/entities/user/user.mock'
    import { formatKoreanMoney } from '@/shared/utils/formatMoney'

    const userProfile = mockUserProfile
    const formattedIncome = formatKoreanMoney(userProfile.monthlyIncome)
    const finImage = computed(() => {
    const image = finTypeImages[userProfile.nowME || '']
        if (!image) console.warn(`${userProfile.nowME}에 대한 이미지가 없습니다.`)
        return image
    })
</script>