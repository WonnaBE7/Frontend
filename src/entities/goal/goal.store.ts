import { defineStore } from 'pinia'
import type { GoalSimulationResponse } from './goal.entity'


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