const fs = require('fs');

// --- 1. BUILD STATS SECTION (Image 3) ---
// Note: Transparent/off-white section, right side is white card, left side is 4 green stat cards (#EAF5EF)
const statsSectionHtml = `      <!-- ==========================================================================
         3. SECTION: خبرة أكثر من 7 سنوات (STATS & HIGHLIGHTS)
         Pixel-perfect match to Image 3:
         - No full-section white background
         - Standalone white card on the right
         - 4 individual #EAF5EF stat cards directly on section background on the left
         ========================================================================== -->
      <section class="py-10 sm:py-14 bg-[#F8FAF9]">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <!-- RIGHT COLUMN (in RTL): 7 cols - Standalone White Card -->
            <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-100/90 space-y-4 sm:space-y-5 text-right">
              <h2 class="text-2xl sm:text-3xl lg:text-3xl font-heading font-black text-slate-900 leading-tight">
                خبرة أكثر من 7 سنوات في إعداد دراسات الجدوى
              </h2>
              
              <p class="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                خبرة تزيد عن 7 سنوات في إعداد دراسات الجدوى المتكاملة، نعتمد على منهجيات علمية وخبرات عميقة لتقديم تحليلات دقيقة.
              </p>

              <!-- 4 Bullet points with green circular checkmarks matching user image -->
              <ul class="space-y-2.5 pt-1 text-xs sm:text-sm font-bold text-slate-700">
                <li class="flex items-center gap-2.5">
                  <span class="w-5 h-5 rounded-full bg-[#EAF5EF] text-[#107A48] flex items-center justify-center shrink-0 border border-[#107A48]/30">
                    <svg class="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>خبرة من المعامل لنمو من العملاء ضمن الجودة</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-5 h-5 rounded-full bg-[#EAF5EF] text-[#107A48] flex items-center justify-center shrink-0 border border-[#107A48]/30">
                    <svg class="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>مرونة مع كافة التخصص في نماذج الفحص</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-5 h-5 rounded-full bg-[#EAF5EF] text-[#107A48] flex items-center justify-center shrink-0 border border-[#107A48]/30">
                    <svg class="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>تميز عبر الفحص، أدق مراجعة من جهات المعقد</span>
                </li>
                <li class="flex items-center gap-2.5">
                  <span class="w-5 h-5 rounded-full bg-[#EAF5EF] text-[#107A48] flex items-center justify-center shrink-0 border border-[#107A48]/30">
                    <svg class="w-3.5 h-3.5 stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>جودة من العينة العلم من الضمان المستدامة</span>
                </li>
              </ul>

              <!-- 4 Circular Badges in a Row matching user image -->
              <div class="flex items-center gap-3 pt-3">
                <!-- Badge 1: Document/Certificate -->
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF5EF] border border-[#107A48]/25 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform" title="معتمد">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <!-- Badge 2: Target / Bullseye -->
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF5EF] border border-[#107A48]/25 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform" title="دقة الاستهداف">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                  </svg>
                </div>
                <!-- Badge 3: Specialist / Consultant -->
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF5EF] border border-[#107A48]/25 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform" title="فريق استشاري">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <!-- Badge 4: Security / Shield Quality -->
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EAF5EF] border border-[#107A48]/25 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform" title="معايير الأمان">
                  <svg class="w-6 h-6 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- LEFT COLUMN (in RTL): 5 cols - 2x2 Stat Cards Grid sitting directly on section bg -->
            <div class="lg:col-span-5">
              <div class="grid grid-cols-2 gap-4 sm:gap-5 text-center">
                
                <!-- Stat 1 (Top Right in RTL): 6742 عملاء راضون -->
                <div class="bg-[#EAF5EF] border border-[#D5EADF]/70 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div class="text-[#107A48] mb-2.5 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-800 my-1">
                    6742
                  </div>
                  <div class="text-xs sm:text-sm font-bold text-slate-700">
                    عملاء راضون
                  </div>
                </div>

                <!-- Stat 2 (Top Left in RTL): 32 مشروعات ناجحة -->
                <div class="bg-[#EAF5EF] border border-[#D5EADF]/70 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div class="text-[#107A48] mb-2.5 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-800 my-1">
                    32
                  </div>
                  <div class="text-xs sm:text-sm font-bold text-slate-700">
                    مشروعات ناجحة
                  </div>
                </div>

                <!-- Stat 3 (Bottom Right in RTL): 60 ساعات استشارية -->
                <div class="bg-[#EAF5EF] border border-[#D5EADF]/70 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div class="text-[#107A48] mb-2.5 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-800 my-1">
                    60
                  </div>
                  <div class="text-xs sm:text-sm font-bold text-slate-700">
                    ساعات استشارية
                  </div>
                </div>

                <!-- Stat 4 (Bottom Left in RTL): 37 تقارير شاملة -->
                <div class="bg-[#EAF5EF] border border-[#D5EADF]/70 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div class="text-[#107A48] mb-2.5 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div class="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-slate-800 my-1">
                    37
                  </div>
                  <div class="text-xs sm:text-sm font-bold text-slate-700">
                    تقارير شاملة
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>`;

