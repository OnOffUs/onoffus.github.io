# OnOffus 블로그 SEO 구조

## 디렉토리 구조

```
/blog/
  ├── index.html                    # 블로그 인덱스 페이지 (완료)
  ├── ai-saas-enterprise-guide.html # Pillar 페이지 (완료, 1,500+ 단어)
  ├── saas-msp-operation-model.html # 클러스터: MSP 모델 (완료)
  ├── ai-saas-architecture.html     # 클러스터: 아키텍처 (완료)
  ├── enterprise-ai-adoption.html   # 클러스터: AI 도입 (생성 필요)
  ├── llm-rag-in-production.html    # 클러스터: RAG 시스템 (생성 필요)
  ├── devops-for-ai-systems.html    # 클러스터: DevOps (생성 필요)
  ├── data-pipeline-enterprise.html # 클러스터: 데이터 파이프라인 (생성 필요)
  ├── ai-backoffice-automation.html # 클러스터: 백오피스 자동화 (생성 필요)
  ├── poc-to-production-ai.html     # 클러스터: PoC 전환 (생성 필요)
  ├── b2b-saas-cost-estimation.html  # 클러스터: 비용 추정 (생성 필요)
  ├── enterprise-system-modernization.html # 클러스터: 현대화 (생성 필요)
  ├── templates/
  │   └── article-template.html     # 재사용 가능한 템플릿
  ├── SEO_STRUCTURE.md              # SEO 구조 가이드
  └── README.md                     # 이 파일
```

## 생성된 파일

### 1. `/blog/index.html`
- 블로그 인덱스 페이지
- Pillar 페이지 하이라이트
- 10개 클러스터 기사 카드
- SEO 메타 태그 및 JSON-LD 포함

### 2. `/blog/ai-saas-enterprise-guide.html`
- **Pillar 페이지** (1,500+ 단어)
- 7개 주요 섹션:
  1. 확장 가능한 아키텍처 설계
  2. 멀티테넌시 구조 구현
  3. 보안 및 규제 대응
  4. 운영형 계약(MSP) 모델
  5. 비용 계획 및 최적화
  6. AI 통합 전략
  7. 다음 단계
- 클러스터 기사로의 내부 링크 포함
- CTA 블록 포함

### 3. `/blog/saas-msp-operation-model.html`
- MSP 모델에 대한 클러스터 기사
- Pillar 페이지로의 링크 포함
- 실무 중심 콘텐츠

### 4. `/blog/ai-saas-architecture.html`
- 아키텍처 설계 클러스터 기사
- 스켈레톤 구조 (확장 가능)

### 5. `/blog/templates/article-template.html`
- 재사용 가능한 기사 템플릿
- 변수: {{ARTICLE_TITLE}}, {{ARTICLE_DESCRIPTION}}, {{ARTICLE_SLUG}} 등

## URL 구조

| 파일 | URL | 타입 |
|------|-----|------|
| index.html | `/blog/` | 인덱스 |
| ai-saas-enterprise-guide.html | `/blog/ai-saas-enterprise-guide` | Pillar |
| saas-msp-operation-model.html | `/blog/saas-msp-operation-model` | Cluster |
| ai-saas-architecture.html | `/blog/ai-saas-architecture` | Cluster |

## 내부 링킹 구조

### 홈페이지 → 블로그
- 네비게이션: "인사이트" 링크 추가됨
- Services 섹션 하단: "인사이트 보기" 링크 추가됨
- MSP 섹션: "MSP 모델 설계 가이드 읽기" 링크 추가됨

### 블로그 내부
- 모든 클러스터 기사 → Pillar 페이지 링크
- 모든 기사 → Contact 페이지 CTA
- Pillar 페이지 → 관련 클러스터 기사 링크

## SEO 메타 태그 템플릿

각 기사는 다음을 포함합니다:
- `<title>`: 기사 제목 | OnOffus
- `<meta name="description">`: 155자 이하, 키워드 포함
- `<link rel="canonical">`: 절대 URL
- OG 태그 (og:title, og:description, og:image, og:url)
- Twitter 카드 태그

## JSON-LD 스키마

### BlogPosting (모든 기사)
- headline, description, image
- datePublished, dateModified
- author (OnOffus Engineering Team)
- publisher (OnOffus Organization)

### BreadcrumbList (모든 기사)
- 홈 → 인사이트 → 기사 제목

### CollectionPage (인덱스)
- 블로그 컬렉션 정보

## CTA 전략

각 기사에 다음 CTA 포함:
1. **Primary CTA**: "AI SaaS 구축 상담 받기" → `/#contact`
2. **Secondary CTA**: "운영형 계약(MSP) 문의하기" → `/#msp`
3. **Author Box**: "프로젝트 문의하기" → `/#contact`

## 타겟 키워드

### Primary Keywords (고의도)
- AI SaaS 개발
- 엔터프라이즈 시스템 구축
- AI 자동화 회사
- LLM 도입 컨설팅
- 기업용 AI 솔루션
- SaaS 개발 외주

### Secondary Keywords (토픽 권위)
- 멀티테넌시
- MSP 모델
- RAG 시스템
- AI DevOps
- 데이터 파이프라인
- 시스템 현대화

## 성능 최적화

- ✅ 이미지 lazy loading
- ✅ 최소한의 JavaScript
- ✅ 인라인 스타일 (style.css 재사용)
- ✅ 구조화된 데이터
- ✅ 시맨틱 HTML5

## 장기 리드 생성 전략

### 1. 토픽 권위 구축
Pillar-cluster 구조로 "AI + B2B SaaS + 엔터프라이즈 운영" 주제에서 전문성을 입증합니다. 
검색 엔진은 관련 주제의 포괄적인 콘텐츠를 제공하는 사이트를 신뢰합니다.

### 2. 고의도 키워드 타겟팅
"AI SaaS 개발", "엔터프라이즈 시스템 구축" 등 구매 의도가 높은 키워드에 집중합니다. 
이러한 키워드로 유입된 방문자는 상담 문의로 전환될 가능성이 높습니다.

### 3. 전환 경로 최적화
각 기사에 명확한 CTA를 배치하여 상담 문의로 자연스럽게 유도합니다. 
"운영형 계약"과 "구축 상담" 두 가지 옵션을 제공하여 다양한 고객 니즈에 대응합니다.

### 4. 내부 링킹 전략
Pillar 페이지로의 링크를 통해 검색 엔진이 콘텐츠 구조를 이해하고, 
사용자가 관련 콘텐츠를 탐색하여 사이트 체류 시간을 늘립니다.

### 5. 지속적인 콘텐츠 확장
정기적으로 새로운 클러스터 기사를 추가하여 검색 트래픽을 지속적으로 증가시킵니다. 
각 기사는 Pillar 페이지와 연결하여 전체 구조를 강화합니다.

### 6. 신뢰 구축
실무 경험 기반의 구체적이고 실용적인 콘텐츠로 전문성을 보여줍니다. 
"20년 시스템 전문가" 경력을 활용하여 신뢰도를 높입니다.

## 다음 단계

1. 나머지 클러스터 기사 생성 (8개)
2. 각 기사에 실무 사례 및 구체적 예시 추가
3. 정기적인 콘텐츠 업데이트 (월 1-2회)
4. 검색 콘솔 모니터링 및 키워드 성과 추적
5. 사용자 피드백 수집 및 콘텐츠 개선
