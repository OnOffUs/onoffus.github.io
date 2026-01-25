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
        line1: "AI 기반 B2B SaaS & 엔터프라이즈 시스템 구축",
        line2: ""
      },
      subtitle: {
        main: "비즈니스 성장을 이끄는 안정적 개발 파트너",
        line1: "",
        strong: "",
        line2: ""
      },
      cta: {
        primary: "지금 무료 AI 기술 상담 받기",
        secondary: "상세 서비스 보기",
        subtext: "✓ 무료 상담 · ✓ 명확한 제안 · ✓ 빠른 응답"
      },
      stats: {
        years: {
          value: "20년+",
          label: "엔터프라이즈 경험"
        },
        projects: {
          value: "50+",
          label: "대규모 프로젝트"
        },
        uptime: {
          value: "99.9%",
          label: "시스템 가동률"
        }
      },
      evidence: {
        experience: "금융·항공·대형 시스템 구축 20년 이상 실무 경험",
        ai: "AI/LLM 자동화, RAG 기반 검색/추천 솔루션 적용",
        roi: "빠른 ROI와 유지보수 용이한 확장 아키텍처"
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
      kicker: "Trust & Credibility",
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
      kicker: "Services",
      title: "비즈니스 성장을 위한 시스템 구축",
      desc: "기술보다 효과에 집중합니다. 빠른 시장 출시, 운영 안정성, AI 자동화로 비즈니스 성장을 가속화합니다.",
      s1: {
        chip: "Enterprise SaaS",
        label: "Service 01",
        title: "비즈니스 성장을 위한 SaaS 시스템 구축",
        desc: "빠른 시장 출시(Go-to-market)와 확장성, 운영 효율을 갖춘 SaaS 플랫폼을 구축합니다. 사용자 증가에 따라 자동으로 확장되는 아키텍처로 안정적인 성장을 지원합니다.",
        items: [
          "빠른 시장 출시를 위한 MVP부터 프로덕션까지",
          "사용자 증가에 따른 자동 확장 아키텍처",
          "운영 효율 극대화를 위한 자동화 시스템",
          "멀티테넌트 구조로 비용 효율적 운영",
          "결제 시스템 통합으로 즉시 수익화 가능"
        ]
      },
      s2: {
        chip: "AI & LLM",
        label: "Service 02",
        title: "AI 도입 & 자동화 서비스",
        desc: "고객 상담 자동화, 문서 요약/검색/추천 엔진, RAG 기반 내부 데이터 검색으로 업무 효율을 극대화합니다. 실제 비즈니스에 즉시 적용 가능한 AI 솔루션을 제공합니다.",
        items: [
          "고객 상담 자동화로 응대 시간 단축 및 인건비 절감",
          "문서 요약/검색 자동화로 업무 효율 향상",
          "AI 추천 엔진으로 매출 증대 및 고객 만족도 향상",
          "RAG 기반 내부 데이터 검색으로 의사결정 속도 개선",
          "프로덕션 환경에서 안정적으로 운영되는 AI 시스템"
        ]
      },
      s3: {
        chip: "Enterprise Systems",
        label: "Service 03",
        title: "엔터프라이즈 안정성 중심 시스템",
        desc: "장애 대비 운영 전략과 보안, 백업, 운영 자동화를 갖춘 안정적인 시스템을 구축합니다. 금융권 수준의 신뢰성으로 비즈니스 연속성을 보장합니다.",
        items: [
          "장애 대비 자동 복구 및 장애 대응 전략",
          "보안 강화 및 규정 준수 (PCI-DSS 등)",
          "자동 백업 및 재해 복구 시스템",
          "운영 자동화로 인건비 절감",
          "24/7 모니터링으로 사전 장애 예방"
        ]
      },
      s4: {
        chip: "Mobile Apps",
        label: "Service 04",
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
        chip: "Cloud & DevOps",
        label: "Service 05",
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
        chip: "Admin Dashboards",
        label: "Service 06",
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
        chip: "AI Automation",
        label: "Service 07",
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
        chip: "AI Customer Service",
        label: "Service 08",
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
        chip: "AI Back Office",
        label: "Service 09",
        title: "AI 백오피스 최적화",
        desc: "항공/금융권 백오피스 경험을 녹여낸 업무 자동화 에이전트. 반복적인 업무 프로세스를 AI가 학습하여 자동으로 처리하고, 예외 상황은 담당자에게 알림을 보내는 지능형 워크플로우 시스템.",
        items: [
          "업무 프로세스 자동 학습 및 실행 에이전트",
          "항공/금융권 백오피스 시스템 통합 경험",
          "Kotlin/Spring Boot 기반 워크플로우 엔진",
          "예외 상황 자동 감지 및 알림 시스템",
          "Python 기반 데이터 분석 및 의사결정 지원"
        ]
      },
      s10: {
        chip: "MSP",
        label: "Service 10",
        title: "올인원 MSP (시스템 유지관리)",
        desc: "대기업 수준의 서버 모니터링, 보안 패치, 장애 대응을 제공합니다. 삼성, KB손해보험 등 엔터프라이즈 시스템 운영 경험을 바탕으로 안정적인 인프라 관리를 보장합니다.",
        items: [
          "24/7 서버 모니터링 및 성능 관리",
          "자동화된 보안 패치 및 업데이트",
          "실시간 장애 감지 및 즉시 대응",
          "백업 및 재해 복구 시스템 운영",
          "인프라 비용 최적화 및 리소스 관리"
        ]
      },
      s11: {
        chip: "Legacy Modernization",
        label: "Service 11",
        title: "레거시 현대화 및 AI 통합",
        desc: "오래된 시스템을 최신 클라우드와 AI 에이전트로 연결하여 업무 효율을 높입니다. HP-UNIX부터 AWS 클라우드까지 아우르는 폭넓은 기술 스택으로 안전한 마이그레이션을 수행합니다.",
        items: [
          "레거시 시스템 분석 및 현대화 전략 수립",
          "클라우드 마이그레이션 (온프레미스 → AWS/Azure)",
          "레거시 데이터베이스와 AI 파이프라인 연동",
          "기존 시스템과 AI 에이전트 통합",
          "점진적 마이그레이션으로 다운타임 최소화"
        ]
      },
      s12: {
        chip: "Data Automation",
        label: "Service 12",
        title: "데이터 파이프라인 자동화",
        desc: "반복적인 엑셀 작업, 데이터 수집, 리포트 생성을 100% 자동화합니다. 대규모 데이터 마이그레이션 및 통계 시스템 구축 경험을 바탕으로 효율적인 데이터 처리 시스템을 구축합니다.",
        items: [
          "엑셀 기반 반복 작업 자동화 (Python, RPA)",
          "다양한 소스에서 데이터 수집 및 통합",
          "자동 리포트 생성 및 스케줄링",
          "데이터 검증 및 품질 관리 자동화",
          "대규모 데이터 마이그레이션 및 ETL 파이프라인"
        ]
      },
      cta: {
        subtext: "맞춤형 솔루션이 필요하신가요?",
        text: "맞춤 견적 요청하기",
        ariaLabel: "문의 섹션으로 이동하여 맞춤 견적 요청하기"
      }
    },
    revenueServices: {
      kicker: "Revenue Services",
      title: "수익형 서비스 라인업",
      desc: "20년 경력의 엔터프라이즈 전문가가 제공하는 안정적이고 지속 가능한 비즈니스 솔루션",
      msp: {
        title: "안정적 운영 (MSP)",
        desc: "서버 장애는 곧 손실입니다. 금융권 시스템을 다루던 꼼꼼함으로 귀사의 인프라를 24시간 지킵니다.",
        model: "월 고정 수익",
        modelDesc: "예측 가능한 수익 구조와 안정적인 서비스 제공으로 지속적인 비즈니스 성장 지원",
        items: [
          "24/7 실시간 모니터링 및 알림",
          "자동화된 보안 패치 및 업데이트",
          "즉시 장애 대응 및 복구",
          "정기 성능 최적화 및 리포트"
        ]
      },
      automation: {
        title: "비즈니스 자동화",
        desc: "반복 업무를 제거하고 AI 에이전트를 도입하여 운영 효율을 극대화합니다.",
        model: "고부가가치 프로젝트",
        modelDesc: "AI 솔루션 구축으로 높은 ROI와 장기적 비용 절감 효과 제공",
        items: [
          "반복 업무 AI 에이전트 구축",
          "데이터 수집 및 리포트 자동화",
          "지능형 의사결정 지원 시스템",
          "인건비 절감 및 효율성 극대화"
        ]
      },
      modernization: {
        title: "SI 및 시스템 현대화",
        desc: "낙후된 레거시 시스템을 최신 아키텍처로 안전하게 마이그레이션합니다.",
        model: "중대형 프로젝트",
        modelDesc: "전면 현대화 프로젝트로 높은 수익성과 장기 파트너십 구축",
        items: [
          "클라우드 마이그레이션 (온프레미스 → AWS/Azure)",
          "레거시 데이터베이스 현대화",
          "AI 통합 및 자동화 기능 추가",
          "다운타임 최소화 전환 전략"
        ]
      },
      cta: "무료 기술 상담 신청"
    },
    techStack: {
      kicker: "Technology Stack",
      title: "풀스택 전문가 - C부터 Python AI까지",
      desc: "C, C++, Java/Spring부터 최신 Python AI 프레임워크까지 다룰 수 있는 풀스택 전문가입니다. 20년간 대규모 시스템에서 검증된 기술을 활용하여 안정적이고 확장 가능한 솔루션을 구축합니다."
    },
    aiSolutions: {
      kicker: "AI Solutions",
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
    cases: {
      kicker: "Case Studies",
      title: "엔터프라이즈 프로젝트 사례",
      desc: "금융, 항공 등 대규모 엔터프라이즈 시스템 구축 경험. 기술적 성과뿐만 아니라 비즈니스 성과와 수익 개선 사례를 공유합니다.",
      case1: {
        chip: "Finance",
        label: "금융 서비스",
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
        value: "일 평균 10,000+ 트랜잭션 처리, 99.9% 가동률",
        techResult: {
          label: "기술 성과",
          value: "거래 처리량 10,000+ TPS, 월 99.9% 가동률"
        },
        businessResult: {
          label: "비즈니스 성과",
          items: [
            "자동화로 운영비 25% 절감",
            "신규 매출 15% 상승",
            "고객 만족도 30% 향상"
          ]
        },
        cta: "맞춤 상담 받기"
      },
      case2: {
        chip: "Aviation",
        label: "항공 B2B",
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
        value: "초당 500+ 요청 처리, 실시간 동기화",
        techResult: {
          label: "기술 성과",
          value: "초당 500+ 요청 처리, 실시간 동기화"
        },
        businessResult: {
          label: "비즈니스 성과",
          items: [
            "예약 처리 시간 60% 단축",
            "인건비 20% 절감",
            "정산 오류 90% 감소"
          ]
        },
        cta: "맞춤 상담 받기"
      },
      case3: {
        chip: "AI Integration",
        label: "AI 솔루션",
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
        value: "평균 응답 시간 1.3초, 정확도 92%",
        techResult: {
          label: "기술 성과",
          value: "평균 응답 시간 1.3초, 정확도 92%"
        },
        businessResult: {
          label: "비즈니스 성과",
          items: [
            "문서 처리 시간 80% 단축",
            "검색 정확도 향상으로 업무 효율 40% 개선",
            "인건비 35% 절감"
          ]
        },
        cta: "맞춤 상담 받기"
      },
      case4: {
        chip: "Enterprise",
        label: "대규모 시스템",
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
        value: "16개국 동시 운영, 글로벌 트래픽 처리",
        techResult: {
          label: "기술 성과",
          value: "16개국 동시 운영, 글로벌 트래픽 처리"
        },
        businessResult: {
          label: "비즈니스 성과",
          items: [
            "글로벌 시장 진출 비용 50% 절감",
            "사이트 운영 비용 30% 절감",
            "다국가 통합 관리로 효율성 2배 향상"
          ]
        },
        cta: "맞춤 상담 받기"
      },
      cta: {
        subtext: "비슷한 프로젝트를 진행하고 싶으신가요?",
        text: "프로젝트 문의하기"
      }
    },
    founder: {
      kicker: "Technical Leadership",
      title: "2005년부터 이어진 20년의 경력",
      desc: "2005년 이라온테크에서의 첫 시작부터 지금의 오노퍼스까지, 대한민국 IT의 격변기를 온몸으로 겪어온 개발팀장이 직접 프로젝트를 리드합니다.",
      name: "최경훈",
      titleText: "Grayson Choi · 대표이사 / 기술 리더",
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
          title: "항공 B2C 서비스 플랫폼 (2024.01 ~ 2025.06)",
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
      kicker: "FAQ",
      title: "자주 묻는 질문",
      desc: "AI 도입, 프로젝트 비용, 유지보수, 데이터 보안 등 기업 고객이 가장 궁금해하는 사항을 정리했습니다.",
      q1: {
        q: "AI 도입하면 비즈니스 변화는 어떤가요?",
        a: "AI 도입으로 고객 상담 자동화, 문서 처리 자동화, 업무 효율 향상을 실현할 수 있습니다. 실제 사례에서 응대 시간 70% 단축, 인건비 30% 절감, 의사결정 속도 2배 향상 등의 효과를 확인했습니다. 초기 PoC부터 단계적으로 도입하여 리스크를 최소화하면서 비즈니스 성장을 가속화합니다.",
        ctaText: "무료 AI 도입 상담을 통해 귀사에 맞는 AI 솔루션을 제안해드립니다.",
        cta: "지금 무료 AI 상담 신청하기"
      },
      q2: {
        q: "프로젝트 기간/비용은 어떻게 되나요?",
        a: "프로젝트 규모와 요구사항에 따라 기간과 비용이 달라집니다. MVP(최소 기능 제품)는 2-3개월, 전체 시스템 구축은 6-12개월 정도 소요됩니다. 초기에는 작은 PoC(파일럿)부터 시작하여 점진적으로 확장하는 방식을 권장합니다.",
        ctaText: "보다 정확한 견적은 무료 상담 신청을 통해 프로젝트 범위 논의 후 제공됩니다.",
        cta: "지금 무료 상담 신청하기"
      },
      q3: {
        q: "유지보수/운영은 지원하나요?",
        a: "네, 24/7 모니터링, 자동 백업, 보안 패치, 장애 대응 등 완전한 운영 지원을 제공합니다. 월 고정 수익형 MSP(관리형 서비스 제공) 모델로 예측 가능한 비용으로 안정적인 운영을 보장합니다. 개발 완료 후에도 지속적인 기술 지원과 시스템 개선을 통해 비즈니스 성장을 함께합니다.",
        ctaText: "MSP 운영 상담을 통해 예측 가능한 운영 비용과 안정적인 서비스를 확인하세요.",
        cta: "MSP 운영 상담 신청하기"
      },
      q4: {
        q: "데이터 보안/프라이버시는 어떻게 처리하나요?",
        a: "엔드투엔드 암호화, 역할 기반 접근 제어(RBAC), 정기 보안 감사를 실시합니다. GDPR, 개인정보보호법 등 관련 규정을 준수하며, 고객 데이터는 고객사가 완전한 소유권을 가집니다. AI 모델 학습 시에도 고객사 명시적 동의 없이 다른 목적으로 사용하지 않으며, 필요시 온프레미스 또는 전용 클라우드 환경에서 운영할 수 있습니다.",
        ctaText: "보안 정책 상담을 통해 귀사의 데이터 보안 요구사항을 확인하고 맞춤 솔루션을 제안해드립니다.",
        cta: "보안 정책 상담 신청하기"
      },
      cta: {
        subtext: "더 궁금한 점이 있으신가요?",
        benefit: "무료 제안서 제공",
        text: "지금 상담 신청하기"
      }
    },
    contact: {
      title: "꾸준히 수익이 발생하는 프로젝트를 찾고 계신가요?",
      text: "월 고정 수익형 MSP, 고부가가치 AI 자동화, 중대형 현대화 프로젝트 등 ",
      textHighlight: "지속적 수익이 발생하는 프로젝트",
      textEnd: "에 대해 무료 상담을 제공합니다.",
      sub: "✓ 무료 기술 진단 · ✓ 명확한 제안서 · ✓ 빠른 응답",
      cta: "맞춤 견적 요청하기",
      ctaAriaLabel: "이메일로 맞춤 견적 요청하기 (support@onoffus.com)",
      pill: "이메일·메신저 중심 비대면 협업",
      info: {
        company: "회사명",
        registration: "사업자 등록번호",
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
    quantitativeResults: {
      title: "검증된 정량적 성과",
      desc: "숫자로 증명하는 신뢰성과 전문성",
      r1: {
        value: "20년+",
        title: "엔터프라이즈 시스템 구축 경험",
        desc: "2005년부터 이어진 20년 이상의 엔터프라이즈 시스템 구축 경험으로 금융, 항공, 대형 기업 프로젝트를 성공적으로 수행했습니다."
      },
      r2: {
        value: "50+",
        title: "대형 프로젝트 수행",
        desc: "삼성, 현대, KB손해보험, 우리카드 등 대기업과 함께 50개 이상의 대형 프로젝트를 성공적으로 완료했습니다."
      },
      r3: {
        value: "30%+",
        title: "업무 효율 향상",
        desc: "AI 자동화 도입으로 평균 30% 이상 업무 효율 향상을 달성하며, 반복 업무 제거와 인건비 절감을 실현했습니다."
      },
      r4: {
        value: "MSP",
        title: "예측 가능한 월 고정 수익",
        desc: "MSP 운영으로 예측 가능한 월 고정 수익 모델을 제공하여 지속적인 비즈니스 성장을 지원합니다."
      }
    },
    floatingCTA: {
      text: "무료 기술 상담 신청"
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      links: "Enterprise Development · AI Solutions",
      registration: "사업자 등록번호: 379-88-01413 | 대표자: 최경훈"
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
        line1: "AI-Based B2B SaaS & Enterprise System Development Company",
        line2: ""
      },
      subtitle: {
        main: "A Reliable Development Partner Driving Business Growth",
        line1: "",
        strong: "",
        line2: ""
      },
      cta: {
        primary: "Get Free AI Technical Consultation Now",
        secondary: "View Detailed Services",
        subtext: "✓ Free Consultation · ✓ Clear Proposal · ✓ Quick Response"
      },
      stats: {
        years: {
          value: "20+ Years",
          label: "Enterprise Experience"
        },
        projects: {
          value: "50+",
          label: "Large Projects"
        },
        uptime: {
          value: "99.9%",
          label: "System Uptime"
        }
      },
      evidence: {
        experience: "20+ years of hands-on experience in finance, aviation, and large-scale system development",
        ai: "AI/LLM automation, RAG-based search/recommendation solutions implementation",
        roi: "Fast ROI with maintainable and scalable architecture"
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
      kicker: "Trust & Credibility",
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
      kicker: "Services",
      title: "System Development for Business Growth",
      desc: "We focus on results, not just technology. Accelerate business growth with fast time-to-market, operational stability, and AI automation.",
      s1: {
        chip: "Enterprise SaaS",
        label: "Service 01",
        title: "SaaS System Development for Business Growth",
        desc: "Build SaaS platforms with fast time-to-market (Go-to-market), scalability, and operational efficiency. Support stable growth with architecture that automatically scales as users increase.",
        items: [
          "From MVP to production for fast market launch",
          "Auto-scaling architecture as users grow",
          "Automation systems for maximum operational efficiency",
          "Multi-tenant structure for cost-effective operations",
          "Payment system integration for immediate monetization"
        ]
      },
      s2: {
        label: "Service 02",
        title: "AI Adoption & Automation Services",
        desc: "Maximize operational efficiency with customer service automation, document summarization/search/recommendation engines, and RAG-based internal data search. Provide AI solutions immediately applicable to real business.",
        items: [
          "Customer service automation to reduce response time and labor costs",
          "Document summarization/search automation to improve work efficiency",
          "AI recommendation engines to increase revenue and customer satisfaction",
          "RAG-based internal data search to improve decision-making speed",
          "AI systems that operate stably in production environments"
        ]
      },
      s3: {
        chip: "Enterprise Systems",
        label: "Service 03",
        title: "Enterprise Stability-Focused Systems",
        desc: "Build stable systems with failure prevention strategies, security, backup, and operational automation. Ensure business continuity with financial-sector-level reliability.",
        items: [
          "Automatic recovery and failure response strategies",
          "Enhanced security and compliance (PCI-DSS, etc.)",
          "Automatic backup and disaster recovery systems",
          "Operational automation to reduce labor costs",
          "24/7 monitoring for proactive failure prevention"
        ]
      },
      s4: {
        chip: "Mobile Apps",
        label: "Service 04",
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
        chip: "Cloud & DevOps",
        label: "Service 05",
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
        chip: "Admin Dashboards",
        label: "Service 06",
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
        chip: "AI Automation",
        label: "Service 07",
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
        chip: "AI Customer Service",
        label: "Service 08",
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
        chip: "AI Back Office",
        label: "Service 09",
        title: "AI Back Office Optimization",
        desc: "Work automation agent incorporating aviation/financial sector back-office experience. AI learns repetitive work processes to handle them automatically, and intelligent workflow system that sends notifications to responsible parties for exceptional situations.",
        items: [
          "Automatic learning and execution agents for work processes",
          "Aviation/financial sector back-office system integration experience",
          "Kotlin/Spring Boot-based workflow engine",
          "Automatic exception detection and notification system",
          "Python-based data analysis and decision support"
        ]
      },
      s10: {
        chip: "MSP",
        label: "Service 10",
        title: "All-in-One MSP (System Maintenance)",
        desc: "Provides enterprise-level server monitoring, security patches, and failure response. Ensures stable infrastructure management based on enterprise system operation experience with Samsung, KB Insurance, etc.",
        items: [
          "24/7 server monitoring and performance management",
          "Automated security patches and updates",
          "Real-time failure detection and immediate response",
          "Backup and disaster recovery system operation",
          "Infrastructure cost optimization and resource management"
        ]
      },
      s11: {
        label: "Service 11",
        title: "Legacy Modernization & AI Integration",
        desc: "Connects outdated systems to modern cloud and AI agents to improve operational efficiency. Performs safe migration with a wide range of technology stacks from HP-UNIX to AWS cloud.",
        items: [
          "Legacy system analysis and modernization strategy development",
          "Cloud migration (on-premises → AWS/Azure)",
          "Integration of legacy databases with AI pipelines",
          "Integration of existing systems with AI agents",
          "Minimize downtime through gradual migration"
        ]
      },
      s12: {
        chip: "Data Automation",
        label: "Service 12",
        title: "Data Pipeline Automation",
        desc: "100% automation of repetitive Excel work, data collection, and report generation. Builds efficient data processing systems based on experience in large-scale data migration and statistical system construction.",
        items: [
          "Excel-based repetitive task automation (Python, RPA)",
          "Data collection and integration from various sources",
          "Automatic report generation and scheduling",
          "Data validation and quality management automation",
          "Large-scale data migration and ETL pipelines"
        ]
      },
      cta: {
        subtext: "Need a customized solution?",
        text: "Request Custom Quote",
        ariaLabel: "Navigate to contact section to request custom quote"
      }
    },
    revenueServices: {
      kicker: "Revenue Services",
      title: "Revenue Service Lineup",
      desc: "Stable and sustainable business solutions provided by 20-year enterprise experts",
      msp: {
        title: "Stable Operations (MSP)",
        desc: "Server downtime means loss. We protect your infrastructure 24/7 with the meticulousness honed from handling financial sector systems.",
        model: "Monthly Fixed Revenue",
        modelDesc: "Supporting continuous business growth with predictable revenue structure and stable service delivery",
        items: [
          "24/7 real-time monitoring and alerts",
          "Automated security patches and updates",
          "Immediate fault response and recovery",
          "Regular performance optimization and reports"
        ]
      },
      automation: {
        title: "Business Automation",
        desc: "Eliminate repetitive tasks and maximize operational efficiency by introducing AI agents.",
        model: "High-Value Projects",
        modelDesc: "Providing high ROI and long-term cost savings through AI solution implementation",
        items: [
          "Building repetitive task AI agents",
          "Data collection and report automation",
          "Intelligent decision support system",
          "Labor cost reduction and maximized efficiency"
        ]
      },
      modernization: {
        title: "SI & System Modernization",
        desc: "Safely migrate outdated legacy systems to modern architectures.",
        model: "Large-Scale Projects",
        modelDesc: "Building high profitability and long-term partnerships through comprehensive modernization projects",
        items: [
          "Cloud migration (on-premise → AWS/Azure)",
          "Legacy database modernization",
          "AI integration and automation feature addition",
          "Downtime minimization transition strategy"
        ]
      },
      cta: "Request Free Technical Consultation"
    },
    techStack: {
      kicker: "Technology Stack",
      title: "Full-Stack Expert - From C to Python AI",
      desc: "Full-stack expert capable of handling everything from C, C++, Java/Spring to the latest Python AI frameworks. We build stable and scalable solutions using technologies proven over 20 years in large-scale systems."
    },
    aiSolutions: {
      kicker: "AI Solutions",
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
      kicker: "Why OnOffus",
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
      kicker: "Process",
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
      kicker: "Case Studies",
      title: "Enterprise Project Case Studies",
      desc: "Experience building large-scale enterprise systems in finance, aviation, etc. We share not only technical achievements but also business results and revenue improvement cases.",
      case1: {
        chip: "Finance",
        label: "Financial Services",
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
        value: "10,000+ transactions/day average, 99.9% uptime",
        techResult: {
          label: "Technical Results",
          value: "Transaction throughput 10,000+ TPS, 99.9% monthly uptime"
        },
        businessResult: {
          label: "Business Results",
          items: [
            "25% reduction in operational costs through automation",
            "15% increase in new revenue",
            "30% improvement in customer satisfaction"
          ]
        },
        cta: "Request Custom Consultation"
      },
      case2: {
        chip: "Aviation",
        label: "Aviation B2B",
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
        value: "500+ requests/second, real-time synchronization",
        techResult: {
          label: "Technical Results",
          value: "500+ requests/second, real-time synchronization"
        },
        businessResult: {
          label: "Business Results",
          items: [
            "60% reduction in reservation processing time",
            "20% reduction in labor costs",
            "90% reduction in settlement errors"
          ]
        },
        cta: "Request Custom Consultation"
      },
      case3: {
        chip: "AI Integration",
        label: "AI Solutions",
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
        value: "Average response time 1.3s, 92% accuracy",
        techResult: {
          label: "Technical Results",
          value: "Average response time 1.3s, 92% accuracy"
        },
        businessResult: {
          label: "Business Results",
          items: [
            "80% reduction in document processing time",
            "40% improvement in work efficiency through enhanced search accuracy",
            "35% reduction in labor costs"
          ]
        },
        cta: "Request Custom Consultation"
      },
      case4: {
        chip: "Enterprise",
        label: "Large-Scale Systems",
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
        value: "16 countries simultaneous operation, global traffic handling",
        techResult: {
          label: "Technical Results",
          value: "16 countries simultaneous operation, global traffic handling"
        },
        businessResult: {
          label: "Business Results",
          items: [
            "50% reduction in global market entry costs",
            "30% reduction in site operation costs",
            "2x improvement in efficiency through multi-country integrated management"
          ]
        },
        cta: "Request Custom Consultation"
      },
      cta: {
        subtext: "Want to work on a similar project?",
        text: "Inquire About Project"
      }
    },
    founder: {
      kicker: "Technical Leadership",
      title: "20 Years of Experience Since 2005",
      desc: "From the first start at Eraon Tech in 2005 to OnOffus today, a development team leader who has experienced Korea's IT transformation firsthand leads projects directly.",
      name: "Grayson Choi",
      titleText: "Grayson Choi · CEO / Technical Leader",
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
          title: "Aviation B2C Service Platform (2024.01 ~ 2025.06)",
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
      kicker: "FAQ",
      title: "Frequently Asked Questions",
      desc: "We've organized the most frequently asked questions by enterprise customers regarding AI adoption, project costs, maintenance, and data security.",
      q1: {
        q: "What business changes can we expect from AI adoption?",
        a: "AI adoption enables customer service automation, document processing automation, and improved operational efficiency. In actual cases, we've confirmed effects such as 70% reduction in response time, 30% reduction in labor costs, and 2x improvement in decision-making speed. We start with an initial PoC and gradually expand to minimize risk while accelerating business growth.",
        ctaText: "We provide AI solutions tailored to your company through free AI adoption consultation.",
        cta: "Request Free AI Consultation Now"
      },
      q2: {
        q: "What are the project timeline and costs?",
        a: "Timeline and costs vary depending on project scale and requirements. MVP (Minimum Viable Product) takes 2-3 months, while full system construction takes approximately 6-12 months. We recommend starting with a small PoC (pilot) and gradually expanding. Accurate quotes are provided after discussing project scope through free consultation."
      },
      q3: {
        q: "Do you provide maintenance and operational support?",
        a: "Yes, we provide complete operational support including 24/7 monitoring, automatic backups, security patches, and failure response. Our monthly fixed-revenue MSP (Managed Service Provider) model ensures stable operations with predictable costs. We continue to provide ongoing technical support and system improvements after development completion to grow together.",
        ctaText: "Confirm predictable operational costs and stable services through MSP operation consultation.",
        cta: "Request MSP Operation Consultation"
      },
      q4: {
        q: "How is data security and privacy handled?",
        a: "We implement end-to-end encryption, role-based access control (RBAC), and regular security audits. We comply with relevant regulations such as GDPR and privacy laws, and customers have complete ownership of their data. Customer data is not used for other purposes without explicit customer consent, even for AI model training, and can be operated in on-premises or dedicated cloud environments as needed.",
        ctaText: "We confirm your company's data security requirements and propose customized solutions through security policy consultation.",
        cta: "Request Security Policy Consultation"
      },
      cta: {
        subtext: "Have more questions?",
        benefit: "Free Proposal Provided",
        text: "Request Consultation Now"
      }
    },
    contact: {
      title: "Looking for Projects with Steady Revenue?",
      text: "We provide free consultation on ",
      textHighlight: "projects that generate steady revenue",
      textEnd: " including monthly fixed-revenue MSP, high-value AI automation, and large-scale modernization projects.",
      sub: "✓ Free Technical Assessment · ✓ Clear Proposal · ✓ Quick Response",
      cta: "Request Custom Quote",
      ctaAriaLabel: "Request custom quote via email (support@onoffus.com)",
      pill: "Email·Messenger-based remote collaboration",
      info: {
        company: "Company Name",
        registration: "Business Registration Number",
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
    quantitativeResults: {
      title: "Verified Quantitative Results",
      desc: "Reliability and expertise proven by numbers",
      r1: {
        value: "20+ Years",
        title: "Enterprise System Development Experience",
        desc: "Over 20 years of enterprise system development experience since 2005, successfully executing projects for finance, aviation, and large corporations."
      },
      r2: {
        value: "50+",
        title: "Large-Scale Projects Completed",
        desc: "Successfully completed over 50 large-scale projects with major corporations including Samsung, Hyundai, KB Insurance, and Woori Card."
      },
      r3: {
        value: "30%+",
        title: "Work Efficiency Improvement",
        desc: "Achieved an average of 30%+ work efficiency improvement through AI automation implementation, eliminating repetitive tasks and reducing labor costs."
      },
      r4: {
        value: "MSP",
        title: "Predictable Monthly Fixed Revenue",
        desc: "Providing predictable monthly fixed revenue models through MSP operations to support sustainable business growth."
      }
    },
    floatingCTA: {
      text: "Request Free Technical Consultation"
    },
    footer: {
      tagline: "AI-Powered B2B SaaS & Enterprise Systems.",
      links: "Enterprise Development · AI Solutions",
      registration: "Business Registration: 379-88-01413 | Representative: Grayson Choi"
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
  
  // aria-label 업데이트
  const ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
  ariaElements.forEach(element => {
    const key = element.getAttribute('data-i18n-aria-label');
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (value !== undefined) {
      element.setAttribute('aria-label', value);
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
  // contact-text는 이미 data-i18n으로 처리되므로 별도 처리 불필요
  // 단, contact-sub은 HTML 구조가 복잡하므로 별도 처리
  const contactSub = document.querySelector('.contact-sub');
  if (contactSub && translations[currentLang].contact.sub) {
    const subText = translations[currentLang].contact.sub;
    // 각 항목을 strong 태그로 감싸서 스타일 적용
    const items = subText.split(' · ');
    contactSub.innerHTML = items.map(item => {
      const text = item.replace(/^✓\s*/, '').trim();
      return `<strong style="color: var(--primary-soft);">✓ ${text}</strong>`;
    }).join(' · ');
  }
}

function updateListItems() {
  // 모든 data-i18n-list 속성을 가진 리스트 업데이트
  const lists = document.querySelectorAll('[data-i18n-list]');
  lists.forEach(list => {
    const key = list.getAttribute('data-i18n-list');
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (Array.isArray(value)) {
      const existingLis = list.querySelectorAll('li');
      if (existingLis.length === value.length) {
        // 기존 li가 있으면 텍스트만 업데이트 (스타일과 구조 유지)
        existingLis.forEach((li, index) => {
          if (value[index]) {
            // 체크마크 span 찾기
            const checkmarkSpan = li.querySelector('span');
            const checkmarkColor = checkmarkSpan ? checkmarkSpan.style.color || '#3b82f6' : '#3b82f6';
            
            // 기존 내용을 체크마크 span만 남기고 나머지 제거
            const spanHTML = checkmarkSpan ? checkmarkSpan.outerHTML : '<span style="color: ' + checkmarkColor + '; margin-right: 0.5rem;">✓</span>';
            li.innerHTML = spanHTML + ' ' + value[index];
            
            // 기존 스타일 유지
            const originalStyle = li.getAttribute('style');
            if (originalStyle) {
              li.setAttribute('style', originalStyle);
            }
          }
        });
      } else {
        // 기존 li가 없거나 개수가 다르면 전체 재생성
        const firstLi = list.querySelector('li');
        const checkmarkColor = firstLi?.querySelector('span')?.style?.color || '#3b82f6';
        const liStyle = firstLi?.getAttribute('style') || 'padding: 0.6rem 0; font-size: 0.95rem; color: var(--text-sub); border-bottom: 1px solid var(--border-subtle);';
        
        list.innerHTML = '';
        value.forEach((item, index) => {
          const li = document.createElement('li');
          li.setAttribute('style', liStyle);
          if (index === value.length - 1) {
            // 마지막 항목은 border-bottom 제거
            li.style.borderBottom = 'none';
          }
          li.innerHTML = '<span style="color: ' + checkmarkColor + '; margin-right: 0.5rem;">✓</span> ' + item;
          list.appendChild(li);
        });
      }
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