// --- 2. BUILD TIMELINE SECTION WITH CLEAN STANDALONE NUMBERS & ICONS ---
// Audio feedback:
// "الواحد ما يبقاش فيه بوكس يعني إنت ما تحطوش جوة بوكس كدة والبوكس ده يبقى ليه خلفية، لا سيبه عادي كدة لوحده، وبرضو الأيقونة نفس الكلام سيبها عادي لوحدها... وكبر كمان الأيقونة والرقم شوية والخط كمان"

const leftColumnSteps = [
  {
    num: 1,
    title: 'تحديد المشروع',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3"/></svg>`
  },
  {
    num: 2,
    title: 'التواصل معنا',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
  },
  {
    num: 3,
    title: 'دراسة السوق',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`
  },
  {
    num: 6,
    title: 'تسليم الدراسة',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>`
  },
  {
    num: 7,
    title: 'اتخاذ القرار',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`
  }
];

const rightColumnSteps = [
  null, // Row 1 is empty on the right
  {
    num: 2,
    title: 'التواصل معنا',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
  },
  {
    num: 4,
    title: 'المراجعة الفنية',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    num: 6,
    title: 'الدراسة المالية',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    num: 7,
    title: 'اتخاذ القرار',
    icon: `<svg class="w-8 h-8 sm:w-9 sm:h-9 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`
  }
];

function renderLeftCard(s) {
  if (!s) return '';
  return `
    <div class="process-card p-3 sm:p-3.5 px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 group cursor-default w-full">
      <!-- 1. الرقم على اليمين (باتجاه خط المنتصف) - بدون بوكس أو خلفية -->
      <span class="font-black font-heading text-2xl sm:text-3xl text-[#287b3f] shrink-0 select-none">
        ${s.num}
      </span>

      <!-- 2. اسم الخطوة في المنتصف - خط أكبر وأوضح -->
      <div class="flex-1 text-center px-1">
        <h3 class="text-base sm:text-lg lg:text-xl font-bold font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors">
          ${s.title}
        </h3>
      </div>

      <!-- 3. الأيقونة على الشمال - بدون بوكس أو خلفية ومكبرة -->
      <span class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform">
        ${s.icon}
      </span>
    </div>
  `;
}

function renderRightCard(s) {
  if (!s) return '';
  return `
    <div class="process-card p-3 sm:p-3.5 px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 group cursor-default w-full">
      <!-- 1. الأيقونة على اليمين (الجهة الخارجية) - بدون بوكس أو خلفية -->
      <span class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform">
        ${s.icon}
      </span>

      <!-- 2. اسم الخطوة في المنتصف - خط أكبر وأوضح -->
      <div class="flex-1 text-center px-1">
        <h3 class="text-base sm:text-lg lg:text-xl font-bold font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors">
          ${s.title}
        </h3>
      </div>

      <!-- 3. الرقم على الشمال (باتجاه خط المنتصف) - بدون بوكس أو خلفية -->
      <span class="font-black font-heading text-2xl sm:text-3xl text-[#287b3f] shrink-0 select-none">
        ${s.num}
      </span>
    </div>
  `;
}

