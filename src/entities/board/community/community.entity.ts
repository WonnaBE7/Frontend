export interface CommunityPreview {
  communityId: number
  communityName: string
  simpleDescription: string
  memberCount: number
  latestBoard: string
}

export type CommunityList = {
  communities: CommunityPreview[]
}