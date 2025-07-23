<template>
    <Card>
        <div class="w-full flex justify-left items-center space-x-4">
            <img :src="profile.finTypeUrl" alt="프로필 이미지" class="w-20 h-20 rounded-full" />
        
            <div>
                <Typography type="B_16_120">{{ profile.name }}</Typography>
                <div class="mt-1">
                    <NoBorderTag color="bg-gray-100">{{ profile.finType }}</NoBorderTag>
                </div>
                <Typography type="M_12_140" class="text-gray-500 mt-1">
                    {{ profile.income_job_type }} · 월 {{ profile.income_amount }}만원
                </Typography>
            </div>
        </div>
    </Card>
</template>
  
<script setup lang="ts">
    import type { UserProfile } from '@/entities/user/user.entity.ts'
    import Typography from '@/shared/ui/atoms/Typography.vue'
    import Card from '@/shared/ui/atoms/Card.vue'
    import NoBorderTag from '@/shared/ui/atoms/NoBorderTag.vue';
  
  defineProps<{ profile: UserProfile }>()
</script>