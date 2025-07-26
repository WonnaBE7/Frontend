import type { PopularProduct } from './product.entity'

export const mockPopularProducts: PopularProduct[] = [
  {
    productId: 1,
    type: 'CARD',
    productName: '카카오 페이 카드',
    description: '월 최대 5만 포인트',
  },
  {
    productId: 2,
    type: 'SAVING',
    productName: '카카오 적금',
    description: '연 5%',
  },
  {
    productId: 3,
    type: 'INSURANCE',
    productName: '카카오 보험',
    description: '월 5%',
  },
]

