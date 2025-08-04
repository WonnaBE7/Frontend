import { defineStore } from 'pinia'
import type { Goal, GoalSimulationResponse } from './goal.entity'
import { fetchGoals } from './goal.api'


export const useGoalSimulationStore = defineStore('goalSimulation', {
    state: () => ({
      result: null as GoalSimulationResponse | null
    }),
    actions: {
      setResult(result: GoalSimulationResponse) {
        this.result = result
      },
      resetResult() {
        this.result = null
      }
    },
    persist: true 
})


interface GoalState {
  publishedGoals: Goal[]
  achievedGoals: Goal[]
}

export const useGoalStore = defineStore('goal', {
  state: (): GoalState => ({
    publishedGoals: [],
    achievedGoals: [],
  }),

  actions: {
    async fetchPublishedGoals() {
      const res = await fetchGoals('PUBLISHED')
      this.publishedGoals = res.goals
    },

    async fetchAchievedGoals() {
      const res = await fetchGoals('ACHIEVED')
      this.achievedGoals = res.goals
    },
  },

  getters: {
    totalGoalCount: (state) => state.publishedGoals.length,
    totalTargetAmount: (state) =>
      state.publishedGoals.reduce((sum, g) => sum + g.targetAmount, 0),
  },
})