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

const files = walkSync('app/(dashboard)');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace relative imports with absolute aliases to eliminate fragility
  content = content.replace(/from\s+["'](?:\.\.\/)+components\/(.+?)["']/g, 'from "@/components/$1"');
  content = content.replace(/from\s+["'](?:\.\.\/)+lib\/(.+?)["']/g, 'from "@/lib/$1"');
  content = content.replace(/from\s+["'](?:\.\.\/)+userPrompts\.json["']/g, 'from "@/userPrompts.json"');
  content = content.replace(/from\s+["'](?:\.\.\/)+prompts\.json["']/g, 'from "@/prompts.json"');
  content = content.replace(/from\s+["'](?:\.\.\/)+reminders\.json["']/g, 'from "@/reminders.json"');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed imports in ' + file);
  }
});
