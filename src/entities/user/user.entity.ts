export interface UserProfile {
  userId:string
  name: string
  email: string
  nowME: string
  wonnaBE: string[]
  job: string
  monthlyIncome: number
}

export interface UserHistoryResponse{
  diagnosedDate:string
  typeName:string
  score:number
}

export interface UserSurveyData{
    user_id : string,
    lifestyle_smoking: boolean,
    lifestyle_drinking: boolean,
    lifestyle_exercise: boolean,
    household_size: number,
    lifestyle_family_medical: boolean,
    lifestyle_before_diseases: boolean,
    income_job_type: string
}