// 연도 표시
document.getElementById('year').textContent = new Date().getFullYear();

// Neural Network Animation
function initNeuralNetwork() {
  const canvas = document.getElementById('neuralNetwork');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;

  // Canvas 크기 설정 (강제 리플로우 방지)
  function resizeCanvas() {
    // 부모 요소의 실제 크기 가져오기
    const parent = canvas.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      // CSS 픽셀 크기와 실제 픽셀 크기 설정 (고해상도 디스플레이 대응)
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width || window.innerWidth;
      const height = rect.height || window.innerHeight;
      
      // 실제 픽셀 크기 설정
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // CSS 크기 설정
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      // 컨텍스트 스케일 조정 (매번 리셋 필요)
      ctx.setTransform(1, 0, 0, 1, 0, 0); // 리셋
      ctx.scale(dpr, dpr);
      
      // 노드 재생성 (새로운 크기에 맞춰)
      createNodes();
    } else {
      // 폴백: 전체 화면 크기
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0); // 리셋
      ctx.scale(dpr, dpr);
      
      // 노드 재생성
      createNodes();
    }
  }
  
  // 초기 크기 설정 - DOMContentLoaded 후 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      resizeCanvas();
    });
  } else {
    // DOM이 이미 로드된 경우 즉시 실행
    setTimeout(() => {
      resizeCanvas();
    }, 0);
  }
  
  // Resize 이벤트에 throttle 적용하여 리플로우 최소화
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
    }, 150); // 150ms throttle
  });

  // 노드와 연결선 설정
  const nodeCount = 25;
  const nodes = [];
  const connections = [];
  const maxDistance = 200;

  // 노드 생성 함수 (canvas 크기에 맞춰 재생성)
  function createNodes() {
    nodes.length = 0; // 기존 노드 제거
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1
      });
    }
  }
  
  // 초기 노드 생성
  createNodes();

  // 연결선 생성
  function updateConnections() {
    connections.length = 0;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          connections.push({
            from: i,
            to: j,
            distance: distance,
            opacity: 1 - (distance / maxDistance)
          });
        }
      }
    }
  }

  // 애니메이션 루프
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 노드 업데이트
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      // 경계 처리 (CSS 픽셀 크기 기준)
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      node.x = Math.max(0, Math.min(width, node.x));
      node.y = Math.max(0, Math.min(height, node.y));
    });

    // 연결선 업데이트
    updateConnections();

    // 테마에 따른 색상 설정
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const strokeColor = isLight ? 'rgba(37, 99, 235, 0.5)' : 'rgba(96, 165, 250, 0.4)';
    const nodeGradientStart = isLight ? 'rgba(37, 99, 235, 0.9)' : 'rgba(96, 165, 250, 0.9)';
    const nodeGradientEnd = isLight ? 'rgba(37, 99, 235, 0)' : 'rgba(96, 165, 250, 0)';
    const nodeFill = isLight ? 'rgba(37, 99, 235, 0.6)' : 'rgba(96, 165, 250, 0.5)';

    // 연결선 그리기
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = isLight ? 1.2 : 1;
    connections.forEach(conn => {
      const from = nodes[conn.from];
      const to = nodes[conn.to];
      
      ctx.globalAlpha = conn.opacity * (isLight ? 0.8 : 0.6);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    });

    // 노드 그리기
    ctx.globalAlpha = isLight ? 0.9 : 0.7;
    nodes.forEach(node => {
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 2);
      gradient.addColorStop(0, nodeGradientStart);
      gradient.addColorStop(1, nodeGradientEnd);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = nodeFill;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(animate);
  }

  // 애니메이션 시작
  animate();

  // 페이지 숨김 시 애니메이션 중지
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

// DOM 로드 후 신경망 초기화
document.addEventListener('DOMContentLoaded', () => {
  initNeuralNetwork();
});

// 다크/라이트 테마 토글
const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const iconEl = document.getElementById('themeIcon');
const labelEl = document.getElementById('themeLabel');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (iconEl && labelEl) {
    if (theme === 'light') {
      iconEl.textContent = '☀️';
      labelEl.textContent = 'Light';
    } else {
      iconEl.textContent = '🌙';
      labelEl.textContent = 'Dark';
    }
  }
  localStorage.setItem('onoffus-theme', theme);
}

// 초기 테마 (localStorage 기준)
const savedTheme = localStorage.getItem('onoffus-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  applyTheme(savedTheme);
} else {
  applyTheme('dark');
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}


// Header scroll effect (강제 리플로우 방지)
let lastScroll = 0;
let scrollTimeout;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  // requestAnimationFrame으로 배치 처리하여 리플로우 최적화
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout);
  }
  
  scrollTimeout = requestAnimationFrame(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}, { passive: true });

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  // Service and Industry cards
  document.querySelectorAll('.service-card, .industry-index-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Process steps
  document.querySelectorAll('.process-step').forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(step);
  });

  // About cards
  document.querySelectorAll('.about-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Founder cards
  document.querySelectorAll('.founder-visual, .founder .about-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
  });

  // Contact inner
  const contactInner = document.querySelector('.contact-inner');
  if (contactInner) {
    observer.observe(contactInner);
  }

  // Section headers
  document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
  });
});

