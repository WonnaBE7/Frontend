import { fetcher } from "@/shared/utils/fetcher"
import type { UserProfile } from "./user.entity"
import { mockUserProfile } from "./user.mock"

const BASE_URL = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'

export const getUserProfileData = async () => {
    if (USE_MOCK) {
        console.log('MOCK 모드: 유저 프로필 mock 데이터 사용')
        return mockUserProfile
    }

    try {
        const res = await fetcher<UserProfile>({
            url: `${BASE_URL}/api/user/me`,
            method: 'GET',
            auth: true,
        })
        console.log('유저 프로필 가져오기',res.data)
        return res.data
    } catch {
        console.log('API 실패: 유저 프로필 mock 데이터 사용')
        return mockUserProfile
    }
}

