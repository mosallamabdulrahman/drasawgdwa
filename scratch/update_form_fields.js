const fs = require('fs');

const formFieldsHtml = `                <!-- Form Fields (Single Column, Compact, No Large Gaps) -->
                <div class="space-y-3 sm:space-y-3.5">
                  <!-- 1. اسم مقدم الطلب -->
                  <label class="block">
                    <span class="mb-1 block text-sm font-bold text-slate-700">
                      اسم مقدم الطلب
                    </span>
                    <div class="relative flex items-center">
                      <input
                        class="w-full h-11 sm:h-12 rounded-xl border border-slate-300 bg-white pr-10 pl-10 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition"
                        name="name"
                        required=""
                        autocomplete="name"
                        placeholder="اسم مقدم الطلب"
                      />
                      <!-- Right Icon: User -->
                      <span
                        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <!-- Left Icon: Info -->
                      <span
                        class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </span>
                    </div>
                  </label>

                  <!-- 2. رقم الجوال -->
                  <label class="block">
                    <span class="mb-1 block text-sm font-bold text-slate-700">
                      رقم الجوال
                    </span>
                    <div class="relative flex items-center">
                      <input
                        class="w-full h-11 sm:h-12 rounded-xl border border-slate-300 bg-white pr-10 pl-10 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition text-right"
                        type="tel"
                        name="phone"
                        required=""
                        autocomplete="tel"
                        inputmode="tel"
                        placeholder="رقم الجوال"
                      />
                      <!-- Right Icon: Phone -->
                      <span
                        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      <!-- Left Icon: Handset outline -->
                      <span
                        class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 16.5v2.25A2.25 2.25 0 0118.75 21 18.75 18.75 0 013 5.25 2.25 2.25 0 015.25 3h2.25"
                          />
                        </svg>
                      </span>
                    </div>
                  </label>

                  <!-- 3. البريد الالكتروني -->
                  <label class="block">
                    <span class="mb-1 block text-sm font-bold text-slate-700">
                      البريد الالكتروني
                    </span>
                    <div class="relative flex items-center">
                      <input
                        class="w-full h-11 sm:h-12 rounded-xl border border-slate-300 bg-white pr-10 pl-10 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition"
                        type="email"
                        name="email"
                        required=""
                        autocomplete="email"
                        placeholder="البريد الالكتروني"
                      />
                      <!-- Right Icon: Mail -->
                      <span
                        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <polyline points="3 7 12 13 21 7" />
                        </svg>
                      </span>
                      <!-- Left Icon: @ -->
                      <span
                        class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <circle cx="12" cy="12" r="4" />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-4 8"
                          />
                        </svg>
                      </span>
                    </div>
                  </label>

                  <!-- 4. اسم المشروع -->
                  <label class="block">
                    <span class="mb-1 block text-sm font-bold text-slate-700">
                      اسم المشروع
                    </span>
                    <div class="relative flex items-center">
                      <input
                        class="w-full h-11 sm:h-12 rounded-xl border border-slate-300 bg-white pr-10 pl-10 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition"
                        type="text"
                        name="project_name"
                        required=""
                        placeholder="اسم المشروع"
                      />
                      <!-- Right Icon: Briefcase -->
                      <span
                        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                        </svg>
                      </span>
                      <!-- Left Icon: Lightbulb -->
                      <span
                        class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </span>
                    </div>
                  </label>

                  <!-- 5. مكان المشروع -->
                  <label class="block">
                    <span class="mb-1 block text-sm font-bold text-slate-700">
                      مكان المشروع
                    </span>
                    <div class="relative flex items-center">
                      <input
                        class="w-full h-11 sm:h-12 rounded-xl border border-slate-300 bg-white pr-10 pl-10 text-sm sm:text-base text-slate-800 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 outline-none transition"
                        type="text"
                        name="project_location"
                        required=""
                        placeholder="مكان المشروع"
                      />
                      <!-- Right Icon: Map Pin -->
                      <span
                        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                      <!-- Left Icon: Globe -->
                      <span
                        class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                      </span>
                    </div>
                  </label>
                </div>`;

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the block starting with <!-- Form Fields (Single Column, Compact, No Large Gaps) -->
  // and ending right before <!-- Submit Button -->
  const startPattern = /<!-- Form Fields \(Single Column, Compact, No Large Gaps\) -->[\s\S]*?<!-- Submit Button -->/;
  
  if (startPattern.test(content)) {
    content = content.replace(startPattern, formFieldsHtml + '\r\n\r\n                <!-- Submit Button -->');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated ' + filePath);
  } else {
    console.error('Pattern not found in ' + filePath);
  }
}

updateFile('index.html');
updateFile('contact.html');
