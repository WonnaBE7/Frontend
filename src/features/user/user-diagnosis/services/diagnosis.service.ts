import { fetcher } from '@/shared/utils/fetcher'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface DiagnosisRequest {
  diagnosis_answers: number[]
}

export const submitNowmeDiagnosis = async (payload: DiagnosisRequest) => {
  await fetcher({
    url: `${BASE_URL}/api/mypage/nowme/diagnosis`,
    method: 'POST',
    body: payload,
  })
}