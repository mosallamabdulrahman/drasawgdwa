const fs = require('fs');
const path = require('path');

const orderStudyPath = path.join(__dirname, '../order-study.html');
let content = fs.readFileSync(orderStudyPath, 'utf8');

// ============================================================================
// 1. UPDATE BADGES IN SECTION 3 (خبرة أكثر من 7 سنوات)
// Minimal padding on badge boxes, enlarged outline SVG inside (w-8 h-8 sm:w-10 sm:h-10)
// ============================================================================
const oldBadgesRegex = /<!-- 4 Badges in a Row matching user image - enlarged SVGs -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- LEFT COLUMN/;

const newBadgesContent = `<!-- 4 Badges in a Row matching user image - reduced box padding, enlarged outline SVGs -->
              <div class="flex items-center gap-3 pt-3">
                <!-- Badge 1: Document/Certificate -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="معتمد"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <!-- Badge 2: Target / Bullseye -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="دقة الاستهداف"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" />
                  </svg>
                </div>
                <!-- Badge 3: Specialist / Consultant -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="فريق استشاري"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <!-- Badge 4: Security / Shield Quality -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="معايير الأمان"
                >
                  <svg
                    class="w-8 h-8 sm:w-10 sm:h-10 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- LEFT COLUMN`;

content = content.replace(oldBadgesRegex, newBadgesContent);

// ============================================================================
// 2. UPDATE SECTION 5 (تواصل معنا & وسائل الدفع)
// - Reduced section padding (py-6 sm:py-8)
// - Enlarged "تواصل معنا" icon badge, title, and text
// - 4 cards top row (mada, visa, mastercard, paypal), 2 cards bottom row (alrajhi, riyad-bank) taking full width
// ============================================================================
const paymentsSectionRegex = /<!-- ={10,}\s*5\.\s*SECTION:\s*تواصل معنا & وسائل الدفع[\s\S]*?<\/section>/;

