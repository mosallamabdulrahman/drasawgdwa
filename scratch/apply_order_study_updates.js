const fs = require('fs');

let content = fs.readFileSync('order-study.html', 'utf8');

const statsSection = fs.readFileSync('scratch/stats_experience.html', 'utf8').trim();
const timelineSection = fs.readFileSync('scratch/timeline_section.html', 'utf8').trim();
const contactPaymentSection = fs.readFileSync('scratch/contact_payment.html', 'utf8').trim();

// 1. Replace from <!-- ==========================================================================\r\n         3. SECTION: خبرة أكثر من 7 سنوات
// up to <!-- ==========================================================================\r\n         6. SECTION: جهات الدعم والتمويل
const startMarker = /<!-- ={10,}\s*3\.\s*SECTION:\s*خبرة أكثر من 7 سنوات[\s\S]*?<!-- ={10,}\s*6\.\s*SECTION:\s*جهات الدعم والتمويل/;

if (startMarker.test(content)) {
  const combinedMiddle = statsSection + '\r\n\r\n' + timelineSection + '\r\n\r\n      <!-- ==========================================================================\r\n         5. SECTION: جهات الدعم والتمويل';
  content = content.replace(startMarker, combinedMiddle);
  console.log('Successfully replaced middle sections (Stats + Timeline)');
} else {
  console.error('Start marker not found for middle sections!');
}

// 2. Insert contactPaymentSection right before </main>
const mainEndMarker = /<\/section>\s*<\/main>/;
if (mainEndMarker.test(content)) {
  content = content.replace(mainEndMarker, '</section>\r\n\r\n' + contactPaymentSection + '\r\n    </main>');
  console.log('Successfully added contact and payment section before </main>');
} else {
  console.error('mainEndMarker not found!');
}

fs.writeFileSync('order-study.html', content, 'utf8');
console.log('Finished updating order-study.html');
