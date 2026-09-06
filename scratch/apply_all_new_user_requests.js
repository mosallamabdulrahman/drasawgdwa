const fs = require('fs');
const path = require('path');

const orderStudyPath = path.join(__dirname, '../order-study.html');
let html = fs.readFileSync(orderStudyPath, 'utf8');

// ============================================================================
// 1. SECTION 2: أهم القطاعات (KEY SECTORS)
// - Background: #F2F9F1
// - Border: border border-[#DCEAD9]/80
// - Circular badge with outline SVG inside
// - Prominent typography and larger boxes
// ============================================================================
const sectorsSectionRegex = /<!-- ={10,}\s*2\.\s*SECTION:\s*أهم القطاعات[\s\S]*?<\/section>/;

const newSectorsSection = `<!-- ==========================================================================
         2. SECTION: أهم القطاعات (KEY SECTORS) - Matching User Mockup (#F2F9F1)
         ========================================================================== -->
      <section class="py-12 sm:py-14 bg-[#F8FAF9]">
        <div class="max-w-7xl mx-auto px-4 md:px-8">
          <div class="text-center mb-8 sm:mb-12">
            <h2
              class="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#0B4D2C]"
            >
              أهم القطاعات
            </h2>
            <div class="w-16 h-1 bg-[#107A48] rounded-full mx-auto mt-3"></div>
          </div>

          <!-- 8 Sectors: 4 Top / 4 Bottom (Desktop) / 2 Cols (Mobile) matching Image 1 -->
          <div
            class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <!-- 1. التكنولوجيا (Technology) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Laptop + Smartphone Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="4" width="13" height="9" rx="1.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M1 16h15" />
                  <rect x="15.5" y="8" width="6.5" height="11" rx="1.5" />
                  <circle cx="18.75" cy="16.5" r=".75" fill="currentColor" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                التكنولوجيا
              </h3>
            </div>

            <!-- 2. السياحة (Tourism) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Hot Air Balloon + Landmark Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 8c0 3 2.5 5 2.5 5s2.5-2 2.5-5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 14h3v2h-3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 20l5-8 5 8H3z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 20l3-5 4 5H14z" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                السياحة
              </h3>
            </div>

            <!-- 3. التجارة (Trade) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Storefront with Awning Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9l1-5h16l1 5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 9v11a1 1 0 001 1h14a1 1 0 001-1V9" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                التجارة
              </h3>
            </div>

            <!-- 4. الصناعة (Industry) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Factory with Smokestack Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2 20h20" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 20V10l5 4V10l5 4V4h6v16" />
                  <line x1="16" y1="8" x2="18" y2="8" stroke-linecap="round" stroke-linejoin="round" />
                  <line x1="16" y1="12" x2="18" y2="12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                الصناعة
              </h3>
            </div>

            <!-- 5. الخدمات (Services) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Airplane in Flight with Clouds Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5l4-3 1.5.5-2 5 5 3.5 3-.5 1 1-3.5 2-1 3.5-1.5.5-1-3-4.5-1.5-3.5 4.5.5 2-1 1-2.5-3-3-2.5 1-1 2 .5 4.5-3.5-1-4.5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 18c1.5-1 3.5-1 5 0M14 20c1.5-1 3.5-1 5 0" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                الخدمات
              </h3>
            </div>

            <!-- 6. العقارات (Real Estate) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- House with Door & Window Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
                  <rect x="13.5" y="8" width="3.5" height="3.5" rx=".5" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                العقارات
              </h3>
            </div>

            <!-- 7. النقل (Transport / Logistics) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Delivery Truck Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <rect x="1" y="6" width="13" height="10" rx="1.5" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 9h4l3 3v4h-7V9z" />
                  <circle cx="5.5" cy="18" r="2" />
                  <circle cx="17.5" cy="18" r="2" />
                  <line x1="7.5" y1="18" x2="15.5" y2="18" stroke-linecap="round" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                النقل
              </h3>
            </div>

            <!-- 8. الزراعة (Agriculture) -->
            <div
              class="bg-[#F2F9F1] rounded-2xl sm:rounded-3xl border border-[#DCEAD9]/90 p-5 sm:p-7 min-h-[175px] sm:min-h-[195px] flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-[#107A48]/60 hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div
                class="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#E2F0E0] text-[#107A48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform"
              >
                <!-- Sprout / Plant growing in field Outline -->
                <svg
                  class="w-11 h-11 sm:w-12 sm:h-12 fill-none stroke-current stroke-[1.8]"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21V10" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10c0-4.5 4-7 8-7-1 5-4.5 7-8 7z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 14c0-3.5-3-5.5-6-5.5.8 4 3.5 5.5 6 5.5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21c3-1 6-1 9 0 3-1 6-1 9 0" />
                </svg>
              </div>
              <h3
                class="text-lg sm:text-xl font-heading font-black text-slate-800 group-hover:text-[#107A48] transition-colors"
              >
                الزراعة
              </h3>
            </div>
          </div>
        </div>
      </section>`;

html = html.replace(sectorsSectionRegex, newSectorsSection);

