<template>
    <Card 
        @click="goToDetail(assetCategory)"
        :class="[cardBg]">
        <div class="w-full flex flex-row items-center justify-between">
            <div class="flex items-center gap-3">
                <div
                    :class="colorMap[assetCategory]"
                    class="w-10 h-10 flex items-center justify-center rounded-full"
                    >
                    <component :is="iconComponent" class="w-5 h-5 text-white" />
                    </div>
                <div>
                <Typography type="B_14_140" class="mb-2 text-gray-900">{{ iconText }}</Typography>
                <Typography type="M_12_120" class="text-gray-500">{{ accountsCount }}개 계좌</Typography>
                </div>
            </div>
            <Typography type="B_18_120"
                :class="amountClass"
            >
                {{ amount }}
            </Typography>
        </div>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { assetCategoryIconMap } from '@/features/assets/constants/assetCategoryIcons'
  import { colorMap } from '@/entities/assets/assets.constants'
  import Typography from '@/shared/ui/atoms/Typography.vue';
  import { useRouter } from 'vue-router'

    const props = defineProps<{
        assetCategory: string
        amount: string
        accountsCount: string
        cardBg: string
        iconText: string
    }>()
    const iconComponent = computed(() => assetCategoryIconMap[props.assetCategory] ?? assetCategoryIconMap['other'])
    
    const amountClass = computed(() => {
        if (props.amount.startsWith('+')) return 'text-blue-500'
        if (props.amount.startsWith('-')) return 'text-red-500'
        return 'text-black'
    })

    const router = useRouter()

    function goToDetail(category: string) {
        router.push({ path: '/assets/detail', query: { category } })
    }
  </script>