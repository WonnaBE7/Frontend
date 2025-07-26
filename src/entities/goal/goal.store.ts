import { defineStore } from 'pinia'
import type { Goal } from './goal.entity'
import { mockGoals } from './goal.mock'

export const useGoalStore = defineStore('goal', {
  state: () => ({
    goals: mockGoals as Goal[]
  }),
  getters: {
    totalProgress(): number {
      return Math.round(
        this.goals.reduce((acc, g) => acc + g.progressRate, 0) / this.goals.length
      )
    }
  },
  actions: {
    addGoal(goal: Goal) {
      this.goals.push(goal)
    }
  }
})