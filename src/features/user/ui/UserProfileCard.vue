<template>
    <Card>
        <div class="w-full flex justify-left items-center space-x-4">
            <img :src="userProfile.finTypeUrl" alt="프로필 이미지" class="w-20 h-20 rounded-full" />
        
            <div>
                <Typography type="B_16_120">{{ userProfile.name }}</Typography>
                <div class="mt-1">
                    <NoBorderTag color="bg-gray-50">{{ userProfile.finType }}</NoBorderTag>
                </div>
                <Typography type="M_12_140" class="text-gray-500 mt-1">
                    {{ userProfile.income_job_type }} · 월 {{ userProfile.income_amount }}만원
                </Typography>
            </div>
        </div>
    </Card>
</template>
  
<script setup lang="ts">
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import Card from '@/shared/ui/atoms/Card.vue'
    import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue';
    import { getMockUserProfile } from '@/features/user/services/userProfile.service'

    const userProfile = getMockUserProfile()
</script>