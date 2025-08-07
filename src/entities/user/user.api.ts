import { fetcher } from "@/shared/utils/fetcher"
import type { UserProfile } from "./user.entity"
import { mockUserProfile } from "./user.mock"


//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getUserProfileData = async () => {
    try{
        const res = await fetcher<UserProfile>({
            url: `${BASE_URL}/api/user/me`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }
    catch{
        return mockUserProfile
    }
}

