# SEO 콘텐츠 구조 및 가이드

## 디렉토리 구조

```
/blog/
  ├── index.html                    # 블로그 인덱스 페이지
  ├── ai-saas-enterprise-guide.html # Pillar 페이지 (핵심 가이드)
  ├── saas-msp-operation-model.html # 클러스터 (MSP 모델)
  ├── ai-saas-architecture.html     # 클러스터 (아키텍처)
  ├── enterprise-ai-adoption.html   # 클러스터 (AI 도입)
  ├── llm-rag-in-production.html     # 클러스터 (RAG 시스템)
  ├── devops-for-ai-systems.html    # 클러스터 (DevOps)
  ├── data-pipeline-enterprise.html # 클러스터 (데이터 파이프라인)
  ├── ai-backoffice-automation.html # 클러스터 (백오피스 자동화)
  ├── poc-to-production-ai.html      # 클러스터 (PoC 전환)
  ├── b2b-saas-cost-estimation.html # 클러스터 (비용 추정)
  ├── enterprise-system-modernization.html # 클러스터 (시스템 현대화)
  └── templates/
      └── article-template.html      # 재사용 가능한 템플릿
```

## URL 구조

- 블로그 인덱스: `/blog/`
- Pillar 페이지: `/blog/ai-saas-enterprise-guide`
- 클러스터 기사: `/blog/{slug}`

## 내부 링킹 규칙

### 모든 블로그 기사에서:
1. Pillar 페이지로 링크: "핵심 가이드: [AI 기반 B2B SaaS 구축 가이드]"
2. Contact 페이지로 링크: CTA 버튼들
3. 관련 클러스터 기사로 상호 링크

### 홈페이지에서:
- 네비게이션에 "인사이트" 링크 추가 (완료)
- MSP 섹션에 MSP 모델 가이드 링크 추가 (완료)

## JSON-LD 스키마 템플릿

### BlogPosting Schema (모든 기사)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "기사 제목",
  "description": "메타 설명",
  "image": "https://www.onoffus.com/logo-onoffus.png",
  "datePublished": "2025-01-25T00:00:00+09:00",
  "dateModified": "2025-01-25T00:00:00+09:00",
  "author": {
    "@type": "Organization",
    "name": "OnOffus Engineering Team",
    "url": "https://www.onoffus.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OnOffus",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.onoffus.com/logo-onoffus.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.onoffus.com/blog/{slug}"
  }
}
```

### BreadcrumbList Schema (모든 기사)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "홈",
      "item": "https://www.onoffus.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "인사이트",
      "item": "https://www.onoffus.com/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "기사 제목",
      "item": "https://www.onoffus.com/blog/{slug}"
    }
  ]
}
```

### FAQ Schema (필요시)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "질문",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "답변"
      }
    }
  ]
}
```

## CTA 컴포넌트 템플릿

### Primary CTA (기사 내)
```html
<div style="background: linear-gradient(135deg, rgba(37,99,235,0.1), rgba(147,51,234,0.1)); border-radius: var(--radius-xl); padding: 3rem; margin: 4rem 0; border: 2px solid rgba(37,99,235,0.2); text-align: center;">
  <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-main);">
    프로젝트에 적용하고 싶으신가요?
  </h2>
  <p style="font-size: 1.05rem; color: var(--text-sub); line-height: 1.7; margin-bottom: 2rem;">
    운영형(월 단위) 또는 6개월 이상 장기 프로젝트를 우선합니다.
  </p>
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
    <a href="/#contact" class="btn btn-primary">AI SaaS 구축 상담 받기</a>
    <a href="/#msp" class="btn">운영형 계약(MSP) 문의하기</a>
  </div>
</div>
```

## 타겟 키워드 매핑

### Pillar 페이지
- Primary: "AI 기반 B2B SaaS 구축"
- Secondary: "엔터프라이즈 SaaS", "멀티테넌시", "SaaS 아키텍처"

### 클러스터 기사
- ai-saas-architecture: "AI SaaS 아키텍처", "마이크로서비스", "이벤트 드리븐"
- enterprise-ai-adoption: "엔터프라이즈 AI 도입", "AI 컨설팅", "기업용 AI 솔루션"
- llm-rag-in-production: "RAG 시스템", "LLM 프로덕션", "벡터 검색"
- saas-msp-operation-model: "SaaS 운영", "MSP 모델", "운영형 계약"
- devops-for-ai-systems: "AI DevOps", "CI/CD AI", "AI 모델 배포"
- data-pipeline-enterprise: "엔터프라이즈 데이터 파이프라인", "ETL", "데이터 통합"
- ai-backoffice-automation: "AI 자동화", "백오피스 자동화", "업무 자동화"
- poc-to-production-ai: "AI PoC", "파일럿 프로젝트", "AI 전환"
- b2b-saas-cost-estimation: "SaaS 비용", "B2B SaaS 예산", "프로젝트 비용"
- enterprise-system-modernization: "시스템 현대화", "레거시 전환", "클라우드 마이그레이션"

## 성능 최적화 체크리스트

- [x] 이미지 lazy loading (loading="lazy" 속성)
- [x] 폰트 preload (필요시)
- [x] 최소한의 JavaScript
- [x] 인라인 CSS (style.css 재사용)
- [x] 구조화된 데이터 (JSON-LD)
- [x] 시맨틱 HTML5 태그

## 콘텐츠 전략

### 장기 리드 생성 지원 방법:

1. **토픽 권위 구축**: Pillar-cluster 구조로 "AI + B2B SaaS + 엔터프라이즈 운영" 주제에서 전문성을 입증합니다.

2. **고의도 키워드 타겟팅**: "AI SaaS 개발", "엔터프라이즈 시스템 구축" 등 구매 의도가 높은 키워드에 집중합니다.

3. **전환 경로 최적화**: 각 기사에 명확한 CTA를 배치하여 상담 문의로 자연스럽게 유도합니다.

4. **내부 링킹**: Pillar 페이지로의 링크를 통해 검색 엔진이 콘텐츠 구조를 이해하고, 사용자가 관련 콘텐츠를 탐색하도록 합니다.

5. **장기 운영**: 정기적으로 새로운 클러스터 기사를 추가하여 검색 트래픽을 지속적으로 증가시킵니다.

6. **신뢰 구축**: 실무 경험 기반의 구체적이고 실용적인 콘텐츠로 전문성을 보여줍니다.