const newPaymentsSection = `<!-- ==========================================================================
         5. SECTION: تواصل معنا & وسائل الدفع (PAYMENTS & CONTACT)
         ========================================================================== -->
      <section class="py-6 sm:py-8 bg-[#F8FAF9]">
        <div class="max-w-5xl mx-auto px-4 md:px-8">
          <!-- Main White Card Container (Dual Columns) -->
          <div
            class="bg-white rounded-3xl p-5 sm:p-7 md:p-8 shadow-soft border border-slate-100"
          >
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <!-- RIGHT SIDE (in RTL): تواصل معنا (~ 5 cols) - Enlarged icon & typography -->
              <div
                class="md:col-span-5 text-center flex flex-col items-center justify-center space-y-3.5 md:border-l md:border-slate-100 md:pl-8"
              >
                <!-- Circular Icon Badge (Enlarged) -->
                <div
                  class="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#EAF5EF] border-2 border-[#107A48]/30 text-[#107A48] flex items-center justify-center shadow-sm mb-1"
                >
                  <svg
                    class="w-10 h-10 sm:w-12 sm:h-12 stroke-current stroke-[2]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>

                <h3
                  class="text-2xl sm:text-3xl font-heading font-black text-slate-900"
                >
                  تواصل معنا
                </h3>

                <p
                  class="text-sm sm:text-base text-slate-700 font-bold leading-relaxed max-w-sm"
                >
                  يسعدنا تلقي استفساراتكم والرد عليها في أي وقت، فريقنا جاهز
                  لمساعدتكم في كل خطوة.
                </p>
              </div>

              <!-- LEFT SIDE (in RTL): وسائل الدفع (~ 7 cols) 4 Top / 2 Bottom -->
              <div class="md:col-span-7 text-center">
                <h3
                  class="text-xl sm:text-2xl font-heading font-black text-slate-900 mb-5 sm:mb-6"
                >
                  وسائل الدفع
                </h3>

                <!-- Payment Logos Grid: 4 Top / 2 Wide Bottom taking full width -->
                <div
                  class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto"
                >
                  <!-- 1. مدى mada -->
                  <div
                    class="col-span-1 h-14 sm:h-16 px-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/mada.svg"
                      alt="مدى - mada"
                      class="h-7 sm:h-8 max-w-[85%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- 2. فيزا VISA -->
                  <div
                    class="col-span-1 h-14 sm:h-16 px-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/visa.svg"
                      alt="فيزا - VISA"
                      class="h-7 sm:h-8 max-w-[85%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- 3. ماستركارد Mastercard -->
                  <div
                    class="col-span-1 h-14 sm:h-16 px-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/mastercard.svg"
                      alt="ماستركارد - Mastercard"
                      class="h-8 sm:h-9 max-w-[75%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- 4. بايبال PayPal -->
                  <div
                    class="col-span-1 h-14 sm:h-16 px-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/paypal.svg"
                      alt="بايبال - PayPal"
                      class="h-7 sm:h-8 max-w-[85%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- 5. مصرف الراجحي Al Rajhi Bank (Takes 2 cols = half of full width) -->
                  <div
                    class="col-span-2 sm:col-span-2 h-14 sm:h-16 px-4 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/alrajhi.svg"
                      alt="مصرف الراجحي - Al Rajhi Bank"
                      class="h-8 sm:h-9 max-w-[85%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <!-- 6. بنك الرياض Riyad Bank (Takes 2 cols = half of full width) -->
                  <div
                    class="col-span-2 sm:col-span-2 h-14 sm:h-16 px-4 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                  >
                    <img
                      src="./assets/svgs/payments-ways/riyad-bank.svg"
                      alt="بنك الرياض - Riyad Bank"
                      class="h-8 sm:h-9 max-w-[85%] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SQUARE SOCIAL MEDIA ICONS ROW (Facebook, Instagram, WhatsApp, LinkedIn only) -->
          <div
            class="flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8"
          >
            <!-- WhatsApp -->
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all"
              aria-label="واتساب"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.62C9.36 7.62 9.08 7.69 8.84 7.94C8.6 8.2 7.92 8.84 7.92 10.14C7.92 11.44 8.87 12.69 9.0 12.86C9.14 13.04 10.84 15.65 13.45 16.77C14.07 17.04 14.56 17.2 14.93 17.32C15.56 17.52 16.13 17.49 16.58 17.42C17.09 17.35 18.14 16.78 18.36 16.17C18.58 15.55 18.58 15.03 18.51 14.92C18.45 14.81 18.28 14.74 18.03 14.61C17.77 14.49 16.53 13.88 16.3 13.79C16.07 13.71 15.9 13.67 15.73 13.92C15.56 14.18 15.08 14.74 14.93 14.92C14.78 15.09 14.63 15.11 14.38 14.99C14.12 14.86 13.29 14.59 12.3 13.71C11.53 13.02 11.01 12.18 10.86 11.92C10.71 11.67 10.84 11.53 10.97 11.4C11.09 11.28 11.23 11.09 11.36 10.94C11.5 10.79 11.54 10.68 11.63 10.51C11.71 10.34 11.67 10.19 11.61 10.06C11.54 9.94 11.03 8.68 10.82 8.16C10.61 7.66 10.4 7.73 10.24 7.72C10.09 7.71 9.92 7.62 9.53 7.62Z"
                />
              </svg>
            </a>

            <!-- Facebook -->
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#4267B2] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all"
              aria-label="فيسبوك"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E1306C] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all"
              aria-label="إنستغرام"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077B5] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all"
              aria-label="لينكد إن"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>`;

content = content.replace(paymentsSectionRegex, newPaymentsSection);

// ============================================================================
// 3. UPDATE FUNDING PARTNERS SECTION (Section 6)
// Make logo inside each card prominently scaled up without enlarging the box
// Box stays h-24 sm:h-28, image gets h-20 sm:h-24 w-full max-w-[95%] object-contain scale-125 sm:scale-135
// ============================================================================
content = content.replace(
  /<div\s+class="bg-white rounded-2xl border border-gray-200\/90 p-2 sm:p-2\.5 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group">\s*<img\s+src="([^"]+)"\s+onerror="([^"]+)"\s+alt="([^"]+)"\s+class="[^"]+"\s+loading="lazy"\s*\/>\s*<\/div>/g,
  `<div class="bg-white rounded-2xl border border-gray-200/90 p-1.5 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group overflow-hidden">
                    <img
                      src="$1"
                      onerror="$2"
                      alt="$3"
                      class="h-20 sm:h-24 w-full max-w-[95%] object-contain scale-125 sm:scale-135 transition-transform duration-300 group-hover:scale-145"
                      loading="lazy"
                    />
                  </div>`
);

fs.writeFileSync(orderStudyPath, content, 'utf8');
console.log('Successfully updated order-study.html!');
