import type { CardDetailResponse, CardRecommendationResponse, CurrentProductsResponse, InsuranceDetailResponse, InsuranceRecommendationResponse, SavingsDetailResponse, SavingsRecommendationResponse, WishlistResponse } from "@/entities/recommend/recommend.entity";
import { mockCardDetail, mockCardRecommendation, mockCurrentProducts, mockInsuranceDetail, mockInsuranceRecommendation, mockSavingsDetail, mockSavingsRecommendation, mockWishlist } from "@/entities/recommend/recommend.mock";
import { fetcher } from "@/shared/utils/fetcher";

//const BASE_URL = import.meta.env.VITE_API_BASE_URL
const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCurrentSummmary = async () =>{
    try{
        const res = await fetcher<CurrentProductsResponse>({
            url: `${BASE_URL}/api/user/products/summary`,
            method: 'GET',
            auth: true,
          })

          return res.data
    }catch{
        return mockCurrentProducts
    }
}

export const getUserSavings = async (productId :number) =>{
    try{
        const res = await fetcher<SavingsDetailResponse>({
            url: `${BASE_URL}/api/user/products/savings/${productId}`,
            method: 'GET',
            auth: true,
          })

          return res.data
    }catch{
        return mockSavingsDetail
    }
}


export const getUserInsurnaces = async (productId :number) =>{
    try{
        const res = await fetcher<InsuranceDetailResponse>({
            url: `${BASE_URL}/api/user/products/insurances/${productId}`,
            method: 'GET',
            auth: true,
          })
          return res.data
    }catch{
        return mockInsuranceDetail
    }
}

export const getUserCards = async (productId :number) =>{
    try{
        const res = await fetcher<CardDetailResponse>({
            url: `${BASE_URL}/api/user/products/cards/${productId}`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }catch{
        return mockCardDetail
    }
}

export const getSavingsRecommendation = async () =>{
    try{
        const res = await fetcher<SavingsRecommendationResponse>({
            url: `${BASE_URL}/api/recommendations/savings`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }   
    catch{
        return mockSavingsRecommendation
    }
}

export const getInsuranceRecommendation = async () =>{
    try{
        const res = await fetcher<InsuranceRecommendationResponse>({
            url: `${BASE_URL}/api/recommendations/insurances`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }   
    catch{
        return mockInsuranceRecommendation
    }
}

export const getCardRecommendation = async () =>{
    try{
        const res = await fetcher<CardRecommendationResponse>({
            url: `${BASE_URL}/api/recommendations/cards`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }   
    catch{
        return mockCardRecommendation
    }
}

export const getWishlist = async () =>{
    try{
        const res = await fetcher<WishlistResponse>({
            url: `${BASE_URL}/api/user/wishlist`,
            method: 'GET',
            auth: true,
        })
        return res.data
    }   
    catch{
        return mockWishlist
    }
}
