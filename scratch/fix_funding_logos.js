const fs = require('fs');
const path = require('path');

const orderStudyPath = path.join(__dirname, '../order-study.html');
let html = fs.readFileSync(orderStudyPath, 'utf8');

// Replace card wrapper padding and add overflow-hidden
const oldCardClass = 'class="bg-white rounded-2xl border border-gray-200/90 p-2 sm:p-2.5 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group"';
const newCardClass = 'class="bg-white rounded-2xl border border-gray-200/90 p-1.5 h-24 sm:h-28 flex items-center justify-center shadow-xs hover:shadow-md hover:border-emerald-400 transition-all group overflow-hidden"';

html = html.split(oldCardClass).join(newCardClass);

// Replace img class with prominently enlarged/scaled class
const oldImgClass = 'class="max-h-20 sm:max-h-22 max-w-[92%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"';
const newImgClass = 'class="h-20 sm:h-24 w-full max-w-[95%] object-contain scale-125 sm:scale-135 transition-transform duration-300 group-hover:scale-145"';

html = html.split(oldImgClass).join(newImgClass);

fs.writeFileSync(orderStudyPath, html, 'utf8');
console.log('Successfully updated all funding logos with scale-125 sm:scale-135 and p-1.5 overflow-hidden!');
