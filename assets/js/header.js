function renderHeader() {
  const headerContainer = document.getElementById("header-file");
  if (!headerContainer) return;

  const path = window.location.pathname;
  const page = path.split("/").pop().toLowerCase() || "index.html";

  const isIndex = page === "" || page === "index.html";
  const isAbout = page.includes("about");
  const isFeasibility =
    page.includes("feasibility") || page.includes("templateforstudy");
  const isPlans = page.includes("plans");
  const isPortfolio = page.includes("portfoilo") || page.includes("portfolio");
  const isBlog = page.includes("blog");
  const isContact = page.includes("contact");
  const isOrderStudy = page.includes("order-study");

  headerContainer.innerHTML = `
    <!-- 1. TOP BAR -->
    <aside class="top-bar bg-brand-600 text-white py-2.5 text-xs md:text-sm border-b border-white/10 transition-transform duration-300 relative z-50">
      <div class="max-w-7xl mx-auto px-4 md:px-8 flex justify-center md:justify-between items-center">
        <div class="flex items-center justify-center flex-wrap gap-3 sm:gap-5 text-white/90 text-xs sm:text-sm font-medium">
          <a href="faq.html" class="hover:text-orange transition-colors">الأسئلة الشائعة</a>
          <a href="terms.html" class="hover:text-orange transition-colors">شروط الاستخدام</a>
          <a href="privacy-policy.html" class="hover:text-orange transition-colors">سياسة الخصوصية</a>
          <span class="text-white/30 hidden sm:inline">|</span>
          <a href="order-study.html" class="hover:text-orange transition-colors ${isOrderStudy ? "underline font-bold" : ""}">اطلب دراسة جدوى</a>
        </div>

        <div class="hidden md:flex items-center gap-3.5 text-white/90 text-sm">
          <a href="https://wa.me/966534401649" target="_blank" aria-label="واتساب" class="hover:text-orange transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          <a href="#" aria-label="لينكد إن" class="hover:text-orange transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" aria-label="إنستغرام" class="hover:text-orange transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="تويتر" class="hover:text-orange transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>

    <!-- 2. MAIN STICKY HEADER -->
    <div class="header-wrapper sticky top-0 z-40 w-full">
      <header class="site-header bg-brand-900 border-b border-gray-200 h-20 sm:h-22 transition-all duration-300 flex items-center py-2.5 sm:py-3">
        <div class="max-w-7xl mx-auto px-4 md:px-8 w-full flex items-center justify-between">
          <!-- Logo -->
          <a href="index.html" class="flex items-center gap-2 group shrink-0" aria-label="دراسة وجدوى الصفحة الرئيسية">
            <img src="./assets/images/DRASA.webp" alt="دراسة وجدوى للاستشارات الاقتصادية" class="h-10 sm:h-12 md:h-14 w-auto object-contain" />
          </a>

          <!-- Desktop Navigation Bar (Visible on Desktop >= lg) -->
          <nav class="hidden lg:flex items-center gap-6 xl:gap-7 font-bold text-base text-white" aria-label="القائمة الرئيسية">
            <a href="index.html" class="nav-link-item ${isIndex ? "active font-bold text-orange" : ""} py-1 transition-colors">الرئيسية</a>
            <a href="about-us.html" class="nav-link-item ${isAbout ? "active font-bold text-orange" : ""} py-1 transition-colors">عن الشركة</a>

            <!-- Dropdown Menu Item: دراسات الجدوى (Hover-triggered on Desktop) -->
            <div class="nav-has-dropdown relative group py-2">
              <a
                href="feasibility-studies.html"
                class="nav-link-item ${isFeasibility ? "active font-bold text-orange" : ""} py-1 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>دراسات الجدوى</span>
                <svg class="dropdown-chevron w-3.5 h-3.5 fill-none stroke-current transform transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <!-- Desktop Dropdown Submenu (Opens on Hover) -->
              <div
                class="nav-dropdown-menu absolute top-full right-0 pt-2.5 w-[340px] sm:w-[360px] invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50 pointer-events-none group-hover:pointer-events-auto"
              >
                <div class="bg-white rounded-2xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.2)] border border-slate-100 p-2.5 overflow-hidden text-right">
                  <div class="space-y-1">
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى مصنع حديد</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى البيوت المحمية والزراعة المائية</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى مستشفى تخصصي ومراكز طبية</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى منصة وتطبيق تجارة إلكترونية</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى منتجع سياحي وفندقي فاخر</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                    <a href="templateforstudy.html" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
                      <span>دراسة جدوى مشروع استزراع سمكي مكثف</span>
                      <svg class="w-[18px] h-[18px] text-brand-900 opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                  </div>

                  <div class="pt-2 mt-1.5 border-t border-slate-100">
                    <a href="feasibility-studies.html" class="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-black text-orange hover:bg-orange/10 transition-colors text-center group/all">
                      <span>عرض كافة دراسات الجدوى (30+)</span>
                      <svg class="w-[18px] h-[18px] text-orange transform transition-transform group-hover/all:-translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a href="plans-work.html" class="nav-link-item ${isPlans ? "active font-bold text-orange" : ""} py-1 transition-colors">خطط الأعمال</a>
            <a href="portfoilo.html" class="nav-link-item ${isPortfolio ? "active font-bold text-orange" : ""} py-1 transition-colors">أعمالنا</a>
            <a href="index.html#funding" class="nav-link-item py-1 transition-colors">جهات التمويل</a>
            <a href="blog.html" class="nav-link-item ${isBlog ? "active font-bold text-orange" : ""} py-1 transition-colors">المدونة</a>
            <a href="contact.html" class="nav-link-item ${isContact ? "active font-bold text-orange" : ""} py-1 transition-colors">تواصل معنا</a>
          </nav>

          <!-- Left Side Action Controls -->
          <div class="flex items-center gap-2.5 sm:gap-3.5">
            <!-- Search Trigger Button -->
            <button class="search-trigger w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-50 text-brand-900 hover:bg-brand-900 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0" aria-label="البحث">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- CTA Button (Visible on sm screens and up) -->
            <a href="order-study.html" class="hidden sm:inline-flex items-center justify-center bg-orange hover:bg-orange-hover text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 shrink-0">
              اطلب دراستك
            </a>

            <!-- Mobile & Tablet Hamburger Button (Visible on < lg: Tablet & Mobile) -->
            <button
              id="mobileMenuBtn"
              class="mobile-menu-btn lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0"
              aria-label="فتح القائمة الرئيسية"
              aria-expanded="false"
              aria-controls="mobileMenuDrawer"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>

    <!-- 3. MOBILE & TABLET OFF-CANVAS BACKDROP OVERLAY -->
    <div
      id="mobileMenuOverlay"
      class="mobile-overlay fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-[95] opacity-0 pointer-events-none transition-opacity duration-300"
      aria-hidden="true"
    ></div>

    <!-- 4. MOBILE & TABLET OFF-CANVAS DRAWER MENU (Opens from Left) -->
    <aside
      id="mobileMenuDrawer"
      class="mobile-drawer fixed top-0 left-0 bottom-0 z-[100] w-[310px] sm:w-[350px] max-w-[85vw] bg-white text-slate-800 shadow-2xl flex flex-col -translate-x-full transition-transform duration-300 ease-out"
      aria-label="قائمة التنقل للأجهزة الذكية"
      role="dialog"
      aria-modal="true"
      dir="rtl"
    >
      <!-- Drawer Header -->
      <div class="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-white">
        <a href="index.html" class="flex items-center gap-2" aria-label="دراسة وجدوى">
          <img src="./assets/images/logo-form.png" alt="دراسة وجدوى للاستشارات الاقتصادية" class="h-10 sm:h-11 w-auto object-contain" />
        </a>
        <button
          id="mobileMenuCloseBtn"
          class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="إغلاق القائمة"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Drawer Body (Scrollable Nav Links) -->
      <div class="flex-1 overflow-y-auto py-4 px-4 space-y-1.5 text-right font-medium">
        <a
          href="index.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isIndex ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          الرئيسية
        </a>

        <a
          href="order-study.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isOrderStudy ? "bg-brand-50 text-brand-900 font-bold" : "text-orange font-bold hover:bg-orange/10"} transition-colors"
        >
          اطلب دراسة جدوى
        </a>

        <a
          href="about-us.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isAbout ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          عن الشركة
        </a>

        <!-- Mobile Submenu Accordion: دراسات الجدوى -->
        <div class="mobile-submenu-container rounded-xl overflow-hidden ${isFeasibility ? "bg-brand-50/60" : ""}">
          <div class="flex items-center justify-between px-4 py-3 rounded-xl ${isFeasibility ? "text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors">
            <a href="feasibility-studies.html" class="flex-1 font-bold">
              دراسات الجدوى
            </a>
            <!-- Click Button to toggle Submenu -->
            <button
              id="mobileSubmenuToggle"
              type="button"
              class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-brand-100 text-slate-700 hover:text-brand-900 flex items-center justify-center transition-all cursor-pointer"
              aria-expanded="false"
              aria-label="عرض أقسام دراسات الجدوى"
            >
              <svg id="mobileSubmenuChevron" class="w-4 h-4 transform transition-transform duration-200 stroke-current" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <!-- 6 Submenu Links + View All (No Border, No Shadow, SVG Arrows) -->
          <div id="mobileSubmenuList" class="hidden px-1.5 pb-2 pt-1 space-y-1 bg-slate-50/80 rounded-2xl my-1.5">
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى مصنع حديد</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى البيوت المحمية والزراعة المائية</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى مستشفى تخصصي ومراكز طبية</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى منصة وتطبيق تجارة إلكترونية</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى منتجع سياحي وفندقي فاخر</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <a href="templateforstudy.html" class="mobile-nav-link flex items-center justify-between px-3.5 py-2.5  text-sm font-bold text-slate-800 hover:text-brand-900 hover:bg-brand-50 transition-colors group/item">
              <span>دراسة جدوى مشروع استزراع سمكي مكثف</span>
              <svg class="w-[18px] h-[18px] text-brand-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <div class="pt-2 mt-1 border-t border-slate-200/60">
              <a href="feasibility-studies.html" class="mobile-nav-link flex items-center justify-center gap-2 px-3.5 py-2.5  text-sm font-black text-orange hover:bg-orange/10 transition-colors text-center">
                <span>عرض كافة دراسات الجدوى (30+)</span>
                <svg class="w-[18px] h-[18px] text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <a
          href="plans-work.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl  ${isPlans ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          خطط الأعمال
        </a>

        <a
          href="portfoilo.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isPortfolio ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          أعمالنا
        </a>

        <a
          href="index.html#funding"
          class="mobile-nav-link block px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-brand-900 transition-colors"
        >
          جهات التمويل
        </a>

        <a
          href="blog.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isBlog ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          المدونة
        </a>

        <a
          href="contact.html"
          class="mobile-nav-link block px-4 py-3 rounded-xl ${isContact ? "bg-brand-50 text-brand-900 font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-900"} transition-colors"
        >
          تواصل معنا
        </a>
      </div>

      <!-- Drawer Footer -->
      <div class="p-4 border-t border-slate-100 bg-[#f8faf8] space-y-3">
        <a
          href="order-study.html"
          class="w-full flex items-center justify-center bg-orange hover:bg-orange-hover text-white font-black text-base py-3.5 rounded-2xl shadow-md transition-all text-center active:scale-[0.98]"
        >
          اطلب دراستك الآن
        </a>

        <div class="grid grid-cols-2 gap-2.5 pt-1">
          <a
            href="tel:+966534401649"
            class="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-white border border-slate-200 shadow-xs text-brand-900 hover:bg-brand-50 hover:border-brand-300 font-bold text-sm sm:text-base transition-all active:scale-95"
          >
            <svg class="w-5 h-5 fill-current text-brand-900 shrink-0" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.69 3.48.69a1 1 0 011 1v3.5a1 1 0 01-1 1A19.93 19.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.15.24 2.36.69 3.48a1 1 0 01-.21 1.11l-2.36 2.2z"/>
            </svg>
            <span>اتصل بنا</span>
          </a>
          <a
            href="https://wa.me/966534401649"
            target="_blank"
            class="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 shadow-xs text-[#128C7E] hover:bg-[#25D366]/20 font-bold text-sm sm:text-base transition-all active:scale-95"
          >
            <svg class="w-5 h-5 fill-current text-[#25D366] shrink-0" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>واتساب</span>
          </a>
        </div>
      </div>
    </aside>
  `;

  // Initialize interactive behaviors for the header and mobile menu
  initHeaderInteractions();
}

