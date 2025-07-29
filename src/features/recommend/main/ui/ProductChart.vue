<template>
    <div class="mb-4">
      <Typography type="B_14_120" class="mb-3 text-gray-900">{{ title }}</Typography>
      <div class="h-40 bg-gray-50 p-4 rounded-lg">
        <canvas ref="canvasRef" class="w-full h-full"></canvas>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onUnmounted } from 'vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import * as Chart from 'chart.js'
  import type { MonthlyChartItem, MonthlyConsumption } from '@/entities/recommend/recommend.entity'
  
  const canvasRef = ref<HTMLCanvasElement>()
  const chartInstance = ref<Chart.Chart | null>(null)
  
  const props = defineProps<{
    isOpen: boolean
    title: string
    productType: 'savings' | 'card' | 'insurance'
    chartData: MonthlyChartItem[] | MonthlyConsumption[]
  }>()
  
  Chart.Chart.register(
    Chart.CategoryScale,
    Chart.LinearScale,
    Chart.BarElement,
    Chart.BarController,
    Chart.Title,
    Chart.Tooltip,
    Chart.Legend
  )
  
  function destroyChart() {
    if (chartInstance.value) {
      chartInstance.value.destroy()
      chartInstance.value = null
    }
  }
  
  watch(() => props.isOpen, (open) => {
    if (!open) return
    setTimeout(() => {
      const ctx = canvasRef.value?.getContext('2d')
      if (!ctx) return
      destroyChart()
  
      chartInstance.value = new Chart.Chart(ctx, {
        type: 'bar',
        data: {
          labels: props.chartData.map(item => {
            const month = 'month' in item ? item.month : ''
            return month.includes('-') ? `${parseInt(month.split('-')[1])}월` : month
          }),
          datasets: [{
            label: props.productType === 'card' ? '소비 금액' : '달성률',
            data: props.chartData.map(item => ('amount' in item ? item.amount / 10000 : item.percentage)),
            backgroundColor: props.productType === 'card' ? '#10B981' : '#3B82F6',
            borderColor: props.productType === 'card' ? '#059669' : '#2563EB',
            borderWidth: 1,
            borderRadius: 4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 } } },
            y: {
              beginAtZero: true,
              grid: { color: '#E5E7EB' },
              ticks: {
                font: { size: 10 },
                callback(value) {
                  return props.productType === 'card' ? value + '만원' : value + '%'
                }
              }
            }
          }
        }
      })
    }, 100)
  })
  
  onUnmounted(destroyChart)
  </script>