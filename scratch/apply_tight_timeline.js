const fs = require('fs');

const tightSection = fs.readFileSync('scratch/tight_timeline_section.html', 'utf8').trim();

// 1. Update order-study.html
let orderStudy = fs.readFileSync('order-study.html', 'utf8');
const orderStudyPattern = /<!-- ={10,}\s*4\.\s*SECTION:\s*كيف تتم الدراسة داخل دراسة وجدوى[\s\S]*?<\/section>/;

if (orderStudyPattern.test(orderStudy)) {
  orderStudy = orderStudy.replace(orderStudyPattern, tightSection);
  fs.writeFileSync('order-study.html', orderStudy, 'utf8');
  console.log('Successfully updated order-study.html with tight timeline');
} else {
  console.error('Pattern not found in order-study.html');
}

// 2. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const indexPattern = /<!-- ={10,}\s*7\.\s*كيف تتم الدراسة داخل دراسة وجدوى[\s\S]*?<\/section>/;

if (indexPattern.test(indexHtml)) {
  indexHtml = indexHtml.replace(indexPattern, tightSection);
  fs.writeFileSync('index.html', indexHtml, 'utf8');
  console.log('Successfully updated index.html with tight timeline');
} else {
  console.error('Pattern not found in index.html');
}
