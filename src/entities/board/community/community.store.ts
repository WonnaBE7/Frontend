import { defineStore } from "pinia";
import type { CommunityPreview } from "./community.entity";
import { getCommunity, getCommunityTop3 } from "./community.api";

export const useCommunityListStore = defineStore('communityStore', {
  state: () => ({
    all: null as CommunityPreview[] | null,
    top3: null as CommunityPreview[] | null,
  }),
  actions: {
    async fetchCommunityList() {
      this.all = await getCommunity()
    },
    async fetchCommunityTop3() {
      this.top3 = await getCommunityTop3()
    }
  }
})

