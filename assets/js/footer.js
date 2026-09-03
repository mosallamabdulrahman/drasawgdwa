function renderFooter() {
  const footerContainer = document.getElementById("footer-file");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-[#1c582d] text-white pt-12 border-t-4 border-brand-600">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <a href="index.html" class="inline-block mb-2">
              <img src="./assets/images/DRASA.webp" alt="دراسة وجدوى" class="h-14 w-auto" />
            </a>
            <p class="text-sm text-white/85 leading-relaxed">
              شركة دراسة وجدوى من الشركات الرائدة في إعداد دراسات الجدوى الاقتصادية وخطط الأعمال، بخبرة تمتد منذ عام 2003.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-orange">
              تواصل معنا
            </h3>
            <div class="space-y-4 text-sm text-white/90">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#61ce70] shrink-0 mt-0.5 shadow-xs">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div class="space-y-1 text-xs sm:text-sm font-medium">
                  <a href="mailto:info@drasawgdwa.com" class="block hover:text-orange transition-colors">info@drasawgdwa.com</a>
                  <a href="mailto:support@drasawgdwa.com" class="block hover:text-orange transition-colors">support@drasawgdwa.com</a>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#61ce70] shrink-0 shadow-xs">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.12.45 2.33.69 3.48.69a1 1 0 011 1v3.5a1 1 0 01-1 1A19.93 19.93 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.15.24 2.36.69 3.48a1 1 0 01-.21 1.11l-2.36 2.2z" />
                  </svg>
                </div>
                <a href="tel:+966534401649" class="hover:text-orange transition-colors dir-ltr font-bold text-xs sm:text-sm">+966-53-440-1649</a>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#61ce70] shrink-0 mt-0.5 shadow-xs">
                  <svg class="w-5 h-5 fill-current -rotate-45" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
                <p class="leading-relaxed text-xs text-white/85 pt-0.5">
                  فرع المملكة العربية السعودية- جازان - حي الملك فهد - 3 شارع الأمير محمد بن عبد العزيز
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-orange">
              القائمة البريدية
            </h3>
            <form class="relative flex items-center bg-white rounded-xl p-1 shadow-md focus-within:ring-2 focus-within:ring-orange transition-all mb-4" onsubmit="event.preventDefault(); alert('تم الاشتراك بنجاح في القائمة البريدية'); this.reset();">
              <input type="email" required placeholder="بريدك الالكتروني" class="w-full bg-transparent pr-3.5 pl-2 py-2 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none text-right font-medium" />
              <button type="submit" class="bg-[#f5821f] hover:bg-[#e07316] text-white flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all shrink-0 cursor-pointer group">
                <span>ارسل</span>
                <svg class="w-3.5 h-3.5 transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>

            <div class="flex items-center gap-2.5">
              <a href="#" aria-label="لينكد إن" class="w-9 h-9 rounded-xl bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 hover:scale-110 hover:shadow-md transition-all shadow-xs">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" aria-label="تويتر" class="w-9 h-9 rounded-xl bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 hover:scale-110 hover:shadow-md transition-all shadow-xs">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="فيسبوك" class="w-9 h-9 rounded-xl bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 hover:scale-110 hover:shadow-md transition-all shadow-xs">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold text-white mb-4 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-orange">
              المدفوعات المتاحة
            </h3>
            <div class="grid grid-cols-3 gap-2">
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="Maestro">
                <img src="./assets/svgs/payments-ways/maestro.svg" alt="Maestro" class="h-5 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="Payoneer">
                <img src="./assets/svgs/payments-ways/payoneer.svg" alt="Payoneer" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="PayPal">
                <img src="./assets/svgs/payments-ways/paypal.svg" alt="PayPal" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="بنك الرياض">
                <img src="./assets/svgs/payments-ways/riyad-bank.svg" alt="بنك الرياض" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="البنك الأهلي المصري">
                <img src="./assets/svgs/payments-ways/nbe.svg" alt="البنك الأهلي المصري" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="مصرف الراجحي">
                <img src="./assets/svgs/payments-ways/alrajhi.svg" alt="مصرف الراجحي" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="Visa Electron">
                <img src="./assets/svgs/payments-ways/visa-electron.svg" alt="Visa Electron" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="Skrill">
                <img src="./assets/svgs/payments-ways/skrill.svg" alt="Skrill" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
              <div class="bg-white p-1.5 rounded-lg flex items-center justify-center h-9" title="Western Union">
                <img src="./assets/svgs/payments-ways/western-union.svg" alt="Western Union" class="h-8 max-w-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 py-4 text-center text-xs text-white/70">
          دراسة وجدوى © 2026 جميع الحقوق محفوظة
        </div>
      </div>
    </footer>

    <a href="https://wa.me/966534401649?text=مرحبًا،%20أريد%20الاستفسار%20عن%20دراسة%20جدوى" target="_blank" class="whatsapp-float fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-xl z-50 hover:scale-105 transition-transform group" aria-label="واتساب">
      <div class="whatsapp-pulse absolute -inset-1.5 rounded-full border-2 border-[#25D366] animate-pulse-ring group-hover:animate-none"></div>
      <svg class="w-8 h-8 fill-current relative z-10" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>

    <button class="scroll-top-btn" aria-label="العودة لأعلى الصفحة">
      <svg class="scroll-progress-svg" viewBox="0 0 56 56">
        <circle class="progress-ring-track" cx="28" cy="28" r="25"></circle>
        <circle class="progress-ring-circle" cx="28" cy="28" r="25"></circle>
      </svg>
      <svg class="w-6 h-6 stroke-current relative z-10" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>

    <div id="searchModal" class="search-modal fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300 flex items-start justify-center p-3 sm:p-6 md:p-10 overflow-y-auto" role="dialog" aria-modal="true" aria-label="البحث في دراسة وجدوى">
      <div class="search-modal-container bg-[#f8faf8] border border-slate-200 shadow-2xl rounded-2xl sm:rounded-3xl w-full max-w-2xl overflow-hidden transition-all duration-300 transform scale-95 my-auto">
        <div class="p-4 sm:p-5 border-b border-slate-200/80 bg-white relative">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-brand-50 text-brand-900 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" id="siteSearchInput" class="search-input w-full bg-transparent text-slate-800 text-base sm:text-lg placeholder-slate-400 focus:outline-none font-medium text-right" placeholder="ابحث عن خدمة، دراسة جدوى، قطاع، أو جهة تمويل..." autocomplete="off" />
            <button id="searchClearBtn" class="text-slate-400 hover:text-slate-600 transition-colors p-1.5 hidden rounded-full hover:bg-slate-100" aria-label="مسح البحث">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button class="search-close-btn w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer" aria-label="إغلاق">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pt-1">
            <button class="search-category-pill active" data-cat="all">الكل</button>
            <button class="search-category-pill" data-cat="services">الخدمات</button>
            <button class="search-category-pill" data-cat="sectors">القطاعات</button>
            <button class="search-category-pill" data-cat="funding">جهات التمويل</button>
            <button class="search-category-pill" data-cat="faq">الأسئلة الشائعة</button>
            <button class="search-category-pill" data-cat="blog">المقالات</button>
          </div>
        </div>

        <div id="searchResultsList" class="p-4 sm:p-6 max-h-[55vh] overflow-y-auto space-y-2.5 bg-[#f8faf8]">
          <div id="searchTrendingContainer" class="py-1">
            <span class="text-xs text-brand-900 font-bold tracking-wider block mb-3">الأكثر بحثاً وتصفحاً</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button class="trending-search-item flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-brand-50/70 border border-slate-200 hover:border-brand-200 shadow-xs transition-all text-right group cursor-pointer" data-query="دراسة جدوى زراعية">
                <span class="w-7 h-7 rounded-lg bg-brand-50 text-brand-900 group-hover:bg-brand-900 group-hover:text-white flex items-center justify-center text-xs transition-colors">
                  <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span class="text-sm font-semibold text-slate-700 group-hover:text-brand-900">دراسة جدوى زراعية</span>
              </button>

              <button class="trending-search-item flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-brand-50/70 border border-slate-200 hover:border-brand-200 shadow-xs transition-all text-right group cursor-pointer" data-query="بنك التنمية الاجتماعية">
                <span class="w-7 h-7 rounded-lg bg-brand-50 text-brand-900 group-hover:bg-brand-900 group-hover:text-white flex items-center justify-center text-xs transition-colors">
                  <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span class="text-sm font-semibold text-slate-700 group-hover:text-brand-900">تمويل بنك التنمية الاجتماعية</span>
              </button>

              <button class="trending-search-item flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-brand-50/70 border border-slate-200 hover:border-brand-200 shadow-xs transition-all text-right group cursor-pointer" data-query="القطاع السياحي">
                <span class="w-7 h-7 rounded-lg bg-brand-50 text-brand-900 group-hover:bg-brand-900 group-hover:text-white flex items-center justify-center text-xs transition-colors">
                  <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span class="text-sm font-semibold text-slate-700 group-hover:text-brand-900">مشاريع القطاع السياحي</span>
              </button>

              <button class="trending-search-item flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-brand-50/70 border border-slate-200 hover:border-brand-200 shadow-xs transition-all text-right group cursor-pointer" data-query="تحليل مالي">
                <span class="w-7 h-7 rounded-lg bg-brand-50 text-brand-900 group-hover:bg-brand-900 group-hover:text-white flex items-center justify-center text-xs transition-colors">
                  <svg class="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <span class="text-sm font-semibold text-slate-700 group-hover:text-brand-900">التحليل والتقييم المالي</span>
              </button>
            </div>
          </div>
        </div>

        <div class="px-6 py-3 bg-white border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
          <span class="flex items-center gap-2">
            <kbd class="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700 text-[10px]">Esc</kbd>
            للإغلاق
          </span>
          <span class="flex items-center gap-2 text-slate-600">
            البحث في أكثر من <strong class="text-brand-900">30+</strong> خدمة ودراسة وقطاع
          </span>
        </div>
      </div>
    </div>
  `;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderFooter);
} else {
  renderFooter();
}

