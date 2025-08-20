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

export interface UserHistoryResponseData{
  isSuccess : boolean,
  response : UserHistoryResponse[]
}


export interface UserSurveyData{
    lifestyleSmoking: number,
    lifestyleAlcoholFreq: number,
    lifestyleExerciseFreq: number,
    lifestyleFamilyMedical: number,
    lifestyleBeforeDiseases: number,

    incomeSourceType:string,
    incomeEmploymentStatus:string,

    householdSize: number,
    incomeJobType: string
}