import type { UserProfile } from '@/entities/user/user.entity'

export const getMockUserProfile = (): UserProfile => ({
  name: '김보성',
  finType: '자린고비형',
  income_job_type: '사무직',
  income_amount: 375,
  finTypeUrl: new URL('@/shared/assets/fintype/자린고비형.png', import.meta.url).href
})