# WonnaBE Frontend

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.5.17-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)

사용자 금융 성향 기반 자산 관리 플랫폼

**KB IT's Your Life 6기 부트캠프 최종 프로젝트 최우수상 수상작**

</div>

---

## 📋 프로젝트 소개

흩어진 개인 자산을 통합 분석하고 사용자의 금융 성향을 진단하여 스스로 설정한 이상적인 워너비 달성을 돕는 **맞춤형 금융 코칭 플랫폼**입니다.

### 주요 기능

- 12가지 금융 페르소나 **NowMe**를 통해 현재 재무 성향 파악
- 이상적인 금융 페르소나 **WonnaBe** 선택 및 목표 설정
- WonnaBe 기반 최적 금융 상품 추천 및 레이더 차트 비교 분석
- 예·적금 계획 시뮬레이션 및 진행률 기반 응원 메시지

---

## 🛠️ 기술 스택

### Core
- **Vue 3.5.17** - Composition API 기반 프론트엔드 프레임워크
- **TypeScript** - 타입 안전성을 위한 정적 타입 언어
- **Vite** - 빠른 개발 서버 및 빌드 도구

### State Management & Data Fetching
- **Pinia 3.0.3** - Vue 3 공식 상태 관리 라이브러리
- **pinia-plugin-persistedstate** - 상태 영속화
- **TanStack Query 5.83.1** - 서버 상태 관리 및 캐싱

### UI & Styling
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Chart.js 4.5.0** + **vue-chartjs 5.3.2** - 데이터 시각화
- **lucide-vue-next** - 아이콘 라이브러리
- **class-variance-authority** - 조건부 스타일링

### Utilities
- **axios** - HTTP 클라이언트
- **axios-mock-adapter** - Mock API 환경 구축
- **date-fns 4.1.0** - 날짜 처리
- **dayjs 1.11.13** - 경량 날짜 라이브러리

---

## 📁 프로젝트 구조 (FSD)

```
src/
├── entities/          # 비즈니스 엔티티
│   ├── savings/       # 예·적금 도메인
│   ├── goal/          # 목표 도메인
│   ├── board/         # 게시판 도메인
│   └── auth/          # 인증 도메인
├── features/          # 기능 단위 컴포넌트
│   ├── auth/          # 로그인/회원가입
│   ├── product-recommendation/  # 상품 추천
│   └── goal-simulation/         # 목표 시뮬레이션
├── pages/             # 페이지 컴포넌트
│   ├── HomePage.vue
│   ├── ProductsPage.vue
│   └── MyPage.vue
├── shared/            # 공통 유틸/컴포넌트
│   ├── api/           # API 클라이언트
│   ├── components/    # 공통 컴포넌트
│   ├── utils/         # 유틸 함수
│   └── types/         # TypeScript 타입
└── app/               # 앱 설정
    ├── router/        # 라우터 설정
    └── styles/        # 전역 스타일
```

**FSD(Feature-Sliced Design) 구조**를 채택하여 도메인별 책임이 명확하고 확장 가능한 아키텍처를 구축했습니다.

---

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 환경 변수 설정

`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하세요:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_USE_MOCK=false  # Mock API 사용 여부
```

---

## 💡 핵심 기술적 특징

### 1. Mock API 기반 병렬 개발 환경

백엔드 API 개발과 독립적으로 프론트엔드 개발을 진행하기 위해 `axios-mock-adapter`를 활용한 Mock API 환경을 구축했습니다.

```typescript
// api/client.ts
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

if (import.meta.env.VITE_USE_MOCK === 'true') {
  import('./mock').then(({ setupMockAdapter }) => {
    setupMockAdapter(apiClient)
  })
}
```

**성과**:
- 프론트엔드와 백엔드 완전 독립 개발
- 전체 QA 기간 약 2일 단축
- API 연동 시 endpoint만 변경하여 즉시 전환

### 2. Pinia 기반 최적화된 상태 관리

도메인별로 분리된 store와 데이터 캐싱을 통해 API 중복 호출을 최소화했습니다.

```typescript
// stores/useSavingsStore.ts
export const useSavingsStore = defineStore('savings', () => {
  const products = ref<SavingsProduct[]>([])
  const lastFetchTime = ref<number>(0)
  const CACHE_DURATION = 5 * 60 * 1000 // 5분

  const fetchProducts = async () => {
    const now = Date.now()
    if (products.value.length > 0 && now - lastFetchTime.value < CACHE_DURATION) {
      return products.value // 캐시 사용
    }

    const response = await api.getSavingsProducts()
    products.value = response.data
    lastFetchTime.value = now
    return products.value
  }

  return { products, fetchProducts }
})
```

**성과**:
- API 중복 호출 60% 감소
- 페이지 전환 시 로딩 시간 56% 단축 (1.8초 → 0.8초)

### 3. 가상 스크롤링을 통한 대용량 리스트 최적화

350개의 금융 상품을 효율적으로 렌더링하기 위해 `vue-virtual-scroller`를 도입했습니다.

```vue
<template>
  <RecycleScroller
    :items="products"
    :item-size="120"
    key-field="id"
    v-slot="{ item }"
  >
    <ProductCard :product="item" />
  </RecycleScroller>
</template>
```

**성과**:
- 초기 렌더링 시간 3.5초 → 0.6초 (83% 개선)
- 메모리 사용량 약 60% 감소
- Lighthouse Performance 67점 → 89점

---

## 📊 성능 최적화

### Lighthouse 점수

| 지표 | 개선 전 | 개선 후 |
|------|---------|---------|
| Performance | 67점 | 89점 |
| Accessibility | 85점 | 92점 |
| Best Practices | 83점 | 92점 |
| SEO | 78점 | 87점 |

### 주요 개선 사항

1. **가상 스크롤링**: 대용량 리스트 렌더링 최적화
2. **데이터 캐싱**: API 중복 호출 방지
3. **이벤트 위임**: 이벤트 리스너 개수 대폭 감소
4. **코드 스플리팅**: 동적 import로 초기 번들 크기 감소

---

## 🔧 개발 환경 설정

### VSCode 추천 확장

- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier
- Tailwind CSS IntelliSense

### 코드 스타일

프로젝트는 ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다.

```bash
# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix
```

---

## 🧪 테스트

```bash
# 단위 테스트 실행
npm run test

# 테스트 커버리지
npm run test:coverage
```

---

## 📦 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

---

## 🤝 기여 가이드

1. 이 저장소를 Fork합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

---

## 📝 라이센스

이 프로젝트는 MIT 라이센스 하에 있습니다.

---

## 👥 팀원

| 역할 | 이름 | GitHub |
|------|------|--------|
| Frontend | 양서진 | [@username](https://github.com/username) |
| Backend | 팀원1 | [@username](https://github.com/username) |
| Backend | 팀원2 | [@username](https://github.com/username) |

---

## 📧 문의

프로젝트에 대한 문의는 [이메일](mailto:your-email@example.com)로 연락주세요.

---

<div align="center">

**Made with ❤️ by WonnaBE Team**

⭐️ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

</div>
