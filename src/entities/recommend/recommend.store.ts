import { defineStore } from 'pinia'
import type {
  RecommendedSavingsProduct,
  RecommendedCardProduct,
  RecommendedInsuranceProduct,
  SavingsRecommendationResponse,
  InsuranceRecommendationResponse,
  CardRecommendationResponse,
  WishlistResponse,
  CurrentProductsResponse,
} from './recommend.entity'
import {
  mockSavingsRecommendation,
  mockCardRecommendation,
  mockInsuranceRecommendation,
} from './recommend.mock'
import { getCardRecommendation, getCurrentSummmary, getInsuranceRecommendation, getSavingsRecommendation, getWishlist } from '@/entities/recommend/recommend.api'

export const useRecommendationStore = defineStore('recommendation', {
  state: () => ({
    recommendations: {
      savings: {} as Record<number, RecommendedSavingsProduct[]>,
      cards: {} as Record<number, RecommendedCardProduct[]>,
      insurances: {} as Record<number, RecommendedInsuranceProduct[]>,
    },
    wishlist: null as WishlistResponse | null,
    currentProducts: null as CurrentProductsResponse | null,
    
  }),
  actions: {
    async fetchSavingsRecommendation() {
      try {
        const res: SavingsRecommendationResponse = await getSavingsRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setSavings(rec.personaId, rec.products)
        })
      } catch {
        mockSavingsRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setSavings(rec.personaId, rec.products)
        })
      }
    },

    async fetchCardRecommendation() {
      try {
        const res: CardRecommendationResponse = await getCardRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setCards(rec.personaId, rec.products)
        })
      } catch {
        mockCardRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setCards(rec.personaId, rec.products)
        })
      }
    },

    async fetchInsuranceRecommendation() {
      try {
        const res: InsuranceRecommendationResponse = await getInsuranceRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setInsurances(rec.personaId, rec.products)
        })
      } catch {
        mockInsuranceRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setInsurances(rec.personaId, rec.products)
        })
      }
    },

    async fetchWishlist() {
      this.wishlist = await getWishlist()
    },
    async fetchCurrentProducts() {
      this.currentProducts = await getCurrentSummmary()
    },


    setSavings(personaId: number, products: RecommendedSavingsProduct[]) {
      this.recommendations.savings[personaId] = products
    },
    setCards(personaId: number, products: RecommendedCardProduct[]) {
      this.recommendations.cards[personaId] = products
    },
    setInsurances(personaId: number, products: RecommendedInsuranceProduct[]) {
      this.recommendations.insurances[personaId] = products
    },

    getSavingsByPersona(personaId: number) {
      return this.recommendations.savings[personaId] || []
    },
    getCardsByPersona(personaId: number) {
      return this.recommendations.cards[personaId] || []
    },
    getInsurancesByPersona(personaId: number) {
      return this.recommendations.insurances[personaId] || []
    },
  },
  persist: true
})