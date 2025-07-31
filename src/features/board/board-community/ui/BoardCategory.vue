<template>
  <RouterLink
    v-for="community in communities"
    :key="community.communityId"
    :to="`/board/category/detail/${community.communityName}`"
    class="block"
  >
    <Card
      :key="community.communityId"
      class="bg-white border border-gray-150"
    >
      <div class="flex flex-row items-center gap-2 sm:gap-4 w-full">
        <Typography type="B_14_140" class="flex flex-row items-center">
          {{ finTypeIcons[community.communityName] }} {{ community.communityName }}
        </Typography>
        <Typography type="M_12_140" class="flex flex-row items-center text-gray-500">
          <component :is="Users" class="w-4 mr-1" />
          {{ community.memberCount.toLocaleString() }}명
        </Typography>
      </div>
      <Typography type="M_12_140" class="flex flex-row w-full text-gray-500 mt-1 sm:mt-2 ml-2">
        {{ community.simpleDescription }}
      </Typography>
        <div class="w-full bg-gray-100 p-2 sm:p-4 mt-2 sm:mt-4 flex items-center">
            <Typography type="M_10_120" class="flex flex-row w-full text-gray-500">
              {{ community.latestBoard }}
            </Typography>
        </div>
    </Card>
  </RouterLink>

</template>

<script setup lang="ts">
import type { CommunityPreview } from '@/entities/board/community/community.entity'
import Card from '@/shared/ui/atoms/Card.vue';
import Typography from '@/shared/ui/atoms/Typography.vue';
import { Users } from 'lucide-vue-next';
import {finTypeIcons} from '@/shared/constants/finTypes.constants'

defineProps<{
  communities: CommunityPreview[]
}>()
</script>