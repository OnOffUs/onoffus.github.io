// i18n.js - 다국어 번역 데이터 및 언어 전환 기능

const translations = {
  ko: {
    meta: {
      pageTitle: "AI 기반 B2B SaaS & 엔터프라이즈 시스템 구축 + 운영(MSP) | OnOffus",
      description: "AI 기반 B2B SaaS 구축과 운영형 계약(MSP) 제공. 운영형/MSP/무료 상담. 20년 시스템 전문가가 구축부터 24/7 운영까지 책임집니다."
    },
    // Navigation
    nav: {
      services: "서비스",
      msp: "MSP",
      cases: "사례",
      faq: "FAQ",
      insights: "인사이트",
      contact: "문의",
      ariaServices: "서비스 섹션으로 이동",
      ariaMsp: "운영형 계약 섹션으로 이동",
      ariaCases: "사례 섹션으로 이동",
      ariaFaq: "FAQ 섹션으로 이동",
      ariaInsights: "인사이트로 이동",
      ariaContact: "문의 섹션으로 이동"
    },
    // Hero Section
    hero: {
      "title.line1": "Enterprise AI Transformation & LLM Operations",
      "subtitle.main": "단순한 AI 도입을 넘어, 실제 비즈니스 가치를 만드는 <strong style=\"color: var(--primary-soft);\">AI 에이전트와 RAG 시스템</strong>을 구축합니다. 20년 엔터프라이즈 기술력으로 AI의 프로덕션 운영(LLMOps)을 책임집니다.",
      "stats.years.value": "20년+",
      "stats.years.label": "시스템 엔지니어링",
      "stats.projects.value": "50+",
      "stats.projects.label": "대규모 프로젝트",
      "stats.uptime.value": "99.9%",
      "stats.uptime.label": "시스템 가동률",
      "cta.primary": "🚀 지금 무료 AI 기술 상담 받기",
      "cta.secondary": "운영형 계약(MSP) 알아보기",
      "cta.subtext": "✓ 1영업일 내 회신  ✓ NDA 가능  ✓ PoC/제안서 제공  ✓ 운영(SLA) 옵션",
      badge: "Enterprise AI & LLM Specialist",
      whoWeHelp: "스타트업 B2B SaaS · 중견/대기업 내부 시스템 · AI 전환 프로젝트 전문"
    },
    // Services Section
    services: {
      kicker: "Core Expertise",
      title: "AI 기반 B2B SaaS & 엔터프라이즈 시스템 구축",
      desc: "구축과 운영을 함께 제공하여 지속적인 성과를 만듭니다.",
      core1: { title: "AI 기반 B2B SaaS 구축 & 고도화", subtitle: "성과를 만드는 SaaS 아키텍처", items: ["멀티테넌시 기반 확장형 구조 설계", "빠른 시장 출시(MVP → Scale)", "운영 자동화와 장애 대응 체계 포함"] },
      core2: { title: "엔터프라이즈 안정성 중심 시스템 구축", subtitle: "대기업급 안정성과 보안을 기본값으로", items: ["무중단 배포 및 관제 시스템 구축", "보안 표준 및 규제 대응 설계", "24/7 장애 대응 체계 설계"] },
      core3: { title: "AI/LLM 자동화 적용", subtitle: "AI로 반복 업무를 제거합니다", items: ["RAG 기반 문서 검색/요약", "고객 응대 및 내부 업무 자동화", "데이터 기반 의사결정 자동화"] },
      cta: "이 방식으로 제안 받기 →",
      "customers.title": "주요 고객",
      "customers.text": "스타트업/중소기업의 B2B SaaS · 기업 내부 업무시스템 · AI 도입/자동화 전환",
      "blog.text": "실무 인사이트와 가이드를 확인하세요",
      "blog.cta": "인사이트 보기 →"
    },
    // MSP Section
    msp: {
      kicker: "운영형 계약",
      title: "운영형 계약(MSP): 구축 이후, 월 단위로 성과를 만드는 파트너십",
      desc: "단발성 프로젝트가 아니라, 성과를 함께 키우는 장기 파트너십입니다.",
      guideLink: "MSP 모델 설계 가이드 읽기 →",
      "included.title": "포함 범위",
      "included.1.title": "시스템 모니터링 및 장애 대응",
      "included.1.desc": "24/7 모니터링, 실시간 알림, 즉시 장애 대응",
      "included.2.title": "SLA 기반 운영 및 성능 최적화",
      "included.2.desc": "가동률 목표 설정 및 지속적 성능 개선",
      "included.3.title": "보안 패치 및 규제 대응",
      "included.3.desc": "정기 보안 업데이트 및 규제 준수 관리",
      "included.4.title": "비용 최적화 및 인프라 개선",
      "included.4.desc": "인프라 비용 분석 및 지속적 최적화",
      "included.5.title": "AI 기능 지속 고도화",
      "included.5.desc": "운영 중인 시스템에 AI 자동화 점진적 적용",
      cta: "운영형 계약 상담 받기",
      "tier.lite": "핵심 시스템 운영 / 정기 점검 / 월 리포트",
      "tier.standard": "상시 모니터링 / 성능 개선 / 분기별 고도화",
      "tier.enterprise": "24/7 대응 / 전담 엔지니어 / 지속 개선 로드맵"
    },
    // Supporting Section
    supporting: {
      kicker: "지원 역량",
      title: "지원 역량(필요 시): 구축 품질을 뒷받침합니다",
      devops: "AWS 인프라, CI/CD, 컨테이너 관리",
      dashboard: "관리자 인터페이스 및 리포트 시스템",
      etl: "데이터 수집, 변환, 통합 파이프라인",
      mobile: "React Native, Flutter 기반 앱",
      aiDesc: "운영 중인 시스템에 적용 가능한 AI 자동화 솔루션",
      ai1: "AI 고객 응대",
      ai2: "AI 백오피스",
      ai3: "AI 데이터 자동화"
    },
    // Trust Section
    trust: {
      kicker: "Trust & Credibility",
      title: "AI 시스템의 신뢰성을 보장하는 기술적 배경",
      desc: "2005년부터 시작된 20년 시스템 전문가의 경력과 삼성, 현대, 금융권 실적이 AI 시스템의 안정성과 신뢰성을 보장합니다. 대기업 수준의 시스템 운영 경험을 바탕으로 기업용 AI 도입 및 운영의 모든 과정을 책임집니다.",
      "years.title": "20년 시스템 전문가",
      "years.desc": "AI 시스템 신뢰성의 기술적 기반",
      "years.items": [
        "2005년부터 시작된 시스템 구축 경력",
        "금융, 항공 등 대규모 시스템 운영 전문",
        "AI 시스템 안정성 검증 경험",
        "프로젝트 리더(PL)로서 AI 도입 프로젝트 다수 수행"
      ],
      "projects.title": "대기업 실적",
      "projects.desc": "AI 시스템 신뢰성의 검증된 배경",
      "projects.items": [
        "<strong>삼성:</strong> 삼성화재, 삼성네트웍스, 삼성닷컴 (시스템 운영)",
        "<strong>현대:</strong> 현대증권 등 금융권 시스템 구축",
        "<strong>금융권:</strong> KB손해보험, 우리카드, 신한은행",
        "<strong>기타:</strong> SK텔링크, 아모레퍼시픽 등 대기업 프로젝트"
      ],
      "aiNative.title": "AI 운영 전문",
      "aiNative.desc": "AI 시스템 운영 및 유지보수 전문 역량",
      "aiNative.items": [
        "LLM API와 기존 백오피스 시스템 통합",
        "레거시 데이터베이스와 AI 파이프라인 연동",
        "기존 CTI 시스템과 AI 상담 솔루션 통합",
        "마이크로서비스 아키텍처 기반 점진적 AI 도입"
      ],
      yearsText: "2005년부터 이어진 20년의 경력",
      referenceTitle: "대표자의 핵심 프로젝트 레퍼런스"
    },
    // Tech Stack Section
    techStack: {
      kicker: "Technology Stack",
      title: "풀스택 전문가 - C부터 Python AI까지",
      desc: "C, C++, Java/Spring부터 최신 Python AI 프레임워크까지 다룰 수 있는 풀스택 전문가입니다. 20년간 대규모 시스템에서 검증된 기술을 활용하여 안정적이고 확장 가능한 솔루션을 구축합니다."
    },
    // AI Solutions Section
    aiSolutions: {
      kicker: "AI Solutions",
      title: "운영 최적화를 위한 AI 솔루션",
      desc: "단순 챗봇이 아닌, 기업의 내부 데이터와 연동되어 스스로 판단하고 업무를 수행하는 AI Agent 시스템을 구축합니다.",
      rag: {
        title: "RAG 기반 지식 검색 시스템",
        desc: "벡터 데이터베이스와 LLM을 결합한 지식 검색 및 질의응답 시스템. 내부 문서, FAQ, 지식베이스를 AI로 검색하고 정확한 답변을 제공합니다.",
        items: [
          "벡터 임베딩 및 유사도 검색",
          "LLM 기반 답변 생성 및 검증",
          "출처 추적 및 신뢰도 표시",
          "멀티모달 검색 (텍스트, 이미지)"
        ],
        metric: "응답 시간",
        value: "< 2초 (평균 1.3초)"
      },
      automation: {
        title: "LLM 자동화 파이프라인",
        desc: "반복적인 문서 처리, 데이터 추출, 분류 작업을 LLM으로 자동화. Kafka 기반 비동기 처리로 대량 작업을 효율적으로 처리합니다.",
        items: [
          "문서 자동 분류 및 태깅",
          "데이터 추출 및 구조화",
          "콘텐츠 요약 및 번역",
          "품질 검증 및 오류 감지"
        ],
        metric: "처리량",
        value: "시간당 10,000+ 문서"
      },
      recommendation: {
        title: "AI 기반 추천 엔진",
        desc: "협업 필터링과 딥러닝을 결합한 개인화 추천 시스템. 실시간 사용자 행동 분석 및 동적 추천 업데이트.",
        items: [
          "협업 필터링 및 콘텐츠 기반 추천",
          "실시간 사용자 행동 분석",
          "A/B 테스트 및 성능 최적화",
          "콜드 스타트 문제 해결"
        ],
        metric: "정확도",
        value: "CTR 35% 향상"
      },
      analytics: {
        title: "AI 기반 분석 및 인사이트",
        desc: "대량의 비즈니스 데이터를 AI로 분석하여 실행 가능한 인사이트 제공. 예측 분석, 이상 탐지, 트렌드 분석까지.",
        items: [
          "시계열 예측 및 트렌드 분석",
          "이상 탐지 및 알림 시스템",
          "자연어 기반 리포트 생성",
          "대화형 데이터 탐색 인터페이스"
        ],
        metric: "처리 속도",
        value: "실시간 분석 가능"
      }
    },
    // Why Section
    why: {
      kicker: "Why OnOffus",
      title: "왜 OnOffus를 선택해야 하는가",
      desc: "기술적 깊이와 엔터프라이즈 경험, 그리고 실제 운영 중인 AI 시스템. 신뢰할 수 있는 파트너의 기준을 충족합니다.",
      architecture: {
        title: "확장 가능한 아키텍처",
        items: [
          "마이크로서비스 기반 설계로 독립적 확장 가능",
          "Kafka 기반 이벤트 드리븐 아키텍처",
          "수평 확장 가능한 무상태(stateless) 구조",
          "로드 밸런싱 및 자동 스케일링 지원",
          "다중 리전 배포 및 재해 복구 전략"
        ]
      },
      operations: {
        title: "운영 및 모니터링",
        items: [
          "24/7 모니터링 및 자동 알림 시스템",
          "분산 추적(Distributed Tracing)으로 성능 분석",
          "로그 집계 및 분석 시스템",
          "장애 자동 복구 및 롤백 메커니즘",
          "정기적인 성능 튜닝 및 최적화"
        ]
      },
      security: {
        title: "보안 및 규정 준수",
        items: [
          "엔드투엔드 암호화 및 보안 통신",
          "역할 기반 접근 제어(RBAC) 및 권한 관리",
          "정기적인 보안 감사 및 취약점 스캔",
          "데이터 백업 및 복구 전략",
          "GDPR, 개인정보보호법 등 규정 준수"
        ]
      },
      aiProduction: {
        title: "AI in Production",
        items: [
          "실제 서비스에 통합되어 운영 중인 AI 시스템",
          "모델 버전 관리 및 A/B 테스트 인프라",
          "AI 모델 성능 모니터링 및 재학습 파이프라인",
          "비용 최적화된 LLM API 사용 전략",
          "AI 거버넌스 및 윤리적 사용 가이드라인"
        ]
      }
    },
    // Process Section
    process: {
      kicker: "Process",
      title: "협업 프로세스",
      desc: "대규모 전면 재구축보다는, 검증 가능한 단계적 접근을 통해 리스크를 최소화하고 빠른 가치 창출을 추구합니다.",
      step1: {
        title: "요구사항 분석 및 아키텍처 설계",
        desc: "비즈니스 요구사항을 기술적 솔루션으로 전환. 확장성, 보안, 성능을 고려한 아키텍처 설계 및 기술 스택 선정."
      },
      step2: {
        title: "PoC 및 프로토타입 개발",
        desc: "핵심 기능의 프로토타입을 빠르게 구축하여 기술적 타당성과 비즈니스 가치를 검증합니다."
      },
      step3: {
        title: "단계적 개발 및 배포",
        desc: "MVP부터 시작하여 사용자 피드백을 반영하며 점진적으로 기능을 확장. CI/CD 파이프라인을 통한 안정적인 배포."
      },
      step4: {
        title: "운영 및 최적화",
        desc: "지속적인 모니터링, 성능 튜닝, 보안 업데이트를 통해 시스템을 안정적으로 운영하고 개선합니다."
      }
    },
    // Cases Section
    cases: {
      kicker: "Case Studies",
      title: "엔터프라이즈 프로젝트 사례",
      desc: "금융, 항공 등 대규모 엔터프라이즈 시스템 구축 경험. 기술적 성과뿐만 아니라 비즈니스 성과와 수익 개선 사례를 공유합니다.",
      "card1.title": "B2B 예약/정산 플랫폼",
      "card1.body": "<div><strong>역할:</strong> 아키텍처 설계 · 백엔드 · 운영</div><div><strong>기간:</strong> 구축 5개월 + 운영 12개월</div><div><strong>성과:</strong> 장애율 감소(추후기입), 처리량 증가(추후기입)</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>운영 계약:</strong> ✅ 진행 중</div>",
      "card2.title": "[99.9% 가동률]을 만든 [금융 데이터 처리 시스템] 프로젝트",
      "card2.body": "<div><strong>역할:</strong> 시스템 재설계 · 보안 강화 · 운영</div><div><strong>기간:</strong> 구축 6개월 + 운영 18개월</div><div><strong>성과:</strong> 99.9% 가동률 목표</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>운영 계약:</strong> ✅ 진행 중</div>",
      "card3.title": "[처리 시간 단축]을 만든 [AI 문서 자동화] 프로젝트",
      "card3.body": "<div><strong>역할:</strong> AI 도입 · 자동화 파이프라인 · 운영</div><div><strong>기간:</strong> 구축 4개월 + 운영 10개월</div><div><strong>성과:</strong> 처리 시간 단축(추후기입)</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>운영 계약:</strong> ✅ 진행 중</div>",
      ndatext: "고객 요청 시 NDA 하에 상세 사례를 공유합니다."
    },
    // FAQ Section
    faq: {
      kicker: "FAQ",
      title: "자주 묻는 질문",
      desc: "AI 도입, 프로젝트 비용, 유지보수, 데이터 보안 등 엔터프라이즈 고객이 자주 묻는 질문을 정리했습니다.",
      "q1.q": "프로젝트 기간은 얼마나 걸리나요?",
      "q1.a": "MVP는 보통 2~3개월, 풀 구축은 6개월 이상 소요됩니다.",
      "q1.cta": "무료 상담 요청하기 →",
      "q2.q": "운영형/관리형 계약도 가능한가요?",
      "q2.a": "네. 구축 후 MSP 형태로 지속적인 개선과 운영을 제공합니다.",
      "q2.cta": "운영형 계약 상담 받기 →",
      "q3.q": "NDA 체결이 가능한가요?",
      "q3.a": "모든 상담은 NDA 체결 후 진행 가능합니다.",
      "q4.q": "PoC는 어떻게 진행되나요?",
      "q4.a": "핵심 역량 검증에 집중한 단기 검증 프로젝트로 진행합니다.",
      "q4.cta": "PoC 제안 요청하기 →",
      "q5.q": "유지보수에는 무엇이 포함되나요?",
      "q5.a": "운영, 보안, 성능, AI 고도화가 포함됩니다.",
      "q5.cta": "상담 요청하기 →",
      "q6.q": "AI 데이터 보안은 어떻게 하시나요?",
      "q6.a": "엔터프라이즈급 데이터 보호 정책을 적용합니다.",
      "q6.cta": "보안 상담 요청하기 →",
      "cta.subtext": "더 궁금한 점이 있으신가요?",
      "cta.benefit": "무료 제안서 제공",
      "cta.text": "지금 상담 신청하기"
    },
    // Founder Section
    founder: {
      kicker: "Technical Leadership",
      title: "2005년부터 이어진 20년의 경력",
      desc: "2005년 첫 시작부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
      name: "최경훈",
      titleText: "Grayson Choi · 대표이사 / 기술 리더",
      "info.career": "경력",
      "info.careerValue": "20년 이상 (2005년 ~ 현재)",
      "info.expertise": "전문분야",
      "info.expertiseValue": "엔터프라이즈 시스템, AI·LLM 솔루션, B2B/B2C 플랫폼",
      "info.tech": "핵심 기술",
      "info.techValue": "Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, AI/LLM",
      "story.p1": "초등학교 3학년 때 GW-BASIC으로 가졌던 프로그래머의 꿈이 20년의 실무 경력이 되었습니다.",
      "story.p2": "<strong>2005년 첫 시작</strong>부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
      "story.p3": "삼성화재, 현대증권, SK텔링크, KB손해보험, 우리카드 등 대형 프로젝트를 성공시킨 노하우를 바탕으로, 단순 개발을 넘어 비즈니스의 지속 가능성을 설계합니다.",
      "highlights.0": "금융·항공 대규모 엔터프라이즈 시스템 PL/PM 경험",
      "highlights.1": "C, C++, Java/Spring부터 최신 Python AI까지 풀스택 전문가",
      "highlights.2": "AI·LLM 솔루션 프로덕션 운영 경험",
      "highlights.3": "AWS, Docker, Kubernetes 클라우드 인프라 전문",
      "projects.title": "주요 프로젝트 리드 경험",
      "projects.project1.title": "항공 B2C 서비스 플랫폼 (2024.01 ~ 2025.06)",
      "projects.project1.desc": "항공 B2C 서비스 플랫폼 - 프로젝트 리더 (PL, AA, TA, DA, QA, BA)",
      "projects.project1.tech": "Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, Docker, AWS 기반 마이크로서비스 아키텍처",
      "projects.project2.title": "항공 백오피스 시스템 (2023.04 ~ 2023.12)",
      "projects.project2.desc": "항공 B2B 예약 시스템 - 프로젝트 리더",
      "projects.project2.tech": "Kotlin, Spring Boot, Kafka, TeamCity, Sentry",
      "projects.project3.title": "글로벌 기업 웹사이트 시스템",
      "projects.project3.items": [
        "삼성닷컴 서포트 글로벌 확산 (16개국) - PL",
        "아모레퍼시픽 라네즈 글로벌 확산 (16개국) - PL",
        "MY-AIA 운영 및 개발 - PM"
      ],
      "projects.skills": {
        title: "풀스택 전문가 - 기술 스택 전문성",
        desc: "C, C++, Java/Spring부터 최신 Python AI 프레임워크까지 다룰 수 있는 풀스택 전문가입니다.",
        items: [
          "Low-level: C, C++ (시스템 프로그래밍 기반)",
          "Backend: Java, Spring Boot, Kotlin, Node.js, Python",
          "Infrastructure: AWS, Docker, Kubernetes, Kafka, CI/CD",
          "Frontend: React, Vue, JavaScript, TypeScript",
          "Database: Oracle, MySQL, MongoDB, PostgreSQL",
          "AI/ML: LLM API, RAG, Vector DB, Python AI 프레임워크"
        ]
      }
    },
    // Contact Section
    contact: {
      title: "운영형(월 단위) 또는 6개월 이상 장기 프로젝트를 우선합니다",
      text: "운영형 계약(MSP), AI 자동화, B2B SaaS 구축 등 <strong style=\"color: var(--primary-soft);\">지속 수익 구조</strong> 프로젝트에 대해 무료 상담을 제공합니다.",
      bullets: "✓ 영업일 1일 내 회신<br>✓ NDA 가능<br>✓ PoC 제안 제공",
      cta: "운영형 계약 상담 받기",
      ctaGeneral: "일반 프로젝트 문의",
      note: "이메일·메신저 중심 비대면 협업",
      "info.company": "회사명",
      "info.registration": "사업자 등록번호",
      "info.website": "웹사이트",
      "info.email": "이메일",
      "info.services": "서비스 영역",
      "info.servicesValue": "AI·LLM 솔루션, 기업용 SaaS, 엔터프라이즈 시스템, 관리자 대시보드, 모바일 앱, 클라우드 DevOps",
      "info.collaboration": "협업 형태",
      "info.collaborationValue": "프로젝트 단위 개발 · 월 단위 운영 계약 · PoC(파일럿) · 장기 파트너십",
      "info.tech": "기술 스택",
      "info.techValue": "Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, React, Vue, AI/LLM"
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      registration: "사업자 등록번호: 379-88-01413 | 대표자: 최경훈",
      links: "Enterprise Development · AI Solutions"
    },
    floatingCTA: { text: "AI 도입 가능성 진단받기" },
    // Blog Index Section
    blogIndex: {
      title: "Technical Insights",
      subtitle: "AI와 엔터프라이즈 시스템 구축을 위한 실무 기술 가이드",
      post1: {
        title: "성공적인 Enterprise RAG 시스템 구축을 위한 5가지 전략",
        desc: "단순한 챗봇을 넘어 기업 데이터의 보안과 정확도를 보장하는 RAG 아키텍처 설계법"
      },
      post2: {
        title: "LLMOps: AI 모델의 프로덕션 운영과 비용 최적화",
        desc: "API 비용을 40% 절감하면서 응답 속도를 개선한 실무 사례와 모니터링 체계"
      },
      post3: {
        title: "B2B SaaS를 위한 멀티테넌시 AI 아키텍처",
        desc: "고객사별 데이터 격리와 맞춤형 AI 모델 적용을 위한 확장 가능한 구조 설계"
      },
      post4: {
        title: "SaaS 운영형 계약(MSP) 모델 가이드",
        desc: "구축을 넘어 지속 가능한 수익 구조와 안정적인 시스템 운영을 만드는 방법"
      }
    },
    // Industries Index Section
    industriesIndex: {
      title: "Industry Solutions",
      subtitle: "산업별 도메인 지식과 AI 기술이 만나는 지점",
      finance: {
        title: "금융 & 핀테크",
        desc: "고도화된 보안 환경에서의 AI FDS(이상거래탐지) 아키텍처 및 Enterprise RAG를 활용한 금융 규제(Compliance) 자동 대응 및 감사 리포팅 시스템",
        tech: "AI FDS · Enterprise RAG · Compliance"
      },
      logistics: {
        title: "물류 & 유통",
        desc: "시계열 데이터 기반 수요 예측 엔진과 Agentic Workflow를 연동한 실시간 재고 관리 및 글로벌 물류 배송 경로 자동 최적화 시스템",
        tech: "Demand Forecasting · Agentic Workflow"
      },
      healthcare: {
        title: "디지털 헬스케어",
        desc: "방대한 의료 논문 및 임상 데이터를 학습한 Medical RAG 기반 진단 지원 솔루션 및 개인정보보호 가이드라인을 준수하는 의료 행정 자동화",
        tech: "Medical RAG · HIPAA Compliance"
      },
      manufacturing: {
        title: "스마트 제조",
        desc: "Edge AI 기술을 활용한 고속 비전 품질 검수 자동화 및 센서 데이터 분석을 통한 설비 예지 보전(PdM) 및 생산 공정 지능화",
        tech: "Computer Vision · Predictive Maintenance"
      },
      commerce: {
        title: "커머스 & 유통",
        desc: "개인화 추천 엔진 및 Agentic Workflow 기반의 주문/재고 관리 자동화 솔루션",
        tech: "Personalized AI · Supply Chain Agent"
      },
      enterprise: {
        title: "엔터프라이즈 IT",
        desc: "기업 내부 지식 베이스 아카이빙 및 RAG 기반의 사내 업무 지원 시스템 구축",
        tech: "Internal RAG · Workflow Automation"
      }
    }
  },
  en: {
    meta: {
      pageTitle: "AI-Powered B2B SaaS & Enterprise Systems + MSP | OnOffus",
      description: "AI B2B SaaS development and Managed Services (MSP). Free consultation. 20+ years system experts from build to 24/7 operations."
    },
    // Navigation
    nav: {
      services: "Services",
      msp: "MSP",
      cases: "Cases",
      faq: "FAQ",
      insights: "Insights",
      contact: "Contact",
      ariaServices: "Go to Services section",
      ariaMsp: "Go to MSP section",
      ariaCases: "Go to Cases section",
      ariaFaq: "Go to FAQ section",
      ariaInsights: "Go to Insights",
      ariaContact: "Go to Contact section"
    },
    // Hero Section
    hero: {
      "title.line1": "Enterprise AI Transformation & LLM Operations",
      "subtitle.main": "Going beyond simple AI adoption, we build <strong style=\"color: var(--primary-soft);\">AI Agents and RAG systems</strong> that create real business value. With 20 years of enterprise expertise, we take full responsibility for production AI operations (LLMOps).",
      "stats.years.value": "20+",
      "stats.years.label": "System Engineering",
      "stats.projects.value": "50+",
      "stats.projects.label": "Large-Scale Projects",
      "stats.uptime.value": "99.9%",
      "stats.uptime.label": "System Uptime",
      "cta.primary": "🚀 Get Free AI Technical Consultation",
      "cta.secondary": "Learn about Managed Services (MSP)",
      "cta.subtext": "✓ Reply within 1 business day  ✓ NDA available  ✓ PoC/proposal provided  ✓ Operations (SLA) option",
      badge: "Enterprise AI & LLM Specialist",
      whoWeHelp: "Specializing in Startup B2B SaaS · Enterprise Internal Systems · AI Transformation"
    },
    // Services Section
    services: {
      kicker: "Core Expertise",
      title: "AI-Powered B2B SaaS & Enterprise System Development",
      desc: "We deliver both build and operation for sustained results.",
      core1: { title: "AI B2B SaaS Build & Enhancement", subtitle: "SaaS architecture that drives results", items: ["Multi-tenant, scalable design", "Fast time-to-market (MVP → Scale)", "Operations automation and incident response"] },
      core2: { title: "Enterprise-Stability-First Systems", subtitle: "Enterprise-grade stability and security by default", items: ["Zero-downtime deployment and NOC", "Security standards and compliance", "24/7 incident response design"] },
      core3: { title: "AI/LLM Automation", subtitle: "Remove repetitive work with AI", items: ["RAG-based document search/summary", "Customer service and internal automation", "Data-driven decision automation"] },
      cta: "Request proposal for this →",
      "customers.title": "Who we help",
      "customers.text": "Startup/SMB B2B SaaS · Enterprise internal systems · AI adoption/automation",
      "blog.text": "Practical insights and guides",
      "blog.cta": "View insights →"
    },
    // MSP Section
    msp: {
      kicker: "Managed Services (MSP)",
      title: "MSP: After build, we drive outcomes month by month",
      desc: "Not one-off projects—long-term partnership to grow results together.",
      guideLink: "Read MSP model design guide →",
      "included.title": "What's included",
      "included.1.title": "System monitoring & incident response",
      "included.1.desc": "24/7 monitoring, real-time alerts, immediate response",
      "included.2.title": "SLA-based operations & performance",
      "included.2.desc": "Uptime targets and continuous improvement",
      "included.3.title": "Security patches & compliance",
      "included.3.desc": "Regular security updates and compliance",
      "included.4.title": "Cost optimization & infrastructure",
      "included.4.desc": "Infrastructure cost analysis and optimization",
      "included.5.title": "Ongoing AI enhancement",
      "included.5.desc": "Gradual AI automation on live systems",
      cta: "Request MSP consultation",
      "tier.lite": "Core system ops / regular checks / monthly reports",
      "tier.standard": "Ongoing monitoring / performance / quarterly enhancement",
      "tier.enterprise": "24/7 support / dedicated engineer / improvement roadmap"
    },
    // Supporting Section
    supporting: {
      kicker: "Supporting capabilities",
      title: "Supporting capabilities (when needed): Backing build quality",
      devops: "AWS infrastructure, CI/CD, containers",
      dashboard: "Admin interfaces and reporting",
      etl: "Data collection, transformation, integration",
      mobile: "React Native, Flutter apps",
      aiDesc: "AI automation for systems in production",
      ai1: "AI customer service",
      ai2: "AI back office",
      ai3: "AI data automation"
    },
    // Trust Section
    trust: {
      kicker: "Trust & Credibility",
      title: "Technical Foundation Ensuring AI System Reliability",
      desc: "20 years of system expertise since 2005, along with proven track records at Samsung, Hyundai, and financial institutions, guarantee the stability and reliability of AI systems. Based on enterprise-level system operation experience, we take full responsibility for all aspects of enterprise AI adoption and operations.",
      "years.title": "20 Years System Expert",
      "years.desc": "Technical foundation of AI system reliability",
      "years.items": [
        "System development career since 2005",
        "Specialized in large-scale system operations in finance, aviation, etc.",
        "Experience in AI system stability verification",
        "Led multiple AI adoption projects as Project Leader (PL)"
      ],
      "projects.title": "Enterprise Track Record",
      "projects.desc": "Proven background of AI system reliability",
      "projects.items": [
        "<strong>Samsung:</strong> Samsung Fire, Samsung Networks, Samsung.com (System Operations)",
        "<strong>Hyundai:</strong> Hyundai Securities and other financial system development",
        "<strong>Financial:</strong> KB Insurance, Woori Card, Shinhan Bank",
        "<strong>Others:</strong> SK Telink, Amorepacific and other enterprise projects"
      ],
      "aiNative.title": "AI Operations Specialist",
      "aiNative.desc": "Specialized capabilities in AI system operations and maintenance",
      "aiNative.items": [
        "Integration of LLM APIs with existing back-office systems",
        "Integration of legacy databases with AI pipelines",
        "Integration of existing CTI systems with AI consultation solutions",
        "Gradual AI adoption based on microservices architecture"
      ],
      yearsText: "20 years of career since 2005",
      referenceTitle: "Key project references"
    },
    // Tech Stack Section
    techStack: {
      kicker: "Technology Stack",
      title: "Full-Stack Expert - From C to Python AI",
      desc: "Full-stack expert capable of handling everything from C, C++, Java/Spring to the latest Python AI frameworks. We build stable and scalable solutions using technologies proven over 20 years in large-scale systems."
    },
    // AI Solutions Section
    aiSolutions: {
      kicker: "AI Solutions",
      title: "AI Solutions for Operational Optimization",
      desc: "We build AI Agent systems that don't just chat, but integrate with your internal data to make decisions and perform tasks autonomously.",
      rag: {
        title: "RAG-Based Knowledge Search System",
        desc: "Knowledge search and Q&A system combining vector databases with LLMs. Search internal documents, FAQs, and knowledge bases with AI and provide accurate answers.",
        items: [
          "Vector embedding and similarity search",
          "LLM-based answer generation and verification",
          "Source tracking and confidence display",
          "Multimodal search (text, images)"
        ],
        metric: "Response Time",
        value: "< 2 seconds (avg 1.3s)"
      },
      automation: {
        title: "LLM Automation Pipeline",
        desc: "Automate repetitive document processing, data extraction, and classification tasks with LLMs. Efficiently handle large-scale operations with Kafka-based asynchronous processing.",
        items: [
          "Automatic document classification and tagging",
          "Data extraction and structuring",
          "Content summarization and translation",
          "Quality verification and error detection"
        ],
        metric: "Throughput",
        value: "10,000+ documents/hour"
      },
      recommendation: {
        title: "AI-Based Recommendation Engine",
        desc: "Personalized recommendation system combining collaborative filtering with deep learning. Real-time user behavior analysis and dynamic recommendation updates.",
        items: [
          "Collaborative filtering and content-based recommendations",
          "Real-time user behavior analysis",
          "A/B testing and performance optimization",
          "Cold start problem resolution"
        ],
        metric: "Accuracy",
        value: "35% CTR improvement"
      },
      analytics: {
        title: "AI-Based Analytics & Insights",
        desc: "Provide actionable insights by analyzing large volumes of business data with AI. From predictive analytics to anomaly detection and trend analysis.",
        items: [
          "Time series forecasting and trend analysis",
          "Anomaly detection and alert systems",
          "Natural language-based report generation",
          "Interactive data exploration interface"
        ],
        metric: "Processing Speed",
        value: "Real-time analysis available"
      }
    },
    // Why Section
    why: {
      kicker: "Why OnOffus",
      title: "Why Choose OnOffus",
      desc: "Technical depth, enterprise experience, and AI systems in actual operation. We meet the standards of a trusted partner.",
      architecture: {
        title: "Scalable Architecture",
        items: [
          "Independent scalability with microservices-based design",
          "Event-driven architecture based on Kafka",
          "Horizontally scalable stateless structure",
          "Load balancing and auto-scaling support",
          "Multi-region deployment and disaster recovery strategy"
        ]
      },
      operations: {
        title: "Operations & Monitoring",
        items: [
          "24/7 monitoring and automatic alert systems",
          "Performance analysis with distributed tracing",
          "Log aggregation and analysis systems",
          "Automatic failure recovery and rollback mechanisms",
          "Regular performance tuning and optimization"
        ]
      },
      security: {
        title: "Security & Compliance",
        items: [
          "End-to-end encryption and secure communication",
          "Role-based access control (RBAC) and permission management",
          "Regular security audits and vulnerability scanning",
          "Data backup and recovery strategies",
          "Compliance with GDPR, privacy laws, etc."
        ]
      },
      aiProduction: {
        title: "AI in Production",
        items: [
          "AI systems integrated and operating in actual services",
          "Model version management and A/B testing infrastructure",
          "AI model performance monitoring and retraining pipelines",
          "Cost-optimized LLM API usage strategies",
          "AI governance and ethical usage guidelines"
        ]
      }
    },
    // Process Section
    process: {
      kicker: "Process",
      title: "Collaboration Process",
      desc: "Rather than large-scale full reconstruction, we pursue rapid value creation by minimizing risks through verifiable step-by-step approaches.",
      step1: {
        title: "Requirements Analysis & Architecture Design",
        desc: "Transform business requirements into technical solutions. Architecture design and technology stack selection considering scalability, security, and performance."
      },
      step2: {
        title: "PoC & Prototype Development",
        desc: "Quickly build prototypes of core features to verify technical feasibility and business value."
      },
      step3: {
        title: "Incremental Development & Deployment",
        desc: "Start with MVP and gradually expand features reflecting user feedback. Stable deployment through CI/CD pipelines."
      },
      step4: {
        title: "Operations & Optimization",
        desc: "Maintain and improve systems through continuous monitoring, performance tuning, and security updates."
      }
    },
    // Cases Section
    cases: {
      kicker: "Case Studies",
      title: "Enterprise Project Cases",
      desc: "Experience building large-scale enterprise systems in finance, aviation, and more. We share not only technical achievements but also business results and revenue improvement cases.",
      "card1.title": "B2B reservation/settlement platform",
      "card1.body": "<div><strong>Role:</strong> Architecture · Backend · Operations</div><div><strong>Period:</strong> 5mo build + 12mo ops</div><div><strong>Results:</strong> Lower incident rate, higher throughput</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>Ongoing contract:</strong> ✅ Active</div>",
      "card2.title": "[99.9% uptime] Financial data processing system",
      "card2.body": "<div><strong>Role:</strong> System redesign · Security · Operations</div><div><strong>Period:</strong> 6mo build + 18mo ops</div><div><strong>Results:</strong> 99.9% uptime target</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>Ongoing contract:</strong> ✅ Active</div>",
      "card3.title": "[Faster processing] AI document automation platform",
      "card3.body": "<div><strong>Role:</strong> AI adoption · Automation pipeline · Operations</div><div><strong>Period:</strong> 4mo build + 10mo ops</div><div><strong>Results:</strong> Reduced processing time</div><div style=\"margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);\"><strong>Ongoing contract:</strong> ✅ Active</div>",
      ndatext: "Detailed cases shared under NDA upon request."
    },
    // Founder Section
    founder: {
      kicker: "Technical Leadership",
      title: "20 Years of Career Since 2005",
      desc: "From the first start in 2005 to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
      name: "Grayson Choi",
      titleText: "Grayson Choi · CEO / Technical Leader",
      "info.career": "Career",
      "info.careerValue": "20+ years (2005 ~ Present)",
      "info.expertise": "Expertise",
      "info.expertiseValue": "Enterprise Systems, AI·LLM Solutions, B2B/B2C Platforms",
      "info.tech": "Core Technologies",
      "info.techValue": "Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, AI/LLM",
      "story.p1": "The programmer's dream I had in 3rd grade with GW-BASIC became 20 years of practical experience.",
      "story.p2": "From <strong>the first start in 2005</strong> to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
      "story.p3": "Based on the know-how of successfully completing large projects at Samsung Fire, Hyundai Securities, SK Telink, KB Insurance, Woori Card, etc., we design business sustainability beyond simple development.",
      "highlights.0": "PL/PM experience in large-scale enterprise systems in finance and aviation",
      "highlights.1": "Full-stack expert from C, C++, Java/Spring to latest Python AI",
      "highlights.2": "Production operation experience with AI·LLM solutions",
      "highlights.3": "Expert in AWS, Docker, Kubernetes cloud infrastructure",
      "projects.title": "Key Project Leadership Experience",
      "projects.project1.title": "Aviation B2C Service Platform (Jan 2024 ~ Jun 2025)",
      "projects.project1.desc": "Aviation B2C Service Platform - Project Leader (PL, AA, TA, DA, QA, BA)",
      "projects.project1.tech": "Microservices architecture based on Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, Docker, AWS",
      "projects.project2.title": "Aviation Back-Office System (Apr 2023 ~ Dec 2023)",
      "projects.project2.desc": "Aviation B2B Reservation System - Project Leader",
      "projects.project2.tech": "Kotlin, Spring Boot, Kafka, TeamCity, Sentry",
      "projects.project3.title": "Global Enterprise Website Systems",
      "projects.project3.items": [
        "Samsung.com Support Global Expansion (16 countries) - PL",
        "Amorepacific Laneige Global Expansion (16 countries) - PL",
        "MY-AIA Operations & Development - PM"
      ],
      "projects.skills.title": "Full-Stack Expert - Technology Stack Expertise",
      "projects.skills.desc": "Full-stack expert capable of handling everything from C, C++, Java/Spring to the latest Python AI frameworks.",
      "projects.skills.items": [
        "Low-level: C, C++ (System programming foundation)",
        "Backend: Java, Spring Boot, Kotlin, Node.js, Python",
        "Infrastructure: AWS, Docker, Kubernetes, Kafka, CI/CD",
        "Frontend: React, Vue, JavaScript, TypeScript",
        "Database: Oracle, MySQL, MongoDB, PostgreSQL",
        "AI/ML: LLM API, RAG, Vector DB, Python AI frameworks"
      ]
    },
    // FAQ Section
    faq: {
      kicker: "FAQ",
      title: "Frequently Asked Questions",
      desc: "We've compiled the most frequently asked questions from enterprise customers about AI adoption, project costs, maintenance, data security, and more.",
      "q1.q": "How long does a project take?",
      "q1.a": "MVP typically 2–3 months; full build 6+ months.",
      "q1.cta": "Request free consultation →",
      "q2.q": "Do you offer managed/operational contracts?",
      "q2.a": "Yes. We provide ongoing improvement and operations in an MSP model after build.",
      "q2.cta": "Request MSP consultation →",
      "q3.q": "Can we sign an NDA?",
      "q3.a": "All consultations can proceed under NDA.",
      "q4.q": "How does PoC work?",
      "q4.a": "Short validation projects focused on core capabilities.",
      "q4.cta": "Request PoC proposal →",
      "q5.q": "What's included in maintenance?",
      "q5.a": "Operations, security, performance, and AI enhancement.",
      "q5.cta": "Request consultation →",
      "q6.q": "How do you handle AI data security?",
      "q6.a": "We apply enterprise-grade data protection policies.",
      "q6.cta": "Request security consultation →",
      "cta.subtext": "Have more questions?",
      "cta.benefit": "Free proposal provided",
      "cta.text": "Request Consultation Now"
    },
    // Contact Section
    contact: {
      title: "We prioritize monthly (MSP) or 6+ month engagements.",
      text: "We offer free consultation for <strong style=\"color: var(--primary-soft);\">recurring-revenue</strong> projects: MSP, AI automation, B2B SaaS build.",
      bullets: "✓ Reply within 1 business day<br>✓ NDA available<br>✓ PoC proposal provided",
      cta: "Request MSP consultation",
      ctaGeneral: "General project inquiry",
      note: "Email- and messenger-based remote collaboration",
      "info.company": "Company",
      "info.registration": "Business Registration",
      "info.website": "Website",
      "info.email": "Email",
      "info.services": "Service Areas",
      "info.servicesValue": "AI·LLM solutions, Enterprise SaaS, Enterprise systems, Admin dashboards, Mobile apps, Cloud DevOps",
      "info.collaboration": "Collaboration",
      "info.collaborationValue": "Project-based development · Monthly ops · PoC (pilot) · Long-term partnership",
      "info.tech": "Tech stack",
      "info.techValue": "Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, React, Vue, AI/LLM"
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      registration: "Business registration: 379-88-01413 | Representative: Grayson Choi",
      links: "Enterprise Development · AI Solutions"
    },
    floatingCTA: { text: "Get AI adoption assessment" },
    // Blog Index Section (EN)
    blogIndex: {
      title: "Technical Insights",
      subtitle: "Practical technical guides for AI & Enterprise systems",
      post1: {
        title: "5 Strategies for Successful Enterprise RAG Systems",
        desc: "Designing RAG architectures that ensure security and accuracy for corporate data."
      },
      post2: {
        title: "LLMOps: Production AI Operations & Cost Optimization",
        desc: "Real-world cases and monitoring systems that reduced API costs by 40%."
      },
      post3: {
        title: "Multi-tenant AI Architecture for B2B SaaS",
        desc: "Scalable structures for data isolation and customized AI models for each client."
      },
      post4: {
        title: "SaaS Managed Services (MSP) Model Guide",
        desc: "Building recurring revenue and ensuring system stability beyond initial deployment."
      }
    },
    // Industries Index Section (EN)
    industriesIndex: {
      title: "Industry Solutions",
      subtitle: "Where domain expertise meets cutting-edge AI technology",
      finance: {
        title: "Finance & Fintech",
        desc: "Advanced AI FDS architecture and automated compliance response systems using Enterprise RAG for auditing and regulatory reporting.",
        tech: "AI FDS · Enterprise RAG · Compliance"
      },
      logistics: {
        title: "Logistics & Retail",
        desc: "Real-time inventory management and global logistics route optimization integrating time-series demand forecasting with Agentic Workflows.",
        tech: "Demand Forecasting · Agentic Workflow"
      },
      healthcare: {
        title: "Digital Healthcare",
        desc: "Medical RAG-based diagnostic support utilizing clinical data, and healthcare administrative automation compliant with privacy regulations.",
        tech: "Medical RAG · HIPAA Compliance"
      },
      manufacturing: {
        title: "Smart Manufacturing",
        desc: "High-speed automated vision inspection using Edge AI and Predictive Maintenance (PdM) through sensor data analysis and process intelligence.",
        tech: "Computer Vision · Predictive Maintenance"
      },
      commerce: {
        title: "Commerce & Retail",
        desc: "Personalized recommendation engines and Agentic Workflow-based order/inventory automation.",
        tech: "Personalized AI · Supply Chain Agent"
      },
      enterprise: {
        title: "Enterprise IT",
        desc: "Corporate knowledge base archiving and RAG-based internal support systems.",
        tech: "Internal RAG · Workflow Automation"
      }
    }
  }
};

