<template>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeModal"
    >
      <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4" @click.stop>
        <!-- 헤더 -->
        <div class="flex justify-between items-center mb-4">
          <Typography type="B_18_120" class="text-gray-900">
            {{ data?.cardName || '' }}
          </Typography>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <X class="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        </div>
  
        <!-- 기간 정보 -->
        <Card class="bg-sub-aqua-bg mb-4">
          <div class="flex items-center gap-2 mb-4 w-full">
            <Calendar class="w-4 h-4 text-sub-aqua-p" />
            <Typography type="M_14_120" class="text-gray-900">기간 정보</Typography>
          </div>
          <Typography type="M_12_120" class="text-gray-900 w-full mb-2">
            시작일: {{ data?.startDate || '-' }}
          </Typography>
          <Typography type="M_12_120" class="text-gray-900 w-full mb-2">
            만기일: {{ data?.expiryDate || '-' }}
          </Typography>
          <Typography type="M_12_120" class="text-gray-900 w-full">
            보유기간: {{ data?.term || '-' }}
          </Typography>
        </Card>
  
        <!-- 소비 현황 -->
        <Card class="bg-sub-yellow-bg mb-4">
          <div class="flex items-center gap-2 mb-2 w-full">
            <TrendingUp class="w-4 h-4 text-sub-yellow-p" />
            <Typography type="M_14_120" class="text-gray-900">소비 현황</Typography>
          </div>
  
          <div class="space-y-2 w-full">
            <div class="flex justify-between w-full">
              <Typography type="M_12_120" class="text-gray-900">이번달 사용액:</Typography>
              <Typography type="B_12_120" class="text-sub-yellow-p">
                {{ currentAmountLocale }}원
              </Typography>
            </div>
  
            <div class="flex justify-between w-full">
              <Typography type="M_12_120" class="text-gray-900">실적 달성률:</Typography>
              <Typography type="B_12_120" class="text-gray-900">
                {{ performanceRateText }}
              </Typography>
            </div>
  
            <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
              <div
                class="h-full rounded-full transition-all duration-300 bg-sub-yellow-p"
                :style="{ width: `${performanceRateNumber}%` }"
              />
            </div>
          </div>
        </Card>
  
        <!-- 월별 사용 내역 차트 -->
        <div class="mb-4">
          <Typography type="B_14_120" class="mb-3 text-gray-900">
            월별 사용 내역
          </Typography>
          <div class="h-40 bg-gray-50 p-4 rounded-lg">
            <canvas ref="chartCanvas" class="w-full h-full"></canvas>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref, watch, onUnmounted } from 'vue'
  import * as Chart from 'chart.js'
  import Card from '@/shared/ui/atoms/Card.vue'
  import Typography from '@/shared/ui/atoms/Typography.vue'
  import { X, Calendar, TrendingUp } from 'lucide-vue-next'
  import type { CardDetailResponse } from '@/entities/recommend/recommend.entity'
  
  interface Props {
    isOpen: boolean
    data: CardDetailResponse | null
  }
  const props = defineProps<Props>()
  const emit = defineEmits<{ (e: 'close'): void }>()
  
  /** 숫자 표시 */
  const currentAmountLocale = computed(() =>
    (props.data?.currentAmount ?? 0).toLocaleString()
  )
  const performanceRateNumber = computed(() => props.data?.performanceRate ?? 0)
  const performanceRateText = computed(() => `${performanceRateNumber.value}%`)
  
  /** 차트 */
  const chartCanvas = ref<HTMLCanvasElement>()
  let chartInstance: Chart.Chart | null = null
  
  Chart.Chart.register(
    Chart.CategoryScale,
    Chart.LinearScale,
    Chart.BarElement,
    Chart.BarController,
    Chart.Title,
    Chart.Tooltip,
    Chart.Legend
  )
  
  function createChart() {
    if (!chartCanvas.value || !props.data) return
  
    if (chartInstance) {
      chartInstance.destroy()
      chartInstance = null
    }
  
    const ctx = chartCanvas.value.getContext('2d')
    if (!ctx) return
  
    const consumptions = props.data.monthlyConsumptions ?? []
    const labels = consumptions.map((m) =>
      m.month?.includes('-') ? `${parseInt(m.month.split('-')[1])}월` : m.month
    )
    const original = consumptions.map((m) => m.amount ?? 0)
    const scaled = original.map((a) => a / 10000) // 만원 단위로 축소
  
    chartInstance = new Chart.Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: '소비 금액',
            data: scaled,
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              // 툴팁은 원 단위로 표기
              label: (c) => {
                const won = original[c.dataIndex] ?? 0
                return `${won.toLocaleString()}원`
              }
            }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            ticks: {
              callback: (v) => `${v}만원`
            }
          }
        }
      }
    })
  }
  
  /** 모달 열릴 때 차트 생성 */
  watch(
    () => props.isOpen,
    (open) => {
      if (open && props.data) {
        setTimeout(createChart, 80)
      }
    }
  )
  
  function closeModal() {
    if (chartInstance) {
      chartInstance.destroy()
      chartInstance = null
    }
    emit('close')
  }
  
  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.destroy()
      chartInstance = null
    }
  })
  </script>