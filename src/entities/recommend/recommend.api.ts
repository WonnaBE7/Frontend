import type { CardDetailResponse, CardRecommendationResponse, CurrentProductsResponse, InsuranceDetailResponse, InsuranceRecommendationResponse, SavingsDetailResponse, SavingsRecommendationResponse, WishlistResponse } from "@/entities/recommend/recommend.entity";
import { mockCardDetail, mockCardRecommendation, mockCurrentProducts, mockInsuranceDetail, mockInsuranceRecommendation, mockSavingsDetail, mockSavingsRecommendation, mockWishlist } from "@/entities/recommend/recommend.mock";
import { fetcher } from "@/shared/utils/fetcher";


const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getCurrentSummary = async () =>{
    try{
        const res = await fetcher<CurrentProductsResponse>({
            url: `${BASE_URL}/api/user/products/summary`,
            method: 'GET',
            auth: true,
          })
          console.log('현재 유저 상품',res.data)
          return res.data          
    }catch{
        return mockCurrentProducts
    }
}

export const getUserSavings = async (productId :number) =>{
    try{
        const res = await fetcher<SavingsDetailResponse>({
            url: `${BASE_URL}/api/products/savings/${productId}`,
            method: 'GET',
            auth: true,
          })
          console.log('현재 보유한 예적금 상품의 상세 정보 모달창 조회 : ',res);
          return res.data
    }catch(e){
        console.log('현재 보유한 예적금 상품의 상세 정보 모달창 조회 실패: ',e);
        console.log('실패')
        //return mockSavingsDetail
    }
}


export const getUserInsurances = async (productId :number) =>{
    try{
        const res = await fetcher<InsuranceDetailResponse>({
            url: `${BASE_URL}/api/user/products/insurances/${productId}`,
            method: 'GET',
            auth: true,
          })
          console.log('현재 보유한 보험 상품의 상세 정보 모달창 조회 : ',res);
          
          return res.data
    }catch(e){
        console.log('현재 보유한 보험 상품의 상세 정보 모달창 조회 실패: ',e);
        console.log('실패')
        //return mockInsuranceDetail
    }
}

export const getUserCards = async (productId :number) =>{
    try{
        const res = await fetcher<CardDetailResponse>({
            url: `${BASE_URL}/api/user/products/cards/${productId}`,
            method: 'GET',
            auth: true,
        })
        console.log('현재 보유한 카드 상품의 상세 정보 모달창 조회 : ',res);
        return res.data
    }catch(e){
        console.log('현재 보유한 보험 상품의 상세 정보 모달창 조회 실패: ',e);
        console.log('실패')
        //return mockCardDetail
    }
}

export const getSavingsRecommendation = async () =>{
    try{
        const res = await fetcher<SavingsRecommendationResponse>({
            url: `${BASE_URL}/api/recommendations/savings`,
            method: 'GET',
            auth: true,
        })
        console.log('WonnaBE 맞춤 예적금 추천 상품 조회 : ',res)
        return res.data
    }   
    catch{
        console.log('WonnaBE 맞춤 예적금 추천상품 조회 실패!! ')
        return mockSavingsRecommendation
    }
}

export const getInsuranceRecommendation = async () =>{
    try{
        const res = await fetcher<InsuranceRecommendationResponse>({
            url: `${BASE_URL}/api/recommendations/insurance`,
            method: 'GET',
            auth: true,
        })
        console.log('WonnaBE 맞춤 보험 추천상품 조회 : ',res)
        return res.data
    }   
    catch{
        console.log('WonnaBE 맞춤 보험 추천상품 조회 실패!! ')
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
        console.log('WonnaBE 맞춤 카드 추천상품 조회 : ',res)
        return res.data
    }   
    catch{
        console.log('WonnaBE 맞춤 카드 추천상품 조회 실패!! ')
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
        console.log('관심상품 목록 조회 : ',res)
        return res.data
    }   
    catch(e){
        console.log('관심상품 목록 조회 실패!! ',e)
        return mockWishlist
    }
}