function renderMobileCard(s) {
  if (!s) return '';
  return `
    <div class="process-card p-3 sm:p-3.5 px-4 sm:px-5 flex items-center justify-between gap-3 group cursor-default w-full">
      <!-- 1. الرقم على اليمين بدون بوكس -->
      <span class="font-black font-heading text-2xl sm:text-3xl text-[#287b3f] shrink-0 select-none">
        ${s.num}
      </span>

      <!-- 2. اسم الخطوة -->
      <div class="flex-1 text-center px-1">
        <h3 class="text-base sm:text-lg font-bold font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors">
          ${s.title}
        </h3>
      </div>

      <!-- 3. الأيقونة على الشمال بدون بوكس -->
      <span class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform">
        ${s.icon}
      </span>
    </div>
  `;
}

let desktopTimelineRows = '';
for (let i = 0; i < 5; i++) {
  const l = leftColumnSteps[i];
  const r = rightColumnSteps[i];

  desktopTimelineRows += `
            <!-- Row ${i + 1} -->
            <div class="grid grid-cols-2 gap-x-20 sm:gap-x-24 md:gap-x-28 items-center relative py-1">
              
              <!-- Col 1 (Visual Right in RTL) -->
              <div class="relative flex items-center justify-end">
                ${r ? `
                  <div class="w-full max-w-sm">
                    ${renderRightCard(r)}
                  </div>
                  <!-- Connector Line to Center -->
                  <div class="absolute -left-10 sm:-left-12 md:-left-14 w-10 sm:w-12 md:w-14 h-[2px] bg-[#287b3f] pointer-events-none"></div>
                ` : `
                  <!-- Empty top-right space matching user mockup -->
                  <div class="w-full max-w-sm h-14"></div>
                `}
              </div>

              <!-- Center Solid Green Dot on Vertical Line -->
              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div class="process-connector-dot"></div>
              </div>

              <!-- Col 2 (Visual Left in RTL) -->
              <div class="relative flex items-center justify-start">
                <!-- Connector Line to Center -->
                <div class="absolute -right-10 sm:-right-12 md:-right-14 w-10 sm:w-12 md:w-14 h-[2px] bg-[#287b3f] pointer-events-none"></div>
                <div class="w-full max-w-sm">
                  ${renderLeftCard(l)}
                </div>
              </div>

            </div>
  `;
}

const mobileTimelineSteps = [
  leftColumnSteps[0], // 1 تحديد المشروع
  leftColumnSteps[1], // 2 التواصل معنا
  leftColumnSteps[2], // 3 دراسة السوق
  rightColumnSteps[2], // 4 المراجعة الفنية
  rightColumnSteps[3], // 6 الدراسة المالية
  leftColumnSteps[3],  // 6 تسليم الدراسة
  leftColumnSteps[4]   // 7 اتخاذ القرار
];

let mobileTimelineCards = '';
mobileTimelineSteps.forEach((s) => {
  mobileTimelineCards += `
        <div class="w-full">
          ${renderMobileCard(s)}
        </div>
  `;
});

