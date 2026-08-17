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
    if (scrollY > 10) {
      headerWrapper?.classList.add('is-sticky');
    } else {
      headerWrapper?.classList.remove('is-sticky');
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
     3. INTERACTIVE LIVE SEARCH OVERLAY & INDEXING
     -------------------------------------------------------------------------- */
  const searchTriggers = document.querySelectorAll('.search-trigger');
  const searchModal = document.getElementById('searchModal') || document.querySelector('.search-modal');
  const searchCloseBtn = document.querySelector('.search-close-btn');
  const searchInput = document.getElementById('siteSearchInput') || document.querySelector('.search-input');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchResultsList = document.getElementById('searchResultsList');
  const searchCategoryPills = document.querySelectorAll('.search-category-pill');
  const trendingItems = document.querySelectorAll('.trending-search-item');

  let activeCategory = 'all';
  let selectedResultIndex = -1;

  // Search Data Index
  const searchDataset = [
    // الخدمات
    {
      title: 'دراسات الجدوى الاقتصادية الشاملة',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'دراسات تفصيلية معتمدة ومطابقة لاشتراطات البنوك وجهات التمويل والمستثمرين.',
      target: '#services',
      icon: 'document'
    },
    {
      title: 'الاستشارات الإدارية وتطوير الأعمال',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'تطوير الهياكل التنظيمية وإعداد خطط التشغيل واستراتيجيات التوسع وإعادة الهيكلة.',
      target: '#services',
      icon: 'chart'
    },
    {
      title: 'الاستشارات التسويقية وأبحاث السوق',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'تحليل حجم السوق، المنافسين، وسلوك المستهلكين وتحديد الحصص السوقية المستهدفة.',
      target: '#services',
      icon: 'trending'
    },
    {
      title: 'التقييم والتحليل المالي ودراسات التكلفة',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'تحليلات الحساسية، نقطة التعادل، ومؤشرات الربحية والعائد الاستثماري (NPV & IRR).',
      target: '#services',
      icon: 'calc'
    },
    {
      title: 'التخطيط الاستراتيجي ونماذج العمل',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'صياغة نموذج العمل التجاري BMC وخطط النمو والتنفيذ على المدى المتوسط والبعيد.',
      target: '#services',
      icon: 'compass'
    },
    {
      title: 'إدارة وتحليل المخاطر الاستثمارية',
      category: 'services',
      categoryLabel: 'خدمة',
      desc: 'تقييم المخاطر التشغيلية والمالية ووضع خطط الطوارئ وسيناريوهات التحوط.',
      target: '#services',
      icon: 'shield'
    },

    // القطاعات الاستثمارية
    {
      title: 'دراسة جدوى القطاع الزراعي والإنتاج الحيواني',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'مشاريع البيوت المحمية، الاستزراع السمكي، مزارع الدواجن، والتقنيات الزراعية الحديثة.',
      target: '#sectors-detail',
      icon: 'leaf'
    },
    {
      title: 'دراسة جدوى القطاع السياحي والفندقي',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'الفنادق، المنتجعات، المقاهي والمطاعم الفاخرة، والمشاريع الترفيهية والسياحية بالمملكة.',
      target: '#sectors-detail',
      icon: 'building'
    },
    {
      title: 'دراسة جدوى القطاع الطبي والرعاية الصحية',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'المجمعات الطبية المتخصصة، المستشفيات، مراكز العلاج الطبيعي، ومختبرات التحاليل.',
      target: '#sectors-detail',
      icon: 'heart'
    },
    {
      title: 'دراسة جدوى القطاع الصناعي والتعديني',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'المصانع التحويلية، خطوط الإنتاج، صناعات البلاستيك والمعادن، والتعبئة والتغليف.',
      target: '#sectors-detail',
      icon: 'factory'
    },
    {
      title: 'دراسة جدوى القطاع التقني والتجارة الإلكترونية',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'التطبيقات الذكية، منصات الخدمات السحابية SaaS، ومواقع التجارة الإلكترونية وحلول الذكاء الاصطناعي.',
      target: '#sectors-detail',
      icon: 'device'
    },
    {
      title: 'دراسة جدوى القطاع التجاري ومراكز التوزيع',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'المراكز التجارية، المستودعات اللوجستية، سلاسل التجزئة، وإدارة سلاسل الإمداد.',
      target: '#sectors-detail',
      icon: 'shop'
    },
    {
      title: 'دراسة جدوى القطاع التعليمي والتدريب',
      category: 'sectors',
      categoryLabel: 'قطاع استثماري',
      desc: 'المدارس الأهلية، مراكز التدريب والتأهيل المهني، ورياض الأطفال والحضانات المتطورة.',
      target: '#sectors-detail',
      icon: 'academic'
    },

    // جهات التمويل
    {
      title: 'تمويل بنك التنمية الاجتماعية',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'مسارات تمويل المشاريع الناشئة والمنشآت الصغيرة والمتوسطة وقروض العمل الحر ببرامج ميسرة.',
      target: '#funding',
      icon: 'bank'
    },
    {
      title: 'تمويل صندوق التنمية الصناعية السعودي (SIDF)',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'قروض وتمويل إنشاء وتوسعة المصانع والمشاريع الصناعية الكبرى وسلاسل الإمداد.',
      target: '#funding',
      icon: 'bank'
    },
    {
      title: 'تمويل صندوق التنمية الزراعية (ADF)',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'تمويل التقنيات الزراعية الحديثة والبيوت المحمية ومشاريع الأمن الغذائي والثروة الحيوانية.',
      target: '#funding',
      icon: 'bank'
    },
    {
      title: 'تمويل صندوق التنمية السياحي (TDF)',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'دعم وتمويل المشاريع والمنشآت السياحية في الوجهات والمواقع المستهدفة برؤية المملكة 2030.',
      target: '#funding',
      icon: 'bank'
    },
    {
      title: 'برنامج كفالة لتمويل المنشآت الصغيرة والمتوسطة',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'توفير ضمانات التمويل لتسهيل حصول رواد الأعمال على قروض وتسهيلات من البنوك التجارية.',
      target: '#funding',
      icon: 'bank'
    },
    {
      title: 'مبادرات وبرامج الهيئة العامة للمنشآت (منشآت)',
      category: 'funding',
      categoryLabel: 'جهة تمويل',
      desc: 'حزم دعم وتمكين استشارية ومالية وبرامج حاضنات ومسرعات لتسريع نمو الشركات الناشئة.',
      target: '#funding',
      icon: 'bank'
    },

    // الأسئلة الشائعة
    {
      title: 'ما هي دراسة الجدوى وما أهميتها لنجاح المشروع؟',
      category: 'faq',
      categoryLabel: 'سؤال شائع',
      desc: 'دراسة الجدوى هي أداة تقييم شاملة تحدد فرص نجاح المشروع والمخاطر المتوقعة والعوائد المالية بدقة.',
      target: '#faq',
      icon: 'help'
    },
    {
      title: 'كم يستغرق إعداد دراسة الجدوى المتكاملة؟',
      category: 'faq',
      categoryLabel: 'سؤال شائع',
      desc: 'تتراوح المدة عادة بين 7 إلى 20 يوم عمل حسب حجم المشروع وطبيعة القطاع والبيانات المطلوبة.',
      target: '#faq',
      icon: 'help'
    },
    {
      title: 'هل دراسات الجدوى معتمدة ومقبولة لدى البنوك وجهات التمويل؟',
      category: 'faq',
      categoryLabel: 'سؤال شائع',
      desc: 'نعم، دراساتنا معتمدة 100% ومعدة وفق النماذج والمعايير الرسمية المعتمدة لجهات التمويل في السعودية.',
      target: '#faq',
      icon: 'help'
    },
    {
      title: 'كيف تضمنون سرية بيانات ومعلومات الفكرة الاستثمارية؟',
      category: 'faq',
      categoryLabel: 'سؤال شائع',
      desc: 'نلتزم بتوقيع اتفاقية سرية معلومات ملزمة قانونياً (NDA) مع كل عميل قبل البدء بالدراسة.',
      target: '#faq',
      icon: 'help'
    },

    // المقالات
    {
      title: 'خطوات إعداد دراسة جدوى ناجحة تضمن قبول التمويل',
      category: 'blog',
      categoryLabel: 'مقال استشاري',
      desc: 'دليل عملي شامل لأهم المعايير التي تبحث عنها لجان التقييم والصناديق التمويلية.',
      target: '#blog',
      icon: 'article'
    },
    {
      title: 'أهم المؤشرات المالية في تقييم المشاريع الاستثمارية',
      category: 'blog',
      categoryLabel: 'مقال استشاري',
      desc: 'شرح مفصل لمعدل العائد الداخلي IRR، صافي القيمة الحالية NPV، وفترة استرداد رأس المال.',
      target: '#blog',
      icon: 'article'
    },

    // تواصل
    {
      title: 'طلب استشارة فورية أو عرض سعر لدراسة جدوى',
      category: 'services',
      categoryLabel: 'تواصل معنا',
      desc: 'املأ تفاصيل مشروعك وسيقوم خبراؤنا بالتواصل معك مباشرة لتقديم استشارة مبدئية مجانية.',
      target: '#contact',
      icon: 'chat'
    }
  ];

  function getCategoryBadgeClass(cat) {
    switch (cat) {
      case 'services': return 'bg-[#287B3F]/25 text-[#61ce70] border-[#287B3F]/40';
      case 'sectors': return 'bg-orange/20 text-[#ffb169] border-orange/30';
      case 'funding': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'faq': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'blog': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default: return 'bg-white/10 text-white/80 border-white/20';
    }
  }

  function getCategoryIconSvg(icon) {
    return `<svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>`;
  }

  function highlightMatches(text, query) {
    if (!query) return text;
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  function renderSearchResults(query = '') {
    if (!searchResultsList) return;
    const trimmedQuery = query.trim().toLowerCase();

    // If query is empty and category is all, show trending
    if (!trimmedQuery && activeCategory === 'all') {
      const trendingContainer = document.getElementById('searchTrendingContainer');
      if (trendingContainer) {
        searchResultsList.innerHTML = '';
        searchResultsList.appendChild(trendingContainer);
        return;
      }
    }

    // Filter items
    const filtered = searchDataset.filter(item => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      if (!matchCategory) return false;
      if (!trimmedQuery) return true;
      return item.title.toLowerCase().includes(trimmedQuery) ||
             item.desc.toLowerCase().includes(trimmedQuery) ||
             item.categoryLabel.toLowerCase().includes(trimmedQuery);
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `
        <div class="text-center py-10 px-4">
          <div class="w-14 h-14 rounded-full bg-white/5 text-white/40 flex items-center justify-center mx-auto mb-3">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-white text-base font-bold mb-1">لم نتمكن من العثور على نتائج</h4>
          <p class="text-white/50 text-xs sm:text-sm max-w-sm mx-auto mb-4">جرب البحث بكلمات أخرى أو تواصل مباشرة مع فريقنا لمساعدتك في استفسارك.</p>
          <a href="#contact" class="inline-flex items-center gap-2 bg-[#287B3F] hover:bg-[#1f6131] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all" onclick="closeSearch()">
            طلب استشارة فورية
          </a>
        </div>
      `;
      selectedResultIndex = -1;
      return;
    }

    selectedResultIndex = -1;
    let html = `<div class="space-y-2">`;
    filtered.forEach((item, index) => {
      const badgeClass = getCategoryBadgeClass(item.category);
      const highlightedTitle = highlightMatches(item.title, trimmedQuery);
      const highlightedDesc = highlightMatches(item.desc, trimmedQuery);

      html += `
        <a href="${item.target}" class="search-result-item group" data-index="${index}">
          <div class="w-10 h-10 rounded-xl bg-white/5 text-[#61ce70] group-hover:bg-[#287B3F]/30 flex items-center justify-center flex-shrink-0 transition-colors">
            ${getCategoryIconSvg(item.icon)}
          </div>
          <div class="flex-grow min-w-0 text-right">
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md border ${badgeClass}">${item.categoryLabel}</span>
              <h5 class="text-white text-sm sm:text-base font-bold truncate group-hover:text-[#61ce70] transition-colors">${highlightedTitle}</h5>
            </div>
            <p class="text-white/60 text-xs sm:text-sm line-clamp-2">${highlightedDesc}</p>
          </div>
          <div class="w-6 h-6 text-white/30 group-hover:text-white flex-shrink-0 flex items-center justify-center transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </a>
      `;
    });
    html += `</div>`;

    searchResultsList.innerHTML = html;

    // Attach click handlers to close search and navigate smoothly
    const resultElements = searchResultsList.querySelectorAll('.search-result-item');
    resultElements.forEach(el => {
      el.addEventListener('click', (e) => {
        const targetId = el.getAttribute('href');
        closeSearch();
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetEl.classList.add('ring-2', 'ring-[#287B3F]', 'transition-all');
            setTimeout(() => targetEl.classList.remove('ring-2', 'ring-[#287B3F]'), 2000);
          }
        }
      });
    });
  }

  function openSearch() {
    searchModal?.classList.add('opacity-100', 'pointer-events-auto');
    searchModal?.classList.remove('opacity-0', 'pointer-events-none');
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      searchInput?.focus();
      if (!searchInput?.value) {
        renderSearchResults('');
      }
    }, 100);
  }

  function closeSearch() {
    searchModal?.classList.remove('opacity-100', 'pointer-events-auto');
    searchModal?.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }

  // Event Listeners
  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  searchCloseBtn?.addEventListener('click', closeSearch);

  searchModal?.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearch();
  });

  searchInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    if (searchClearBtn) {
      if (val.length > 0) {
        searchClearBtn.classList.remove('hidden');
      } else {
        searchClearBtn.classList.add('hidden');
      }
    }
    renderSearchResults(val);
  });

  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      searchClearBtn.classList.add('hidden');
      searchInput.focus();
      renderSearchResults('');
    }
  });

  // Category Pills
  searchCategoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      searchCategoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat || 'all';
      renderSearchResults(searchInput ? searchInput.value : '');
    });
  });

  // Trending searches clicks
  trendingItems.forEach(item => {
    item.addEventListener('click', () => {
      const q = item.getAttribute('data-query');
      if (searchInput && q) {
        searchInput.value = q;
        searchClearBtn?.classList.remove('hidden');
        renderSearchResults(q);
      }
    });
  });

  // Keyboard navigation inside search
  searchInput?.addEventListener('keydown', (e) => {
    const resultItems = searchResultsList?.querySelectorAll('.search-result-item');
    if (!resultItems || resultItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedResultIndex = (selectedResultIndex + 1) % resultItems.length;
      resultItems.forEach((el, idx) => {
        el.classList.toggle('is-selected', idx === selectedResultIndex);
        if (idx === selectedResultIndex) el.scrollIntoView({ block: 'nearest' });
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedResultIndex = (selectedResultIndex - 1 + resultItems.length) % resultItems.length;
      resultItems.forEach((el, idx) => {
        el.classList.toggle('is-selected', idx === selectedResultIndex);
        if (idx === selectedResultIndex) el.scrollIntoView({ block: 'nearest' });
      });
    } else if (e.key === 'Enter') {
      if (selectedResultIndex >= 0 && selectedResultIndex < resultItems.length) {
        e.preventDefault();
        resultItems[selectedResultIndex].click();
      }
    }
  });


  /* --------------------------------------------------------------------------
     4.0 HERO SWIPER SLIDER (3 High-Performance Slides with Swiper.js)
     -------------------------------------------------------------------------- */
  if (typeof Swiper !== 'undefined' && document.querySelector('.heroSwiper')) {
    const heroSwiper = new Swiper('.heroSwiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      speed: 900,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.hero-next-btn',
        prevEl: '.hero-prev-btn',
      },
      pagination: {
        el: '.hero-pagination',
        clickable: true,
      },
    });
  }


  /* --------------------------------------------------------------------------
     4.1 SECTOR SWITCHER (Swiper Auto-Loop - Exactly 3 Visible Slides)
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
  const contactForm = document.querySelector('form[data-ajax-form]') || document.getElementById('contactForm');
  const formMessage = contactForm?.querySelector('[data-form-message]') || document.getElementById('formSuccessMsg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = contactForm.querySelector('[name="name"]') || document.getElementById('formName');
      const phoneInput = contactForm.querySelector('[name="phone"]') || document.getElementById('formPhone');
      const emailInput = contactForm.querySelector('[name="email"]') || document.getElementById('formEmail');

      let isValid = true;
      if (nameInput && nameInput.value.trim().length < 2) isValid = false;
      if (emailInput && !emailInput.value.includes('@')) isValid = false;

      if (isValid) {
        contactForm.reset();
        if (formMessage) {
          formMessage.innerHTML = '<div class="mt-5 p-4 rounded-xl bg-[#287B3F] text-white text-center font-bold text-base shadow-md animate-fade-in">✨ تم إرسال رسالتك بنجاح! سيتواصل معك أحد مستشارينا في أقرب وقت.</div>';
          formMessage.removeAttribute('hidden');
          formMessage.classList.remove('hidden');
          setTimeout(() => {
            formMessage.setAttribute('hidden', '');
            formMessage.classList.add('hidden');
            formMessage.innerHTML = '';
          }, 6000);
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
