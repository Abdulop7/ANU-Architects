const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js') || dirFile.endsWith('.css')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const dirs = ['components/dashboard', 'app/(dashboard)'];
let files = [];
dirs.forEach(d => {
  files = files.concat(walkSync(d));
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Global scrollbar in index.css / globals.css (app/globals.css is handled manually later, but we can do inline if there are scrollbar classes)
  
  // Dashboard color mapping
  // The user says "reassign the colors on the dashboards for every element and detail ... make it architecture sleek dark"
  // Let's replace 'border-white/10' with 'border-white/5' to make them less odd/stark.
  content = content.replace(/border-white\/10/g, 'border-white/5');
  content = content.replace(/divide-white\/10/g, 'divide-white/5');

  // Let's also check for bg-gray-..., bg-white, text-gray-800/900 etc.
  content = content.replace(/bg-white/g, 'bg-[#111]'); 
  content = content.replace(/bg-gray-50(?![0-9])/g, 'bg-[#050505]');
  content = content.replace(/bg-gray-100/g, 'bg-[#111]');
  content = content.replace(/bg-gray-200/g, 'bg-[#222]');
  content = content.replace(/bg-gray-800/g, 'bg-[#222]');
  content = content.replace(/bg-gray-900/g, 'bg-[#111]');

  content = content.replace(/text-gray-900/g, 'text-gray-100');
  content = content.replace(/text-gray-800/g, 'text-gray-100');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-400');
  
  content = content.replace(/text-black/g, 'text-white');
  
  // Gradients fallback cleaning (in case any remained)
  content = content.replace(/bg-gradient-to-(r|l|t|b|tr|br|tl|bl)\s+from-[a-z]+-[0-9]+\s+to-[a-z]+-[0-9]+/g, 'bg-accent');
  content = content.replace(/bg-gradient-to-(r|l|t|b|tr|br|tl|bl)\s+from-[a-z]+-[0-9]+\s+via-[a-z]+-?[0-9]*\s+to-[a-z]+-[0-9]+/g, 'bg-[#111]');
  
  // Check specifically for "from-gray-50 via-white to-orange-50"
  content = content.replace(/bg-gradient-to-br from-gray-50 via-white to-orange-50/g, 'bg-[#111]');
  
  // Check for the "bg-orange-50" remaining
  content = content.replace(/bg-orange-50(?![0-9])/g, 'bg-[#111]');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
