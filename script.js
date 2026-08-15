/**
 * دراسة وجدوى - Complete JavaScript Interactivity & Auto-Looping Sections
 * Vanilla JS | Standard ECMAScript | Zero Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. STICKY HEADER & SCROLL PROGRESS RING (5.2)
     -------------------------------------------------------------------------- */
  const headerWrapper = document.querySelector('.header-wrapper');
  const topBar = document.querySelector('.top-bar');
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  const progressCircle = document.querySelector('.progress-ring-circle');

  const circleRadius = 25;
  const circleCircumference = 2 * Math.PI * circleRadius; // ~157.08px

  if (progressCircle) {
    progressCircle.style.strokeDasharray = `${circleCircumference} ${circleCircumference}`;
    progressCircle.style.strokeDashoffset = circleCircumference;
  }

  let isTicking = false;

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // 1. Sticky Header
    if (scrollY > 80) {
      headerWrapper?.classList.add('is-sticky');
      if (topBar) topBar.style.transform = 'translateY(-100%)';
    } else {
      headerWrapper?.classList.remove('is-sticky');
      if (topBar) topBar.style.transform = 'translateY(0)';
    }

    // 2. Scroll-to-Top Visibility (> 400px scroll requirement)
    if (scrollY > 400) {
      scrollTopBtn?.classList.add('is-visible');
    } else {
      scrollTopBtn?.classList.remove('is-visible');
    }

    // 3. Dynamic SVG Scroll Progress Ring (0% at top, 100% at bottom)
    if (documentHeight > 0 && progressCircle) {
      const scrollPercent = Math.min(Math.max(scrollY / documentHeight, 0), 1);
      const offset = circleCircumference - (scrollPercent * circleCircumference);
      progressCircle.style.strokeDashoffset = offset;
    }

    isTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(handleScroll);
      isTicking = true;
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  /* --------------------------------------------------------------------------
     2. MOBILE DRAWER NAVIGATION
     -------------------------------------------------------------------------- */
  const hamburger = document.querySelector('.mobile-hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    hamburger?.classList.add('is-active');
    drawer?.classList.add('translate-x-0');
    drawer?.classList.remove('translate-x-full');
    backdrop?.classList.add('opacity-100', 'pointer-events-auto');
    backdrop?.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
  }

  function closeDrawer() {
    hamburger?.classList.remove('is-active');
    drawer?.classList.remove('translate-x-0');
    drawer?.classList.add('translate-x-full');
    backdrop?.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }

  hamburger?.addEventListener('click', () => {
    if (drawer?.classList.contains('translate-x-0')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerCloseBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeSearch();
    }
  });


  /* --------------------------------------------------------------------------
     3. INLINE SEARCH OVERLAY
     -------------------------------------------------------------------------- */
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const searchModal = document.querySelector('.search-modal');
  const searchCloseBtn = document.querySelector('.search-close-btn');
  const searchInput = document.querySelector('.search-input');

  function openSearch() {
    searchModal?.classList.add('opacity-100', 'pointer-events-auto');
    searchModal?.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => searchInput?.focus(), 150);
  }

  function closeSearch() {
    searchModal?.classList.remove('opacity-100', 'pointer-events-auto');
    searchModal?.classList.add('opacity-0', 'pointer-events-none');
  }

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  searchCloseBtn?.addEventListener('click', closeSearch);

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });


  /* --------------------------------------------------------------------------
     4. SECTOR SWITCHER (Swiper Auto-Loop - Exactly 3 Visible Slides)
     -------------------------------------------------------------------------- */
  function updateSectorActiveState(realIndex) {
    const allBtns = document.querySelectorAll('.sectorSwiper .sector-pill-btn');
    const allSlides = document.querySelectorAll('.sectorSwiper .swiper-slide');

    allBtns.forEach((btn) => {
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      if (idx === realIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    allSlides.forEach((slide) => {
      const activeBtn = slide.querySelector('.sector-pill-btn.active');
      const prevSlide = slide.previousElementSibling;
      if (activeBtn) {
        slide.classList.add('has-active');
        if (prevSlide) prevSlide.classList.add('no-divider');
      } else {
        slide.classList.remove('has-active');
        if (prevSlide && !prevSlide.querySelector('.sector-pill-btn.active')) {
          prevSlide.classList.remove('no-divider');
        }
      }
    });
  }

  if (typeof Swiper !== 'undefined' && document.querySelector('.sectorSwiper')) {
    const sectorSwiper = new Swiper('.sectorSwiper', {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 650,
      grabCursor: true,
      allowTouchMove: true,
      on: {
        init: function () {
          updateSectorActiveState(this.realIndex);
        },
        slideChange: function () {
          updateSectorActiveState(this.realIndex);
        },
      },
    });

    document.querySelectorAll('.sectorSwiper .swiper-slide').forEach((slide) => {
      slide.addEventListener('click', function () {
        const btn = this.querySelector('.sector-pill-btn');
        if (btn) {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          updateSectorActiveState(idx);
          if (sectorSwiper.autoplay) {
            sectorSwiper.autoplay.start();
          }
        }
      });
    });
  }


  /* --------------------------------------------------------------------------
     5. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, index * 60);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  /* --------------------------------------------------------------------------
     6. STATS COUNT-UP ANIMATION
     -------------------------------------------------------------------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimatedStats = false;

  function animateStats() {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target') || '0', 10);
      const duration = 1600;
      const startTime = performance.now();

      function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * target);

        stat.textContent = currentCount.toLocaleString('ar-SA');

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target.toLocaleString('ar-SA');
        }
      }

      requestAnimationFrame(updateCount);
    });
  }

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimatedStats) {
        hasAnimatedStats = true;
        animateStats();
      }
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }


  /* --------------------------------------------------------------------------
     7. PROCESS SVG TIMELINE ANIMATION
     -------------------------------------------------------------------------- */
  const processTimeline = document.querySelector('.process-desktop-timeline');
  const svgPath = document.querySelector('.process-svg-path');

  if (processTimeline && svgPath) {
    const processObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        svgPath.style.strokeDashoffset = '0';
      }
    }, { threshold: 0.4 });

    processObserver.observe(processTimeline);
  }


  /* --------------------------------------------------------------------------
     8. FUNDING BODIES TABS (In-Place Loop - Zero Window Jumping)
     -------------------------------------------------------------------------- */
  const fundingTabBtns = document.querySelectorAll('.funding-tab-btn');
  const fundingPanels = document.querySelectorAll('.funding-tab-panel');
  const fundingPrevBtn = document.querySelector('.funding-tab-prev');
  const fundingNextBtn = document.querySelector('.funding-tab-next');
  let currentFundingIndex = 0;
  let fundingTimer = null;

  function activateFundingTab(index) {
    if (!fundingTabBtns || !fundingTabBtns.length) return;
    currentFundingIndex = (index + fundingTabBtns.length) % fundingTabBtns.length;

    fundingTabBtns.forEach((btn, idx) => {
      if (idx === currentFundingIndex) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const parent = btn.parentElement;
        if (parent && parent.scrollWidth > parent.clientWidth) {
          const btnLeft = btn.offsetLeft;
          const btnWidth = btn.offsetWidth;
          const parentWidth = parent.clientWidth;
          parent.scrollTo({
            left: btnLeft - (parentWidth / 2) + (btnWidth / 2),
            behavior: 'smooth'
          });
        }
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    const targetTabId = fundingTabBtns[currentFundingIndex]?.getAttribute('data-tab');

    fundingPanels.forEach(panel => {
      if (panel.id === targetTabId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  function startFundingAutoplay() {
    stopFundingAutoplay();
    if (!fundingTabBtns || !fundingTabBtns.length) return;
    fundingTimer = setInterval(() => {
      activateFundingTab(currentFundingIndex + 1);
    }, 3500);
  }

  function stopFundingAutoplay() {
    if (fundingTimer) clearInterval(fundingTimer);
  }

  if (fundingTabBtns && fundingTabBtns.length) {
    fundingTabBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        activateFundingTab(idx);
        startFundingAutoplay();
      });
    });

    fundingPrevBtn?.addEventListener('click', () => {
      activateFundingTab(currentFundingIndex - 1);
      startFundingAutoplay();
    });

    fundingNextBtn?.addEventListener('click', () => {
      activateFundingTab(currentFundingIndex + 1);
      startFundingAutoplay();
    });

    const fundingContainer = document.querySelector('#funding');
    fundingContainer?.addEventListener('mouseenter', stopFundingAutoplay);
    fundingContainer?.addEventListener('mouseleave', startFundingAutoplay);

    activateFundingTab(0);
    startFundingAutoplay();
  }


  /* --------------------------------------------------------------------------
     9. TESTIMONIALS CAROUSEL (Touch Swiper & Animated Transitions)
     -------------------------------------------------------------------------- */
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const carouselContainer = document.querySelector('.testimonial-carousel');

  let currentSlide = 0;
  let autoplayTimer = null;

  function showSlide(index) {
    if (!slides.length) return;
    
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((s, i) => {
      if (i === currentSlide) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAutoplay();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoplay();
    });
  });

  // Touch Swipe Support (Swiper Behavior)
  let touchStartX = 0;
  let touchEndX = 0;

  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);

    carouselContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    carouselContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          // Swiped left in RTL -> next slide
          nextSlide();
        } else {
          // Swiped right in RTL -> prev slide
          prevSlide();
        }
      }
      startAutoplay();
    }, { passive: true });
  }

  showSlide(0);
  startAutoplay();


  /* --------------------------------------------------------------------------
     10. CONTACT FORM VALIDATION & FEEDBACK
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = document.getElementById('formName');
      const phoneInput = document.getElementById('formPhone');
      const emailInput = document.getElementById('formEmail');

      if (!nameInput || nameInput.value.trim().length < 2) isValid = false;
      if (!emailInput || !emailInput.value.includes('@')) isValid = false;

      if (isValid) {
        contactForm.reset();
        if (successMsg) {
          successMsg.classList.remove('hidden');
          setTimeout(() => {
            successMsg.classList.add('hidden');
          }, 5000);
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. FAQ ACCORDION INTERACTIVITY
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      const isHidden = answer.classList.contains('hidden');

      // Close all answers
      faqItems.forEach(otherItem => {
        otherItem.querySelector('.faq-answer')?.classList.add('hidden');
        otherItem.querySelector('.faq-icon')?.classList.remove('rotate-180');
      });

      if (isHidden) {
        answer?.classList.remove('hidden');
        icon?.classList.add('rotate-180');
      }
    });
  });


  /* --------------------------------------------------------------------------
     12. STATS COUNTER ANIMATION (Smooth Count-Up)
     -------------------------------------------------------------------------- */
  const statCounters = document.querySelectorAll('[data-counter]');
  let statsCounted = false;

  if (statCounters.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statCounters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-counter'), 10);
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeProgress * target);
              counter.textContent = currentVal.toLocaleString('en-US');

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toLocaleString('en-US');
              }
            }
            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.2 });

    const statsContainer = statCounters[0].closest('.reveal') || statCounters[0].closest('#why-us');
    if (statsContainer) statsObserver.observe(statsContainer);
  }

});


