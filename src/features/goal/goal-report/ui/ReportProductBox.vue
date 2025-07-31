<!-- GoalProductList.vue -->
<template>
    <Card class="bg-white  border border-gray-150">
        <IconLabel IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" >
            사용 중인 상품
        </IconLabel>
      <GoalProductCard
        v-if="selectedProduct"
        :product="selectedProduct"
        :isSelected="true"
        :isCurrentPageSimulation="isSimulationPage"
      />
    </Card>
    <!-- <Card class="bg-white  border border-gray-150">
        <IconLabel IconLabel :icon="MessageCircleIcon" :iconClass="'text-sub-yellow-p'" class="mb-4" >
            추천 상품
        </IconLabel>
        <GoalProductCard
            v-for="product in otherProducts"
            :key="product.id"
            :product="product"
            :isSelected="false"
            :isCurrentPageSimulation="isSimulationPage"
            class="mb-4"
        />
    </Card> -->
  </template>
  
  <script setup lang="ts">
    import{MessageCircleIcon} from 'lucide-vue-next'
    import { computed } from 'vue';
    import GoalProductCard from './GoalProductCard.vue'
    import { useRoute } from 'vue-router'
    import type { RecommendedProduct } from '@/entities/goal/goal.entity'
    import Card from '@/shared/ui/atoms/Card.vue';
    import IconLabel from '@/shared/ui/atoms/IconLabel.vue';
  
    const props = defineProps<{
        products: RecommendedProduct[]
        selectedProductId: number
    }>()
    
    const route = useRoute()
    const isSimulationPage = route.path.startsWith('/goal/simulation')
    
    const selectedProduct = computed(() =>
        props.products.find(p => p.id === props.selectedProductId)
    )
    // const otherProducts = computed(() =>
    //     props.products.filter(p => p.id !== props.selectedProductId)
    // )
  </script>