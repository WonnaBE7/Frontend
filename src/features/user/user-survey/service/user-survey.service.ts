import type { UserSurveyData } from "@/entities/user/user.entity"
import { mockUserSurveyData } from "@/entities/user/user.mock"
import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.BASE_URL

export const getUserSurveyData = async () => {
    try{
        const res = await fetcher<UserSurveyData>({
            url: `${BASE_URL}/api/user/info`,
            method:'GET',
            auth: true,
        })
        return res.data
    }
    catch{
        return mockUserSurveyData
    }   
}

export const postUserSurveyData = async (input : UserSurveyData ) => {
    try{
        const res = await fetcher<UserSurveyData>({
            url: `${BASE_URL}/api/user/info`,
            method:'POST',
            auth: true,
            body : input
        })
        return res.data
    }
    catch{
        return mockUserSurveyData
    }   
}


export const patchUserSurveyData = async (input : UserSurveyData) => {
    try{
        const res = await fetcher<UserSurveyData>({
            url: `${BASE_URL}/api/user/info`,
            method:'PATCH',
            auth: true,
            body: input
        })
        return res.data
    }
    catch{
        return mockUserSurveyData
    }   
}