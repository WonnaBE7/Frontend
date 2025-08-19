// src/entities/ui/ui.store.ts
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    globalSplash: false,
    message: '' as string | null,
  }),
  actions: {
    showSplash(msg?: string) {
      this.message = msg ?? null
      this.globalSplash = true
    },
    hideSplash() {
      this.globalSplash = false
      this.message = null
    },
  },
})