export interface Term {
    id: string
    label: string
    required: boolean
  }
  
  export const terms: Term[] = [
    { id: 'service', label: '서비스 이용약관', required: true },
    { id: 'privacy', label: '개인정보 수집 및 이용 동의서', required: true },
    { id: 'asset', label: '자산 정보 수집 및 연동 동의서', required: true },
    { id: 'credit', label: '개인신용정보 제3자 제공 동의서', required: true },
    { id: 'marketing', label: '마케팅 활용 동의서', required: false },
  ]