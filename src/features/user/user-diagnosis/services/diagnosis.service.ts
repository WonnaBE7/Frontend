import { fetcher } from '@/shared/utils/fetcher'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface DiagnosisRequest {
  diagnosis_answers: number[]
}

export const submitNowmeDiagnosis = async (payload: DiagnosisRequest) => {
  const purifiedPayload: DiagnosisRequest = {
    diagnosis_answers: [...payload.diagnosis_answers]
  }

  const res = await fetcher({
    url: `${BASE_URL}/api/nowme/diagnosis`,
    method: 'POST',
    body: purifiedPayload,
    auth: true,
  })

  return res.data
}