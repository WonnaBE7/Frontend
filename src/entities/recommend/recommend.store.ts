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
import { getCardRecommendation, getCurrentSummary, getInsuranceRecommendation, getSavingsRecommendation, getWishlist } from '@/entities/recommend/recommend.api'

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
        const res: SavingsRecommendationResponse = await getSavingsRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setSavings(rec.personaId, rec.products)
        })
    },

    async fetchCardRecommendation() {
        const res: CardRecommendationResponse = await getCardRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setCards(rec.personaId, rec.products)
        })
    },

    async fetchInsuranceRecommendation() {
        const res: InsuranceRecommendationResponse = await getInsuranceRecommendation()
        res.recommendationsByPersona.forEach((rec) => {
          this.setInsurances(rec.personaId, rec.products)
        })
    },

    async fetchWishlist() {
      this.wishlist = await getWishlist()
    },
    async fetchCurrentProducts() {
      this.currentProducts = await getCurrentSummary()
    },

    setSavings(personaId: number, products: RecommendedSavingsProduct[]) {
      const mapped = products.map(p => ({ ...p, productType: 'savings' as const }))
      this.recommendations.savings = {
        ...this.recommendations.savings,
        [personaId]: mapped,
      }
    },
    
    setCards(personaId: number, products: RecommendedCardProduct[]) {
      const mapped = products.map(p => ({ ...p, productType: 'card' as const }))
      this.recommendations.cards = {
        ...this.recommendations.cards,
        [personaId]: mapped,
      }
    },
    
    setInsurances(personaId: number, products: RecommendedInsuranceProduct[]) {
      const mapped = products.map(p => ({ ...p, productType: 'insurance' as const }))
      this.recommendations.insurances = {
        ...this.recommendations.insurances,
        [personaId]: mapped,
      }
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