// 현재 언어 (기본값: 한국어)
let currentLang = localStorage.getItem('onoffus-lang') || 'ko';

// 언어 전환 함수
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('onoffus-lang', lang);

  // 페이지 제목 및 메타 설명 업데이트
  const meta = translations[lang].meta;
  if (meta) {
    if (meta.pageTitle) document.title = meta.pageTitle;
    if (meta.description) {
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.description);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', meta.description);
    }
    if (meta.pageTitle) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.pageTitle);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', meta.pageTitle);
    }
  }

  // data-i18n 속성이 있는 모든 요소 번역
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(translations[lang], key);
    if (value !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = value;
      } else {
        element.innerHTML = value;
      }
    }
  });
  
  // data-i18n-list 속성이 있는 리스트 요소 번역
  document.querySelectorAll('[data-i18n-list]').forEach(element => {
    const key = element.getAttribute('data-i18n-list');
    const items = getNestedValue(translations[lang], key);
    if (Array.isArray(items)) {
      const listItems = element.querySelectorAll('li');
      items.forEach((item, index) => {
        if (listItems[index]) {
          listItems[index].innerHTML = item;
        }
      });
    }
  });
  
  // 네비게이션 링크 번역
  const navLinks = {
    services: translations[lang].nav.services,
    msp: translations[lang].nav.msp,
    cases: translations[lang].nav.cases,
    faq: translations[lang].nav.faq,
    insights: translations[lang].nav.insights,
    contact: translations[lang].nav.contact
  };
  
  const navAria = {
    '#services': { label: translations[lang].nav.ariaServices, text: navLinks.services },
    '#msp': { label: translations[lang].nav.ariaMsp, text: navLinks.msp },
    '#cases': { label: translations[lang].nav.ariaCases, text: navLinks.cases },
    '#faq': { label: translations[lang].nav.ariaFaq, text: navLinks.faq },
    '/blog/': { label: translations[lang].nav.ariaInsights, text: navLinks.insights },
    '#contact': { label: translations[lang].nav.ariaContact, text: navLinks.contact }
  };
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    const item = navAria[href];
    if (item) {
      link.textContent = item.text;
      link.setAttribute('aria-label', item.label);
      link.setAttribute('title', item.text);
    }
  });
  
  // 언어 버튼 라벨 업데이트
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'ko' ? 'EN' : 'KO';
  }
  
  // HTML lang 속성 업데이트
  document.documentElement.lang = lang;
}

// 중첩 객체 값 가져오기 헬퍼 함수 (점이 포함된 키 지원, 예: hero.title.line1 → obj.hero["title.line1"])
function getNestedValue(obj, path) {
  const segments = path.split('.');
  let current = obj;
  for (let i = 0; i < segments.length; i++) {
    if (current == null || typeof current !== 'object') return undefined;
    const key = segments[i];
    const direct = current[key];
    const isLast = i === segments.length - 1;
    if (direct !== undefined && (isLast || typeof direct === 'object')) {
      if (isLast) return direct;
      current = direct;
      continue;
    }
    // 점이 포함된 복합 키 시도 (예: title.line1)
    if (!isLast) {
      const compoundKey = segments.slice(i).join('.');
      const compoundValue = current[compoundKey];
      if (compoundValue !== undefined) return compoundValue;
    }
    current = current[key];
  }
  return current;
}

// DOM 로드 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
  });
} else {
  setLanguage(currentLang);
}

// 언어 전환 버튼 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'ko' ? 'en' : 'ko';
      setLanguage(newLang);
    });
  }
});

// 전역 함수로 export (필요시)
window.setLanguage = setLanguage;
window.currentLang = () => currentLang;
