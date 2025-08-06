
import { mockUserProfile } from "@/entities/user/user.mock"
import { fetcher } from "@/shared/utils/fetcher"
import type { UserProfile } from "./user.entity"


const BASE_URL = import.meta.env.BASE_URL

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

