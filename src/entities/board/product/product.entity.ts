export type ProductType = 'card' | 'savings' | 'insurance'

export interface PopularProduct {
  productId: number
  type: string
  productName: string
  description: string
}

