

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR SCROLL ── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });

  /* ── HAMBURGER MENU ── */
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-menu');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mob.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── CURSOR GLOW ── */
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });

  /* ── REVEAL ON SCROLL ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── SEARCH TABS ── */
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ── FILTER TAGS ── */
  document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', () => tag.classList.toggle('active'));
  });

  /* ── PARTICLES ── */
  const pContainer = document.querySelector('.particles');
  if (pContainer) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 4 + 1;
      p.style.cssText = `
        left:${Math.random()*100}%;
        bottom:${Math.random()*20}%;
        width:${size}px; height:${size}px;
        --dur:${6+Math.random()*10}s;
        --delay:${Math.random()*8}s;
      `;
      pContainer.appendChild(p);
    }
  }

  /* ── TOAST ── */
  window.showToast = (msg, icon = '✈') => {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-text">${msg}</span>`;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  };

  /* ── SEARCH BUTTON ── */
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const activeTab = document.querySelector('.search-tab.active')?.textContent.trim() || 'Flights';
      if (activeTab === 'Flights') window.location.href = 'flights.html';
      else if (activeTab === 'Hotels') window.location.href = 'hotels.html';
      else showToast('Searching packages…', '🌍');
    });
  }

  /* ── NEWSLETTER ── */
  const nlForm = document.querySelector('.newsletter-form');
  if (nlForm) {
    nlForm.addEventListener('submit', e => {
      e.preventDefault();
      const inp = nlForm.querySelector('input');
      if (inp.value) {
        showToast('You\'re subscribed! Welcome aboard 🎉', '✉️');
        inp.value = '';
      }
    });
    nlForm.querySelector('button')?.addEventListener('click', () => {
      nlForm.dispatchEvent(new Event('submit'));
    });
  }

  /* ── CONTACT FORM ── */
  const contactForm = document.querySelector('.contact-form-box form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      showToast('Message sent! We\'ll reply within 24h.', '📩');
      contactForm.reset();
    });
  }

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 25);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-num').forEach(el => {
          const raw = el.dataset.val;
          const suffix = el.dataset.suffix || '';
          animateCounter(el, parseFloat(raw), suffix);
        });
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.hero-stats, .stats-row').forEach(s => statsObserver.observe(s));

  /* ── BOOK NOW BUTTONS ── */
  document.querySelectorAll('.deal-btn, .result-meta .btn, .btn-book').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      showToast('Redirecting to booking…', '🎫');
      setTimeout(() => window.location.href = 'contact.html', 1200);
    });
  });

  /* ── PARALLAX HERO ── */
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      heroBg.style.transform = `translateY(${window.scrollY * .3}px)`;
    }, { passive: true });
  }

  /* ── PRICE RANGE SLIDER ── */
  const slider = document.getElementById('priceRange');
  const sliderVal = document.getElementById('priceVal');
  if (slider && sliderVal) {
    slider.addEventListener('input', () => {
      sliderVal.textContent = '$' + parseInt(slider.value).toLocaleString();
    });
  }

  /* ── TYPED HERO TEXT ── */
  const typed = document.querySelector('.typed-text');
  if (typed) {
    const words = ['Adventure', 'Luxury', 'Romance', 'Discovery'];
    let wi = 0, ci = 0, deleting = false;
    function tick() {
      const word = words[wi];
      typed.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
      if (!deleting && ci > word.length) { deleting = true; setTimeout(tick, 1600); return; }
      if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; }
      setTimeout(tick, deleting ? 60 : 110);
    }
    tick();
  }

});
