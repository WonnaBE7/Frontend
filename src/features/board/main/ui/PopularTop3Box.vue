<template>
  <div class="w-full flex flex-row items-center mt-4 mb-4">
    <IconLabel :icon="Star" iconClass="text-sub-yellow-p">
      인기 게시판 TOP 3
    </IconLabel>
    <ChevronRight
      class="w-5 h-5 sm:w-7 sm:h-7"
      @click="goToCategory"
    />
  </div>
  <BoardCategory v-if="store.top3" :communities="store.top3"></BoardCategory>
</template>
  
  <script setup lang="ts">
  import { Star , ChevronRight} from 'lucide-vue-next'
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import BoardCategory from '../../board-community/ui/BoardCategory.vue';
  import { useRouter } from 'vue-router';
  import { useCommunityListStore } from '@/entities/board/community/community.store';

  const store = useCommunityListStore()
  const router = useRouter()

    function goToCategory() {
        router.push({ path: '/board/category' })
    }
  </script>