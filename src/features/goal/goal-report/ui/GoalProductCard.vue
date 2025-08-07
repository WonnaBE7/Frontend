<template>
    <div class="w-full">
      <Card class="bg-gray-BGDim !mb-0 mt-4" :class="{ 'border-2 border-sub-yellow-p': props.isSelected }">
        <div class="flex flex-row items-center justify-between w-full mb-2">
          <Typography type="B_16_140">{{ product.name }}</Typography>
          <Typography type="B_14_120" class="text-sub-yellow-p">달성률 {{ product.achievementRate }}%</Typography>
        </div>
        <Typography type="M_12_120" class="text-gray-500 w-full mb-4">{{ product.bank }}</Typography>
        <div class="flex flex-row items-center justify-between w-full">
          <div class="flex flex-row">
            <Typography type="M_12_120" class="text-gray-500 mr-1">금리: </Typography>
            <Typography type="M_12_120" class="text-sub-green-p">연 {{ product.interestRate }}%</Typography>
          </div>
          <component :is="ChevronDown" @click="toggleDetail" :class="isOpen ? 'rotate-180' : ''"/>
        </div>
      </Card>
  
      <Card v-if="isOpen" class="bg-sub-yellow-bg !mb-0">
        <Typography type="M_10_120" class="text-sub-orange-p mb-2 w-full">
            {{ achievementMessage }}
          </Typography>
        <div class="flex flex-row w-full gap-2"> 
          <Card class="bg-white border border-gray-150">
            <Typography type="B_10_120" class="text-gray-500 w-full mb-2">{{ product.category === '적금' ? '월 납입액' : '예치금' }}</Typography>
            <Typography type="B_10_120" class="text-gray-900 w-full">{{ product.saveAmount.toLocaleString()}}원</Typography>
          </Card>
          <Card class="bg-white border border-gray-150">
            <Typography type="B_10_120" class="text-gray-500 w-full mb-2">예상 달성일</Typography>
            <Typography type="B_10_120" class="text-gray-900 w-full">{{formattedDate}}</Typography>
          </Card>
        </div>
        <Card class="bg-white border border-gray-150 !mb-0">
            <Typography type="B_10_120" class="text-gray-500 w-full mb-2">예상 금액</Typography>
            <Typography type="B_10_120" class="text-gray-900 w-full">{{ product.expectedTotalAmount.toLocaleString() }}원</Typography>
        </Card>
       
  
        <div v-if="isCurrentPageSimulation" class="mt-4 w-full flex flex-row gap-2">
          <Button @click="selectProduct">상품 선택하기</Button>
          <!-- <Button>상품 상세보기</Button> -->
        </div>
        
      </Card>
    </div>
  </template>
  
<script setup lang="ts">
  import {ChevronDown} from 'lucide-vue-next'
  import Card from '@/shared/ui/atoms/Card.vue';
  import { ref, defineProps, computed } from 'vue'
  import type { RecommendedProduct } from '@/entities/goal/goal.entity'
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { formatDateToKoreanMonth } from '@/shared/utils/formatDateLabel';
import Button from '@/shared/ui/atoms/Button.vue';
  const props = defineProps<{
    product: RecommendedProduct
    isSelected: boolean
    isCurrentPageSimulation: boolean
  }>()
  
  const isOpen = ref<boolean>(false)
  const isChecked = ref<boolean>(false)
  
  function toggleDetail() {
    isOpen.value = !isOpen.value
  }

  const formattedDate = computed(
    () => formatDateToKoreanMonth(props.product.expectedAchievementDate))
  
  const achievementMessage = computed(() => {
    const rate = props.product.achievementRate
    if (rate === 100) {
      return '🎉 이 상품으로 목표를 달성할 수 있어요!'
    } else {
      return '해당 상품으로 진행하면 목표 금액을 모두 달성하긴 어려워요. 대신 현실적인 범위로 목표 금액이 조정돼요!'
    }
  })

  const emit = defineEmits<(e: 'select', id: number) => void>()

    function selectProduct() {
      isChecked.value = true
      isOpen.value = false
      emit('select', props.product.id) 
    }
  </script>