// ============================================================================
// 2. SECTION 3: خبرة أكثر من 7 سنوات
// - Checkmarks: Circle bg-[#287b3f] (the green of the next section), checkmark stroke-white text-white
// - 4 Badges matching user Image 2 (Rosette/Ribbon Gear, Consultant with glasses, Bullseye with arrow, Plant/Sprout)
// ============================================================================
// Replace the checkmark circles
const oldCheckmarkRegex = /<span\s+class="w-5 h-5 rounded-full bg-\[#DCE9D8\] text-\[#107A48\] flex items-center justify-center shrink-0 border border-\[#107A48\]\/30">\s*<svg\s+class="w-3\.5 h-3\.5 stroke-current stroke-2"\s+fill="none"\s+viewBox="0 0 24 24">\s*<path\s+stroke-linecap="round"\s+stroke-linejoin="round"\s+d="M5 13l4 4L19 7"\s*\/>\s*<\/svg>\s*<\/span>/g;

const newCheckmarkHtml = `<span
                      class="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#287b3f] text-white flex items-center justify-center shrink-0 shadow-xs"
                    >
                      <svg
                        class="w-3.5 h-3.5 stroke-white stroke-[2.5]"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>`;

html = html.replace(oldCheckmarkRegex, newCheckmarkHtml);

