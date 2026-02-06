# 산업별 랜딩 페이지 배포 후 검증 체크리스트

## SEO

- [ ] **타이틀**: 각 페이지 `<title>` 60자 이내, 산업 키워드 + "AI SaaS" 포함
- [ ] **메타 설명**: 155자 이내, "무료 상담" 또는 "운영형" 또는 "MSP" 포함
- [ ] **Canonical**: `https://www.onoffus.com/industries/{slug}.html` 형식 정확
- [ ] **OG 태그**: `og:title`, `og:description`, `og:url`, `og:image` 모두 설정
- [ ] **JSON-LD**: BreadcrumbList, WebPage 각 페이지 존재 (finance는 FAQPage 포함)
- [ ] **H1**: 페이지당 정확히 1개

## 전환(Conversion)

- [ ] **Hero CTA**: "무료 기술 상담 받기" → `#contact` 연결
- [ ] **보조 CTA**: "운영형 계약(MSP) 알아보기" → `#msp` 연결
- [ ] **MSP 섹션 CTA**: "운영형 계약 상담 받기" → `#contact` 연결
- [ ] **Contact**: 운영형(월 단위) 또는 6개월+ 장기 프로젝트 문구 + 회신/NDA 안심 문구
- [ ] **FAQ**: 각 답 끝에 해당 CTA 링크 있는지 확인 (풀 카피 페이지)

## 내부 링크

- [ ] **홈페이지**: 서비스 섹션 아래 "산업별 솔루션 보기" → `/industries/`
- [ ] **산업 페이지**: 홈, `/industries/`, 블로그 필러(`/blog/ai-saas-enterprise-guide.html`), `#contact` 링크 동작

## 선택

- [ ] Google Search Console에 산업 URL 제출
- [ ] OG 이미지 미리보기(소셜 공유) 확인
