<!-- src/features/recommend/savings-detail/ui/ChartBox.vue -->
<template>
    <Card class="bg-white border border-gray-150">
      <IconLabel :icon="MessageCircle" iconClass="text-sub-orange-p" class="mb-4">
        현재 상품과 비교
      </IconLabel>
      <Radar :data="chartData" :options="chartOptions" />
    </Card>
  </template>
  
  <script setup lang="ts">
  import IconLabel from '@/shared/ui/atoms/IconLabel.vue'
  import Card from '@/shared/ui/atoms/Card.vue'
  import { MessageCircle } from 'lucide-vue-next'
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
  import type {ComparisonChart} from '@/entities/recommend/recommend.entity'
  const props = defineProps<{
    comparisonChart : ComparisonChart
  }>()

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
  )
  
  const { labels, currentUserData, recommendedProductData } = props.comparisonChart
  
  const chartData = {
  labels,
  datasets: [
    {
      label: '현재 상품',
      data: currentUserData.map((v) => v * 20),
      backgroundColor: 'rgba(0, 152, 194, 0.2)', // sub.aqua.p
      borderColor: 'rgba(0, 152, 194, 1)',       // sub.aqua.p
      borderWidth: 2
    },
    {
      label: '추천 상품',
      data: recommendedProductData.map((v) => v * 20),
      backgroundColor: 'rgba(81, 185, 16, 0.2)', // sub.green.p
      borderColor: 'rgba(81, 185, 16, 1)',       // sub.green.p
      borderWidth: 2
    }
  ]
}
  
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
            size: 14
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  }
  </script>