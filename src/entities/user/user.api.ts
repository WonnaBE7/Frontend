import { fetcher } from "@/shared/utils/fetcher"
import type { UserProfile } from "./user.entity"

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getUserProfileData = async () => {
    const res = await fetcher<UserProfile>({
        url: `${BASE_URL}/api/user/me`,
        method: 'GET',
        auth: true,
    })
    console.log('유저 프로필 가져오기',res.data)
    return res.data
}

