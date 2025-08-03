import { defineStore } from 'pinia'
import type {
  RecommendedSavingsProduct,
  RecommendedCardProduct,
  RecommendedInsuranceProduct,
  SavingsRecommendationResponse,
  InsuranceRecommendationResponse,
  CardRecommendationResponse,
} from './recommend.entity'
import { fetcher } from '@/shared/utils/fetcher'
import {
  mockSavingsRecommendation,
  mockCardRecommendation,
  mockInsuranceRecommendation,
} from './recommend.mock'

interface RecommendationState {
  savings: Record<number, RecommendedSavingsProduct[]>
  cards: Record<number, RecommendedCardProduct[]>
  insurances: Record<number, RecommendedInsuranceProduct[]>
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useRecommendationStore = defineStore('recommendation', {
  state: (): RecommendationState => ({
    savings: {},
    cards: {},
    insurances: {},
  }),

  actions: {
    setSavings(personaId: number, products: RecommendedSavingsProduct[]) {
      this.savings[personaId] = products
    },
    setCards(personaId: number, products: RecommendedCardProduct[]) {
      this.cards[personaId] = products
    },
    setInsurances(personaId: number, products: RecommendedInsuranceProduct[]) {
      this.insurances[personaId] = products
    },

    async fetchSavingsRecommendation() {
      try {
        const res = await fetcher<SavingsRecommendationResponse>({
          url: `${BASE_URL}/api/recommendations/savings`,
          method: 'GET',
          auth: true,
        })
        res.data.recommendationsByPersona.forEach((rec) => {
          this.setSavings(rec.personaId, rec.products)
        })
      } catch (e) {
        mockSavingsRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setSavings(rec.personaId, rec.products)
        })
      }
    },

    async fetchCardRecommendation() {
      try {
        const res = await fetcher<CardRecommendationResponse>({
          url: `${BASE_URL}/api/recommendations/cards`,
          method: 'GET',
          auth: true,
        })
        res.data.recommendationsByPersona.forEach((rec) => {
          this.setCards(rec.personaId, rec.products)
        })
      } catch (e) {
        mockCardRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setCards(rec.personaId, rec.products)
        })
      }
    },

    async fetchInsuranceRecommendation() {
      try {
        const res = await fetcher<InsuranceRecommendationResponse>({
          url: `${BASE_URL}/api/recommendations/insurances`,
          method: 'GET',
          auth: true,
        })
        res.data.recommendationsByPersona.forEach((rec) => {
          this.setInsurances(rec.personaId, rec.products)
        })
      } catch (e) {
        mockInsuranceRecommendation.recommendationsByPersona.forEach((rec) => {
          this.setInsurances(rec.personaId, rec.products)
        })
      }
    },

    getSavingsByPersona(personaId: number) {
      return this.savings[personaId] || []
    },
    getCardsByPersona(personaId: number) {
      return this.cards[personaId] || []
    },
    getInsurancesByPersona(personaId: number) {
      return this.insurances[personaId] || []
    },
  },
})