// Replace the 4 badges matching user Image 2
const oldBadgesRegex = /<!-- 4 Badges in a Row matching user image[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- LEFT COLUMN/;

const newBadgesHtml = `<!-- 4 Badges in a Row matching user image 2 (Rosette, Consultant, Target, Plant) -->
              <div class="flex items-center gap-3 pt-3">
                <!-- Badge 1: Rosette / Seal with Gear (Rightmost in Image 2) -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="معايير الجودة والاعتماد"
                >
                  <svg
                    class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="9" r="6" />
                    <circle cx="12" cy="9" r="2.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2m0 8v2M6 9H4m16 0h-2m-2.5-4.5l-1.4 1.4m-4.2 4.2l-1.4 1.4m0-7l1.4 1.4m4.2 4.2l1.4 1.4" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.5 14.5L7 22l5-2.5 5 2.5-1.5-7.5" />
                  </svg>
                </div>

                <!-- Badge 2: Consultant / Specialist with hardhat/glasses (Second from Right) -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="فريق استشاري معتمد"
                >
                  <svg
                    class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 8a6 6 0 0112 0c0 .5-.1 1-.2 1.5H6.2C6.1 9 6 8.5 6 8z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.5h15" />
                    <circle cx="9.5" cy="12.5" r="1.5" />
                    <circle cx="14.5" cy="12.5" r="1.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 12.5h2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v6" />
                  </svg>
                </div>

                <!-- Badge 3: Target with Arrow (Third from Right in Image 2) -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="دقة الاستهداف"
                >
                  <svg
                    class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 5l-7 7m0 0h4m-4 0v-4" />
                  </svg>
                </div>

                <!-- Badge 4: Sprout / Plant Growth (Leftmost in Image 2) -->
                <div
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#DCE9D8] border border-[#107A48]/30 flex items-center justify-center text-[#107A48] shadow-xs hover:scale-105 transition-transform p-1"
                  title="الاستدامة والنمو"
                >
                  <svg
                    class="w-8 h-8 sm:w-9 sm:h-9 fill-none stroke-current stroke-[1.8]"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21V10" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10c0-4.5 4-7 8-7-1 5-4.5 7-8 7z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14c0-3.5-3-5.5-6-5.5.8 4 3.5 5.5 6 5.5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 21c3-1.5 5-1.5 8 0 3-1.5 5-1.5 8 0" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- LEFT COLUMN`;

html = html.replace(oldBadgesRegex, newBadgesHtml);

// ============================================================================
// 3. SECTION 4: كيف تتم الدراسة داخل دراسة وجدوى؟
// Make Col 1 (Right in RTL) uniform with Col 2:
// [الرقم على اليمين] [النص في المنتصف] [الأيقونة على الشمال]
// ============================================================================
// Row 2 Col 1: Step 2 التواصل معنا
html = html.replace(
  `                      <!-- 1. الأيقونة على اليمين - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          التواصل معنا
                        </h3>
                      </div>

                      <!-- 3. الرقم على الشمال - بدون بوكس مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        2
                      </span>`,
  `                      <!-- 1. الرقم على اليمين بدون بوكس - مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        2
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          التواصل معنا
                        </h3>
                      </div>

                      <!-- 3. الأيقونة على الشمال - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>`
);

// Row 3 Col 1: Step 4 المراجعة الفنية
html = html.replace(
  `                      <!-- 1. الأيقونة على اليمين - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          المراجعة الفنية
                        </h3>
                      </div>

                      <!-- 3. الرقم على الشمال - بدون بوكس مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        4
                      </span>`,
  `                      <!-- 1. الرقم على اليمين بدون بوكس - مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        4
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          المراجعة الفنية
                        </h3>
                      </div>

                      <!-- 3. الأيقونة على الشمال - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>`
);

// Row 4 Col 1: Step 6 الدراسة المالية
html = html.replace(
  `                      <!-- 1. الأيقونة على اليمين - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          الدراسة المالية
                        </h3>
                      </div>

                      <!-- 3. الرقم على الشمال - بدون بوكس مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        6
                      </span>`,
  `                      <!-- 1. الرقم على اليمين بدون بوكس - مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        6
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          الدراسة المالية
                        </h3>
                      </div>

                      <!-- 3. الأيقونة على الشمال - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>`
);

// Row 5 Col 1: Step 7 اتخاذ القرار
html = html.replace(
  `                      <!-- 1. الأيقونة على اليمين - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          اتخاذ القرار
                        </h3>
                      </div>

                      <!-- 3. الرقم على الشمال - بدون بوكس مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        7
                      </span>`,
  `                      <!-- 1. الرقم على اليمين بدون بوكس - مكبر -->
                      <span
                        class="font-black font-heading text-3xl sm:text-4xl lg:text-5xl text-[#287b3f] shrink-0 select-none"
                      >
                        7
                      </span>

                      <!-- 2. اسم الخطوة في المنتصف - خط مكبر وأوضح -->
                      <div class="flex-1 text-center px-2">
                        <h3
                          class="text-lg sm:text-xl lg:text-2xl font-black font-heading text-slate-800 leading-tight group-hover:text-[#287b3f] transition-colors"
                        >
                          اتخاذ القرار
                        </h3>
                      </div>

                      <!-- 3. الأيقونة على الشمال - بدون بوكس ومكبرة -->
                      <span
                        class="text-[#287b3f] shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <svg
                          class="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 stroke-current stroke-[1.9]"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </span>`
);

// ============================================================================
// 4. SECTION 5: وسائل الدفع (9 Footer SVGs: 4 - 4 - 1 Inverted Triangle)
// 9 official SVGs directly from footer.js:
// 1. Maestro
// 2. Payoneer
// 3. PayPal
// 4. بنك الرياض
// 5. البنك الأهلي المصري
// 6. مصرف الراجحي
// 7. Visa Electron
// 8. Skrill
// 9. Western Union
// ============================================================================
const paymentsGridRegex = /<!-- Payment Logos Grid:[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<!-- SQUARE SOCIAL/;

const newPaymentsGrid = `<!-- Payment Logos Grid: 9 Footer SVGs (4 Top, 4 Middle, 1 Centered at Bottom) -->
                <div class="space-y-3 max-w-lg mx-auto">
                  <!-- Row 1: 4 Items -->
                  <div class="grid grid-cols-4 gap-2.5 sm:gap-3">
                    <!-- 1. Visa Electron -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="Visa Electron"
                    >
                      <img
                        src="./assets/svgs/payments-ways/visa-electron.svg"
                        alt="Visa Electron"
                        class="h-7 sm:h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 2. Maestro -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="Maestro"
                    >
                      <img
                        src="./assets/svgs/payments-ways/maestro.svg"
                        alt="Maestro"
                        class="h-6 sm:h-7 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 3. PayPal -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="PayPal"
                    >
                      <img
                        src="./assets/svgs/payments-ways/paypal.svg"
                        alt="PayPal"
                        class="h-7 sm:h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 4. Payoneer -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="Payoneer"
                    >
                      <img
                        src="./assets/svgs/payments-ways/payoneer.svg"
                        alt="Payoneer"
                        class="h-6 sm:h-7 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <!-- Row 2: 4 Items -->
                  <div class="grid grid-cols-4 gap-2.5 sm:gap-3">
                    <!-- 5. مصرف الراجحي -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="مصرف الراجحي"
                    >
                      <img
                        src="./assets/svgs/payments-ways/alrajhi.svg"
                        alt="مصرف الراجحي"
                        class="h-7 sm:h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 6. بنك الرياض -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="بنك الرياض"
                    >
                      <img
                        src="./assets/svgs/payments-ways/riyad-bank.svg"
                        alt="بنك الرياض"
                        class="h-7 sm:h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 7. البنك الأهلي المصري -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="البنك الأهلي المصري"
                    >
                      <img
                        src="./assets/svgs/payments-ways/nbe.svg"
                        alt="البنك الأهلي المصري"
                        class="h-7 sm:h-8 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <!-- 8. Skrill -->
                    <div
                      class="h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="Skrill"
                    >
                      <img
                        src="./assets/svgs/payments-ways/skrill.svg"
                        alt="Skrill"
                        class="h-6 sm:h-7 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <!-- Row 3: 1 Item Centered at natural size (Inverted Pyramid) -->
                  <div class="flex justify-center">
                    <div
                      class="w-[calc(25%-0.5rem)] sm:w-[calc(25%-0.6rem)] h-12 sm:h-14 px-2 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#107A48]/50 transition-all"
                      title="Western Union"
                    >
                      <img
                        src="./assets/svgs/payments-ways/western-union.svg"
                        alt="Western Union"
                        class="h-6 sm:h-7 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SQUARE SOCIAL`;

html = html.replace(paymentsGridRegex, newPaymentsGrid);

fs.writeFileSync(orderStudyPath, html, 'utf8');
console.log('Successfully applied all new user requests to order-study.html!');
