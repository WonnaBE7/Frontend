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
          {{ data?.productName || '' }}
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
          가입일: {{ data?.startDate || '-' }}
        </Typography>
        <Typography type="M_12_120" class="text-gray-900 w-full">
          가입기간: {{ data?.term || '-' }}
        </Typography>
      </Card>

      <!-- 활용 현황 -->
      <Card class="bg-sub-yellow-bg mb-4">
        <div class="flex items-center gap-2 mb-2 w-full">
          <TrendingUp class="w-4 h-4 text-sub-yellow-p" />
          <Typography type="M_14_120" class="text-gray-900">활용 현황</Typography>
        </div>

        <div class="space-y-2 w-full">
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">누적 금액:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">
              {{ amountFormatted }}원
            </Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">적금금리:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">
              {{ rateText }}
            </Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">만기까지:</Typography>
            <Typography type="B_12_120" class="text-gray-900">
              {{ achievementText }}
            </Typography>
          </div>

          <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
            <div
              class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
              :style="{ width: `${achievementNumber}%` }"
            />
          </div>
        </div>
      </Card>

      <!-- 차트 (만원 단위) -->
      <div class="mb-4">
        <Typography type="B_14_120" class="mb-3 text-gray-900">
          예치금
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Card from '@/shared/ui/atoms/Card.vue'
import Typography from '@/shared/ui/atoms/Typography.vue'
import { X, Calendar, TrendingUp } from 'lucide-vue-next'
import type { SavingsDetailResponse } from '@/entities/recommend/recommend.entity'

interface Props {
  isOpen: boolean
  data: SavingsDetailResponse | null
}
const props = defineProps<Props>()
const emit = defineEmits<(e: 'close') => void>()

/** 숫자/표시 포맷 */
const amountFormatted = computed(() =>
  (props.data?.currentAmount ?? 0).toLocaleString()
)
const rateText = computed(() =>
  props.data ? `${props.data.baseRate}%` : '0%'
)
const achievementNumber = computed(() => props.data?.achievementRate ?? 0)
const achievementText = computed(() => `${achievementNumber.value}%`)

/** 차트 */
const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: ChartJS | null = null

ChartJS.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend)

function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

function createChart() {
  if (!chartCanvas.value || !props.data) return
  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  destroyChart()

  // 월 라벨 & 원금액(원) → 만원으로 스케일
  const labels = (props.data.monthlyChart ?? []).map((m) =>
    m.month?.includes('-') ? `${parseInt(m.month.split('-')[1])}월` : (m.month ?? '')
  )
  // 백엔드에서 월별 금액 필드명이 `amount` 라고 가정 (없다면 맞는 필드명으로 교체)
  const originalAmounts = (props.data.monthlyChart ?? []).map((m: any) => Number(m.amount ?? 0))
  const scaled = originalAmounts.map((a) => a / 10000) // 만원 단위

  chartInstance = new ChartJS(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: '예치금',
          data: scaled,
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            // 툴팁은 ‘원’ 단위로 표기
            label: (c) => {
              const idx = c.dataIndex
              const won = originalAmounts[idx] ?? 0
              return `${won.toLocaleString()}원`
            },
          },
        },
      },
      scales: {
        x: { grid: { display: false } },
        y: {
          beginAtZero: true,
          ticks: { callback: (v) => `${v}만원` },
        },
      },
    },
  })
}

/** 열릴 때 차트 생성 */
watch(
  () => props.isOpen,
  (open) => {
    if (open && props.data) {
      // DOM 붙은 뒤 실행
      requestAnimationFrame(createChart)
    } else {
      destroyChart()
    }
  }
)

function closeModal() {
  destroyChart()
  emit('close')
}

onUnmounted(destroyChart)
</script>