const timelineSectionHtml = `      <!-- ==========================================================================
         4. SECTION: كيف تتم الدراسة داخل دراسة وجدوى؟
         Pixel-Perfect match to User Reference Image:
         - Clean standalone numbers (NO background box)
         - Clean standalone SVG icons (NO background box)
         - Enlarged numbers, icons, and title font
         - Solid green dots centered on the continuous vertical line
         ========================================================================== -->
      <section class="py-10 sm:py-14 bg-[#F8FAF9] relative overflow-hidden" id="process">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          
          <!-- Section Title -->
          <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#0B4D2C]">
              كيف تتم الدراسة داخل دراسة و جدوى؟
            </h2>
            <div class="w-16 h-1 bg-[#107A48] rounded-full mx-auto mt-3"></div>
          </div>

          <!-- Desktop Parallel Timeline (Matching Reference Image) -->
          <div class="hidden md:block relative max-w-4xl mx-auto">
            <!-- Central Vertical Stem Line (Continuous Green Line) -->
            <div class="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[2.5px] bg-[#287b3f] rounded-full z-0"></div>

            <div class="space-y-2 sm:space-y-2.5 relative z-10">
              ${desktopTimelineRows}
            </div>
          </div>

          <!-- Mobile / Tablet Vertical Flow (Screen < md) -->
          <div class="md:hidden space-y-3 max-w-sm mx-auto relative">
            ${mobileTimelineCards}
          </div>

        </div>
      </section>`;

