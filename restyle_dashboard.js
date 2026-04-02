const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('components/dashboard');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Backgrounds
  content = content.replace(/bg-gray-50/g, 'bg-[#050505]');
  content = content.replace(/bg-white/g, 'bg-[#111]');
  content = content.replace(/bg-gray-100/g, 'bg-[#1a1a1a]');
  content = content.replace(/bg-gray-200/g, 'bg-white/5');
  content = content.replace(/bg-gray-900/g, 'bg-[#222]');
  
  // Custom states like bg-blue-100, bg-green-100
  content = content.replace(/bg-blue-100/g, 'bg-blue-900/40 text-blue-400');
  content = content.replace(/text-blue-600/g, 'text-blue-400');
  content = content.replace(/bg-green-100/g, 'bg-green-900/40 text-green-400');
  content = content.replace(/text-green-600/g, 'text-green-400');
  content = content.replace(/text-green-700/g, 'text-green-400');
  content = content.replace(/bg-yellow-100/g, 'bg-yellow-900/40 text-yellow-400');
  content = content.replace(/text-yellow-700/g, 'text-yellow-400');
  content = content.replace(/bg-red-100/g, 'bg-[#111] text-accent font-bold border border-accent/20');
  content = content.replace(/bg-red-200/g, 'bg-accent/10 border border-accent');
  content = content.replace(/text-red-700/g, 'text-accent');
  content = content.replace(/text-red-800/g, 'text-accent font-black');
  
  // Text
  content = content.replace(/text-gray-900/g, 'text-white font-bold');
  content = content.replace(/text-gray-800/g, 'text-gray-100');
  content = content.replace(/text-gray-700/g, 'text-gray-300');
  content = content.replace(/text-gray-600/g, 'text-gray-400');
  content = content.replace(/text-gray-500/g, 'text-secondary');
  content = content.replace(/text-gray-400/g, 'text-secondary/70');

  // Borders
  content = content.replace(/border-gray-100/g, 'border-white/5');
  content = content.replace(/border-gray-200/g, 'border-white/10');
  content = content.replace(/border-gray-300/g, 'border-white/20');
  
  // Buttons \/ Accents
  content = content.replace(/bg-orange-500/g, 'bg-accent');
  content = content.replace(/bg-orange-600/g, 'bg-accent/80');
  content = content.replace(/from-orange-500 to-orange-600/g, 'from-accent to-accent/80');
  content = content.replace(/text-orange-500/g, 'text-accent');
  content = content.replace(/text-orange-600/g, 'text-accent/80');
  content = content.replace(/text-orange-700/g, 'text-accent/80');
  content = content.replace(/bg-orange-50/g, 'bg-[#0a0a0a]');
  content = content.replace(/bg-orange-100/g, 'bg-accent/10');
  content = content.replace(/border-orange-500/g, 'border-accent');
  content = content.replace(/border-orange-400/g, 'border-accent/40');
  content = content.replace(/border-orange-200/g, 'border-accent/20');
  content = content.replace(/border-orange-100/g, 'border-white/5');
  
  // Shapes
  content = content.replace(/rounded-2xl/g, 'rounded-none');
  content = content.replace(/rounded-xl/g, 'rounded-none');
  content = content.replace(/rounded-lg/g, 'rounded-none');
  content = content.replace(/rounded-md/g, 'rounded-none');
  content = content.replace(/rounded-full/g, 'rounded-none');
  
  // Shadows
  content = content.replace(/shadow-sm/g, '');
  content = content.replace(/shadow-md/g, '');
  content = content.replace(/shadow-lg/g, '');
  content = content.replace(/hover:shadow-md/g, 'hover:border-accent hover:-translate-y-1 transition-transform');
  content = content.replace(/hover:shadow-lg/g, 'hover:border-accent hover:-translate-y-1 transition-transform');
  
  // Gradients inside tables
  content = content.replace(/bg-white divide-y divide-white\/10/g, 'bg-[#111] divide-y divide-white/5');
  content = content.replace(/bg-white divide-y divide-gray-200/g, 'bg-[#111] divide-y divide-white/5');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Restyled ' + file);
  }
});
