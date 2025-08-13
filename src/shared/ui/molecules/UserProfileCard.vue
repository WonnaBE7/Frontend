<template>
    <div class="w-full">
      <div v-if="isLoggedIn" class="flex justify-left items-center space-x-4">
        <img :src="finImage" alt="프로필 이미지" class="w-20 h-20 rounded-full" />
        <div>
          <Typography type="B_16_120">{{ userProfile?.name }}</Typography>
          <div class="mt-1">
            <NoBorderTag color="bg-gray-BGDim">{{ userProfile?.nowME }}</NoBorderTag>
          </div>
          <Typography type="M_12_140" class="text-gray-500 mt-1">
            {{ userProfile?.job }} · 월 {{ formattedIncome }}
          </Typography>
        </div>
      </div>
  
      <div v-else class="text-gray-500 mt-2">
        <Typography type="M_14_140">로그인 후 이용해주세요</Typography>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { computed } from 'vue'
import { useUserProfileStore } from '@/entities/user/user.store'
import { finTypeImages } from '@/shared/assets/fintype'
import { formatKoreanMoney } from '@/shared/utils/formatMoney'
import Typography from '../atoms/Typography.vue'
import NoBorderTag from '../atoms/NoBorderTag.vue'
import { useAuthStore } from '@/entities/user/auth.store'

const userProfileStore = useUserProfileStore()
const auth = useAuthStore()
const isLoggedIn = computed(() => auth.accessToken)
const userProfile = computed(() => userProfileStore.profile)

const formattedIncome = computed(() =>
  userProfile.value ? formatKoreanMoney(userProfile.value.monthlyIncome) : ''
)

const finImage = computed(() => {
  const image = finTypeImages[userProfile.value?.nowME || '']
  if (!image) console.warn(`${userProfile.value?.nowME}에 대한 이미지가 없습니다.`)
  return image
})
</script>