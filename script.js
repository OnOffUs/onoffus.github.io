/* OnOffus — shared site script (all pages) */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;
  root.classList.add('js');

  var THEME_KEY = 'onoffus:theme';
  var GA_ID = 'G-E07X3QCKGL';

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  /* ---------- Theme ---------- */
  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function effectiveTheme() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    return media && media.matches ? 'dark' : 'light';
  }

  function updateThemeButton() {
    var btn = doc.getElementById('themeToggle');
    if (!btn) return;
    var isDark = effectiveTheme() === 'dark';
    var ko = root.lang !== 'en';
    btn.setAttribute('aria-label', isDark
      ? (ko ? '라이트 모드로 전환' : 'Switch to light mode')
      : (ko ? '다크 모드로 전환' : 'Switch to dark mode'));
  }

  function initTheme() {
    var saved = storageGet(THEME_KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    updateThemeButton();

    var btn = doc.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        storageSet(THEME_KEY, next);
        updateThemeButton();
      });
    }
    if (media && media.addEventListener) media.addEventListener('change', updateThemeButton);
    doc.addEventListener('onoffus:langchange', updateThemeButton);
  }

  /* ---------- Header: scroll state + mobile menu ---------- */
  function initHeader() {
    var header = doc.querySelector('.site-header');
    if (!header) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var menuBtn = doc.getElementById('menuToggle');
    if (!menuBtn) return;

    function setOpen(open) {
      header.classList.toggle('is-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    menuBtn.addEventListener('click', function () {
      setOpen(!header.classList.contains('is-open'));
    });
    header.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('is-open')) {
        setOpen(false);
        menuBtn.focus();
      }
    });
    doc.addEventListener('click', function (e) {
      if (header.classList.contains('is-open') && !header.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = doc.querySelectorAll('.reveal');
    if (!items.length) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Active nav (home page sections) ---------- */
  function initActiveNav() {
    var path = location.pathname;
    if (!(path === '/' || /\/index\.html$/.test(path))) return;
    if (!('IntersectionObserver' in window)) return;

    var links = {};
    doc.querySelectorAll('.nav-links a[href^="/#"]').forEach(function (a) {
      links[a.getAttribute('href').slice(2)] = a;
    });
    var ids = Object.keys(links);
    if (!ids.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        ids.forEach(function (id) { links[id].classList.remove('is-active'); });
        var link = links[entry.target.id];
        if (link) link.classList.add('is-active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    ids.forEach(function (id) {
      var el = doc.getElementById(id);
      if (el) io.observe(el);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = doc.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Analytics (GA4, lazy) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var gaLoaded = false;
  function loadAnalytics() {
    if (gaLoaded) return;
    gaLoaded = true;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var s = doc.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    doc.head.appendChild(s);
  }

  function scheduleAnalytics() {
    var trigger = function () { loadAnalytics(); };
    ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach(function (evt) {
      window.addEventListener(evt, trigger, { once: true, passive: true });
    });
    var idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 2500); };
    if (doc.readyState === 'complete') idle(trigger, { timeout: 3000 });
    else window.addEventListener('load', function () { idle(trigger, { timeout: 3000 }); });
  }

  function track(name, params) {
    window.gtag('event', name, params || {});
  }

  function initTracking() {
    doc.addEventListener('click', function (e) {
      var el = e.target.closest ? e.target.closest('a, button') : null;
      if (!el) return;
      var label = el.getAttribute('data-track');
      var href = el.getAttribute('href') || '';
      if (href.indexOf('mailto:') === 0) {
        track('contact_email_click', { cta: label || 'mailto', page: location.pathname });
      } else if (label) {
        track('cta_click', { cta: label, page: location.pathname });
      }
    });
  }

  /* ---------- Service worker ---------- */
  function initServiceWorker() {
    if (!('serviceWorker' in navigator) || location.protocol !== 'https:') return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () { /* ignore */ });
    });
  }

  function init() {
    initTheme();
    initHeader();
    initReveal();
    initActiveNav();
    initYear();
    initTracking();
    scheduleAnalytics();
    initServiceWorker();
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
