<template>
  <!-- 모달 배경 -->
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
    <!-- 모달 내용 -->
    <div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4" @click.stop>
      <!-- 헤더 -->
      <div class="flex justify-between items-center mb-4">
        <Typography type="B_18_140" class="text-gray-900">{{ productName }}</Typography>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- 기간 정보 -->
      <Card class="bg-sub-aqua-bg mb-4">
        <div class="flex items-center gap-2 mb-4 w-full">
          <Calendar class="w-4 h-4 text-sub-aqua-p" />
          <Typography type="M_14_120" class="text-gray-900">기간 정보</Typography>
        </div>
        <Typography type="M_12_120" class="text-gray-900 w-full mb-2">가입일: {{ productDetail?.startDate }}</Typography>
        <Typography type="M_12_120" class="text-gray-900 w-full">
          {{
            productType === 'savings'
              ? `가입기간: ${productDetail?.term ?? '-'} / ${savingsTotalTerm}`
              : `가입기간: ${productDetail?.term ?? '-'}`
          }}
        </Typography>
      </Card>

      <!-- 활용 현황 (예적금/보험) 또는 소비 현황 (카드) -->
      <Card class="bg-sub-yellow-bg mb-4">
        <div class="flex items-center gap-2 mb-2 w-full">
          <TrendingUp class="w-4 h-4 text-sub-yellow-p" />
          <Typography type="M_14_120" class="text-gray-900">
            {{ productType === 'card' ? '소비 현황' : '활용 현황' }}
          </Typography>
        </div>
        
        <!-- 예적금 정보 -->
        <div v-if="productType === 'savings'" class="space-y-2 w-full">
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">월 납입액:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ savingsCurrentAmountFormatted }}원</Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">적금금리:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ savingsRate }}</Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">세후이자:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ savingsBeforeInterestFormatted }}원</Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">만기까지:</Typography>
            <Typography type="B_12_120" class="text-gray-900">{{ savingsAchievementRate }}</Typography>
          </div>
          <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
            <div
              class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
              :style="{ width: `${savingsAchievementRateNumber}%` }"
            ></div>
          </div>
        </div>

        <!-- 카드 정보 -->
        <div v-else-if="productType === 'card'" class="space-y-2 w-full">
          <div class="flex justify-between w-full">
            <Typography type="M_12_120" class="text-gray-900">이번달 사용액:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ currentAmount.toLocaleString() }}원</Typography>
          </div>
          <div class="flex justify-between">
            <Typography type="M_12_120" class="text-gray-900">실적 달성률:</Typography>
            <Typography type="B_12_120" class="text-gray-900">{{ performanceRate }}%</Typography>
          </div>
          <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
            <div
              class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
              :style="{ width: `${performanceRate}%` }"
            ></div>
          </div>
        </div>

        <!-- 보험 정보 -->
        <div v-else class="space-y-2 w-full">
          <div class="flex justify-between w-full">
            <Typography type="M_12_120" class="text-gray-900">총 납입금액:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ insuranceCurrentAmountFormatted }}원</Typography>
          </div>
          <div class="flex justify-between w-full">
            <Typography type="M_12_120" class="text-gray-900">총 수령보험금:</Typography>
            <Typography type="B_12_120" class="text-sub-yellow-p">{{ insuranceGetAmountFormatted }}원</Typography>
          </div>
          <div class="flex justify-between w-full">
            <Typography type="M_12_120" class="text-gray-900">활용도:</Typography>
            <Typography type="B_12_120" class="text-gray-900">{{ insuranceAchievementRate }}</Typography>
          </div>
          <div class="h-2 bg-gray-150 rounded-full overflow-hidden mb-2 w-full">
            <div
              class="h-full rounded-full bg-sub-yellow-p transition-all duration-300"
              :style="{ width: `${insuranceAchievementRateNumber}%` }"
            ></div>
          </div>
        </div>
      </Card>

      <!-- 차트 -->
      <div class="mb-4">
        <Typography type="B_14_120" class="mb-3 text-gray-900">
          {{
            productType === 'savings'
              ? '예적금'
              : productType === 'card'
                ? '월별 사용 내역'
                : '월별 활용 내역'
          }}
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
import type { SavingsDetailResponse, CardDetailResponse, InsuranceDetailResponse } from '@/entities/recommend/recommend.entity'

