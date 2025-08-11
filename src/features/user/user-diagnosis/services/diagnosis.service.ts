import { fetcher } from '@/shared/utils/fetcher'


const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface DiagnosisRequest {
  answers: number[]
}

export const submitNowmeDiagnosis = async (payload: DiagnosisRequest) => {
  const res = await fetcher({
    url: `${BASE_URL}/api/nowme/diagnosis`,
    method: 'POST',
    body: payload,
    auth: true,
  })

  return res.data
}