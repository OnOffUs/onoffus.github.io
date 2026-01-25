// 연도 표시
document.getElementById('year').textContent = new Date().getFullYear();

// Neural Network Animation
function initNeuralNetwork() {
  const canvas = document.getElementById('neuralNetwork');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;

  // Canvas 크기 설정
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 노드와 연결선 설정
  const nodeCount = 25;
  const nodes = [];
  const connections = [];
  const maxDistance = 200;

  // 노드 생성
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1
    });
  }

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

      // 경계 처리
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      node.x = Math.max(0, Math.min(canvas.width, node.x));
      node.y = Math.max(0, Math.min(canvas.height, node.y));
    });

    // 연결선 업데이트
    updateConnections();

    // 테마에 따른 색상 설정
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const strokeColor = isLight ? 'rgba(37, 99, 235, 0.2)' : 'rgba(96, 165, 250, 0.15)';
    const nodeGradientStart = isLight ? 'rgba(37, 99, 235, 0.6)' : 'rgba(96, 165, 250, 0.8)';
    const nodeGradientEnd = isLight ? 'rgba(37, 99, 235, 0)' : 'rgba(96, 165, 250, 0)';
    const nodeFill = isLight ? 'rgba(37, 99, 235, 0.3)' : 'rgba(96, 165, 250, 0.4)';

    // 연결선 그리기
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 0.5;
    connections.forEach(conn => {
      const from = nodes[conn.from];
      const to = nodes[conn.to];
      
      ctx.globalAlpha = conn.opacity * (isLight ? 0.4 : 0.3);
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();
    });

    // 노드 그리기
    ctx.globalAlpha = isLight ? 0.5 : 0.6;
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
  if (theme === 'light') {
    iconEl.textContent = '☀️';
    labelEl.textContent = 'Light';
  } else {
    iconEl.textContent = '🌙';
    labelEl.textContent = 'Dark';
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

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

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
  // Service cards
  document.querySelectorAll('.service-card').forEach((card, index) => {
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
