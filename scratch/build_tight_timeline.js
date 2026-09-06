const fs = require('fs');

const leftSteps = [
  {
    num: 1,
    title: 'تحديد المشروع',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v3m0 14v3M2 12h3m14 0h3"/></svg>`
  },
  {
    num: 2,
    title: 'التواصل معنا',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
  },
  {
    num: 3,
    title: 'دراسة السوق',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>`
  },
  {
    num: 6,
    title: 'تسليم الدراسة',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`
  },
  {
    num: 7,
    title: 'اتخاذ القرار',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`
  }
];

const rightSteps = [
  null, // Row 1 is empty on the right in user image
  {
    num: 2,
    title: 'التواصل معنا',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>`
  },
  {
    num: 4,
    title: 'المراجعة الفنية',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    num: 6,
    title: 'الدراسة المالية',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    num: 7,
    title: 'اتخاذ القرار',
    icon: `<svg class="w-7 h-7 sm:w-8 sm:h-8 stroke-current" fill="none" viewBox="0 0 24 24" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>`
  }
];

function renderCard(s) {
  if (!s) return '';
  return `
    <div class="process-card p-2.5 sm:p-3 sm:px-5 flex items-center justify-between gap-3 sm:gap-4 group cursor-default w-full">
      <!-- 1. الرقم على اليمين -->
      <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#eaf7ee] border border-[#287b3f]/25 text-[#287b3f] flex items-center justify-center font-black font-heading text-xl sm:text-2xl shrink-0 shadow-xs group-hover:bg-[#287b3f] group-hover:text-white transition-all duration-300">
        ${s.num}
      </div>

      <!-- 2. اسم الخطوة في المنتصف -->
      <div class="flex-1 text-center px-1">
        <h3 class="text-base sm:text-lg font-black text-slate-800 font-heading leading-tight group-hover:text-[#287b3f] transition-colors">
          ${s.title}
        </h3>
      </div>

      <!-- 3. الأيقونة على الشمال -->
      <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#eaf7ee] border border-[#287b3f]/20 flex items-center justify-center text-[#287b3f] shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-[#287b3f] group-hover:text-white transition-all duration-300">
        ${s.icon}
      </div>
    </div>
  `;
}

let desktopRows = '';
for (let i = 0; i < 5; i++) {
  const l = leftSteps[i];
  const r = rightSteps[i];

  // In RTL:
  // Col 1 is on the RIGHT.
  // Col 2 is on the LEFT.
  // We want longer horizontal connectors (w-12 sm:w-16).
  // The center line is at left-1/2.
  // In each row:
  // Col 1 (Right): card r (if exists) with connector on its left edge extending to center dot.
  // Col 2 (Left): card l with connector on its right edge extending to center dot.
  // Center: A solid green dot (process-connector-dot) right at left-1/2!

  desktopRows += `
            <!-- Row ${i + 1} (Close vertical spacing matching image) -->
            <div class="grid grid-cols-2 gap-x-20 sm:gap-x-24 md:gap-x-28 items-center relative py-1">
              
              <!-- Col 1 (Visual Right in RTL) -->
              <div class="relative flex items-center justify-end">
                ${r ? `
                  <div class="w-full max-w-sm">
                    ${renderCard(r)}
                  </div>
                  <!-- Connector Line to Center (Longer Line as requested) -->
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
                <!-- Connector Line to Center (Longer Line as requested) -->
                <div class="absolute -right-10 sm:-right-12 md:-right-14 w-10 sm:w-12 md:w-14 h-[2px] bg-[#287b3f] pointer-events-none"></div>
                <div class="w-full max-w-sm">
                  ${renderCard(l)}
                </div>
              </div>

            </div>
  `;
}

// Mobile list (7 distinct sequential steps so mobile experience is super intuitive)
const mobileSteps = [
  leftSteps[0], // 1 تحديد المشروع
  leftSteps[1], // 2 التواصل معنا
  leftSteps[2], // 3 دراسة السوق
  rightSteps[2], // 4 المراجعة الفنية
  rightSteps[3], // 6 الدراسة المالية
  leftSteps[3],  // 6 تسليم الدراسة
  leftSteps[4]   // 7 اتخاذ القرار
];

let mobileCards = '';
mobileSteps.forEach((s) => {
  mobileCards += `
        <div class="w-full">
          ${renderCard(s)}
        </div>
  `;
});

const sectionHtml = `
      <!-- ==========================================================================
         4. SECTION: كيف تتم الدراسة داخل دراسة وجدوى؟
         Pixel-Perfect match to User Reference Image:
         - Close vertical spacing between steps
         - Longer horizontal connector lines to center stem
         - Solid green dots centered on the vertical line
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
              ${desktopRows}
            </div>
          </div>

          <!-- Mobile / Tablet Vertical Flow (Screen < md) -->
          <div class="md:hidden space-y-3 max-w-sm mx-auto relative">
            ${mobileCards}
          </div>

        </div>
      </section>
`;

fs.writeFileSync('scratch/tight_timeline_section.html', sectionHtml, 'utf8');
console.log('Successfully generated scratch/tight_timeline_section.html');
