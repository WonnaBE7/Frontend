<template>
  <AppLayout>
    <UserTitle
      :label="'금융 성향 진단'"
      :subText="userSubTextMap['금융 성향 진단']"
    />

    <Card class="bg-sub-yellow-bg border border-sub-yellow-c flex items-center mb-4">
      <div class="flex flex-row w-full items-center justify-between">
        <div class="w-2/3">
          <Typography type="M_14_140">
            설문 참여 시 더 정확한 금융상품을<br />
            추천받을 수 있습니다
          </Typography>
        </div>
        <div class="w-1/3 flex items-center justify-end" @click="goSurVey">
          <Typography type="M_14_140" class="flex items-center gap-1 text-gray-500">
            건너뛰기
            <component :is="ChevronRight" class="w-4 h-4" />
          </Typography>
        </div>
      </div>
    </Card>
    <UserDiagnosisList />
  </AppLayout>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/atoms/Card.vue';
import AppLayout from '@/shared/layout/AppLayout.vue';
import UserTitle from '@/shared/ui/molecules/UserTitle.vue';
import { userSubTextMap } from '@/features/user/constants/userSubTextMap';
import UserDiagnosisList from '@/features/user/user-diagnosis/ui/UserDiagnosisList.vue';
import { ChevronRight } from 'lucide-vue-next';
import Typography from '@/shared/ui/atoms/Typography.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useUserProfileStore } from '@/entities/user/user.store';

const router = useRouter()

function goSurVey(){
    router.push('/user/survey')
}

const userStore = useUserProfileStore()

onMounted(async ()=>{
  await userStore.fetchUserProfile()
})
</script>