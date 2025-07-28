export type ProductType = 'CARD' | 'SAVING' | 'INSURANCE'

export interface PopularProduct {
  productId: number
  type: string
  productName: string
  description: string
}

