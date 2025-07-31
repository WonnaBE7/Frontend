// 이미 있는 것 유지
export const finTypes = [
  { label: '자린고비형', descript: '초절약 소비형' },
  { label: '소확행형', descript: '감성 소비형' },
  { label: 'YOLO형', descript: '현재 중심 소비형' },
  { label: '경험 소중형', descript: '취향 중심 소비' },
  { label: '새싹 투자형', descript: '투자 입문형' },
  { label: '공격 투자형', descript: '고위험 고수익 추구' },
  { label: '미래 준비형', descript: '장기 계획형' },
  { label: '가족 중심형', descript: '가족 재정형' },
  { label: '루틴러형', descript: '일상 중심 소비형' },
  { label: '현상 유지형', descript: '현재 생활 유지형' },
  { label: '균형 성장형', descript: '균형 잡힌 투자·소비형' },
  { label: '대문자P형', descript: '직관·감정 기반형' }
]

export const finTypeMonth = [
  { label: '자린고비형', descript: '2024.01' },
  { label: '소확행형', descript: '2024.02' },
  { label: 'YOLO형', descript: '2024.03' },
  { label: '경험 소중형', descript: '2024.04' },
  { label: '새싹 투자형', descript: '2024.05' },
  { label: '공격 투자형', descript: '2024.06' },
  { label: '미래 준비형', descript: '2024.07' },
  { label: '가족 중심형', descript: '2024.08' },
  { label: '루틴러형', descript: '2024.09' },
  { label: '현상 유지형', descript: '2024.10' },
  { label: '균형 성장형', descript: '2024.11' },
  { label: '대문자P형', descript: '2024.12' }
]

export const finTypeIcons: Record<string, string> = {
  '자린고비형': '💰',
  '소확행형': '🍰',
  'YOLO형': '🛫',
  '경험 소중형': '🎨',
  '새싹 투자형': '🌱',
  '공격 투자형': '📈',
  '미래 준비형': '📅',
  '가족 중심형': '📚',
  '루틴러형': '🗓️',
  '현상 유지형': '🛋️',
  '균형 성장형': '⚖️',
  '대문자P형': '🎯'
}

export const financialTendencyList = [
  {
    id: 1,
    name: '자린고비형',
    description: '절약에 집중하고 지출을 최소화하는 타입',
    characteristics: '소비에 매우 신중하며 저축 위주의 자산 운용을 선호함'
  },
  {
    id: 2,
    name: '소확행형',
    description: '작지만 확실한 행복을 중시하는 타입',
    characteristics: '일상의 즐거움을 위한 소비에 긍정적이며 선에서 저축함'
  },
  {
    id: 3,
    name: 'YOLO형',
    description: '현재의 만족과 소비를 중시하는 타입',
    characteristics: '미래보다는 현재의 행복과 경험을 위해 지출을 아끼지 않음'
  },
  {
    id: 4,
    name: '경험 소중형',
    description: '여행, 문화, 자기계발 등 경험에 투자하는 타입',
    characteristics: '자산보다는 가치 있는 경험에 자금을 활용함'
  },
  {
    id: 5,
    name: '새싹 투자형',
    description: '투자에 입문한 초보 투자자 타입',
    characteristics: '위험을 피하고 기본적인 재테크부터 시작하는 성향'
  },
  {
    id: 6,
    name: '공격 투자형',
    description: '고위험 고수익을 추구하는 투자 성향',
    characteristics: '과감한 투자와 빠른 수익을 기대하며 리스크 감수 가능'
  },
  {
    id: 7,
    name: '미래 준비형',
    description: '노후나 장기 목표를 위한 준비에 집중하는 타입',
    characteristics: '연금, 보험, 장기 저축 중심의 안정적 자산 관리 선호'
  },
  {
    id: 8,
    name: '가족 중심형',
    description: '가족의 안정과 미래에 중점을 두는 타입',
    characteristics: '자녀 교육, 주거 마련 등 가족 관련 목표 우선순위'
  },
  {
    id: 9,
    name: '루틴러형',
    description: '정기적인 소비 및 저축 루틴이 확실한 타입',
    characteristics: '자동이체, 정액 저축 등 규칙적인 재무 습관 보유'
  },
  {
    id: 10,
    name: '현상 유지형',
    description: '현재 자산과 생활 수준을 유지하려는 타입',
    characteristics: '큰 변화보다는 안정적 유지를 중시하며 지출을 통제함'
  },
  {
    id: 11,
    name: '균형 성장형',
    description: '비의 저축, 투자의 균형을 지향하는 타입',
    characteristics: '위험과 안정 사이에서 전략적으로 자산을 배분함'
  },
  {
    id: 12,
    name: '대문자P형',
    description: '충동구매가 잦고 계획보다는 기분에 따라 결정하는 타입',
    characteristics: '충동구매가 잦고 계획보다는 직관·감정적인 재무 의사결정 성향'
  }
]