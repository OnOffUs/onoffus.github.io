# OnOffus 공식 웹사이트

AI 기반 B2B SaaS & 엔터프라이즈 시스템 개발 전문 회사 OnOffus의 공식 웹사이트입니다.

🌐 **Live Site**: [https://www.onoffus.com](https://www.onoffus.com)

## 📋 목차

- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [성능 최적화](#성능-최적화)
- [배포](#배포)
- [기여하기](#기여하기)

## ✨ 주요 기능

### 🌍 다국어 지원 (i18n)
- 한국어/영어 자동 전환
- `localStorage`를 통한 언어 설정 저장
- 모든 콘텐츠 동적 번역

### 🎨 테마 지원
- 다크 모드 / 라이트 모드
- 사용자 선호도 자동 저장
- 부드러운 테마 전환 애니메이션

### 🎭 인터랙티브 애니메이션
- 신경망(Neural Network) 배경 애니메이션
- 스크롤 기반 섹션 애니메이션
- 부드러운 스크롤 네비게이션

### 📊 성능 최적화
- Service Worker를 통한 클라이언트 측 캐싱
- 이미지 최적화 (WebP 지원)
- 지연 로딩 (Lazy Loading)
- Google Analytics 지연 로드
- Critical CSS 인라인

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 터치 친화적 UI/UX
- 접근성(A11y) 준수

## 🛠 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - CSS 변수, Flexbox, Grid, 애니메이션
- **JavaScript (Vanilla)** - ES6+, 모듈화된 구조
- **Canvas API** - 신경망 애니메이션

### 성능 & 최적화
- **Service Worker** - 오프라인 지원 및 캐싱
- **WebP** - 최적화된 이미지 포맷
- **Preload/Prefetch** - 리소스 우선순위 최적화
- **Critical CSS** - 초기 렌더링 최적화

### 분석 & 추적
- **Google Analytics 4 (GA4)** - 지연 로드
- **이벤트 추적** - CTA 클릭, 섹션 조회 등

### 호스팅
- **GitHub Pages** - 정적 사이트 호스팅
- **Custom Domain** - www.onoffus.com

## 📁 프로젝트 구조

```
onoffus.github.io/
├── index.html            # 홈 (서비스 · 진행 방식 · MSP · 경력 · 산업별 · 인사이트 · FAQ · 문의)
├── style.css             # 전체 공용 디자인 시스템 (라이트/다크 토큰)
├── script.js             # 공용 스크립트 (테마, 모바일 메뉴, 스크롤 애니메이션, GA4, SW 등록)
├── i18n.js               # 영어 번역 (한국어 원문은 HTML에 있음 · 홈/인사이트/산업별 목록에 적용)
├── sw.js                 # Service Worker (HTML 네트워크 우선, 정적 파일 SWR)
├── 404.html
├── blog/                 # 인사이트 (목록 + 글 4개, templates/ 는 noindex 템플릿)
├── industries/           # 산업별 솔루션 (목록 + 7개 산업)
├── assets/               # 로고 · 파비콘 · OG 이미지
├── sitemap.xml · robots.txt · site.webmanifest · CNAME
```

## 🚀 시작하기

### 사전 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 최신 버전)
- 로컬 개발 시: 간단한 HTTP 서버 (선택사항)

### 로컬 개발

1. **저장소 클론**
```bash
git clone https://github.com/onoffus/onoffus.github.io.git
cd onoffus.github.io
```

2. **로컬 서버 실행** (선택사항)
```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. **브라우저에서 열기**
```
http://localhost:8000
```

### 파일 수정

- **콘텐츠 수정**: `index.html` 파일 편집
- **스타일 수정**: `style.css` 파일 편집
- **기능 추가**: `script.js` 파일 편집
- **번역 추가**: `i18n.js` 파일의 `translations` 객체 수정

## ⚡ 성능 최적화

### 구현된 최적화

1. **렌더링 차단 리소스 최적화**
   - CSS 비동기 로드
   - JavaScript defer 속성
   - Critical CSS 인라인

2. **이미지 최적화**
   - WebP 형식 지원
   - `<picture>` 요소로 자동 형식 선택
   - 적절한 크기 및 lazy loading

3. **캐싱 전략**
   - Service Worker를 통한 클라이언트 캐싱
   - CDN 캐시 헤더 설정 (Cloudflare 권장)

4. **JavaScript 최적화**
   - Google Analytics 지연 로드
   - requestAnimationFrame을 통한 리플로우 최소화
   - 이벤트 리스너 최적화 (passive, throttle)

5. **네트워크 최적화**
   - DNS prefetch
   - Preconnect
   - 리소스 preload

### 성능 지표

- **LCP (Largest Contentful Paint)**: 최적화됨
- **FCP (First Contentful Paint)**: 최적화됨
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: 최적화됨

## 🚢 배포

### GitHub Pages 자동 배포

1. **변경사항 커밋**
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **자동 배포 확인**
   - GitHub 저장소의 Actions 탭에서 배포 상태 확인
   - 보통 몇 분 내에 자동으로 배포됨

### 수동 배포 (선택사항)

GitHub Pages는 `main` 브랜치의 변경사항을 자동으로 배포합니다.

### 커스텀 도메인 설정

1. `CNAME` 파일에 도메인 설정 (이미 설정됨: www.onoffus.com)
2. DNS 설정에서 GitHub Pages IP로 CNAME 레코드 추가
3. GitHub 저장소 Settings > Pages에서 도메인 확인

## 📝 주요 섹션

- **Hero**: 핵심 메시지, 상담 CTA, 프로젝트 진행 흐름
- **Services**: 3대 핵심 역량 + 지원 역량
- **Process**: 4단계 진행 방식
- **MSP**: 운영형 계약 범위와 Lite/Standard/Enterprise
- **Experience**: 대표 경력, 주요 프로젝트, 참여 고객사
- **Industries / Insights / FAQ / Contact**

## 🔧 커스터마이징

### 테마 색상 변경

`style.css`의 CSS 변수 수정:
```css
:root {
  --primary: #2563eb;
  --primary-soft: #3b82f6;
  --bg: #0a1128;
  /* ... */
}
```

### 번역 추가

`i18n.js`의 `translations` 객체에 새로운 언어 추가:
```javascript
const translations = {
  ko: { /* ... */ },
  en: { /* ... */ },
  ja: { /* ... */ } // 새 언어 추가
};
```

### 섹션 추가

1. `index.html`에 새 섹션 추가
2. `data-i18n` 속성으로 번역 키 연결
3. `i18n.js`에 번역 데이터 추가

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 OnOffus의 저작권을 가집니다.

## 📞 문의

- **이메일**: support@onoffus.com
- **웹사이트**: [https://www.onoffus.com](https://www.onoffus.com)
- **사업자 등록번호**: 379-88-01413

## 🙏 감사의 말

이 웹사이트는 다음 기술과 리소스를 사용합니다:
- GitHub Pages
- Google Analytics
- Web Standards (HTML5, CSS3, ES6+)

---

**OnOffus** - AI-Powered B2B SaaS & Enterprise Systems.
