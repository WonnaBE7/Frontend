<template>
  <Card class="bg-white border border-gray-150">
    <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">
      현재 상품과 비교
    </IconLabel>

    <div class="w-full flex justify-end">
      <CustomDropdown v-model="selectedCompareId" :options="dropdownOptions" />
    </div>

    <Radar :data="chartData" :options="chartOptions" />
  </Card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
import Card from '@/shared/ui/atoms/Card.vue'
import {MessageCircle} from 'lucide-vue-next'
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js'
import type { CommonChartData } from '@/entities/recommend/recommend.entity'
import CustomDropdown from '@/shared/ui/atoms/CustomDropdown.vue'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
)

const props = defineProps<{
  commonChartData: CommonChartData
}>()

const selectedCompareId = ref(String(props.commonChartData.comparisonCharts[0].compareId))

const selectedComparison = computed(() => {
  return props.commonChartData.comparisonCharts.find(
    (c) => String(c.compareId) === selectedCompareId.value
  )
})

const chartData = computed(() => ({
  labels: props.commonChartData.labels,
  datasets: [
    {
      label: props.commonChartData.cardName,
      data: props.commonChartData.currentUserData,
      backgroundColor: 'rgba(0, 152, 194, 0.2)',
      borderColor: 'rgba(0, 152, 194, 1)',
      borderWidth: 2
    },
    {
      label: selectedComparison.value?.compareName || '추천 상품',
      data: selectedComparison.value?.recommendedProductData || [],
      backgroundColor: 'rgba(81, 185, 16, 0.2)',
      borderColor: 'rgba(81, 185, 16, 1)',
      borderWidth: 2
    }
  ]
}))

const chartOptions = {
  responsive: true,
  scales: {
    r: {
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        backdropColor: 'transparent'
      },
      pointLabels: {
        font: {
          size: 14,
          family: 'Pretendard, sans-serif',
          Weight : 900
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          size: 14,
          family: 'Pretendard, sans-serif',
          Weight : 900
        }
      }
    }
  }
}

const dropdownOptions = props.commonChartData.comparisonCharts.map((c) => ({
  value: String(c.compareId),
  label: c.compareName
}))
</script>