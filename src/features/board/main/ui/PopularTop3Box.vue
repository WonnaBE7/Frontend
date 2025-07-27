<template>
  <div class="w-full flex flex-row items-center mt-8 mb-4">
    <IconLabel :icon="Star" iconClass="text-sub-yellow-p">
      인기 게시판 TOP 3
    </IconLabel>
    <ChevronRight
      class="w-5 h-5"
      @click="goToCategory"
    />
  </div>
  <BoardCategory :communities="top3Communities"></BoardCategory>
</template>
  
  <script setup lang="ts">
  import { Star , ChevronRight} from 'lucide-vue-next'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import { mockCommunities } from '@/entities/board/community/community.mock';
  import BoardCategory from '../../board-community/ui/BoardCategory.vue';
  import { useRouter } from 'vue-router';

  const top3Communities = mockCommunities.slice(0, 3)

  const router = useRouter()

    function goToCategory() {
        router.push({ path: '/board/category' })
    }
  </script>