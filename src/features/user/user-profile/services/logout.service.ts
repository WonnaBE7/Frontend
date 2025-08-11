import { fetcher } from "@/shared/utils/fetcher"


const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface Response{
    code : string
    message : string
}

export const userLogout= async() => {
    const res = await fetcher<Response>({
        url: `${BASE_URL}/api/auth/logout`,
        method: 'POST',
        auth: true,
    })
    return res
}