// --- 3. SECTION: تواصل معنا & وسائل الدفع (PAYMENTS & CONTACT + SOCIAL ICONS) ---
const paymentsContactSectionHtml = `      <!-- ==========================================================================
         5. SECTION: تواصل معنا & وسائل الدفع (PAYMENTS & CONTACT)
         Moved ABOVE Funding Partners as requested
         ========================================================================== -->
      <section class="py-10 sm:py-14 bg-[#F8FAF9]">
        <div class="max-w-5xl mx-auto px-4 md:px-8">
          
          <!-- Main White Card Container (Dual Columns) -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-soft border border-slate-100">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <!-- RIGHT SIDE (in RTL): تواصل معنا (~ 5 cols) -->
              <div class="md:col-span-5 text-center flex flex-col items-center justify-center space-y-3 md:border-l md:border-slate-100 md:pl-8">
                <!-- Circular Icon Badge -->
                <div class="w-16 h-16 rounded-full bg-[#EAF5EF] border border-[#107A48]/20 text-[#107A48] flex items-center justify-center shadow-xs mb-1">
                  <svg class="w-8 h-8 stroke-current stroke-[1.8]" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                
                <h3 class="text-xl sm:text-2xl font-heading font-black text-slate-800">
                  تواصل معنا
                </h3>

                <p class="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xs">
                  يسعدنا تلقي استفساراتكم والرد عليها في أي وقت، فريقنا جاهز لمساعدتكم في كل خطوة.
                </p>
              </div>

              <!-- LEFT SIDE (in RTL): وسائل الدفع (~ 7 cols) -->
              <div class="md:col-span-7 text-center">
                <h3 class="text-xl sm:text-2xl font-heading font-black text-slate-800 mb-6">
                  وسائل الدفع
                </h3>

                <!-- Payment Logos Grid (Matching Image 2) -->
                <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
                  
                  <!-- 1. البنك الأهلي / BANK -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center gap-2 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                    <svg class="w-5 h-5 text-[#8A1538]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 10h2v7H4zm6 0h2v7h-2zm6 0h2v7h-2zM2 22h19v-3H2zm10-20L2 6v2h19V6z"/>
                    </svg>
                    <span class="text-xs font-extrabold text-slate-700 tracking-wider">BANK</span>
                  </div>

                  <!-- 2. فيزا VISA -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                    <span class="text-base font-black italic tracking-wider text-[#1A1F71]">VISA</span>
                  </div>

                  <!-- 3. بايونير Payoneer -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                    <div class="w-3.5 h-3.5 rounded-full border-2 border-[#FF4800]"></div>
                    <span class="text-xs font-black text-slate-800">Payoneer</span>
                  </div>

                  <!-- 4. بايبال PayPal -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                    <svg class="w-4 h-4 text-[#003087]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.006.402 5.43 0 5.934 0h7.527c3.42 0 5.86 1.48 5.474 4.545-.494 3.916-3.21 5.952-6.67 5.952H9.28l-1.353 8.78c-.062.5-.486.902-.99.902z"/>
                    </svg>
                    <span class="text-xs font-black text-[#003087]">PayPal</span>
                  </div>

                  <!-- 5. مدى mada -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                    <div class="flex flex-col gap-0.5">
                      <div class="w-4 h-1 bg-[#007A87] rounded-full"></div>
                      <div class="w-4 h-1 bg-[#86B817] rounded-full"></div>
                    </div>
                    <span class="text-xs font-black text-[#007A87]">mada</span>
                  </div>

                  <!-- 6. ماستركارد Mastercard (أسود) -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-[#1A1A1A] text-white flex items-center justify-center gap-1 shadow-xs hover:shadow-sm transition-all">
                    <div class="flex items-center -space-x-2">
                      <div class="w-4 h-4 rounded-full bg-[#EB001B] opacity-90"></div>
                      <div class="w-4 h-4 rounded-full bg-[#F79E1B] opacity-90"></div>
                    </div>
                    <span class="text-[10px] font-bold text-white mr-1.5">mastercard</span>
                  </div>

                  <!-- 7. ماستركارد Mastercard (أزرق/أحمر) -->
                  <div class="h-11 sm:h-12 px-4 rounded-xl bg-[#0F1E36] text-white flex items-center justify-center gap-1 shadow-xs hover:shadow-sm transition-all">
                    <div class="flex items-center -space-x-2">
                      <div class="w-4 h-4 rounded-full bg-[#EB001B] opacity-90"></div>
                      <div class="w-4 h-4 rounded-full bg-[#0061A8] opacity-90"></div>
                    </div>
                    <span class="text-[10px] font-bold text-white mr-1.5">mastercard</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          <!-- SQUARE SOCIAL MEDIA ICONS ROW (Matching Image 2 & Audio) -->
          <div class="flex items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8">
            
            <!-- WhatsApp -->
            <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="واتساب">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.62C9.36 7.62 9.08 7.69 8.84 7.94C8.6 8.2 7.92 8.84 7.92 10.14C7.92 11.44 8.87 12.69 9.0 12.86C9.14 13.04 10.84 15.65 13.45 16.77C14.07 17.04 14.56 17.2 14.93 17.32C15.56 17.52 16.13 17.49 16.58 17.42C17.09 17.35 18.14 16.78 18.36 16.17C18.58 15.55 18.58 15.03 18.51 14.92C18.45 14.81 18.28 14.74 18.03 14.61C17.77 14.49 16.53 13.88 16.3 13.79C16.07 13.71 15.9 13.67 15.73 13.92C15.56 14.18 15.08 14.74 14.93 14.92C14.78 15.09 14.63 15.11 14.38 14.99C14.12 14.86 13.29 14.59 12.3 13.71C11.53 13.02 11.01 12.18 10.86 11.92C10.71 11.67 10.84 11.53 10.97 11.4C11.09 11.28 11.23 11.09 11.36 10.94C11.5 10.79 11.54 10.68 11.63 10.51C11.71 10.34 11.67 10.19 11.61 10.06C11.54 9.94 11.03 8.68 10.82 8.16C10.61 7.66 10.4 7.73 10.24 7.72C10.09 7.71 9.92 7.62 9.53 7.62Z"/>
              </svg>
            </a>

            <!-- YouTube -->
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="يوتيوب">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#E1306C] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="إنستغرام">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#0077B5] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="لينكد إن">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <!-- Twitter / X -->
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#1DA1F2] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="تويتر">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
              </svg>
            </a>

            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#4267B2] text-white flex items-center justify-center shadow-xs hover:scale-110 hover:shadow-md transition-all" aria-label="فيسبوك">
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

          </div>

        </div>
      </section>`;

