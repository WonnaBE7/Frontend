<template>
  <RouterLink
    :to="routePath"
    class="block"
  >
    <Card class="bg-white border border-gray-150">
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-2">
          <component :is="icon" class="w-5 h-5" />
          <Typography type="M_14_140">{{ label }}</Typography>
        </div>
        <Typography type="M_14_140">
          <ChevronRight class="w-5 h-5 sm:w-7 sm:h-7" />
        </Typography>
      </div>
    </Card>
  </RouterLink>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'

const props = defineProps<{
  icon: any,
  label: string
}>()

const routeMap: Record<string, string> = {
  '회원정보 수정': '/user/profile-edit',
  '워너비 선택': '/user/choose-wonnabe',
  '금융 성향 진단': '/user/diagnosis',
  '나의 금융 히스토리': '/user/history',
  '회원 가입' : '/user/signup',
  '로그인' : '/user/login'
}

const routePath = computed(() => routeMap[props.label] || '/')
</script>