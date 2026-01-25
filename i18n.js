// Internationalization (i18n) for OnOffus website
const translations = {
  ko: {
    nav: {
      services: "서비스",
      ai: "AI 솔루션",
      why: "Why OnOffus",
      cases: "사례",
      faq: "FAQ",
      contact: "문의",
      cta: "프로젝트 상담"
    },
    hero: {
      title: {
        line1: "2005년부터 이어진 20년의 경력, 시스템의 격을 높입니다.",
        line2: ""
      },
      subtitle: {
        line1: "삼성, 현대, KB 등 대형 프로젝트를 성공시킨 노하우를 바탕으로, ",
        strong: "단순 개발을 넘어 비즈니스의 지속 가능성을 설계합니다.",
        line2: ""
      },
      cta: {
        primary: "무료 기술 진단 받기",
        secondary: "포트폴리오 보기"
      },
      meta: {
        years: "기술 리더 경력",
        enterprise: "금융·항공 대규모 시스템",
        ai: "실제 서비스 운영 중"
      }
    },
    trustBar: {
      years: "년 기술 리더 경력",
      projects: "대기업 프로젝트",
      aiNative: "레거시 통합 역량",
      uptime: "시스템 가동률"
    },
    trust: {
      title: "20년의 엔터프라이즈 경험, 검증된 신뢰성",
      desc: "삼성, 현대, KB손해보험 등 대기업 프로젝트를 성공적으로 수행한 실적과 최신 AI 기술을 레거시 시스템과 완벽하게 통합하는 역량을 보유하고 있습니다.",
      yearsText: "2005년부터 이어진 20년의 경력",
      years: {
        title: "Years",
        desc: "엔터프라이즈 시스템 구축 경력",
        items: [
          "2005년부터 시작된 개발 경력",
          "금융, 항공, 여행 등 다양한 도메인 경험",
          "대규모 트랜잭션 처리 시스템 전문",
          "프로젝트 리더(PL) 및 프로젝트 매니저(PM) 다수"
        ]
      },
      projects: {
        title: "Projects",
        desc: "대기업 프로젝트 수행 실적",
        items: [
          "삼성: 삼성화재, 삼성네트웍스, 삼성닷컴",
          "현대: 현대자동차 관련 프로젝트",
          "KB손해보험: 금융 서비스 시스템",
          "기타: SK텔링크, 아모레퍼시픽, 우리카드 등"
        ]
      },
      aiNative: {
        title: "Integration",
        desc: "최신 AI 기술과 레거시 시스템의 완벽한 통합",
        items: [
          "LLM API와 기존 백오피스 시스템 통합",
          "레거시 데이터베이스와 AI 파이프라인 연동",
          "기존 CTI 시스템과 AI 상담 솔루션 통합",
          "마이크로서비스 아키텍처 기반 점진적 AI 도입"
        ]
      }
    },
    services: {
      title: "기업용 시스템 개발 서비스",
      desc: {
        line1: "SaaS 플랫폼부터 엔터프라이즈 시스템, AI·LLM 솔루션까지.",
        strong: "Python, Kotlin, Spring Boot 기반의 AI 자동화 솔루션",
        line2: "으로 데이터 마이그레이션, 고객 응대, 백오피스 업무를 지능형 에이전트가 처리합니다.",
        line3: "확장 가능한 아키텍처와 검증된 기술 스택으로 안정적인 서비스를 제공합니다."
      },
      s1: {
        title: "기업용 SaaS 플랫폼 개발",
        desc: "Kotlin/Spring Boot 기반의 확장 가능한 SaaS 아키텍처 구축. 멀티테넌트 구조, 사용자 권한 관리, 결제 시스템 통합까지.",
        items: [
          "Kotlin · Java · Spring Boot · Python · Oracle · Kafka 기반 아키텍처",
          "멀티테넌트 SaaS 구조 설계",
          "관리자 대시보드 및 사용자 포털",
          "결제 시스템 연동 (PG사, 구독 관리)",
          "API Gateway 및 마이크로서비스 구조"
        ]
      },
      s2: {
        title: "AI·LLM 솔루션 구축",
        desc: "RAG 시스템, LLM 자동화, AI 추천 엔진 등 실제 비즈니스에 적용 가능한 AI 솔루션. 프로덕션 환경에서 안정적으로 운영되는 AI 시스템을 구축합니다.",
        items: [
          "RAG (Retrieval-Augmented Generation) 시스템",
          "LLM 파이프라인 자동화 및 오케스트레이션",
          "AI 기반 추천 엔진 및 분석 시스템",
          "자연어 처리 자동화 (문서 요약, 분류 등)",
          "AI 거버넌스 및 모델 관리 시스템"
        ]
      },
      s3: {
        title: "엔터프라이즈 시스템 개발",
        desc: "금융, 항공, 여행 등 대규모 트랜잭션을 처리하는 엔터프라이즈 시스템. 고가용성, 확장성, 보안을 고려한 아키텍처 설계 및 개발.",
        items: [
          "백오피스 시스템 및 관리자 대시보드",
          "예약·정산·결제 시스템 개발",
          "실시간 데이터 처리 및 동기화",
          "외부 API 연동 및 통합 시스템",
          "보안 및 규정 준수 (PCI-DSS 등)"
        ]
      },
      s4: {
        title: "모바일 앱 개발",
        desc: "React Native, Flutter 기반 크로스 플랫폼 앱부터 네이티브 앱까지. 백엔드 API와의 안정적인 연동 및 실시간 데이터 동기화.",
        items: [
          "React Native / Flutter 크로스 플랫폼",
          "iOS / Android 네이티브 앱",
          "백엔드 API 연동 및 인증 시스템",
          "푸시 알림 및 실시간 업데이트",
          "앱스토어 배포 및 버전 관리"
        ]
      },
      s5: {
        title: "클라우드 인프라 및 DevOps",
        desc: "AWS 기반 클라우드 인프라 구축, Docker/Kubernetes 컨테이너 관리, CI/CD 파이프라인 구축 및 모니터링 시스템 운영.",
        items: [
          "AWS 인프라 설계 및 구축 (EC2, ECS, RDS 등)",
          "Docker 컨테이너화 및 Kubernetes 오케스트레이션",
          "CI/CD 파이프라인 (GitHub Actions, Jenkins 등)",
          "모니터링 및 로깅 시스템 (CloudWatch, ELK 등)",
          "자동 스케일링 및 비용 최적화"
        ]
      },
      s6: {
        title: "관리자 대시보드 개발",
        desc: "React, Vue 기반의 직관적이고 강력한 관리자 대시보드. 실시간 데이터 시각화, 권한 관리, 대량 데이터 처리까지.",
        items: [
          "React / Vue 기반 관리자 인터페이스",
          "실시간 데이터 시각화 및 차트",
          "역할 기반 접근 제어 (RBAC)",
          "대량 데이터 처리 및 필터링",
          "엑셀 내보내기 및 리포트 생성"
        ]
      },
      s7: {
        title: "AI 데이터 자동화",
        desc: "수작업 데이터 마이그레이션을 대체하는 지능형 ETL 엔진. Python 기반 AI 모델이 데이터 품질을 검증하고 변환 규칙을 자동 학습합니다.",
        items: [
          "Python 기반 지능형 ETL 파이프라인 구축",
          "AI 모델을 활용한 데이터 품질 검증 및 정제",
          "데이터 매핑 규칙 자동 학습 및 최적화",
          "Kotlin/Spring Boot 기반 ETL 오케스트레이션",
          "실시간 데이터 동기화 및 오류 복구 시스템"
        ]
      },
      s8: {
        title: "AI 고객 응대 미들웨어",
        desc: "과거 CTI 구축 경험을 결합한 지능형 AI 상담 시스템. LLM과 음성 인식 기술을 통합하여 고객 문의를 자동으로 처리하고 복잡한 케이스는 상담사에게 스마트하게 연결합니다.",
        items: [
          "LLM 기반 자연어 이해 및 응답 생성",
          "CTI 시스템과의 통합 (음성 인식, 전화 라우팅)",
          "Kotlin/Spring Boot 기반 미들웨어 아키텍처",
          "상담사 에스컬레이션 자동 판단 시스템",
          "대화 컨텍스트 관리 및 이력 추적"
        ]
      },
      s9: {
        title: "AI 백오피스 최적화",
        desc: "항공/금융권 백오피스 경험을 녹여낸 업무 자동화 에이전트. 반복적인 업무 프로세스를 AI가 학습하여 자동으로 처리하고, 예외 상황은 담당자에게 알림을 보내는 지능형 워크플로우 시스템.",
        items: [
          "업무 프로세스 자동 학습 및 실행 에이전트",
          "항공/금융권 백오피스 시스템 통합 경험",
          "Kotlin/Spring Boot 기반 워크플로우 엔진",
          "예외 상황 자동 감지 및 알림 시스템",
          "Python 기반 데이터 분석 및 의사결정 지원"
        ]
      }
    },
    revenueServices: {
      title: "수익형 서비스 라인업",
      desc: "20년 경력의 엔터프라이즈 전문가가 제공하는 안정적이고 지속 가능한 비즈니스 솔루션",
      msp: {
        title: "안정적 운영 (MSP)",
        desc: "서버 장애는 곧 손실입니다. 금융권 시스템을 다루던 꼼꼼함으로 귀사의 인프라를 24시간 지킵니다.",
        model: "월 고정 수익",
        modelDesc: "예측 가능한 수익 구조와 안정적인 서비스 제공으로 지속적인 비즈니스 성장 지원"
      },
      automation: {
        title: "비즈니스 자동화",
        desc: "반복 업무를 제거하고 AI 에이전트를 도입하여 운영 효율을 극대화합니다.",
        model: "고부가가치 프로젝트",
        modelDesc: "AI 솔루션 구축으로 높은 ROI와 장기적 비용 절감 효과 제공"
      },
      modernization: {
        title: "SI 및 시스템 현대화",
        desc: "낙후된 레거시 시스템을 최신 아키텍처로 안전하게 마이그레이션합니다.",
        model: "중대형 프로젝트",
        modelDesc: "전면 현대화 프로젝트로 높은 수익성과 장기 파트너십 구축"
      }
    },
    techStack: {
      title: "풀스택 전문가 - C부터 Python AI까지",
      desc: "C, C++, Java/Spring부터 최신 Python AI 프레임워크까지 다룰 수 있는 풀스택 전문가입니다. 20년간 대규모 시스템에서 검증된 기술을 활용하여 안정적이고 확장 가능한 솔루션을 구축합니다."
    },
    aiSolutions: {
      title: "프로덕션에서 운영 중인 AI 솔루션",
      desc: "이론이 아닌 실제 서비스에 통합되어 운영 중인 AI·LLM 솔루션입니다. 안정성과 성능을 검증받은 시스템만을 제공합니다.",
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
    why: {
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
    process: {
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
    cases: {
      title: "엔터프라이즈 프로젝트 사례",
      desc: "금융, 항공 등 대규모 엔터프라이즈 시스템 구축 경험. 실제 운영 중인 시스템의 아키텍처와 성과를 공유합니다.",
      case1: {
        title: "카드사 항공 B2C 서비스 플랫폼",
        period: "기간: 2024.01 ~ 2025.06",
        role: "역할: 프로젝트 리더 (PL, AA, TA, DA, QA, BA)",
        tech: "기술 스택: Kotlin, Java, Spring Boot, Python, Oracle, React, Vue, Kafka, Docker, AWS",
        items: [
          "항공 예약 및 결제 시스템 구축",
          "실시간 포인트 적립 및 사용 시스템",
          "VIP 고객 전용 서비스 개발",
          "마이크로서비스 아키텍처 설계",
          "Kafka 기반 이벤트 처리 시스템"
        ],
        result: "성과",
        value: "일 평균 10,000+ 트랜잭션 처리, 99.9% 가동률"
      },
      case2: {
        title: "항공사 백오피스 시스템",
        period: "기간: 2023.04 ~ 2023.12",
        role: "역할: 프로젝트 리더 (PL, AA, TA, DA, QA, BA)",
        tech: "기술 스택: Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, TeamCity, Sentry",
        items: [
          "항공사와 여행사의 B2B 예약 시스템",
          "실시간 좌석 동기화 및 재고 관리",
          "대량 예약 처리 및 정산 시스템",
          "관리자 대시보드 및 리포트 시스템"
        ],
        result: "성과",
        value: "초당 500+ 요청 처리, 실시간 동기화"
      },
      case3: {
        title: "LLM 기반 자동화 시스템",
        period: "상태: 프로덕션 운영 중",
        tech: "기술: RAG, LLM API, Vector DB, Kafka",
        purpose: "용도: 문서 처리 자동화 및 지식 검색",
        items: [
          "RAG 기반 지식 검색 시스템 구축",
          "LLM 파이프라인 자동화 및 오케스트레이션",
          "벡터 데이터베이스 통합 및 최적화",
          "실시간 문서 처리 및 분류"
        ],
        result: "성과",
        value: "평균 응답 시간 1.3초, 정확도 92%"
      },
      case4: {
        title: "글로벌 기업 웹사이트 시스템",
        client: "고객사: 글로벌 기업 (삼성, 아모레퍼시픽 등)",
        role: "역할: 프로젝트 리더 (PL, AA)",
        tech: "기술: AEM, Java, AWS, Jenkins",
        items: [
          "16개국 글로벌 사이트 확산",
          "멀티 사이트 관리 시스템 구축",
          "SSO 및 회원 통합 시스템",
          "AWS 기반 클라우드 인프라"
        ],
        result: "성과",
        value: "16개국 동시 운영, 글로벌 트래픽 처리"
      }
    },
    founder: {
      title: "2005년부터 이어진 20년의 경력",
      desc: "2005년 이라온테크에서의 첫 시작부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
      name: "최경훈",
      titleText: "Choi Gyeong Hun · 대표이사 / 기술 리더",
      info: {
        career: "경력",
        careerValue: "20년 이상 (2005년 ~ 현재)",
        expertise: "전문분야",
        expertiseValue: "엔터프라이즈 시스템, AI·LLM 솔루션, B2B/B2C 플랫폼",
        tech: "핵심 기술",
        techValue: "C, C++, Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, AI/LLM"
      },
      descText: "초등학교 3학년 때 GW-BASIC으로 가졌던 프로그래머의 꿈이 20년의 실무 경력이 되었습니다. 2005년 이라온테크에서의 첫 시작부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
      story: {
        p1: "초등학교 3학년 때 GW-BASIC으로 가졌던 프로그래머의 꿈이 20년의 실무 경력이 되었습니다.",
        p2: "<strong>2005년 이라온테크에서의 첫 시작</strong>부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
        p3: "삼성화재, 현대증권, SK텔링크, KB손해보험, 우리카드 등 대형 프로젝트를 성공시킨 노하우를 바탕으로, 단순 개발을 넘어 비즈니스의 지속 가능성을 설계합니다."
      },
      highlights: [
        "금융·항공 대규모 엔터프라이즈 시스템 PL/PM 경험",
        "C, C++, Java/Spring부터 최신 Python AI까지 풀스택 전문가",
        "AI·LLM 솔루션 프로덕션 운영 경험",
        "AWS, Docker, Kubernetes 클라우드 인프라 전문"
      ],
      projects: {
        title: "주요 프로젝트 리드 경험",
        project1: {
          title: "우리카드 WON트래블 (2024.01 ~ 2025.06)",
          desc: "항공 B2C 서비스 플랫폼 - 프로젝트 리더 (PL, AA, TA, DA, QA, BA)",
          tech: "Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, Docker, AWS 기반 마이크로서비스 아키텍처"
        },
        project2: {
          title: "항공 백오피스 시스템 (2023.04 ~ 2023.12)",
          desc: "항공 B2B 예약 시스템 - 프로젝트 리더",
          tech: "Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, TeamCity, Sentry"
        },
        project3: {
          title: "글로벌 기업 웹사이트 시스템",
          items: [
            "삼성닷컴 서포트 글로벌 확산 (16개국) - PL",
            "아모레퍼시픽 라네즈 글로벌 확산 (16개국) - PL",
            "MY-AIA 운영 및 개발 - PM"
          ]
        },
        skills: {
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
      }
    },
    faq: {
      title: "자주 묻는 질문",
      desc: "AI 거버넌스, 보안, 데이터 소유권 등 기업 고객이 궁금해하는 사항을 정리했습니다.",
      q1: {
        q: "AI 모델의 거버넌스는 어떻게 관리하나요?",
        a: "모델 버전 관리, A/B 테스트 인프라, 성능 모니터링 시스템을 구축하여 AI 모델의 품질과 안정성을 지속적으로 관리합니다. 편향성 검사 및 윤리적 사용 가이드라인을 준수합니다."
      },
      q2: {
        q: "데이터 보안 및 개인정보 보호는 어떻게 보장하나요?",
        a: "엔드투엔드 암호화, 역할 기반 접근 제어(RBAC), 정기적인 보안 감사를 실시합니다. GDPR, 개인정보보호법 등 관련 규정을 준수하며, 고객 데이터는 고객사가 완전한 소유권을 가집니다."
      },
      q3: {
        q: "개발된 시스템의 소유권은 누구에게 있나요?",
        a: "고객사가 개발된 시스템의 완전한 소유권을 가집니다. 소스 코드, 데이터베이스, 문서 등 모든 산출물은 고객사에 인도되며, 필요시 지속적인 운영 지원을 제공합니다."
      },
      q4: {
        q: "AI 모델 학습에 사용된 데이터는 어떻게 관리되나요?",
        a: "고객사 데이터는 고객사의 명시적 동의 없이 다른 목적으로 사용되지 않습니다. 모델 학습 시 데이터 익명화 및 최소화 원칙을 적용하며, 필요시 온프레미스 또는 전용 클라우드 환경에서 학습을 진행할 수 있습니다."
      },
      q5: {
        q: "시스템 장애 시 대응 절차는 어떻게 되나요?",
        a: "24/7 모니터링 시스템을 통해 장애를 실시간으로 감지하고, SLA에 따라 즉시 대응합니다. 자동 복구 메커니즘과 롤백 시스템을 구축하여 장애 복구 시간을 최소화합니다."
      },
      q6: {
        q: "협업 형태와 계약 방식은 어떻게 되나요?",
        a: "프로젝트 단위 개발, 월 단위 운영 계약, PoC(파일럿) 등 다양한 형태로 협업 가능합니다. 초기에는 작은 PoC부터 시작하여 점진적으로 확장하는 방식을 권장합니다. 계약 조건은 프로젝트 규모와 요구사항에 따라 협의합니다."
      }
    },
    contact: {
      title: "AI 도입 및 시스템 개발을 논의해볼까요?",
      text: "AI 솔루션 도입, 엔터프라이즈 시스템 구축, SaaS 플랫폼 개발 등 어떤 프로젝트든 현재 상황을 공유해 주시면 ",
      textHighlight: "기술적으로 현실적이고 실행 가능한 제안",
      textEnd: "을 드리겠습니다.",
      sub: "명확한 요구서가 없어도 괜찮습니다. 비즈니스 목표와 기술적 제약사항을 듣고, 단계적 접근 방안부터 제안드립니다.",
      cta: "support@onoffus.com 으로 문의하기",
      pill: "이메일·메신저 중심 비대면 협업",
      info: {
        company: "회사명",
        website: "웹사이트",
        email: "이메일",
        services: "서비스 영역",
        servicesValue: "AI·LLM 솔루션, 기업용 SaaS, 엔터프라이즈 시스템, 관리자 대시보드, 모바일 앱, 클라우드 DevOps",
        collaboration: "협업 형태",
        collaborationValue: "프로젝트 단위 개발 · 월 단위 운영 계약 · PoC(파일럿) · 장기 파트너십",
        tech: "기술 스택",
        techValue: "C, C++, Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, React, Vue, AI/LLM"
      }
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      links: "Enterprise Development · AI Solutions"
    }
  },
  en: {
    nav: {
      services: "Services",
      ai: "AI Solutions",
      why: "Why OnOffus",
      cases: "Case Studies",
      faq: "FAQ",
      contact: "Contact",
      cta: "Consultation"
    },
    hero: {
      title: {
        line1: "20 Years of Experience Since 2005, Elevating System Excellence",
        line2: ""
      },
      subtitle: {
        line1: "Based on proven expertise from successful projects with Samsung, Hyundai, KB, and other major corporations, ",
        strong: "we design business sustainability beyond simple development.",
        line2: ""
      },
      cta: {
        primary: "Request Free Technical Assessment",
        secondary: "View Portfolio"
      },
      meta: {
        years: "Technical Leadership",
        enterprise: "Finance & Aviation Systems",
        ai: "In Production"
      }
    },
    trustBar: {
      years: "Years Technical Leadership",
      projects: "Enterprise Projects",
      aiNative: "Legacy Integration",
      uptime: "System Uptime"
    },
    trust: {
      title: "20 Years of Enterprise Experience, Proven Reliability",
      desc: "With a track record of successfully executing projects for major corporations including Samsung, Hyundai, and KB Insurance, we possess the capability to perfectly integrate cutting-edge AI technology with legacy systems.",
      yearsText: "20 Years of Experience Since 2005",
      years: {
        title: "Years",
        desc: "Enterprise System Development Experience",
        items: [
          "Development career since 2005",
          "Experience across diverse domains: finance, aviation, travel",
          "Expert in large-scale transaction processing systems",
          "Multiple Project Leader (PL) and Project Manager (PM) roles"
        ]
      },
      projects: {
        title: "Projects",
        desc: "Major Enterprise Project Track Record",
        items: [
          "Samsung: Samsung Fire & Marine, Samsung Networks, Samsung.com",
          "Hyundai: Hyundai Motor related projects",
          "KB Insurance: Financial service systems",
          "Others: SK Telink, Amorepacific, Woori Card, etc."
        ]
      },
      aiNative: {
        title: "Integration",
        desc: "Perfect Integration of Cutting-Edge AI Technology with Legacy Systems",
        items: [
          "Integration of LLM APIs with existing back-office systems",
          "Connection of legacy databases with AI pipelines",
          "Integration of existing CTI systems with AI consultation solutions",
          "Gradual AI adoption based on microservices architecture"
        ]
      }
    },
    services: {
      title: "Enterprise System Development Services",
      desc: {
        line1: "From SaaS platforms to enterprise systems and AI·LLM solutions.",
        strong: "AI automation solutions based on Python, Kotlin, Spring Boot",
        line2: " handle data migration, customer service, and back-office tasks through intelligent agents.",
        line3: "We provide stable services with scalable architecture and proven technology stacks."
      },
      s1: {
        title: "Enterprise SaaS Platform Development",
        desc: "Building scalable SaaS architecture based on Kotlin/Spring Boot. From multi-tenant structure to user permission management and payment system integration.",
        items: [
          "Architecture based on Kotlin · Java · Spring Boot · Python · Oracle · Kafka",
          "Multi-tenant SaaS structure design",
          "Admin dashboard and user portal",
          "Payment system integration (PG companies, subscription management)",
          "API Gateway and microservices structure"
        ]
      },
      s2: {
        title: "AI·LLM Solution Development",
        desc: "AI solutions applicable to real business including RAG systems, LLM automation, and AI recommendation engines. We build AI systems that operate stably in production environments.",
        items: [
          "RAG (Retrieval-Augmented Generation) systems",
          "LLM pipeline automation and orchestration",
          "AI-based recommendation engines and analytics systems",
          "Natural language processing automation (document summarization, classification, etc.)",
          "AI governance and model management systems"
        ]
      },
      s3: {
        title: "Enterprise System Development",
        desc: "Enterprise systems handling large-scale transactions in finance, aviation, and travel. Architecture design and development considering high availability, scalability, and security.",
        items: [
          "Back-office systems and admin dashboards",
          "Reservation, settlement, and payment system development",
          "Real-time data processing and synchronization",
          "External API integration and unified systems",
          "Security and compliance (PCI-DSS, etc.)"
        ]
      },
      s4: {
        title: "Mobile App Development",
        desc: "From React Native and Flutter-based cross-platform apps to native apps. Stable integration with backend APIs and real-time data synchronization.",
        items: [
          "React Native / Flutter cross-platform",
          "iOS / Android native apps",
          "Backend API integration and authentication systems",
          "Push notifications and real-time updates",
          "App store deployment and version management"
        ]
      },
      s5: {
        title: "Cloud Infrastructure & DevOps",
        desc: "AWS-based cloud infrastructure construction, Docker/Kubernetes container management, CI/CD pipeline construction, and monitoring system operation.",
        items: [
          "AWS infrastructure design and construction (EC2, ECS, RDS, etc.)",
          "Docker containerization and Kubernetes orchestration",
          "CI/CD pipelines (GitHub Actions, Jenkins, etc.)",
          "Monitoring and logging systems (CloudWatch, ELK, etc.)",
          "Auto-scaling and cost optimization"
        ]
      },
      s6: {
        title: "Admin Dashboard Development",
        desc: "Intuitive and powerful admin dashboards based on React and Vue. From real-time data visualization to permission management and large-scale data processing.",
        items: [
          "React / Vue-based admin interfaces",
          "Real-time data visualization and charts",
          "Role-based access control (RBAC)",
          "Large-scale data processing and filtering",
          "Excel export and report generation"
        ]
      },
      s7: {
        title: "AI Data Automation",
        desc: "Intelligent ETL engine replacing manual data migration. Python-based AI models verify data quality and automatically learn transformation rules.",
        items: [
          "Python-based intelligent ETL pipeline construction",
          "Data quality verification and refinement using AI models",
          "Automatic learning and optimization of data mapping rules",
          "Kotlin/Spring Boot-based ETL orchestration",
          "Real-time data synchronization and error recovery systems"
        ]
      },
      s8: {
        title: "AI Customer Service Middleware",
        desc: "Intelligent AI consultation system combining past CTI construction experience. Integrates LLM and voice recognition technology to automatically handle customer inquiries and smartly connect complex cases to consultants.",
        items: [
          "LLM-based natural language understanding and response generation",
          "Integration with CTI systems (voice recognition, call routing)",
          "Kotlin/Spring Boot-based middleware architecture",
          "Automatic consultant escalation judgment system",
          "Conversation context management and history tracking"
        ]
      },
      s9: {
        title: "AI Back Office Optimization",
        desc: "Work automation agent incorporating aviation/financial sector back-office experience. AI learns repetitive work processes to handle them automatically, and intelligent workflow system that sends notifications to responsible parties for exceptional situations.",
        items: [
          "Automatic learning and execution agents for work processes",
          "Aviation/financial sector back-office system integration experience",
          "Kotlin/Spring Boot-based workflow engine",
          "Automatic exception detection and notification system",
          "Python-based data analysis and decision support"
        ]
      }
    },
    revenueServices: {
      title: "Revenue Service Lineup",
      desc: "Stable and sustainable business solutions provided by 20-year enterprise experts",
      msp: {
        title: "Stable Operations (MSP)",
        desc: "Server downtime means loss. We protect your infrastructure 24/7 with the meticulousness honed from handling financial sector systems.",
        model: "Monthly Fixed Revenue",
        modelDesc: "Supporting continuous business growth with predictable revenue structure and stable service delivery"
      },
      automation: {
        title: "Business Automation",
        desc: "Eliminate repetitive tasks and maximize operational efficiency by introducing AI agents.",
        model: "High-Value Projects",
        modelDesc: "Providing high ROI and long-term cost savings through AI solution implementation"
      },
      modernization: {
        title: "SI & System Modernization",
        desc: "Safely migrate outdated legacy systems to modern architectures.",
        model: "Large-Scale Projects",
        modelDesc: "Building high profitability and long-term partnerships through comprehensive modernization projects"
      }
    },
    techStack: {
      title: "Full-Stack Expert - From C to Python AI",
      desc: "Full-stack expert capable of handling everything from C, C++, Java/Spring to the latest Python AI frameworks. We build stable and scalable solutions using technologies proven over 20 years in large-scale systems."
    },
    aiSolutions: {
      title: "AI Solutions Operating in Production",
      desc: "AI·LLM solutions integrated into real services, not just theory. We only provide systems that have been verified for stability and performance.",
      rag: {
        title: "RAG-Based Knowledge Search System",
        desc: "Knowledge search and Q&A system combining vector databases and LLM. Searches internal documents, FAQs, and knowledge bases with AI and provides accurate answers.",
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
        desc: "Automates repetitive document processing, data extraction, and classification tasks with LLM. Efficiently handles large-scale tasks through Kafka-based asynchronous processing.",
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
        desc: "Personalized recommendation system combining collaborative filtering and deep learning. Real-time user behavior analysis and dynamic recommendation updates.",
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
        desc: "Provides actionable insights by analyzing large amounts of business data with AI. From predictive analytics to anomaly detection and trend analysis.",
        items: [
          "Time series forecasting and trend analysis",
          "Anomaly detection and alert systems",
          "Natural language-based report generation",
          "Interactive data exploration interface"
        ],
        metric: "Processing Speed",
        value: "Real-time analysis capable"
      }
    },
    why: {
      title: "Why Choose OnOffus",
      desc: "Technical depth, enterprise experience, and AI systems operating in production. We meet the standards of a trustworthy partner.",
      architecture: {
        title: "Scalable Architecture",
        items: [
          "Independent scalability through microservices-based design",
          "Kafka-based event-driven architecture",
          "Horizontally scalable stateless structure",
          "Load balancing and auto-scaling support",
          "Multi-region deployment and disaster recovery strategy"
        ]
      },
      operations: {
        title: "Operations & Monitoring",
        items: [
          "24/7 monitoring and automatic alert systems",
          "Performance analysis through distributed tracing",
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
          "Regular security audits and vulnerability scans",
          "Data backup and recovery strategies",
          "Compliance with GDPR, privacy laws, etc."
        ]
      },
      aiProduction: {
        title: "AI in Production",
        items: [
          "AI systems integrated and operating in real services",
          "Model version management and A/B testing infrastructure",
          "AI model performance monitoring and retraining pipelines",
          "Cost-optimized LLM API usage strategy",
          "AI governance and ethical usage guidelines"
        ]
      }
    },
    process: {
      title: "Collaboration Process",
      desc: "Rather than large-scale full reconstruction, we pursue rapid value creation through verifiable step-by-step approaches while minimizing risk.",
      step1: {
        title: "Requirements Analysis & Architecture Design",
        desc: "Converting business requirements into technical solutions. Architecture design and technology stack selection considering scalability, security, and performance."
      },
      step2: {
        title: "PoC & Prototype Development",
        desc: "Rapidly building prototypes of core features to verify technical feasibility and business value."
      },
      step3: {
        title: "Incremental Development & Deployment",
        desc: "Starting from MVP, gradually expanding features while reflecting user feedback. Stable deployment through CI/CD pipelines."
      },
      step4: {
        title: "Operations & Optimization",
        desc: "Stably operating and improving systems through continuous monitoring, performance tuning, and security updates."
      }
    },
    cases: {
      title: "Enterprise Project Case Studies",
      desc: "Experience building large-scale enterprise systems in finance, aviation, etc. We share the architecture and achievements of systems operating in production.",
      case1: {
        title: "Card Company Aviation B2C Service Platform",
        period: "Period: 2024.01 ~ 2025.06",
        role: "Role: Project Leader (PL, AA, TA, DA, QA, BA)",
        tech: "Tech Stack: Kotlin, Java, Spring Boot, Python, Oracle, React, Vue, Kafka, Docker, AWS",
        items: [
          "Aviation reservation and payment system construction",
          "Real-time point accumulation and usage system",
          "VIP customer exclusive service development",
          "Microservices architecture design",
          "Kafka-based event processing system"
        ],
        result: "Results",
        value: "10,000+ transactions/day average, 99.9% uptime"
      },
      case2: {
        title: "Airline Back-Office System",
        period: "Period: 2023.04 ~ 2023.12",
        role: "Role: Project Leader (PL, AA, TA, DA, QA, BA)",
        tech: "Tech Stack: Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, TeamCity, Sentry",
        items: [
          "B2B reservation system for airlines and travel agencies",
          "Real-time seat synchronization and inventory management",
          "Bulk reservation processing and settlement system",
          "Admin dashboard and reporting system"
        ],
        result: "Results",
        value: "500+ requests/second, real-time synchronization"
      },
      case3: {
        title: "LLM-Based Automation System",
        period: "Status: Operating in Production",
        tech: "Technology: RAG, LLM API, Vector DB, Kafka",
        purpose: "Purpose: Document processing automation and knowledge search",
        items: [
          "RAG-based knowledge search system construction",
          "LLM pipeline automation and orchestration",
          "Vector database integration and optimization",
          "Real-time document processing and classification"
        ],
        result: "Results",
        value: "Average response time 1.3s, 92% accuracy"
      },
      case4: {
        title: "Global Enterprise Website System",
        client: "Client: Global enterprises (Samsung, Amorepacific, etc.)",
        role: "Role: Project Leader (PL, AA)",
        tech: "Technology: AEM, Java, AWS, Jenkins",
        items: [
          "Global site expansion to 16 countries",
          "Multi-site management system construction",
          "SSO and member integration system",
          "AWS-based cloud infrastructure"
        ],
        result: "Results",
        value: "16 countries simultaneous operation, global traffic handling"
      }
    },
    founder: {
      title: "20 Years of Experience Since 2005",
      desc: "From the first start at Eraon Tech in 2005 to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
      name: "Choi Gyeong Hun",
      titleText: "Choi Gyeong Hun · CEO / Technical Leader",
      info: {
        career: "Experience",
        careerValue: "20+ years (2005 ~ present)",
        expertise: "Expertise",
        expertiseValue: "Enterprise systems, AI·LLM solutions, B2B/B2C platforms",
        tech: "Core Technologies",
        techValue: "C, C++, Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, AI/LLM"
      },
      descText: "The programmer's dream that started with GW-BASIC in the 3rd grade of elementary school has become 20 years of practical experience. From the first start at Eraon Tech in 2005 to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
      story: {
        p1: "The programmer's dream that started with GW-BASIC in the 3rd grade of elementary school has become 20 years of practical experience.",
        p2: "From <strong>the first start at Eraon Tech in 2005</strong> to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
        p3: "Based on proven expertise from successful projects with Samsung Fire & Marine, Hyundai Securities, SK Telink, KB Insurance, and Woori Card, we design business sustainability beyond simple development."
      },
      highlights: [
        "PL/PM experience in large-scale enterprise systems in finance and aviation",
        "Full-stack expert from C, C++, Java/Spring to latest Python AI",
        "Production operation experience with AI·LLM solutions",
        "Expert in cloud infrastructure: AWS, Docker, Kubernetes"
      ],
      projects: {
        title: "Major Project Leadership Experience",
        project1: {
          title: "Woori Card WON Travel (2024.01 ~ 2025.06)",
          desc: "Aviation B2C service platform - Project Leader (PL, AA, TA, DA, QA, BA)",
          tech: "Microservices architecture based on Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, Docker, AWS"
        },
        project2: {
          title: "Airline Back-Office System (2023.04 ~ 2023.12)",
          desc: "Aviation B2B reservation system - Project Leader",
          tech: "Kotlin, Java, Spring Boot, Python, Oracle, React, Kafka, TeamCity, Sentry"
        },
        project3: {
          title: "Global Enterprise Website System",
          items: [
            "Samsung.com Support Global Expansion (16 countries) - PL",
            "Amorepacific Laneige Global Expansion (16 countries) - PL",
            "MY-AIA Operations and Development - PM"
          ]
        },
        skills: {
          title: "Full-Stack Expert - Technology Stack Expertise",
          desc: "Full-stack expert capable of handling everything from C, C++, Java/Spring to the latest Python AI frameworks.",
          items: [
            "Low-level: C, C++ (System programming foundation)",
            "Backend: Java, Spring Boot, Kotlin, Node.js, Python",
            "Infrastructure: AWS, Docker, Kubernetes, Kafka, CI/CD",
            "Frontend: React, Vue, JavaScript, TypeScript",
            "Database: Oracle, MySQL, MongoDB, PostgreSQL",
            "AI/ML: LLM API, RAG, Vector DB, Python AI frameworks"
          ]
        }
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      desc: "We've organized questions that enterprise customers are curious about regarding AI governance, security, and data ownership.",
      q1: {
        q: "How is AI model governance managed?",
        a: "We continuously manage the quality and stability of AI models by building model version management, A/B testing infrastructure, and performance monitoring systems. We comply with bias checks and ethical usage guidelines."
      },
      q2: {
        q: "How is data security and privacy protection ensured?",
        a: "We implement end-to-end encryption, role-based access control (RBAC), and regular security audits. We comply with relevant regulations such as GDPR and privacy laws, and customers have complete ownership of their data."
      },
      q3: {
        q: "Who owns the developed system?",
        a: "Customers have complete ownership of the developed system. All deliverables including source code, databases, and documentation are delivered to customers, and we provide ongoing operational support as needed."
      },
      q4: {
        q: "How is data used for AI model training managed?",
        a: "Customer data is not used for other purposes without explicit customer consent. We apply data anonymization and minimization principles during model training, and training can be conducted in on-premises or dedicated cloud environments as needed."
      },
      q5: {
        q: "What is the procedure for responding to system failures?",
        a: "We detect failures in real-time through 24/7 monitoring systems and respond immediately according to SLA. We minimize failure recovery time by building automatic recovery mechanisms and rollback systems."
      },
      q6: {
        q: "What are the collaboration forms and contract methods?",
        a: "We can collaborate in various forms including project-based development, monthly operational contracts, and PoC (pilot). We recommend starting with a small PoC and gradually expanding. Contract terms are negotiated according to project scale and requirements."
      }
    },
    contact: {
      title: "Let's Discuss AI Adoption & System Development",
      text: "AI solution adoption, enterprise system construction, SaaS platform development - share your current situation and we'll provide ",
      textHighlight: "technically realistic and executable proposals",
      textEnd: ".",
      sub: "You don't need a clear requirements document. We listen to business goals and technical constraints and propose step-by-step approaches from the start.",
      cta: "Contact us at support@onoffus.com",
      pill: "Email·Messenger-based remote collaboration",
      info: {
        company: "Company Name",
        website: "Website",
        email: "Email",
        services: "Service Areas",
        servicesValue: "AI·LLM solutions, Enterprise SaaS, Enterprise systems, Admin dashboards, Mobile apps, Cloud DevOps",
        collaboration: "Collaboration Forms",
        collaborationValue: "Project-based development · Monthly operational contracts · PoC (pilot) · Long-term partnerships",
        tech: "Technology Stack",
        techValue: "C, C++, Kotlin, Java, Spring Boot, Python, Oracle, Kafka, Docker, AWS, React, Vue, AI/LLM"
      }
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      links: "Enterprise Development · AI Solutions"
    }
  }
};

// Language management
let currentLang = localStorage.getItem('onoffus-lang') || 'ko';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('onoffus-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  updateAllTexts();
  updateLangButton();
}

function updateAllTexts() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = value;
      } else if (element.tagName === 'STRONG' || element.tagName === 'B') {
        element.textContent = value;
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        // 객체인 경우는 처리하지 않음 (중첩된 키)
      } else if (value && value.includes && value.includes('<strong>')) {
        // HTML 포함된 경우 (예: founder.story.p2)
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  // 특별 처리: 리스트 아이템들
  updateListItems();
  
  // Hero 섹션 특별 처리
  updateHeroSection();
  
  // Contact 섹션 특별 처리
  updateContactSection();
}

function updateHeroSection() {
  // Hero title은 data-i18n으로 처리되므로 별도 처리 불필요
  // Hero subtitle은 내부 span과 strong이 data-i18n으로 처리되므로 별도 처리 불필요
}

function updateContactSection() {
  const contactText = document.querySelector('.contact-text');
  if (contactText && translations[currentLang].contact.text) {
    const text = translations[currentLang].contact.text;
    const highlight = translations[currentLang].contact.textHighlight;
    const textEnd = translations[currentLang].contact.textEnd;
    
    if (text && highlight && textEnd) {
      contactText.innerHTML = text + '<span class="contact-highlight">' + highlight + '</span>' + textEnd;
    }
  }
}

function updateListItems() {
  // 서비스 리스트 및 about-list 업데이트
  const lists = document.querySelectorAll('.service-list[data-i18n-list], .about-list[data-i18n-list]');
  lists.forEach(list => {
    const key = list.getAttribute('data-i18n-list');
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (Array.isArray(value)) {
      list.innerHTML = '';
      value.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
    }
  });
  
  // Founder highlights 업데이트
  const highlights = document.querySelectorAll('.founder-highlight[data-i18n]');
  highlights.forEach((highlight, index) => {
    const key = highlight.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value !== undefined) {
      highlight.textContent = value;
    }
  });
}

function updateLangButton() {
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'ko' ? 'EN' : 'KO';
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  // Language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'ko' ? 'en' : 'ko');
    });
  }
});