function initHeaderInteractions() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("mobileMenuCloseBtn");
  const drawer = document.getElementById("mobileMenuDrawer");
  const overlay = document.getElementById("mobileMenuOverlay");
  const submenuToggle = document.getElementById("mobileSubmenuToggle");
  const submenuList = document.getElementById("mobileSubmenuList");
  const submenuChevron = document.getElementById("mobileSubmenuChevron");

  if (!openBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.remove("-translate-x-full");
    drawer.classList.add("translate-x-0");
    drawer.classList.add("is-open");
    overlay.classList.remove("opacity-0", "pointer-events-none");
    overlay.classList.add("opacity-100", "pointer-events-auto");
    overlay.classList.add("is-open");
    document.body.classList.add("overflow-hidden");
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("translate-x-0");
    drawer.classList.remove("is-open");
    drawer.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-100", "pointer-events-auto");
    overlay.classList.remove("is-open");
    overlay.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.onclick = openDrawer;
  if (closeBtn) closeBtn.onclick = closeDrawer;
  overlay.onclick = closeDrawer;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });

  // Mobile Submenu Click Toggle
  if (submenuToggle && submenuList) {
    submenuToggle.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = submenuToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        submenuList.classList.add("hidden");
        submenuToggle.setAttribute("aria-expanded", "false");
        if (submenuChevron) submenuChevron.classList.remove("rotate-180");
      } else {
        submenuList.classList.remove("hidden");
        submenuToggle.setAttribute("aria-expanded", "true");
        if (submenuChevron) submenuChevron.classList.add("rotate-180");
      }
    };
  }

  // Close drawer on click of navigation links
  const links = drawer.querySelectorAll(".mobile-nav-link");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      closeDrawer();
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderHeader);
} else {
  renderHeader();
}