// Smooth scroll for anchor links (강제 리플로우 방지)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // requestAnimationFrame으로 배치 처리하여 리플로우 최적화
        requestAnimationFrame(() => {
          const headerOffset = 80;
          // getBoundingClientRect를 한 번만 호출
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      }
    }
  });
});

// Floating CTA Button
document.addEventListener('DOMContentLoaded', () => {
  const floatingCTA = document.getElementById('floatingCTA');
  if (!floatingCTA) return;

  let lastScroll = 0;
  let isVisible = false;

  let scrollRAF;
  window.addEventListener('scroll', () => {
    // requestAnimationFrame으로 배치 처리하여 리플로우 최적화
    if (scrollRAF) {
      cancelAnimationFrame(scrollRAF);
    }
    
    scrollRAF = requestAnimationFrame(() => {
      const currentScroll = window.pageYOffset;
      const scrollThreshold = 300; // Hero 섹션을 지나면 표시

      if (currentScroll > scrollThreshold && !isVisible) {
        floatingCTA.style.opacity = '1';
        floatingCTA.style.transform = 'translateY(0)';
        floatingCTA.style.pointerEvents = 'auto';
        isVisible = true;
      } else if (currentScroll <= scrollThreshold && isVisible) {
        floatingCTA.style.opacity = '0';
        floatingCTA.style.transform = 'translateY(20px)';
        floatingCTA.style.pointerEvents = 'none';
        isVisible = false;
      }

      lastScroll = currentScroll;
    });
  }, { passive: true });
});

// Google Analytics 전환 추적 (지연 로드 대응)
function trackEvent(category, action, label = '') {
  // gtag가 로드되지 않았을 수 있으므로 안전하게 처리
  if (typeof window.gtag !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': 1
    });
  } else {
    // gtag가 아직 로드되지 않은 경우 dataLayer에 큐잉
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': action,
      'event_category': category,
      'event_label': label,
      'value': 1
    });
  }
}

// CTA 버튼 클릭 추적
document.addEventListener('DOMContentLoaded', () => {
  // Hero CTA 버튼
  const heroCTA = document.querySelector('.hero-actions .btn-primary');
  if (heroCTA) {
    heroCTA.addEventListener('click', () => {
      trackEvent('CTA', 'click', 'Hero - AI 프로젝트 상담 요청');
    });
  }

  // Revenue Services CTA 버튼
  const revenueCTA = document.querySelector('#revenue-services .btn-primary');
  if (revenueCTA) {
    revenueCTA.addEventListener('click', () => {
      trackEvent('CTA', 'click', 'Revenue Services - 무료 기술 상담 신청');
    });
  }

  // Contact CTA 버튼
  const contactCTA = document.querySelector('#contact .btn-primary');
  if (contactCTA) {
    contactCTA.addEventListener('click', () => {
      trackEvent('CTA', 'click', 'Contact - 맞춤 견적 요청하기');
    });
  }

  // Floating CTA 버튼
  const floatingCTA = document.querySelector('#floatingCTA .btn-primary');
  if (floatingCTA) {
    floatingCTA.addEventListener('click', () => {
      trackEvent('CTA', 'click', 'Floating - 무료 기술 상담 신청');
    });
  }

  // 이메일 링크 클릭 추적
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('Contact', 'email_click', link.href);
    });
  });

  // 섹션 스크롤 추적 (페이지뷰 깊이 측정)
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        trackEvent('Engagement', 'section_view', sectionId);
        sectionObserver.unobserve(entry.target); // 한 번만 추적
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});


// 메뉴 활성화
function initActiveMenu() {
  function clearActive() {
    document.querySelectorAll('.nav-links a').forEach(function(a){ a.classList.remove('active'); });
  }
  function setActiveByHref(href) {
    if (!href) return;
    var target = document.querySelector('.nav-links a[href="' + href + '"]');
    if (target) target.classList.add('active');
  }
  function isPathMatch(path, segment) {
    return path.indexOf('/' + segment + '/') !== -1 || path.indexOf('/' + segment + '.') !== -1 || path.endsWith('/' + segment) || path.endsWith('/' + segment + '/');
  }
  function setActiveLink() {
    var path = window.location.pathname || '';
    clearActive();
    if (isPathMatch(path, 'blog')) {
      setActiveByHref('/blog/');
      return;
    }
    if (isPathMatch(path, 'industries')) {
      setActiveByHref('/industries/');
      return;
    }
    var hash = window.location.hash;
    if (hash) {
      setActiveByHref(hash);
    } else {
      setActiveByHref('#services');
    }
  }
  function initObserver() {
    var path = window.location.pathname || '';
    if (!((path === '/' || path.endsWith('/index.html')))) return;
    if (!('IntersectionObserver' in window)) return;
    var sections = ['services','msp','cases','faq','contact'];
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          clearActive();
          setActiveByHref('#' + entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 });
    sections.forEach(function(id){
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
  setActiveLink();
  window.addEventListener('hashchange', setActiveLink);
  window.addEventListener('load', setActiveLink);
  initObserver();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initActiveMenu);
} else {
  initActiveMenu();
}