// --- 4. SECTION: جهات الدعم والتمويل (FUNDING SWIPER - LAST SECTION) ---
const fundingSectionHtml = `      <!-- ==========================================================================
         6. SECTION: جهات الدعم والتمويل (FUNDING PARTNERS)
         Placed at the very bottom before footer as requested
         ========================================================================== -->
      <section class="py-10 sm:py-14 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
          <!-- Section Heading -->
          <div class="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#0B4D2C]">
              جهات الدعم والتمويل
            </h2>
            <div class="w-16 h-1 bg-[#107A48] rounded-full mx-auto mt-3"></div>
            <p class="text-sm sm:text-base text-slate-600 mt-3 font-medium">
              دراسات معتمدة ومتوافقة مع شروط ومتطلبات كبرى صناديق وبنوك التمويل في المملكة
            </p>
          </div>

          <!-- Swiper Container -->
          <div class="relative px-2 sm:px-8">
            <div class="swiper funding-single-row-swiper">
              <div class="swiper-wrapper items-center">
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/شعار-ريادة-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-1.jpg';"
                      alt="ريادة"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/شعار-بنك-التسليف-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-2.jpg';"
                      alt="بنك التسليف"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/شعار-صندوق-التنمية-الزراعية-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-3.jpg';"
                      alt="صندوق التنمية الزراعية"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/شعار-صندوق-التنمية-الصناعي-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-4.jpg';"
                      alt="صندوق التنمية الصناعي"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/شعار-منشآت-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-5.jpg';"
                      alt="منشآت"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/بادر.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-6.jpg';"
                      alt="بادر"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/12-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-7.jpg';"
                      alt="جهة تمويل 12-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/11-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-8.jpg';"
                      alt="جهة تمويل 11-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/10-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-9.jpg';"
                      alt="جهة تمويل 10-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/9-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-10.jpg';"
                      alt="جهة تمويل 9-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/6.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-11.jpg';"
                      alt="جهة تمويل 6"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/5-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-12.jpg';"
                      alt="جهة تمويل 5-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/5.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-13.jpg';"
                      alt="جهة تمويل 5"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="bg-white rounded-2xl border border-gray-200/90 p-3 sm:p-4 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"
                  >
                    <img
                      src="https://drasawgdwa.com/wp-content/uploads/2022/09/4-1.jpg"
                      onerror="this.onerror=null; this.src='./assets/images/funding/partner-14.jpg';"
                      alt="جهة تمويل 4-1"
                      class="max-h-14 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <!-- Pagination Dots -->
              <div
                class="swiper-pagination funding-pagination mt-6 flex items-center justify-center gap-1"
              ></div>
            </div>

            <!-- Side Navigation Arrow Buttons -->
            <button
              type="button"
              class="funding-swiper-prev absolute top-1/2 -translate-y-1/2 right-0 sm:-right-4 z-20 w-11 h-11 rounded-full bg-white border border-[#D5EADF] text-[#107A48] hover:bg-[#107A48] hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="السابق"
            >
              <svg
                class="w-5 h-5 fill-none stroke-current stroke-2 rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              class="funding-swiper-next absolute top-1/2 -translate-y-1/2 left-0 sm:-left-4 z-20 w-11 h-11 rounded-full bg-white border border-[#D5EADF] text-[#107A48] hover:bg-[#107A48] hover:text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
              aria-label="التالي"
            >
              <svg
                class="w-5 h-5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>`;

// Assemble the final sections string for order-study.html
const combinedNewSections = `
${statsSectionHtml}

${timelineSectionHtml}

${paymentsContactSectionHtml}

${fundingSectionHtml}
`;

// Read order-study.html
let orderStudy = fs.readFileSync('order-study.html', 'utf8');

// The block to replace starts at:
// <!-- ==========================================================================
//      3. SECTION: خبرة أكثر من 7 سنوات
// and ends before:
// </main>
const targetRegex = /<!-- ={10,}\s*3\.\s*SECTION:\s*خبرة أكثر من 7 سنوات[\s\S]*?<\/main>/;

if (targetRegex.test(orderStudy)) {
  orderStudy = orderStudy.replace(targetRegex, combinedNewSections.trim() + '\r\n    </main>');
  fs.writeFileSync('order-study.html', orderStudy, 'utf8');
  console.log('Successfully updated order-study.html with all reordered and redesigned sections!');
} else {
  console.error('Target regex not matched in order-study.html');
}