interface Props {
  isOpen: boolean
  productDetail: SavingsDetailResponse | CardDetailResponse | InsuranceDetailResponse | null
  productType: 'savings' | 'card' | 'insurance'
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const chartCanvas = ref<HTMLCanvasElement>()
let chartInstance: Chart.Chart | null = null

// Chart.js 등록
Chart.Chart.register(
  Chart.CategoryScale,
  Chart.LinearScale,
  Chart.BarElement,
  Chart.BarController,
  Chart.Title,
  Chart.Tooltip,
  Chart.Legend
)

// 상품명 추출
const productName = computed(() => {
  if (!props.productDetail) return ''
  if ('productName' in props.productDetail) return props.productDetail.productName
  if ('cardName' in props.productDetail) return props.productDetail.cardName
  if ('insuranceName' in props.productDetail) return props.productDetail.insuranceName
  return ''
})

// 예적금 관련 computed
const savingsCurrentAmount = computed(() => {
  if (props.productType === 'savings' && 'currentAmount' in props.productDetail!) {
    return props.productDetail.currentAmount
  }
  return '0'
})

const savingsCurrentAmountFormatted = computed(() => {
  const num = parseInt(String(savingsCurrentAmount.value)) || 0
  return num.toLocaleString()
})

const savingsRate = computed(() => {
  if (props.productType === 'savings' && 'rate' in props.productDetail!) {
    return props.productDetail.rate
  }
  return '0%'
})

const savingsBeforeInterest = computed(() => {
  if (props.productType === 'savings' && 'beforeInterest' in props.productDetail!) {
    return props.productDetail.beforeInterest
  }
  return '0'
})

const savingsBeforeInterestFormatted = computed(() => {
  const num = parseInt(savingsBeforeInterest.value) || 0
  return num.toLocaleString()
})

const savingsAchievementRate = computed(() => {
  if (props.productType === 'savings' && 'achievementRate' in props.productDetail!) {
    return props.productDetail.achievementRate
  }
  return '0%'
})

const savingsAchievementRateNumber = computed(() => {
  return parseInt(savingsAchievementRate.value.replace('%', '')) || 0
})

const savingsTotalTerm = computed(() => {
  if (props.productType === 'savings' && 'total_term' in props.productDetail!) {
    return props.productDetail.total_term
  }
  return '0개월'
})

// 보험 관련 computed
const insuranceCurrentAmount = computed(() => {
  if (props.productType === 'insurance' && 'currentAmount' in props.productDetail!) {
    return props.productDetail.currentAmount
  }
  return '0'
})

const insuranceCurrentAmountFormatted = computed(() => {
const num = parseInt(String(insuranceCurrentAmount.value)) || 0
return num.toLocaleString()
})

const insuranceGetAmount = computed(() => {
  if (props.productType === 'insurance' && 'getAmount' in props.productDetail!) {
    return props.productDetail.getAmount
  }
  return '0'
})

const insuranceGetAmountFormatted = computed(() => {
  const num = parseInt(insuranceGetAmount.value) || 0
  return num.toLocaleString()
})

const insuranceAchievementRate = computed(() => {
  if (props.productType === 'insurance' && 'achievementRate' in props.productDetail!) {
    return props.productDetail.achievementRate
  }
  return '0%'
})

const insuranceAchievementRateNumber = computed(() => {
  return parseInt(insuranceAchievementRate.value.replace('%', '')) || 0
})

// 카드 관련 computed
const currentAmount = computed(() => {
  if (props.productType === 'card' && 'currentAmount' in props.productDetail!) {
    return props.productDetail.currentAmount
  }
  return 0
})

const performanceRate = computed(() => {
  if (props.productType === 'card' && 'performanceRate' in props.productDetail!) {
    return props.productDetail.performanceRate
  }
  return 0
})

// 차트 데이터 추출
const chartData = computed(() => {
  if (!props.productDetail) return []
  
  if ('monthlyChart' in props.productDetail) {
    return props.productDetail.monthlyChart
  }
  
  if ('monthlyConsumptions' in props.productDetail) {
    return props.productDetail.monthlyConsumptions
  }
  
  return []
})

// 원본 소비 데이터 (카드용)
const originalConsumptions = computed(() => {
  if (!props.productDetail || !('monthlyConsumptions' in props.productDetail)) return []
  return props.productDetail.monthlyConsumptions
})

// 차트 생성
function createChart() {
  if (!chartCanvas.value || !props.productDetail) return
  
  // 기존 차트 삭제
  if (chartInstance) {
    chartInstance.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  chartInstance = new Chart.Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData.value.map(item => {
        // YYYY-MM 형식을 MM월로 변환
        if (item.month.includes('-')) {
          const monthNum = item.month.split('-')[1]
          return `${parseInt(monthNum)}월`
        }
        return item.month
      }),
      datasets: [{
        label: props.productType === 'card' ? '소비 금액' : '달성률',
        data: chartData.value.map(item => {
          if ('amount' in item) {
            // 카드의 경우 금액을 적절한 스케일로 조정
            return item.amount / 10000 // 만원 단위로 변환
          }
          return item.percentage
        }),
        backgroundColor: props.productType === 'card' ? '#10B981' : '#3B82F6',
        borderColor: props.productType === 'card' ? '#059669' : '#2563EB',
        borderWidth: 1,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: 'white',
          bodyColor: 'white',
          callbacks: {
            label: function(context) {
              if (props.productType === 'card') {
                const originalAmount = originalConsumptions.value[context.dataIndex]?.amount || 0
                return `${originalAmount.toLocaleString()}원`
              }
              return `${context.parsed.y}%`
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 10
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#E5E7EB'
          },
          ticks: {
            font: {
              size: 10
            },
            callback: function(value) {
              if (props.productType === 'card') {
                return value + '만원'
              }
              return value + '%'
            }
          }
        }
      }
    }
  })
}

// 모달이 열릴 때 차트 생성
watch(() => props.isOpen, (newValue) => {
  if (newValue && props.productDetail) {
    // DOM이 렌더링된 후 차트 생성
    setTimeout(() => {
      createChart()
    }, 100)
  }
})

// 컴포넌트 언마운트시 차트 정리
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})

function closeModal() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
  emit('close')
}
</script>