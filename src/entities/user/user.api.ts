import { fetcher } from "@/shared/utils/fetcher"
import type { UserProfile } from "./user.entity"
import { mockUserProfile } from "./user.mock"


//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getUserProfileData = async () => {
    // const res = await fetcher<UserProfile>({
    //     url: `${BASE_URL}/api/user/me`,
    //     method: 'GET',
    //     auth: true,
    // })
    // console.log('유저 데이터 가져옴!', res.code, res.data)
    // return res.data
    try{
        const res = await fetcher<UserProfile>({
            url: `${BASE_URL}/api/user/me`,
            method: 'GET',
            auth: true,
        })
        console.log('유저 데이터 가져옴!', res.code, res.data)
        return res.data
    }
    catch{
        return mockUserProfile
    }
}

