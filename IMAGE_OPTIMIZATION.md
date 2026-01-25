# 이미지 최적화 가이드

## 현재 상황
- `logo-onoffus.png`: 5.1 KiB
- 예상 절감 용량: 4.4 KiB (약 86% 감소 가능)

## 최적화 방법

### 1. WebP 형식으로 변환 (권장)

WebP는 PNG보다 약 25-35% 작은 파일 크기를 제공합니다.

#### 온라인 도구 사용:
1. [Squoosh](https://squoosh.app/) - Google의 무료 이미지 압축 도구
2. [CloudConvert](https://cloudconvert.com/png-to-webp) - PNG to WebP 변환
3. [Convertio](https://convertio.co/png-webp/) - 다양한 형식 변환

#### 명령줄 도구 사용 (cwebp):
```bash
# macOS (Homebrew)
brew install webp

# 변환
cwebp -q 80 logo-onoffus.png -o logo-onoffus.webp

# 품질 조정 (0-100, 기본값 75)
cwebp -q 90 logo-onoffus.png -o logo-onoffus.webp  # 고품질
cwebp -q 70 logo-onoffus.png -o logo-onoffus.webp  # 더 작은 파일
```

#### Node.js 사용:
```bash
npm install -g sharp-cli
sharp -i logo-onoffus.png -o logo-onoffus.webp --webp
```

### 2. PNG 압축 최적화

WebP를 사용할 수 없는 경우 PNG를 최적화:

#### 온라인 도구:
- [TinyPNG](https://tinypng.com/) - PNG 압축
- [ImageOptim](https://imageoptim.com/) - macOS 앱

#### 명령줄 도구:
```bash
# macOS (Homebrew)
brew install pngquant optipng

# PNG 압축
pngquant --quality=65-80 logo-onoffus.png
optipng -o7 logo-onoffus.png
```

### 3. AVIF 형식 (최신 브라우저)

AVIF는 WebP보다 더 작은 파일 크기를 제공하지만 브라우저 지원이 제한적입니다.

```bash
# macOS (Homebrew)
brew install libavif

# 변환
avifenc -c aom -s 4 logo-onoffus.png logo-onoffus.avif
```

### 4. 구현 완료 사항

이미 HTML에 다음이 적용되었습니다:

```html
<picture>
  <source srcset="logo-onoffus.webp" type="image/webp">
  <img src="logo-onoffus.png" alt="..." class="logo-img" width="120" height="40" loading="eager" />
</picture>
```

브라우저가 WebP를 지원하면 WebP를 사용하고, 그렇지 않으면 PNG를 사용합니다.

## 다음 단계

1. **WebP 파일 생성:**
   - 위의 도구 중 하나를 사용하여 `logo-onoffus.webp` 파일 생성
   - 파일을 프로젝트 루트에 저장

2. **파일 크기 확인:**
   - 원본 PNG: 5.1 KiB
   - 목표 WebP: ~0.7-1.5 KiB (약 70-85% 감소)

3. **품질 테스트:**
   - 변환된 이미지가 시각적으로 만족스러운지 확인
   - 필요시 품질 설정 조정

4. **배포:**
   - `logo-onoffus.webp` 파일을 GitHub에 커밋
   - 자동으로 최적화된 이미지가 사용됩니다

## 예상 효과

- **파일 크기 감소**: 5.1 KiB → ~0.7-1.5 KiB (약 70-85% 감소)
- **로딩 시간 단축**: 약 4.4 KiB 절감
- **LCP 개선**: 이미지 로딩 시간 단축으로 Largest Contentful Paint 개선
- **대역폭 절감**: 모바일 사용자에게 특히 유리

## 참고사항

- `<picture>` 요소는 이미 구현되어 있어 WebP 파일만 추가하면 자동으로 사용됩니다
- PNG는 폴백으로 유지되므로 모든 브라우저에서 작동합니다
- `width`와 `height` 속성이 설정되어 있어 레이아웃 시프트(CLS)가 발생하지 않습니다
