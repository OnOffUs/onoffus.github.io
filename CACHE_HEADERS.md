# 캐시 헤더 설정 가이드

## 현재 상황
GitHub Pages는 서버 측 캐시 헤더를 직접 제어할 수 없습니다. 현재 리소스들이 10분의 짧은 캐시 TTL을 가지고 있어 반복 방문자에게 최적화되지 않았습니다.

## 해결 방법

### 1. Service Worker (이미 구현됨)
- `sw.js` 파일이 생성되었습니다
- 클라이언트 측에서 리소스를 캐싱하여 반복 방문 시 빠른 로딩을 제공합니다
- 브라우저가 Service Worker를 지원하는 경우 자동으로 활성화됩니다

### 2. CDN 사용 (권장)
Cloudflare나 다른 CDN을 사용하는 경우:

#### Cloudflare 설정:
1. Cloudflare 대시보드에 로그인
2. `onoffus.com` 도메인 선택
3. **Caching** → **Configuration** 이동
4. **Browser Cache TTL** 설정:
   - Static assets (CSS, JS, images): 1년 (31536000초)
   - HTML: 1시간 (3600초)

#### Cloudflare Page Rules 설정:
```
URL: www.onoffus.com/*.css
Cache Level: Cache Everything
Edge Cache TTL: 1 year
Browser Cache TTL: 1 year

URL: www.onoffus.com/*.js
Cache Level: Cache Everything
Edge Cache TTL: 1 year
Browser Cache TTL: 1 year

URL: www.onoffus.com/*.png
Cache Level: Cache Everything
Edge Cache TTL: 1 year
Browser Cache TTL: 1 year

URL: www.onoffus.com/
Cache Level: Standard
Edge Cache TTL: 1 hour
Browser Cache TTL: 1 hour
```

### 3. 리소스 버전 관리 (선택사항)
리소스 파일에 버전 번호를 추가하여 캐시 버스팅 구현:
```html
<link rel="stylesheet" href="style.css?v=1.0.0">
<script src="script.js?v=1.0.0"></script>
```

## 예상 효과
- 반복 방문 시 로딩 시간 약 34KiB 절감
- LCP 및 FCP 개선
- 서버 부하 감소

## 확인 방법
1. 브라우저 개발자 도구 → Network 탭
2. 리소스의 Response Headers 확인
3. `Cache-Control` 또는 `Expires` 헤더 확인
